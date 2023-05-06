// Wait for the HTML and CSS to load before running JavaScript
document.addEventListener("DOMContentLoaded", function () {

    // Define variables for the map container and switch button

    const mapContainer = document.querySelector(".map");
    mapContainer.style.borderRadius = "0";
    // Define variables for the five other buttons
    const button1 = document.querySelector("#button-1");
    const button2 = document.querySelector("#button-2");
    const button3 = document.querySelector("#button-3");
    const button4 = document.querySelector("#button-4");
    const button5 = document.querySelector("#button-5");
    const resetButton = document.querySelector("#button-logo");

    const helpButton = document.getElementById("button-help");
    const helpWindow = document.getElementById("helpWindow");
    const closeButton = document.getElementById("closeButton");

    let previousLayer;

    // Add click event listeners to the five buttons
    button1.addEventListener("click", function () {
        // Change the graph display to show statistics related to button 1
        updateGraph(1);
        updateButton(1);
    });

    button2.addEventListener("click", function () {
        // Change the graph display to show statistics related to button 2
        updateGraph(2);
        updateButton(2);
    });

    button3.addEventListener("click", function () {
        // Change the graph display to show statistics related to button 3
        updateGraph(3);
        updateButton(3);
    });

    button4.addEventListener("click", function () {
        // Change the graph display to show statistics related to button 4
        updateGraph(4);
        updateButton(4);
    });

    button5.addEventListener("click", function () {
        // Change the graph display to show statistics related to button 5
        updateGraph(5);
        updateButton(5);
    });

    resetButton.addEventListener("click", function () {
        updateGraph(-1);
        updateButton(-1);
    });

    helpButton.addEventListener("click", function () {
        helpWindow.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        helpWindow.style.display = "none";
    });

    //We want to create a function that will make it so that when the user has scrolled passed a threshold the buttons start to follow him

    var buttonContainer = document.querySelector('.button-container');
    var originalPosition = buttonContainer.offsetTop;

    window.addEventListener('scroll', function () {
        var currentPosition = window.pageYOffset || document.documentElement.scrollTop;

        if (currentPosition > originalPosition) {
            buttonContainer.classList.add('sticky');
            // buttonContainer.classList.add('sticky-top'); // Add this line
        } else {
            buttonContainer.classList.remove('sticky');
            // buttonContainer.classList.remove('sticky-top'); // Add this line
        }
    });

    function updateButton(buttonNumber) {
        // Deselect all buttons
        const buttons = document.querySelectorAll(".button-container button");
        buttons.forEach(button => {
            button.classList.remove("selected");
        });

        if (buttonNumber === -1) {
            return;
        }
        // Select the clicked button if not already selected (if already selected, deselect all buttons)
        const clickedButton = document.querySelector(`#button-${buttonNumber}`);
        if (!clickedButton.classList.contains("selected")) {
            clickedButton.classList.add("selected");
        } else {
            buttons.forEach(button => {
                button.classList.remove("selected");
            });
        }

        const graph = document.querySelector("#graph");
        graph.classList.remove("fade-in");
        graph.textContent = `Graph for Button ${buttonNumber}`;
        graph.classList.add("fade-in");
    }

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    function updateGraph(buttonNumber) {

        const textContainer = document.querySelector(".text-container");
        const graphContainer = document.querySelector(".graph-container");
        
        switch (buttonNumber) {
            case 1:
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
                textContainer.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin tortor sed ultrices ullamcorper. Nulla ultricies enim a quam tempus auctor.</p> <div class='graph1' style='border: 3px solid #3C3C3C; border-radius: 15px;'> </div>";
                if (!imageContainer.hasChildNodes()) {
                    // add image to the map container
                    const image1 = document.createElement('img');   // Should not be created every time
                    image1.src = 'images/plot1page1.png';
                    image1.alt = 'Image 1';
                    const image2 = document.createElement('img');   // Should not be created every time
                    image2.src = 'images/plot2page1.png';
                    image2.alt = 'Image 2';

                    const imageContainer1 = document.createElement('div');
                    imageContainer1.classList.add('image-container');
                    imageContainer1.appendChild(image1);
                    const imageContainer2 = document.createElement('div');
                    imageContainer2.classList.add('image-container');
                    imageContainer2.appendChild(image2);

                    imageContainer.appendChild(imageContainer1);
                    imageContainer.appendChild(imageContainer2);
                    graphContainer.appendChild(imageContainer);
                }
                break;
            case 2:
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
    
                textContainer.innerHTML = "<p>Ut suscipit, enim vitae maximus semper, turpis quam volutpat enim, id aliquet odio eros eget ante. Fusce finibus gravida sem, vitae hendrerit nulla iaculis a.</p>";
    
                // Create a slider
                const slider = document.createElement('input');
                slider.type = 'range';
                slider.min = '1970';
                slider.max = '2020';
                slider.value = '1990';
                slider.classList.add('slider');
    
                // Create a label to display the slider value
                const sliderLabel = document.createElement('span');
                sliderLabel.innerHTML = `Year: ${slider.value}`;
                sliderLabel.classList.add('slider-label');
    
                // Add an event listener to update the label when the slider value changes
                slider.addEventListener('input', () => {
                    sliderLabel.innerHTML = `Year: ${slider.value}`;
                });
    
                // Append the slider and label to the imageContainer
                imageContainer.appendChild(slider);
                imageContainer.appendChild(sliderLabel);
    
                // Append the imageContainer to the graphContainer
                graphContainer.appendChild(imageContainer);
            // ... (the rest of the cases remain the same)
                break;
            case 3:
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
                textContainer.innerHTML = "<p>Nullam sagittis elit eget purus facilisis, id dictum justo auctor. Duis auctor dapibus bibendum. Curabitur blandit magna eu urna blandit, sit amet euismod mauris gravida. </p>";
                if (!imageContainer.hasChildNodes()) {
                    // add image to the map container
                    const image1 = document.createElement('img');   // Should not be created every time
                    const image2 = document.createElement('img');   // Should not be created every time
                    image1.src = 'images/plot1page3.png';
                    image1.alt = 'Image 1';
                    image2.src = 'images/plot2page3.png';
                    image2.alt = 'Image 2';
                    
                    const imageContainer1 = document.createElement('div');
                    imageContainer1.classList.add('image-container');
                    imageContainer1.appendChild(image1);
                    const imageContainer2 = document.createElement('div');
                    imageContainer2.classList.add('image-container');
                    imageContainer2.appendChild(image2);
                    
                    imageContainer.appendChild(imageContainer1);
                    imageContainer.appendChild(imageContainer2);
                    graphContainer.appendChild(imageContainer);
                }
                break;
            case 4:
                textContainer.innerHTML = "<p>Sed vel enim mauris. Duis in leo in erat varius elementum. Vestibulum congue ipsum sapien, vel lacinia leo dapibus a.</p>";
                break;
            case 5:
                textContainer.innerHTML = "<p>Phasellus aliquet augue eget nibh pulvinar bibendum. Etiam finibus risus eu leo elementum suscipit. Donec rutrum elit eget faucibus placerat.</p>";
                break;
            default:
                textContainer.innerHTML = `<p>Welcome to "Mapping the Shadows: An Interactive Journey Through Five Decades of Global
                            Terrorism", an interactive data
                            visualization project that invites you to explore the complex landscape of global terrorism
                            from 1970 to 2020. By
                            leveraging the power of the Global Terrorism Database(GTD), our goal is to provide an
                            engaging and informative
                            experience that sheds light on the trends, patterns, and impacts of terrorist activities
                worldwide.< br >
                    In this project, you will find a variety of visualizations, including histograms, heatmaps,
                        and parallel coordinate
                plots, all designed to present the data in a clear and accessible manner.At the heart of
                            our project is an
                            interactive map that adapts to your selections, allowing you to examine different aspects of
                terrorism, such as the
                            density of attacks, fatalities per country, and seasonality, among others.< br >
                    We believe that understanding the historical context and trends of terrorism is essential
                for
                            fostering informed
                            conversations and decision - making in our increasingly interconnected world.Please note that
                this project deals with
                            sensitive subject matter, and we have made every effort to present the information in an
                            unbiased and respectful
                manner.< br >
                    To begin your exploration, simply scroll down and interact with the visualizations below.If
                            you need help navigating
                            the website or understanding the visualizations, you can access our help guide by clicking
                            the button in the
                top - right corner of the page.< br >
                    We hope that this project provides you with valuable insights and encourages thoughtful
                            reflection on the complex
                            phenomenon of terrorism.</p > `;
        }

    }


    // Define the map object and add it to the "map" div container
    var mymap = L.map('map').setView([46.5197, 6.6323], 13);
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
