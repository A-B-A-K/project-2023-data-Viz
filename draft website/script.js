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

    // Add click event listeners to the five buttons
    button1.addEventListener("click", function () {
        // Change the graph display to show statistics related to button 1
        updateGraph(1);
    });

    button2.addEventListener("click", function () {
        // Change the graph display to show statistics related to button 2
        updateGraph(2);
    });

    button3.addEventListener("click", function () {
        // Change the graph display to show statistics related to button 3
        updateGraph(3);
    });

    button4.addEventListener("click", function () {
        // Change the graph display to show statistics related to button 4
        updateGraph(4);
    });

    button5.addEventListener("click", function () {
        // Change the graph display to show statistics related to button 5
        updateGraph(5);
    });

    //We want to create a function that will make it so that when the user has scrolled passed a threshold the buttons start to follow him

    var buttonContainer = document.querySelector('.button-container');
    var originalPosition = buttonContainer.offsetTop;

    window.addEventListener('scroll', function () {
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

    window.addEventListener('scroll', function () {
        var currentPosition = window.pageYOffset || document.documentElement.scrollTop;

        if (currentPosition > originalPosition) {
            buttonContainer.classList.add('sticky-top');
        } else {
            buttonContainer.classList.remove('sticky-top');
        }
    });

    const XLSX = require('xlsx');
    const fetch = require('node-fetch');

    fetch('https://github.com/com-480-data-visualization/project-2023-data-vizares/blob/85a86b62202a95cd0d313663083bcaa38dec96c6/data/globalterrorismdb_0522dist.xlsx?raw=true')
        .then(response => response.arrayBuffer())
        .then(buffer => {
            const workbook = XLSX.read(buffer, { type: 'buffer' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(worksheet, { raw: false });
            console.log(data); // Do something with the data
        })
        .catch(error => console.log(error));



    function updateGraph(buttonNumber) {
        const graph = document.querySelector("#graph");
        graph.classList.remove("fade-in");
        graph.textContent = `Graph for Button ${buttonNumber}`;
        graph.classList.add("fade-in");

        const textContainer = document.querySelector(".text-container");
        switch (buttonNumber) {
            case 1:
                textContainer.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin tortor sed ultrices ullamcorper. Nulla ultricies enim a quam tempus auctor.</p> <div class='graph1' style='border: 3px solid #3C3C3C; border-radius: 15px;'> </div>";
                break;
            case 2:
                textContainer.innerHTML = "<p>Ut suscipit, enim vitae maximus semper, turpis quam volutpat enim, id aliquet odio eros eget ante. Fusce finibus gravida sem, vitae hendrerit nulla iaculis a.</p>";
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



});
