// Wait for the HTML and CSS to load before running JavaScript
document.addEventListener("DOMContentLoaded", function() {
    
    // Define variables for the map container and switch button

    const mapContainer = document.querySelector(".map");
    mapContainer.style.borderRadius = "0";
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

    //We want to create a function that will make it so that when the user has scrolled passed a threshold the buttons start to follow him


    //We want to create a function that will make it so that when the user has scrolled passed a threshold the buttons start to follow him
    window.onscroll = function() {myFunction()};
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop-100000;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
            button1.classList.add("sticky");
            button2.classList.add("sticky");
            button3.classList.add("sticky");
            button4.classList.add("sticky");
            button5.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
            button1.classList.remove("sticky");
            button2.classList.remove("sticky");
            button3.classList.remove("sticky");
            button4.classList.remove("sticky");
            button5.classList.remove("sticky");
        }
    }



});
