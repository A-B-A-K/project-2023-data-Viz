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
        } else {
            buttonContainer.classList.remove('sticky');
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
    const countryNames = ['World','Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia-Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Czechoslovakia', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Germany (GDR)', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guadeloupe', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'International', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Martinique', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nepal', 'Netherlands', 'New Caledonia', 'New Hebrides', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Yemen', 'Norway', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', "People's Republic of the Congo", 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Republic of the Congo', 'Rhodesia', 'Romania', 'Russia', 'Rwanda', 'Saudi Arabia', 'Senegal', 'Serbia', 'Serbia-Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovak Republic', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'South Yemen', 'Soviet Union', 'Spain', 'Sri Lanka', 'St. Kitts and Nevis', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Wallis and Futuna', 'West Bank and Gaza Strip', 'West Germany (FRG)', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zaire', 'Zambia', 'Zimbabwe']
    const regionNames = ['Australasia & Oceania','Central America & Caribbean','Central Asia','East Asia','Eastern Europe','Middle East & North Africa','North America','South America','South Asia','Southeast Asia','Sub-Saharan Africa','Western Europe']

    function updateGraph(buttonNumber) {

        const textContainer = document.querySelector(".text-container");
        const graphContainer = document.querySelector(".graph-container");
        const mapContainer = document.getElementById('map');
        const mapBox = document.querySelector(".map leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom");
        
        const oldDiv1 = graphContainer.querySelector('.graph1');
        const oldDiv2 = graphContainer.querySelector('.graph2');

        const div1 = document.createElement('div');
        div1.className = 'graph1';
        div1.style.width = '100%';
        div1.style.height = '100%';
        div1.style.border = '0px solid #3C3C3C';
        div1.innerHTML = `Graph1`;

        const div2 = document.createElement('div');
        div2.className = 'graph2';
        div2.style.width = '100%';
        div2.style.height = '100%';
        div2.style.border = '0px solid #3C3C3C';
        div2.innerHTML = `Graph2`;

        if (oldDiv1) {
            oldDiv1.remove();
        }

        if (oldDiv2) {
            oldDiv2.remove();
        }

        switch (buttonNumber) {
            case 1:
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
                textContainer.innerHTML = "<p>The first step into studying the nature of terrorist attacks was to study the groups that perpetrated them. We therefore present you a graph listing the terrorist organisations with the most casualties. Next to it we deemed interesting to study the weapons used most commonly by these groups which we represented by a heatmap.</p>";

                graphContainer.appendChild(div1);
                graphContainer.appendChild(div2);

                d3.csv("https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/Alex/data/miscellaneous/fatalities_per_group.csv")
                  .then(data => {
                      var processedData = data.sort((a, b) => b.nkill - a.nkill).slice(0, 10);
                      plotData(processedData);
                  })
                  .catch(error => console.error('Error:', error))

              
              // Fetch and process heatmap_data_pivot.csv
                d3.csv("https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/Alex/data/heatmap/heatmap_data.csv")
                  .then(data => {
                      plotHeatmap(data);
                  })
                  .catch(error => console.error('Error:', error));
                
                  break;
            case 2:
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
                textContainer.innerHTML = "<p>We found interesting to study terrorism and its evolution by visualizing the activity of terrorist groups through the years on the globe.</p>";

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
                textContainer.innerHTML = "<p>Before delving deeper in the analysis of the data we tried figuring out if there were specific trends in when the attacks were committed during the year</p>";

                graphContainer.appendChild(div1);

                if (!imageContainer.hasChildNodes()) {
                    d3.csv("https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/Alex/data/miscellaneous/seasonality_raw.csv")
                      .then(data => {
                          plotSeasonality(data);
                      })
                      .catch(error => console.error('Error:', error));
              
                }
                break;
            case 4:
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
                textContainer.innerHTML = "<p>To truly understand the dynamics of each region of the world we added their growth tendencies of terrorist activities.</p>";

                                // Create a dropdown menu (select element)
                const regionSelect = document.createElement('select');
                regionSelect.classList.add('region-select', 'pretty-select');
        
                // Create an img element to display the region image
                const regionImage = document.createElement('img');
                regionImage.classList.add('region-image');

                // Create a placeholder option
                const placeholderRegion = document.createElement('option');
                placeholderRegion.text = "Please select a region...";
                placeholderRegion.value = "";
                placeholderRegion.disabled = true;
                placeholderRegion.selected = true;
                placeholderRegion.hidden = true;
                regionSelect.appendChild(placeholderRegion);
        
                // Populate the dropdown menu with region options
                regionNames.forEach(region => {
                    const regionOption = document.createElement('option');
                    regionOption.value = region;
                    regionOption.text = region;
                    regionSelect.appendChild(regionOption);
                });
        
                // Add an event listener to update the displayed image based on the selected country
                regionSelect.addEventListener('change', () => {
                    // Update the image source (modify this to match your actual file paths and naming conventions)
                    // regionImage.src = `/data/regions/${regionSelect.value.replace(/ /g, '_')}.png`;
                    // regionImage.alt = regionSelect.value;
                });
        
                // Append the dropdown menu and the image to the imageContainer
                imageContainer.appendChild(regionSelect);
                imageContainer.appendChild(regionImage);
        
                // Append the imageContainer to the graphContainer
                graphContainer.appendChild(imageContainer);

                regionSelect.addEventListener('change', () => {

                    if (oldDiv1) {
                        oldDiv1.remove();
                    }

                    if (oldDiv2) {
                        oldDiv2.remove();
                    }
 
                    // const oldDiv = graphContainer.querySelector('.graph4');

                    // const div = document.createElement('div');
                    // div.className = 'graph4';
                    // div.style.width = '100%';
                    // div.style.height = '100%';
                    div1.style.border = '3px solid #3C3C3C';
                    // div.style.borderRadius = '15px';
                    div1.innerHTML = `<b>${regionSelect.value}</b>`;
                    graphContainer.appendChild(div1);


                    const dataUrl = `https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/Aristotelis/data/regions/${encodeURIComponent(regionSelect.value) }.csv`
                    d3.csv(dataUrl)
                        .then(data => {
                            plotScatterplot(data);
                        })
                        .catch(error => console.error('Error:', error));
                });

                
                break;
            case 5:
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
                textContainer.innerHTML = "<p>Lastly, in order to give as much information as possible we have added statistics on the different countries</p>";

                // Create a dropdown menu (select element)
                const countrySelect = document.createElement('select');
                countrySelect.classList.add('country-select', 'pretty-select');
        
                // Create an img element to display the country image
                const countryImage = document.createElement('img');
                countryImage.classList.add('country-image');

                // Create a placeholder option
                const placeholderCountry = document.createElement('option');
                placeholderCountry.text = "Please select a country..."; 
                placeholderCountry.value = "";
                placeholderCountry.disabled = true;
                placeholderCountry.selected = true;
                placeholderCountry.hidden = true;
                countrySelect.appendChild(placeholderCountry);
                
    
                // Populate the dropdown menu with country options
                countryNames.forEach(country => {
                    const countryOption = document.createElement('option');
                    countryOption.value = country;
                    countryOption.text = country;
                    countrySelect.appendChild(countryOption);
                });

                // Append the imageContainer to the graphContainer
                graphContainer.appendChild(imageContainer);

                // Add an event listener to update the displayed image based on the selected country
                countrySelect.addEventListener('change', () => {


                    if (oldDiv1) {
                        console.log("removing oldDiv1");
                        oldDiv1.remove();
                    }

                    if (oldDiv2) {
                        console.log("removing oldDiv2");
                        oldDiv2.remove();
                    }


                    div1.innerHTML = `<b>${countrySelect.value}</b>`
                    graphContainer.appendChild(div1);
                    // Update the image source (modify this to match your actual file paths and naming conventions)
                    //countryImage.src = `/data/countries/${countrySelect.value.replace(/ /g, '_')}.png`;
                    //countryImage.alt = countrySelect.value;
                    //const imageUrl = `/data/countries/${selectedCountry}.png`;

        
                    highlightCountry(countrySelect.value);
     

                    const dataUrl = `https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/Aristotelis/data/streamgraph/${encodeURIComponent(countrySelect.value) }.csv`;
                    d3.csv(dataUrl)	
                    .then(data => {
                        plotStreamgraph(data);
                    })
                    .catch(error => console.error('Error:', error));
                    
                });

                // Append the dropdown menu and the image to the imageContainer
                imageContainer.appendChild(countrySelect);  
                imageContainer.appendChild(countryImage);      

                break;
            default:
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
                textContainer.innerHTML = `<p>Welcome to "Mapping the Shadows: An Interactive Journey Through Five Decades of Global
                            Terrorism", an interactive data
                            visualization project that invites you to explore the complex landscape of global terrorism
                            from 1970 to 2020. By
                            leveraging the power of the Global Terrorism Database(GTD), our goal is to provide an
                            engaging and informative
                            experience that sheds light on the trends, patterns, and impacts of terrorist activities
                worldwide.<br>
                    In this project, you will find a variety of visualizations, including histograms, heatmaps,
                        and parallel coordinate
                plots, all designed to present the data in a clear and accessible manner.At the heart of
                            our project is an
                            interactive map that adapts to your selections, allowing you to examine different aspects of
                terrorism, such as the
                            density of attacks, fatalities per country, and seasonality, among others.<br>
                    We believe that understanding the historical context and trends of terrorism is essential
                for
                            fostering informed
                            conversations and decision - making in our increasingly interconnected world.Please note that
                this project deals with
                            sensitive subject matter, and we have made every effort to present the information in an
                            unbiased and respectful
                manner.<br>
                    To begin your exploration, simply scroll down and interact with the visualizations below.If
                            you need help navigating
                            the website or understanding the visualizations, you can access our help guide by clicking
                            the button in the
                top - right corner of the page.<br>
                    We hope that this project provides you with valuable insights and encourages thoughtful
                            reflection on the complex
                            phenomenon of terrorism.</p>`;
        }

    }

    function plotData(data) {
        // Set the dimensions and margins of the graph
        const width = 600;
        const height = 400;

        var margin = {top: 10, right: 10, bottom: 10, left: 235};
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip-bar")
            .style("opacity", 0);

        const svg = d3.select(".graph1");

        const g = svg.append("svg")
            .attr("width", innerWidth + margin.left + margin.right)
            .attr("height", innerHeight + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);
            
        
        const xValue = d => +d.nkill;
        const yValue = d => d.gname;

        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => xValue(d))])
            .range([0, innerWidth]);

        const yScale = d3.scaleBand()
            .domain(data.map(d => yValue(d)))
            .range([0, innerHeight])
            .padding(0.1);

        g.append('g').call(d3.axisBottom(xScale).tickFormat(d3.format('.2s')))
            .attr('transform', `translate(0, ${innerHeight})`);
        g.append('g').call(d3.axisLeft(yScale));

        g.selectAll('rect').data(data)
            .enter().append('rect')
            .attr('y', d => yScale(d.gname))
            .attr('width', xScale(0))
            .attr('height', yScale.bandwidth())
            .attr('x', xScale(0))
            .attr("fill", (d, i) => d3.interpolateSpectral(i / data.length))
            .on("mouseover", function(event, d) {
                // Load the effect of hovering on the bar
                d3.select(this).classed("hovered-bar", true);

                // Make tooltip visible
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                // Update tooltip content
                tooltip.html(`<p><b>Group Name:</b> ${d.gname}</p>
                        <p><b>Number of Fatalities:</b> ${Number(d.nkill).toFixed(0)}</p>`)
                    .style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY - 28}px`)
                    .style("background-color", d3.select(this).attr("fill"))
                    .style("border-color", d3.select(this).attr("fill"))
                    .style("weight", "12px")
                    .style("border-style", "solid");
            })
            .on("mouseout", function(d) {
                // Remove the effect of hovering on the bar
                d3.select(this).classed("hovered-bar", false);
                // Make tooltip invisible
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        // Animation
        g.selectAll("rect")
            .transition()
            .duration(800)
            .attr("x", d => 0)
            .attr("width", d => xScale(+d.nkill))
            .delay(function(d,i){ return (i * 100) });
    }

    function plotHeatmap(data) {
        const width = 450;
        const height = 450;

        var margin = { top: 30, right: 30, bottom: 130, left: 150 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip-heatmap")
            .style("opacity", 0);

        var svg = d3.select(".graph2");

        const g = svg.append("svg")
            .attr("width", innerWidth + margin.left + margin.right)
            .attr("height", innerHeight + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        const xValue = d => d.gname;
        const yValue = d => d.weapsubtype1_txt;

        var x = d3.scaleBand()
            .range([0, innerWidth])
            .domain(data.map(d => xValue(d)))
            .padding(0.01);
        g.append("g")
            .attr("transform", "translate(0," + innerHeight + ")")
            .call(d3.axisBottom(x));

        var y = d3.scaleBand()
            .range([innerHeight, 0])
            .domain(data.map(d => yValue(d)))
            .padding(0.01);
        g.append("g")
            .call(d3.axisLeft(y));

        var myColor = d3.scaleLinear()
            .range(["white", "#69b3a2"])
            .domain([1, 1500]);

        let gnameMapping = {};
        let weapsubtype1_txtMapping = {};
        let gnameCounter = 0;
        let weapsubtype1_txtCounter = 0;

        data.forEach(d => {
            if (!gnameMapping[d.gname]) {
                gnameMapping[d.gname] = 'gname' + gnameCounter++;
            }
            if (!weapsubtype1_txtMapping[d.weapsubtype1_txt]) {
                weapsubtype1_txtMapping[d.weapsubtype1_txt] = 'weapsubtype' + weapsubtype1_txtCounter++;
            }
        });

        g.selectAll()
            .data(data, function (d) { return d.gname + ':' + d.weapsubtype1_txt; })
            .enter()
            .append("rect")
            .attr("x", function (d) { return x(d.gname) })
            .attr("y", function (d) { return y(d.weapsubtype1_txt) })
            .attr("width", x.bandwidth())
            .attr("height", y.bandwidth())
            .attr("rx", 4)
            .attr("ry", 4)
            .attr("class", function (d) { return `${gnameMapping[d.gname]} ${weapsubtype1_txtMapping[d.weapsubtype1_txt]}` })
            .style("fill", function (d) { return myColor(+d.count) })
            .on("mouseover", function (event, d) {
                d3.selectAll('rect')
                    .transition().duration(200)
                    .style("filter", "brightness(0.9)")
                    .style("stroke", "none")
                    .style("stroke-width", "0px");

                d3.selectAll(`.${gnameMapping[d.gname]}`)
                    .transition().duration(200)
                    .style("filter", "brightness(1)")
                    .style("stroke", "black")
                    .style("stroke-width", "1px");

                d3.selectAll(`.${weapsubtype1_txtMapping[d.weapsubtype1_txt]}`)
                    .transition().duration(200)
                    .style("filter", "brightness(1)")
                    .style("stroke", "black")
                    .style("stroke-width", "1px");

                tooltip.transition()
                    .duration(200)
                    .style("opacity", 0.9);
                tooltip.html(`<p> The <b>${d.gname}</b> group <br> used <b>${d.weapsubtype1_txt}</b> ${+d.count} times</p>`)
                    .style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY - 28}px`)
                    .style("background-color", d3.select(this).attr("fill"))
                    .style("border-color", myColor(+d.count))
                    .style("weight", "12px")
                    .style("border-style", "solid");
            })
            .on("mousemove", function (event, d) {
                tooltip.style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY - 28}px`);
            })
            .on("mouseout", function (d) {
                d3.selectAll('rect')
                    .transition().duration(200)
                    .style("filter", "brightness(1)")
                    .style("stroke", "none")
                    .style("stroke-width", "0px")

                tooltip.style("opacity", 0);
            })
    }
  
    function plotStreamgraph(data) {
        const width = 460;
        const height = 400
        var margin = {top: 20, right: 30, bottom: 10, left: 75};        
        var innerWidth = width - margin.left - margin.right;
        var innerHeight = height - margin.top - margin.bottom;

        // Calculate list of total per month
        const countsByMonth = Array(12).fill(0); // Initialize an array to store counts for each month (assuming 12 months)

        data.forEach(obj => {
            const monthIndex = parseInt(obj.imonth) - 1; // Get the month index (subtract 1 since JavaScript uses zero-based indexing)
            const values = Object.values(obj).slice(1, 32); // Get the values for each day of the month

            const monthCount = values.reduce((acc, val) => acc + parseFloat(val), 0); // Calculate the sum of values for the month
            countsByMonth[monthIndex] += monthCount; // Add the month count to the corresponding index in the countsByMonth array
        });    

        var svg = d3.select(".graph1");

        const g = svg.append("svg")
            .attr("width", innerWidth + margin.left + margin.right)
            .attr("height", innerHeight + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        var keys = data.columns.slice(1);   // Month names

        var x = d3.scaleLinear()
            .domain([1, 12])
            .range([0, innerWidth]);
        g.append("g")
            .attr("transform", "translate(0," + innerHeight * .8 + ")")
            .call(d3.axisBottom(x).tickSize(-innerHeight * .7))
            .select(".domain")
            .remove();

        g.selectAll(".tick line").attr("stroke", "#b8b8b8");  // Vertical grid lines above month names

        // Add X axis label:
        g.append("text")
            .attr("text-anchor", "end")
            .attr("x", 2*innerWidth/3)
            .attr("y", innerHeight - 30 )
            .text("Time (month)");

        var y = d3.scaleLinear()
            .domain([-d3.max(countsByMonth) * 2.5, d3.max(countsByMonth) * 2.5])
            .range([ innerHeight, 0 ]);
        g.append("g")
            .call(d3.axisLeft(y))
            .attr("transform", "translate(-25, 0)");

        var color = d3.scaleOrdinal()
            .domain(keys)
            .range(d3.schemeTableau10);

        var stackedData = d3.stack()
            .offset(d3.stackOffsetSilhouette)
            .keys(keys)
            (data);

        var tooltip = d3.select("body")
            .append("div")
            .style("opacity", 0)
            .style("font-size", 10)
            .attr("class", "tooltip-streamgraph")
            .style("font-size", 17)
            .style("z-index", 1000);


        var area = d3.area()
            .x(function(d) { return x(d.data.imonth); })
            .y0(function(d) { return y(d[0]); })
            .y1(function(d) { return y(d[1]); });

        g.selectAll("mylayers")
            .data(stackedData)
            .enter()
            .append("path")
                .attr("class", "myArea") 
                .style("fill", function(d) { return color(d.key); })
                .style("opacity", .8)
            .attr("d", area)
            .on("mouseover", function(event, d) {
                tooltip.transition()
                    .duration(200)
                    .style("opacity", 0.9);
                tooltip.html(`<p>${d.key} </p>`)
                    .style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY - 28}px`)
                    .style("background-color", color(d.key));
                d3.selectAll(".myArea").style("opacity", .2)
                d3.select(this)
                    .style("stroke", "black")
                    .style("opacity", 1)
            })
            .on("mousemove", function(event, d) {
                tooltip.style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY - 28}px`);
            })
            .on("mouseleave", function(d) {
                tooltip.style("opacity", 0)
                d3.selectAll(".myArea").style("opacity", .8).style("stroke", "none")
            });
    }

    function plotSeasonality(data) {
        const width = 450;
        const height = 450;

        var margin = { top: 30, right: 30, bottom: 130, left: 150 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip-heatmap")
            .style("opacity", 0);

        var svg = d3.select(".graph1");

        const g = svg.append("svg")
            .attr("width", innerWidth + margin.left + margin.right)
            .attr("height", innerHeight + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        const xValue = d => d.imonth;
        const yValue = d => d.iday;

        var x = d3.scaleBand()
            .range([0, innerWidth])
            .domain(data.map(d => xValue(d)))
            .padding(0.01);
        g.append("g")
            .attr("transform", "translate(0," + innerHeight + ")")
            .call(d3.axisBottom(x));

        var y = d3.scaleBand()
            .range([innerHeight, 0])
            .domain(data.map(d => yValue(d)))
            .padding(0.01);
        g.append("g")
            .call(d3.axisLeft(y));

        var myColor = d3.scaleSequential()
            .interpolator(d3.interpolateViridis)
            .domain([0, 750]);;

        const numToMonth = d => {
            switch (d) {
                case 1:
                    return 'January';
                case 2:
                    return 'February';
                case 3:
                    return 'March';
                case 4:
                    return 'April';
                case 5:
                    return 'May';
                case 6:
                    return 'June';
                case 7:
                    return 'July';
                case 8:
                    return 'August';
                case 9:
                    return 'September';
                case 10:
                    return 'October';
                case 11:
                    return 'November';
                case 12:
                    return 'December';
            }
        }


        g.selectAll()
            .data(data, function (d) { return d.imonth + ':' + d.iday; })
            .enter()
            .append("rect")
            .attr("x", function (d) { return x(d.imonth) })
            .attr("y", function (d) { return y(d.iday) })
            .attr("width", x.bandwidth())
            .attr("height", y.bandwidth())
            .attr("rx", 4)
            .attr("ry", 4)
            //.attr("class", function (d) { return `${gnameMapping[d.imonth]} ${weapsubtype1_txtMapping[d.iday]}` })
            .style("fill", function (d) { return myColor(+d.count) })
            .on("mouseover", function (event, d) {

                tooltip.transition()
                    .duration(200)
                    .style("opacity", 0.9);
                tooltip.html(`<p> The <b>${d.iday} of ${numToMonth(+d.imonth)}</b>  <br> has on average ${+d.count} attacks</p>`)
                    .style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY - 28}px`)
                    .style("background-color", d3.select(this).attr("fill"))
                    .style("border-color", myColor(+d.count))
                    .style("weight", "12px")
                    .style("border-style", "solid");
            })
            .on("mousemove", function (event, d) {
                tooltip.style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY - 28}px`);
            })

            .on("mouseout", function (d) {
                d3.selectAll('rect')
                    .transition().duration(200)
                    .style("filter", "brightness(1)")
                    .style("stroke", "none")
                    .style("stroke-width", "0px")

                tooltip.style("opacity", 0);
            })
    }

    function plotScatterplot(data) {
        const width = 460;
        const height = 400;

        var margin = { top: 10, right: 30, bottom: 30, left: 60 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip-scatterplot")
            .style("opacity", 0);

        var svg = d3.select(".graph1");

        const g = svg.append("svg")
            .attr("width", innerWidth + margin.left + margin.right)
            .attr("height", innerHeight + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        var x = d3.scaleLinear()
            .domain([0, 0])
            .range([0, innerWidth]);
        g.append("g")
            .attr("class", "x-axis")
            .attr("transform", "translate(0," + innerHeight + ")")
            .call(d3.axisBottom(x))
            .attr("opacity", 0);

        var y = d3.scaleLinear()
            .domain([0, 500])
            .range([innerHeight, 0]);
        g.append("g")
            .call(d3.axisLeft(y));

        g.append('g')
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function (d) { return x(+d.year); })
            .attr("cy", function (d) { return y(+d.nkill); })
            .attr("r", 1.5)
            .style("fill", "#69b3a2"); // Categorize in some way with color

            x.domain([1970, 2020])
            g.select(".x-axis")
                .transition()
                .duration(1000)
                .attr("opacity", 1)
                .call(d3.axisBottom(x).tickFormat(d3.format("d")));

            g.selectAll("circle")
                .transition()
                .delay(function (d, i) { return (i * 3) })
                .duration(200)
                .attr("cx", function (d) { return x(+d.year); })
                .attr("cy", function (d) { return y(+d.nkill); })

    }

    
    // Define the map object and add it to the "map" div container
    var mymap = L.map('map').setView([46.5197, 6.6323], 2);
    // Add the tile layer to the map
    //L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //    maxZoom: 18,
    //    tileSize: 512,
    //    zoomOffset: -1
    //}).addTo(mymap);


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
    
    var GeoJsonData; // Variable to hold the GeoJSON data

    fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
    .then(response => response.json())
    .then(data => {
        // Assign the fetched GeoJSON data to the variable
        GeoJsonData = data;

        /*var franceFeature = GeoJsonData.features.find(feature => feature.properties.name === 'France');
        if (franceFeature) {
          // Create a Leaflet GeoJSON layer with only the France feature
          var franceLayer = L.geoJson(franceFeature, {
            style: {
              fillColor: 'red',
              weight: 3,
              color: 'red',
              fillOpacity: 0.5
            }
          }).addTo(mymap);
    
          // Fit the map to the bounds of the France layer
          mymap.fitBounds(franceLayer.getBounds());
        }*/
    })
    .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error fetching GeoJSON data:', error);
    });

    var geoJsonOptions = {
        style: function (feature) {
          // Define the style for each GeoJSON feature
          return {
            fillColor: 'blue',
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.5
          };
        },
        onEachFeature: function (feature, layer) {
          // Perform operations for each GeoJSON feature
          layer.bindPopup(feature.properties.name);
        }
      };
    var geojson = L.geoJson(GeoJsonData, geoJsonOptions).addTo(mymap);
    console.log(geojson)

    geojson.eachLayer(function (layer) {
        layer.bindPopup(layer.feature.properties.name);
    });

    mymap.fitBounds(geojson.getBounds());

    var geojson = L.geoJson(GeoJsonData, geoJsonOptions).addTo(mymap);

    // Assuming the 'name' property is used to identify France in the GeoJSON data
    var targetCountry = 'France';

    geojson.eachLayer(function (layer) {
        // Check if the layer represents the target country
          // Highlight the layer by changing its style
          layer.setStyle({
            fillColor: 'yellow',  // Change the fill color to yellow (or any other desired color)
            weight: 3,            // Increase the border weight
            color: 'red'          // Change the border color to red (or any other desired color)
          });
      
          // You can also perform other actions, such as opening a popup or executing custom code
          layer.bindPopup('France'); // Open a popup with a message
          console.log('France layer:', layer); // Log the layer object
        
      });

      function highlightCountry(countryName) {
        //countryName = "'" + countryName + "'";
        fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
        .then(response => response.json())
        .then(data => {
            // Assign the fetched GeoJSON data to the variable
            GeoJsonData = data;
        })
        .catch(error => {
            // Handle any errors that occur during the fetch
            console.error('Error fetching GeoJSON data:', error);
        });
        // Find the feature representing the specified country in the GeoJSON data
        console.log(countryName)
        var countryFeature = GeoJsonData.features.find(feature => feature.properties.name === countryName);
        if (countryFeature) {
          // Create a Leaflet GeoJSON layer with only the specified country feature
          var countryLayer = L.geoJson(countryFeature, {
            style: {
              fillColor: 'red',
              weight: 3,
              color: 'red',
              fillOpacity: 0.5
            }
          }).addTo(mymap);
      
          // Fit the map to the bounds of the country layer
          mymap.fitBounds(countryLayer.getBounds());
        }
      }

});

