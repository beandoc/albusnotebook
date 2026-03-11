// Albus Canvas Logic
let width, height;
let svg, container, simulation;
let nodes = [];
let links = [];

function initCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;

    svg = d3.select("#canvas-svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", [0, 0, width, height]);

    // Define Arrowhead
    svg.append("defs").append("marker")
        .attr("id", "arrowhead")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 10)
        .attr("refY", 0)
        .attr("orient", "auto")
        .attr("markerWidth", 10)
        .attr("markerHeight", 10)
        .attr("xoverflow", "visible")
        .append("svg:path")
        .attr("d", "M 0,-5 L 10 ,0 L 0,5")
        .attr("fill", "#000")
        .style("stroke","none");

    container = svg.append("g");

    // Add zoom behavior
    const zoom = d3.zoom()
        .scaleExtent([0.1, 4])
        .on("zoom", (event) => {
            container.attr("transform", event.transform);
            updateZoomLabel(event.transform.k);
        });

    svg.call(zoom);

    simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id).distance(450))
        .force("charge", d3.forceManyBody().strength(-2500))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collision", d3.forceCollide().radius(350));

    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        svg.attr("viewBox", [0, 0, width, height]);
        simulation.force("center", d3.forceCenter(width / 2, height / 2));
    });
}

function addNode(name, x, y, type = 'card', color = 'teal') {
    const id = btoa(name + Math.random()).substring(0, 8);
    const newNode = {
        id, name, x: x || width/2, y: y || height/2, type, color,
        content: `A kidney biopsy is a medical procedure where a small sample of kidney tissue is removed for examination under a microscope. This diagnostic tool is crucial for identifying the cause of kidney disease, determining the extent of kidney damage...`
    };
    nodes.push(newNode);
    update();
    return newNode;
}

function update() {
    // Links
    const linkElements = container.selectAll(".link")
        .data(links, d => `${d.source.id}-${d.target.id}`);

    linkElements.exit().remove();

    const linkEnter = linkElements.enter()
        .append("path")
        .attr("class", "link curve-link")
        .attr("marker-end", "url(#arrowhead)");

    const mergedLinks = linkEnter.merge(linkElements);

    // Nodes
    const nodeElements = container.selectAll(".node-group")
        .data(nodes, d => d.id);

    nodeElements.exit().remove();

    const nodeEnter = nodeElements.enter()
        .append("g")
        .attr("class", "node-group")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    // ForeignObject for HTML Card
    const cardSize = { w: 340, h: 500 }; 
    const fo = nodeEnter.append("foreignObject")
        .attr("width", cardSize.w + 100) // Padding for shadows/controls
        .attr("height", cardSize.h + 200)
        .attr("x", -cardSize.w / 2)
        .attr("y", -cardSize.h / 2);

    const div = fo.append("xhtml:div")
        .attr("class", "card-container")
        .style("display", "flex")
        .style("flex-direction", "column")
        .style("align-items", "center");

    // Local Toolbar
    div.append("div")
        .attr("class", "local-toolbar")
        .html((d) => `
            <div class="toolbar-dot ${d.color}"></div>
            <div class="toolbar-sep"></div>
            <div class="toolbar-icon"><i class="fas fa-edit"></i></div>
            <div class="toolbar-sep"></div>
            <div class="toolbar-icon"><i class="far fa-sticky-note"></i></div>
            <div class="toolbar-icon"><i class="far fa-clipboard"></i></div>
            <div class="toolbar-sep"></div>
            <div class="toolbar-icon"><i class="fas fa-headphones"></i></div>
            <div class="toolbar-sep"></div>
            <div class="toolbar-icon purple"><i class="fas fa-arrow-alt-circle-down"></i></div>
        `);

    // The Card itself
    const card = div.append("div")
        .attr("class", "canvas-card");

    card.append("div")
        .attr("class", (d) => `card-header ${d.color}`)
        .html((d) => `
            <span>${d.name}</span>
            <div class="header-icons">
                <i class="fas fa-globe"></i>
                <i class="far fa-image"></i>
                <i class="fas fa-expand-alt"></i>
                <div class="toolbar-sep"></div>
                <i class="fas fa-times" onclick="removeNode('${d.id}')"></i>
            </div>
        `);

    card.append("div")
        .attr("class", "card-body")
        .text((d) => d.content);

    // Suggestion Button (+)
    div.append("div")
        .attr("class", "suggestion-trigger")
        .style("margin", "10px 0")
        .style("cursor", "pointer")
        .style("background", "white")
        .style("width", "36px")
        .style("height", "36px")
        .style("border-radius", "50%")
        .style("display", "flex")
        .style("align-items", "center")
        .style("justify-content", "center")
        .style("border", "1px solid #ddd")
        .style("box-shadow", "0 2px 8px rgba(0,0,0,0.1)")
        .html('<i class="fas fa-plus"></i>')
        .on("click", (event, d) => showSuggestions(event, d));

    simulation.nodes(nodes);
    simulation.force("link").links(links);
    simulation.alpha(1).restart();

    simulation.on("tick", () => {
        mergedLinks.attr("d", d => {
            const dx = d.target.x - d.source.x,
                  dy = d.target.y - d.source.y,
                  dr = Math.sqrt(dx * dx + dy * dy);
            return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
        });

        nodeEnter.merge(nodeElements)
            .attr("transform", d => `translate(${d.x},${d.y})`);
    });
}

function showSuggestions(event, d) {
    // Hide any existing panel
    d3.selectAll(".suggestion-panel-fo").remove();

    const fo = container.append("foreignObject")
        .attr("class", "suggestion-panel-fo")
        .attr("width", 320)
        .attr("height", 400)
        .attr("x", d.x + 200)
        .attr("y", d.y);

    const panel = fo.append("xhtml:div")
        .attr("class", "suggestion-panel");

    panel.append("div")
        .style("display", "flex")
        .style("justify-content", "space-between")
        .html(`<h4>Tell me more...</h4> <i class="fas fa-times" onclick="d3.selectAll('.suggestion-panel-fo').remove()" style="cursor:pointer; color:#999"></i>`);

    const suggestions = [
        { text: "What are the risks of this procedure?", color: "purple" },
        { text: "What are alternatives to a biopsy?", color: "yellow" },
        { text: "How does pathology analyze tissue samples?", color: "yellow" }
    ];

    suggestions.forEach(s => {
        panel.append("div")
            .attr("class", `suggestion-pill ${s.color}`)
            .text(s.text)
            .on("click", () => {
                const child = addNode(s.text, d.x + 600, d.y + 200, 'card', s.color === 'purple' ? 'yellow' : 'teal');
                links.push({ source: d.id, target: child.id });
                update();
                d3.selectAll('.suggestion-panel-fo').remove();
            });
    });
}

function removeNode(id) {
    nodes = nodes.filter(n => n.id !== id);
    links = links.filter(l => l.source.id !== id && l.target.id !== id);
    update();
}

function updateZoomLabel(scale) {
    const label = document.querySelector('.right-controls span:last-child');
    if (label) label.innerText = Math.round(scale * 100) + '%';
}

function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
}

function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
}

function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
}

// UI Triggers
document.getElementById('generate-trigger').addEventListener('click', () => {
    const input = document.getElementById('query-input');
    const query = input.value.trim();
    if (query) {
        // Create initial node and hide center card
        const card = document.getElementById('main-query-card');
        card.style.display = 'none';
        
        const root = addNode(query, width/2, height/2);
        
        // Mock generation of related sub-cards
        setTimeout(() => {
            const subqueries = ["Preparation", "Risks", "Recovery", "Procedure Steps"];
            subqueries.forEach((t, i) => {
                const angle = (i / subqueries.length) * Math.PI * 2;
                const child = addNode(t, width/2 + Math.cos(angle)*300, height/2 + Math.sin(angle)*300);
                links.push({ source: root.id, target: child.id });
            });
            update();
        }, 600);
    }
});

initCanvas();
