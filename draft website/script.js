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
    let previousLayer;
    
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
        /*const graph = document.querySelector("#graph");
        graph.classList.remove("fade-in");
        graph.textContent = `Graph for Button ${buttonNumber}`;
        graph.classList.add("fade-in");*/

        const textContainer = document.querySelector(".text-container");
        const graphContainer = document.querySelector(".graph-container");
        switch (buttonNumber) {
            case 1:
                textContainer.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin tortor sed ultrices ullamcorper. Nulla ultricies enim a quam tempus auctor.</p> <div class='graph1' style='border: 3px solid #3C3C3C; border-radius: 15px;'> </div>";
                // add image to the map container
                const image1 = document.createElement('img');
                image1.src = 'images/plot1page1.png';
                image1.alt = 'Image 1';
                const image2 = document.createElement('img');
                image2.src = 'images/plot2page1.png';
                image2.alt = 'Image 2';

                const imageContainer1 = document.createElement('div');
                imageContainer1.classList.add('image-container');
                imageContainer1.appendChild(image1);
                const imageContainer2 = document.createElement('div');
                imageContainer2.classList.add('image-container');
                imageContainer2.appendChild(image2);

                const imageContainer = document.createElement('div');
                imageContainer.classList.add('image-container');
                imageContainer.appendChild(imageContainer1);
                imageContainer.appendChild(imageContainer2);
                graphContainer.appendChild(imageContainer);
                break;
            case 2:
                textContainer.innerHTML = "<p>Ut suscipit, enim vitae maximus semper, turpis quam volutpat enim, id aliquet odio eros eget ante. Fusce finibus gravida sem, vitae hendrerit nulla iaculis a.</p>";
                imageContainer1.classList.
                imageContainer2.classList.remove(image2)
                break;
            case 3:
                textContainer.innerHTML = "<p>Nullam sagittis elit eget purus facilisis, id dictum justo auctor. Duis auctor dapibus bibendum. Curabitur blandit magna eu urna blandit, sit amet euismod mauris gravida. </p>";
                break;
            case 4:
                textContainer.innerHTML = "<p>Sed vel enim mauris. Duis in leo in erat varius elementum. Vestibulum congue ipsum sapien, vel lacinia leo dapibus a.</p>";
                break;
            case 5:
                textContainer.innerHTML = "<p>Phasellus aliquet augue eget nibh pulvinar bibendum. Etiam finibus risus eu leo elementum suscipit. Donec rutrum elit eget faucibus placerat.</p>";
                break;
            default:
                textContainer.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin tortor sed ultrices ullamcorper. Nulla ultricies enim a quam tempus auctor.</p>";
        }
    }


    // Define the map object and add it to the "map" div container
    var mymap = L.map('map').setView([51.505, -0.09], 13);
    // Add the tile layer to the map
    //L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //    maxZoom: 18,
    //    tileSize: 512,
    //    zoomOffset: -1
    //}).addTo(mymap);


    // We want to highlight france when clicking on the button "button1"
    mymap.createPane('labels');
    mymap.getPane('labels').style.zIndex = 650;
    mymap.getPane('labels').style.pointerEvents = 'none';
    

    var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
    }).addTo(mymap);

    var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
    }).addTo(mymap);

    var geojson = L.geoJson(GeoJsonData, geoJsonOptions).addTo(mymap);

    geojson.eachLayer(function (layer) {
        layer.bindPopup(layer.feature.properties.name);
    });
        
    mymap.fitBounds(geojson.getBounds());

    var geojson = L.geoJson(GeoJsonData, geoJsonOptions).addTo(mymap);

});
