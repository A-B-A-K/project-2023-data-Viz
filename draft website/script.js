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
        updateGraph(1);
    });
    
    button2.addEventListener("click", function() {
        // Change the graph display to show statistics related to button 2
        updateGraph(2);
    });
    
    button3.addEventListener("click", function() {
        // Change the graph display to show statistics related to button 3
        updateGraph(3);
    });
    
    button4.addEventListener("click", function() {
        // Change the graph display to show statistics related to button 4
        updateGraph(4);
    });
    
    button5.addEventListener("click", function() {
        // Change the graph display to show statistics related to button 5
        updateGraph(5);
    });

    //We want to create a function that will make it so that when the user has scrolled passed a threshold the buttons start to follow him

    var buttonContainer = document.querySelector('.button-container');
    var originalPosition = buttonContainer.offsetTop;

    window.addEventListener('scroll', function() {
    var currentPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (currentPosition > originalPosition) {
        buttonContainer.classList.add('sticky');
    } else {
        buttonContainer.classList.remove('sticky');
    }

    if (currentPosition <= originalPosition) {
        buttonContainer.classList.remove('sticky');
    }
    });

    window.addEventListener('scroll', function() {
    var currentPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (currentPosition > originalPosition) {
        buttonContainer.classList.add('sticky-top');
    } else {
        buttonContainer.classList.remove('sticky-top');
    }
});


    function updateGraph(buttonNumber) {
        const graph = document.querySelector("#graph");
        graph.classList.remove("fade-in");
        graph.textContent = `Graph for Button ${buttonNumber}`;
        graph.classList.add("fade-in");
    }


});
