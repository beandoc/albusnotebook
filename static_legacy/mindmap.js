// D3 Mind Map Logic
let width, height;
let svg, container, simulation, linkEnv, nodeEnv;
let currentData = {
    nodes: [],
    links: []
};

let selectedNode = null;

const colors = {
    root: '#6366f1',
    level1: '#0ea5e9',
    level2: '#22d3ee',
    level3: '#38bdf8',
    default: '#94a3b8'
};

function initGraph() {
    width = window.innerWidth;
    height = window.innerHeight;

    svg = d3.select("#mindmap-canvas")
        .attr("viewBox", [0, 0, width, height]);

    container = svg.append("g");

    // Add zoom behavior
    const zoom = d3.zoom()
        .scaleExtent([0.1, 4])
        .on("zoom", (event) => {
            container.attr("transform", event.transform);
        });

    svg.call(zoom);

    linkEnv = container.append("g").attr("class", "links");
    nodeEnv = container.append("g").attr("class", "nodes");

    simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(d => d.id).distance(150))
        .force("charge", d3.forceManyBody().strength(-1000))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("x", d3.forceX(width / 2).strength(0.1))
        .force("y", d3.forceY(height / 2).strength(0.1));

    // Handle window resize
    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        svg.attr("viewBox", [0, 0, width, height]);
        simulation.force("center", d3.forceCenter(width / 2, height / 2));
    });

    // Start with a seed node if input is empty
    createNode("Quantum Computing", null, 0);
}

function createNode(name, parentId = null, level = 0) {
    const id = btoa(name + Math.random()).substring(0, 8);
    const newNode = {
        id: id,
        name: name,
        level: level,
        x: parentId ? currentData.nodes.find(n => n.id === parentId).x + (Math.random() - 0.5) * 50 : width / 2,
        y: parentId ? currentData.nodes.find(n => n.id === parentId).y + (Math.random() - 0.5) * 50 : height / 2,
        description: `Deep dive into ${name}. Exploring its implications in modern technology and future research.`
    };

    currentData.nodes.push(newNode);

    if (parentId) {
        currentData.links.push({
            source: parentId,
            target: id
        });
    }

    updateGraph();
    return id;
}

function updateGraph() {
    // Update links
    const link = linkEnv.selectAll(".link")
        .data(currentData.links, d => `${d.source.id || d.source}-${d.target.id || d.target}`);

    link.exit().remove();

    const linkEnter = link.enter().append("line")
        .attr("class", "link")
        .style("opacity", 0)
        .transition().duration(500)
        .style("opacity", 1);

    const mergedLinks = linkEnter.merge(link);

    // Update nodes
    const node = nodeEnv.selectAll(".node")
        .data(currentData.nodes, d => d.id);

    node.exit().remove();

    const nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .call(drag(simulation))
        .on("click", (event, d) => selectNode(d));

    nodeEnter.append("circle")
        .attr("r", d => Math.max(10, 30 - d.level * 5))
        .attr("fill", d => colors[`level${d.level}`] || colors.default)
        .style("opacity", 0)
        .transition().duration(500)
        .style("opacity", 1);

    nodeEnter.append("text")
        .attr("dy", 40)
        .attr("text-anchor", "middle")
        .text(d => d.name)
        .style("opacity", 0)
        .transition().duration(500)
        .style("opacity", 1);

    const mergedNodes = nodeEnter.merge(node);

    simulation.nodes(currentData.nodes);
    simulation.force("link").links(currentData.links);
    simulation.alpha(1).restart();

    simulation.on("tick", () => {
        mergedLinks
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        mergedNodes
            .attr("transform", d => `translate(${d.x},${d.y})`);
    });
}

function selectNode(d) {
    selectedNode = d;
    
    // Highlight node
    d3.selectAll(".node circle")
        .style("stroke", "transparent")
        .style("filter", "none");
        
    d3.select(event.currentTarget).select("circle")
        .style("stroke", "white")
        .style("filter", "drop-shadow(0 0 10px white)");

    // Show details
    const panel = document.getElementById("details-panel");
    panel.classList.add("active");
    document.getElementById("panel-title").innerText = d.name;
    document.getElementById("panel-description").innerText = d.description;
    
    // Auto-scroll logic if needed
}

function closePanel() {
    document.getElementById("details-panel").classList.remove("active");
    selectedNode = null;
    d3.selectAll(".node circle").style("stroke", "transparent");
}

function drag(simulation) {
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

    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
}

// Interactive Logic
document.getElementById("generate-btn").addEventListener("click", () => {
    const input = document.getElementById("node-input");
    const val = input.value.trim();
    if (val) {
        // Reset or add to existing? Let's add as a new root for now if empty, or connected to selected
        const parentId = selectedNode ? selectedNode.id : null;
        const level = selectedNode ? selectedNode.level + 1 : 0;
        
        showLoader();
        setTimeout(() => {
            createNode(val, parentId, level);
            hideLoader();
            input.value = "";
        }, 800);
    }
});

document.getElementById("expand-node-btn").addEventListener("click", () => {
    if (selectedNode) {
        showLoader();
        setTimeout(() => {
            const subtopics = simulateAISubtopics(selectedNode.name);
            subtopics.forEach(s => createNode(s, selectedNode.id, selectedNode.level + 1));
            hideLoader();
        }, 1200);
    }
});

function simulateAISubtopics(topic) {
    const generic = ["Applications", "History", "Future Trends", "Key Challenges", "Case Studies", "Technical Overview"];
    // Shuffle and pick 3-4
    return generic.sort(() => 0.5 - Math.random()).slice(0, d3.randomInt(3, 5)());
}

function showLoader() { document.getElementById("loader").classList.remove("hidden"); }
function hideLoader() { document.getElementById("loader").classList.add("hidden"); }

function resetGraph() {
    currentData = { nodes: [], links: [] };
    initGraph();
}

function zoomIn() { svg.transition().call(d3.zoom().scaleBy, 1.3); }
function zoomOut() { svg.transition().call(d3.zoom().scaleBy, 0.7); }

function exportJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentData));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "mindmap_export.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

// Start the app
initGraph();
