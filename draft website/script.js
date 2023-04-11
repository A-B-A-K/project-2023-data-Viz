// Wait for the HTML and CSS to load before running JavaScript
document.addEventListener("DOMContentLoaded", function() {
    
    // Define variables for the map container and switch button
    const mapContainer = document.querySelector(".map");
    const switchButton = document.querySelector("#switch-button");
    
    // Define a variable for the map type (spherical or planar)
    let mapType = "spherical";
    
    // Add a click event listener to the switch button
    switchButton.addEventListener("click", function() {
        // Toggle the map type between spherical and planar
        if (mapType === "spherical") {
            mapContainer.style.borderRadius = "0";
            mapType = "planar";
        } else {
            mapContainer.style.borderRadius = "15px";
            mapType = "spherical";
        }
    });
    
    // Define variables for the five other buttons
    const button1 = document.querySelector("#button-1");
    const button2 = document.querySelector("#button-2");
    const button3 = document.querySelector("#button-3");
    const button4 = document.querySelector("#button-4");
    const button5 = document.querySelector("#button-5");
    
    // Add click event listeners to the five buttons
    button1.addEventListener("click", function() {
        // Change the graph display to show statistics related to button 1
        const graph = document.querySelector("#graph");
        graph.classList.remove("fade-in");
        graph.textContent = "Graph for Button 1";
        graph.classList.add("fade-in");
    });
    
    button2.addEventListener("click", function() {
        // Change the graph display to show statistics related to button 2
        const graph = document.querySelector("#graph");
        graph.classList.remove("fade-in");
        graph.textContent = "Graph for Button 2";
        graph.classList.add("fade-in");
    });
    
    button3.addEventListener("click", function() {
        // Change the graph display to show statistics related to button 3
        const graph = document.querySelector("#graph");
        graph.classList.remove("fade-in");
        graph.textContent = "Graph for Button 3";
        graph.classList.add("fade-in");
    });
    
    button4.addEventListener("click", function() {
        // Change the graph display to show statistics related to button 4
        const graph = document.querySelector("#graph");
        graph.classList.remove("fade-in");
        graph.textContent = "Graph for Button 4";
        graph.classList.add("fade-in");
    });
    
    button5.addEventListener("click", function() {
        // Change the graph display to show statistics related to button 5
        const graph = document.querySelector("#graph");
        graph.classList.remove("fade-in");
        graph.textContent = "Graph for Button 5";
        graph.classList.add("fade-in");
    });
    
});
