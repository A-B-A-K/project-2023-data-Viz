const descriptions = {
    'Private Citizens & Property': 'Red is often associated with danger, urgency, and attention. It represents the vulnerability of private citizens and their property to various threats.',
    'Government (Diplomatic)': 'Orange is a warm and vibrant color. It symbolizes diplomacy, communication, and international relations, which are often associated with government diplomatic activities.',
    'Journalists & Media': 'Yellow is bright and eye-catching. It represents the role of journalists and the media in bringing light, truth, and spreading information.',
    'Police': 'Green is commonly associated with law enforcement. It represents safety, security, and the authority of the police in maintaining law and order.',
    'Utilities': 'Cyan is a calming and soothing color. It represents utility services such as electricity, water, and other essential public services that contribute to the smooth functioning of society.',
    'Military': 'Navy blue is a deep and strong color. It symbolizes the armed forces, defense, and military operations.',
    'Government (General)': 'Indigo is a deep shade of blue. It represents the general functioning of the government and encompasses various government activities beyond diplomacy.',
    'Airports & Aircraft': 'Purple is a regal color associated with air travel and aviation. It represents airports, aircraft, and the aviation industry.',
    'Business': 'Magenta is a vibrant and dynamic color. It represents the business sector, entrepreneurship, and commercial activities.',
    'Educational Institution': 'Maroon is a rich and classic color. It symbolizes educational institutions, academia, and the pursuit of knowledge.',
    'Violent Political Party': 'Hot pink is a bold and intense color. It represents violent political parties and their aggressive and confrontational nature.',
    'Religious Figures/Institutions': 'Gold is a color associated with spirituality, reverence, and divine qualities. It symbolizes religious figures and institutions.',
    'Unknown': 'Gray is a neutral color. It represents cases where the target type is unknown or not specified.',
    'Transportation': 'Dark green is a color associated with transportation and logistics. It represents various modes of transportation, such as roads, railways, and vehicles.',
    'Tourists': 'Slate blue is a calm and serene color. It represents tourists and travel-related activities.',
    'NGO': 'Green yellow is a vibrant and cheerful color. It represents non-governmental organizations (NGOs) and their contributions to social welfare and humanitarian efforts.',
    'Telecommunication': 'Light sky blue is a soothing and refreshing color. It symbolizes telecommunication services, connectivity, and communication networks.',
    'Food or Water Supply': 'Indian red is a warm and earthy color. It represents the food or water supply sector and the challenges related to food security and clean water access.',
    'Terrorists/Non-State Militia': 'Maroon (same as \'Educational Institution\') is used again to represent terrorists and non-state militia. The repetition signifies the danger and gravity associated with these groups.',
    'Other': 'Sienna is a natural and earthy color. It represents target types that do not fall into the other specified categories.',
    'Maritime': 'Blue is a color associated with the sea and maritime activities. It represents maritime operations, shipping, and naval activities.',
    'Abortion Related': 'Medium violet red is a strong and intense color. It represents target types related to abortion issues and debates.',
};

var colorMapping = {
    'Government (Diplomatic)': '#FFA500', // Orange
    'Government (General)': '#4B0082', // Indigo
    'Military': '#000080', // Navy Blue
    'Maritime': '#0000FF', // Blue
    'Transportation': '#006400', // Dark Green
    'Police': '#008000', // Green
    'Utilities': '#00FFFF', // Cyan
    'Tourists': '#6A5ACD', // Slate Blue
    'Business': '#FF00FF', // Magenta
    'Private Citizens & Property': '#FF0000', // Red
    'Violent Political Party': '#FF69B4', // Hot Pink
    'Religious Figures/Institutions': '#FFD700', // Gold
    'Telecommunication': '#87CEFA', // Light Sky Blue
    'Journalists & Media': '#FFFF00', // Yellow
    'Unknown': '#808080', // Gray
    'Airports & Aircraft': '#800080', // Purple
    'Educational Institution': '#800000', // Maroon
    'Terrorists/Non-State Militia': '#800000', // Maroon
    'NGO': '#ADFF2F', // Green Yellow
    'Food or Water Supply': '#CD5C5C', // Indian Red
    'Other': '#A0522D', // Sienna
    'Abortion Related': '#C71585' // Medium Violet Red
};

var dotsLayerGroup;
var countryLayer;


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
        const oldDiv3 = graphContainer.querySelector('.legend-container');

        const div1 = document.createElement('div');
        div1.className = 'graph1';
        div1.style.width = '100%';
        div1.style.height = '100%';
        div1.style.border = '0px solid #3C3C3C';

        const div2 = document.createElement('div');
        div2.className = 'graph2';
        div2.style.width = '100%';
        div2.style.height = '100%';
        div2.style.border = '0px solid #3C3C3C';

        if (oldDiv1) {
            oldDiv1.remove();
        }

        if (oldDiv2) {
            oldDiv2.remove();
        }

        if (oldDiv3) {
            oldDiv3.remove();
        }

        if (dotsLayerGroup) {
            // Remove the existing orange dots layer group from the map
            mymap.removeLayer(dotsLayerGroup);
        }

        // If a country layer already exists, remove it
        if (countryLayer) {
            mymap.removeLayer(countryLayer);
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

                    const dataUrl = `https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/Aristotelis/data/density_map/density_map_${slider.value}.csv`
                    d3.csv(dataUrl)
                        .then(data => {
                            populateMap(data)
                        })
                        .catch(error => console.error('Error:', error));
                })

    
                // Append the slider and label to the imageContainer
                imageContainer.appendChild(slider);
                imageContainer.appendChild(sliderLabel);
    
                // Append the imageContainer to the graphContainer
                graphContainer.appendChild(imageContainer);
                
                // Create the legend container
                const legendContainer = document.createElement('div');
                legendContainer.classList.add('legend-container');

                // Iterate through the colorMapping object and create legend items
                for (const target in colorMapping) {
                    const color = colorMapping[target];

                    // Create a legend item
                    const legendItem = document.createElement('div');
                    legendItem.classList.add('legend-item');

                    // Create a color circle
                    const colorCircle = document.createElement('div');
                    colorCircle.classList.add('color-circle');
                    colorCircle.style.backgroundColor = color;

                    // Create a label for the target subtype
                    const label = document.createElement('span');
                    label.innerHTML = target;

                    // Add tooltip to the legend item
                    legendItem.setAttribute('title', descriptions[target]);

                    // Append the color circle and label to the legend item
                    legendItem.appendChild(colorCircle);
                    legendItem.appendChild(label);

                    // Append the legend item to the legend container
                    legendContainer.appendChild(legendItem);
                }

                // Append the legend container to the graphContainer
                graphContainer.appendChild(legendContainer);

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

                    div1.innerHTML = `<b>${regionSelect.value}</b>`;
                    graphContainer.appendChild(div1);


                    // const dataUrl = `https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/Aristotelis/data/regions/all/${encodeURIComponent(regionSelect.value) }.csv`
                    const dataUrl = `https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/Aristotelis/data/regions/victims/${encodeURIComponent(regionSelect.value) }.csv`
                    d3.csv(dataUrl)
                        .then(data => {
                            plotScatterPlot(data);
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

        
                    // If a country layer already exists, remove it
                    if (countryLayer) {
                        mymap.removeLayer(countryLayer);
                    }

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

        var margin = {top: 10, right: 10, bottom: 10, left: 100};
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const groupAlias = {
            'Taliban': 'Taliban',
            'Islamic State of Iraq and the Levant (ISIL)': 'ISIS',
            'Boko Haram': 'Boko Haram',
            'Al-Shabaab': 'Al-Shabaab',
            'Shining Path (SL)': 'Shining Path',
            'Liberation Tigers of Tamil Eelam (LTTE)': 'LTTE',
            'Farabundo Marti National Liberation Front (FMLN)': 'FMLN',
            'Nicaraguan Democratic Force (FDN)': 'FDN',
            'Houthi extremists (Ansar Allah)': 'Houthi',
            'Tehrik-i-Taliban Pakistan (TTP)': 'TTP'
        }

        const tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip-bar")
            .style("opacity", 0);

        const svg = d3.select(".graph1");

        const g = svg.append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);
            
        
        const xValue = d => +d.nkill;
        const yValue = d => d.gname;

        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => xValue(d))])
            .range([0, innerWidth]);

        const yScale = d3.scaleBand()
            .domain(data.map(d => groupAlias[yValue(d)]))
            .range([0, innerHeight])
            .padding(0.1);

        g.append('g').call(d3.axisBottom(xScale).tickFormat(d3.format('.2s')))
            .attr('transform', `translate(0, ${innerHeight})`);
        g.append('g').call(d3.axisLeft(yScale));

        g.selectAll('rect').data(data)
            .enter().append('rect')
            .attr('y', d => yScale(groupAlias[yValue(d)]))
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
                tooltip.interrupt();
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

        const groupAlias = {
            'Taliban': 'Taliban',
            'Islamic State of Iraq and the Levant (ISIL)': 'ISIL',
            'Shining Path (SL)': 'Shining Path',
            'Al-Shabaab': 'Al-Shabaab',
            "New People's Army (NPA)": 'NPA',
            'Farabundo Marti National Liberation Front (FMLN)': 'FMLN',
            'Boko Haram': 'Boko Haram',
            'Houthi extremists (Ansar Allah)': 'Houthi',
            'Irish Republican Army (IRA)': 'IRA',
            'Kurdistan Workers\' Party (PKK)': 'PKK'
        };

        const weaponSubtypeAliases = {
            'Unknown Explosive Type': 'Explosive',
            'Unknown Gun Type': 'Gun',
            'Automatic or Semi-Automatic Rifle': 'Rifle',
            'Projectile': 'Projectile',
            'Vehicle': 'Vehicle',
            'Other Explosive Type': 'Explosive (Other)',
            'Handgun': 'Handgun',
            'Grenade': 'Grenade',
            'Arson/Fire': 'Arson',
            'Landmine': 'Landmine'
        };

        const tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip-heatmap")
            .style("opacity", 0);

        var svg = d3.select(".graph2");

        const g = svg.append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        const xValue = d => d.gname;
        const yValue = d => d.weapsubtype1_txt;

        var x = d3.scaleBand()
            .range([0, innerWidth])
            .domain(data.map(d => groupAlias[xValue(d)]))
            .padding(0.01);
        g.append("g")
            .attr("transform", "translate(0," + innerHeight + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-0.8em")
            .attr("dy", "0.15em")
            .attr("transform", "rotate(-65)");

        var y = d3.scaleBand()
            .range([innerHeight, 0])
            .domain(data.map(d => weaponSubtypeAliases[yValue(d)]))
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
            .attr("x", function (d) { return x(groupAlias[d.gname]) })
            .attr("y", function (d) { return y(weaponSubtypeAliases[d.weapsubtype1_txt]) })
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

                tooltip.interrupt();
                tooltip.style("opacity", 0)
                    .duration(500);
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
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
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
                tooltip.interrupt();
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
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
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

                tooltip.interrupt();
                tooltip.style("opacity", 0)
                    .duration(500);
            })
    }

    function plotScatterPlot(data) {    
        const width = 660;
        const height = 600;

        var margin = { top: 10, right: 30, bottom: 30, left: 60 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip-scatterplot")
            .style("opacity", 0)
            .style("display", "flex")
            .style("justify-content", "space-between")
            .style("align-items", "center");

        var svg = d3.select(".graph1");

        const g = svg.append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
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
            .domain([0, 0])
            .range([innerHeight, 0]);
        g.append("g")
            .attr("class", "y-axis")
            .call(d3.axisLeft(y))
            .attr("opacity", 0);

        g.append('g')
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function (d) { return x(+d.year); })
            .attr("cy", function (d) { return y(+d.nkill); })
            .attr("r", 3)
            .style("opacity", 0.5)
            .style("fill", function (d) { return getCountryColors(d.country_txt)[0]; }) // Categorize in some way with color
            .on("mouseover", function (event, d) {
                // Make tooltip visible
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                // Update tooltip content
                tooltip.html(`  <div>
                                    <img src="https://raw.githubusercontent.com/HatScripts/circle-flags/gh-pages/flags/${getCountryAbbr(d.country_txt)}.svg" style="width: 30px; height: 30px; margin-right: 20px">
                                </div>
                                <div>
                                    <p><i>${d.eventid}</i><br><br>
                                    <b>${d.country_txt}</b><br>
                                    Year: ${d3.format("d")(d.year)}<br>
                                    Casualties: ${d3.format("d")(d.nkill)}
                                    </p>
                                </div>`)
                    .style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY - 28}px`)
                    .style("background-color", getCountryColors(d.country_txt)[0])
                    .style("border-color", getCountryColors(d.country_txt)[1])
                    .style("weight", "12px")
                    .style("border-style", "solid");
            })
            .on("mouseout", function (d) {
                // Make tooltip invisible
                tooltip.interrupt();
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

            x.domain([1970, 2020])
            g.select(".x-axis")
                .transition()
                .duration(1000)
                .attr("opacity", 1)
                .call(d3.axisBottom(x).tickFormat(d3.format("d")));

            y.domain([0, 200])  // Cap on the max number of casualties
            g.select(".y-axis")
                .transition()
                .duration(1000)
                .attr("opacity", 1)
                .call(d3.axisLeft(y));

            g.selectAll("circle")
                .transition()
                .delay(function (d, i) { return (i * 3) })
                .duration(200)
                .attr("cx", function (d) { return x(+d.year); })
                .attr("cy", function (d) { return y(+d.nkill); })

    }

    function populateMap(data) {

        // Check if the orange dots layer group already exists
        if (dotsLayerGroup) {
            // Remove the existing orange dots layer group from the map
            mymap.removeLayer(dotsLayerGroup);
        }

        // Create a new layer group to hold the orange dots
        dotsLayerGroup = L.layerGroup().addTo(mymap);

        data.forEach((row) => {
            const latitude = parseFloat(row.latitude);
            const longitude = parseFloat(row.longitude);

            var circleMarker = L.circleMarker([latitude, longitude], {
                fillColor: colorMapping[row.targtype1_txt],
                color: colorMapping[row.targtype1_txt],
                fillOpacity: 0.5,
                stroke: false,
                radius: 5
            }).addTo(dotsLayerGroup);

            var countryFlagSrc = `https://raw.githubusercontent.com/HatScripts/circle-flags/gh-pages/flags/${getCountryAbbr(row.country_txt)}.svg`;
            var content = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <img src="${countryFlagSrc}" style="width: 30px; height: 30px; margin-right: 50px">
                </div>
                <div>
                    <b>${row.targtype1_txt}</b><br>
                    ${row.country_txt}<br>
                    ${row.gname}<br>
                    ${row.summary}
                </div>
            </div>`;


            circleMarker.bindPopup(content);
            circleMarker.on('mouseover', function (e) {
                this.openPopup();
            });                
        });
    }

    function getCountryAbbr(country) {
        // Reference: https://github.com/HatScripts/circle-flags
        switch (country) {
            case "Afghanistan":
                return "af";
            case "Albania":
                return "al";
            case "Algeria":
                return "dz";
            case "Andorra":
                return "ad";
            case "Angola":
                return "ao";
            case "Antigua and Barbuda":
                return "ag";
            case "Argentina":
                return "ar";
            case "Armenia":
                return "am";
            case "Australia":
                return "au";
            case "Austria":
                return "at";
            case "Azerbaijan":
                return "az";
            case "Bahamas":
                return "bs";
            case "Bahrain":
                return "bh";
            case "Bangladesh":
                return "bd";
            case "Barbados":
                return "bb";
            case "Belarus":
                return "by";
            case "Belgium":
                return "be";
            case "Belize":
                return "bz";
            case "Benin":
                return "bj";
            case "Bhutan":
                return "bt";
            case "Bolivia":
                return "bo";
            case "Bosnia-Herzegovina":
                return "ba";
            case "Botswana":
                return "bw";
            case "Brazil":
                return "br";
            case "Brunei":
                return "bn";
            case "Bulgaria":
                return "bg";
            case "Burkina Faso":
                return "bf";
            case "Burundi":
                return "bi";
            case "Cambodia":
                return "kh";
            case "Cameroon":
                return "cm";
            case "Canada":
                return "ca";
            case "Central African Republic":
                return "cf";
            case "Chad":
                return "td";
            case "Chile":
                return "cl";
            case "China":
                return "cn";
            case "Colombia":
                return "co";
            case "Comoros":
                return "km";
            case "Congo":
                return "cg";
            case "Costa Rica":
                return "cr";
            case "Croatia":
                return "hr";
            case "Cuba":
                return "cu";
            case "Cyprus":
                return "cy";
            case "Czech Republic":
                return "cz";
            case "Czechoslovakia":
                return "cz";
            case "Democratic Republic of the Congo":
                return "cd";
            case "Denmark":
                return "dk";
            case "Djibouti":
                return "dj";
            case "Dominica":
                return "dm";
            case "Dominican Republic":
                return "do";
            case "East Germany (GDR)":
                return "de";
            case "East Timor":
                return "tl";
            case "Ecuador":
                return "ec";
            case "Egypt":
                return "eg";
            case "El Salvador":
                return "sv";
            case "Equatorial Guinea":
                return "gq";
            case "Eritrea":
                return "er";
            case "Estonia":
                return "ee";
            case "Ethiopia":
                return "et";
            case "Falkland Islands":
                return "fk";
            case "Fiji":
                return "fj";
            case "Finland":
                return "fi";
            case "France":
                return "fr";
            case "French Guiana":
                return "gf";
            case "French Polynesia":
                return "pf";
            case "Gabon":
                return "ga";
            case "Gambia":
                return "gm";
            case "Georgia":
                return "ge";
            case "Germany":
                return "de";
            case "Ghana":
                return "gh";
            case "Greece":
                return "gr";
            case "Grenada":
                return "gd";
            case "Guadeloupe":
                return "gp";
            case "Guatemala":
                return "gt";
            case "Guinea":
                return "gn";
            case "Guinea-Bissau":
                return "gw";
            case "Guyana":
                return "gy";
            case "Haiti":
                return "ht";
            case "Honduras":
                return "hn";
            case "Hungary":
                return "hu";
            case "Hong Kong":
                return "hk";
            case "Iceland":
                return "is";
            case "India":
                return "in";
            case "Indonesia":
                return "id";
            case "International":
                return "earth";
            case "Iran":
                return "ir";
            case "Iraq":
                return "iq";
            case "Ireland":
                return "ie";
            case "Israel":
                return "il";
            case "Italy":
                return "it";
            case "Ivory Coast":
                return "ci";
            case "Jamaica":
                return "jm";
            case "Japan":
                return "jp";
            case "Jordan":
                return "jo";
            case "Kazakhstan":
                return "kz";
            case "Kenya":
                return "ke";
            case "Kosovo":
                return "xk";
            case "Kuwait":
                return "kw";
            case "Kyrgyzstan":
                return "kg";
            case "Laos":
                return "la";
            case "Latvia":
                return "lv";
            case "Lebanon":
                return "lb";
            case "Lesotho":
                return "ls";
            case "Liberia":
                return "lr";
            case "Libya":
                return "ly";
            case "Lithuania":
                return "lt";
            case "Luxembourg":
                return "lu";
            case "Macau":
                return "mo";
            case "Macedonia":
                return "mk";
            case "Madagascar":
                return "mg";
            case "Malawi":
                return "mw";
            case "Malaysia":
                return "my";
            case "Maldives":
                return "mv";
            case "Mali":
                return "ml";
            case "Malta":
                return "mt";
            case "Martinique":
                return "mq";
            case "Mauritania":
                return "mr";
            case "Mauritius":
                return "mu";
            case "Mexico":
                return "mx";
            case "Moldova":
                return "md";
            case "Montenegro":
                return "me";
            case "Morocco":
                return "ma";
            case "Mozambique":
                return "mz";
            case "Myanmar":
                return "mm";
            case "Namibia":
                return "na";
            case "Nepal":
                return "np";
            case "Netherlands":
                return "nl";
            case "New Caledonia":
                return "nc";
            case "New Hebrides":
                return "vu";
            case "New Zealand":
                return "nz";
            case "Nicaragua":
                return "ni";
            case "Niger":
                return "ne";
            case "Nigeria":
                return "ng";
            case "North Korea":
                return "kp";
            case "North Yemen":
                return "ye";
            case "Norway":
                return "no";
            case "Pakistan":
                return "pk";
            case "Panama":
                return "pa";
            case "Papua New Guinea":
                return "pg";
            case "Paraguay":
                return "py";
            case "People's Republic of the Congo":
                return "cg";
            case "Peru":
                return "pe";
            case "Philippines":
                return "ph";
            case "Poland":
                return "pl";
            case "Portugal":
                return "pt";
            case "Qatar":
                return "qa";
            case "Republic of the Congo":
                return "cd";
            case "Rhodesia":
                return "zw";
            case "Romania":
                return "ro";
            case "Russia":
                return "ru";
            case "Rwanda":
                return "rw";
            case "Saudi Arabia":
                return "sa";
            case "Senegal":
                return "sn";
            case "Serbia":
                return "rs";
            case "Serbia-Montenegro":
                return "xx";
            case "Seychelles":
                return "sc";
            case "Sierra Leone":
                return "sl";
            case "Singapore":
                return "sg";
            case "Slovak Republic":
                return "sk";
            case "Slovenia":
                return "si";
            case "Solomon Islands":
                return "sb";
            case "Somalia":
                return "so";
            case "South Africa":
                return "za";
            case "South Korea":
                return "kr";
            case "South Sudan":
                return "ss";
            case "South Yemen":
                return "ye";
            case "Soviet Union":
                return "xx";
                // return "su";   // deprecated
            case "Spain":
                return "es";
            case "Sri Lanka":
                return "lk";
            case "St. Kitts and Nevis":
                return "kn";
            case "St. Lucia":
                return "lc";
            case "Sudan":
                return "sd";
            case "Suriname":
                return "sr";
            case "Swaziland":
                return "sz";
            case "Sweden":
                return "se";
            case "Switzerland":
                return "ch";
            case "Syria":
                return "sy";
            case "Taiwan":
                return "tw";
            case "Tajikistan":
                return "tj";
            case "Tanzania":
                return "tz";
            case "Thailand":
                return "th";
            case "Togo":
                return "tg";
            case "Trinidad and Tobago":
                return "tt";
            case "Tunisia":
                return "tn";
            case "Turkey":
                return "tr";
            case "Turkmenistan":
                return "tm";
            case "Uganda":
                return "ug";
            case "Ukraine":
                return "ua";
            case "United Arab Emirates":
                return "ae";
            case "United Kingdom":
                return "gb";
            case "United States":
                return "us";
            case "Uruguay":
                return "uy";
            case "Uzbekistan":
                return "uz";
            case "Vanuatu":
                return "vu";
            case "Venezuela":
                return "ve";
            case "Vietnam":
                return "vn";
            case "Wallis and Futuna":
                return "wf";
            case "West Bank and Gaza Strip":
                return "ps";
            case "West Germany (FRG)":
                return "de";
            case "Western Sahara":
                return "eh";
            case "Yemen":
                return "ye";
            case "Yugoslavia":
                return "xx";
            case "Zaire":
                return "cd";
            case "Zambia":
                return "zm";
            case "Zimbabwe":
                return "zw";
            default:
                return "xx";


        }
    }

    function getCountryColors(country) {
        switch (country) {
            case "Afghanistan":
                return ["#009900", "#ffffff"];
            case "Albania":
                return ["#e41a1c", "#000000"];
            case "Algeria":
                return ["#008000", "#ffffff"];
            case "Andorra":
                return ["#00308f", "#fe0000"];
            case "Angola":
                return ["#ff0000", "#000000"];
            case "Antigua and Barbuda":
                return ["#e03a3e", "#fcd116"];
            case "Argentina":
                return ["#74acdf", "#ffffff"];
            case "Armenia":
                return ["#d90012", "#0033a0"];
            case "Australia":
                return ["#00247d", "#ffcc00"];
            case "Austria":
                return ["#ed2939", "#ffffff"];
            case "Azerbaijan":
                return ["#3f9c35", "#ed2939"];
            case "Bahamas":
                return ["#002868", "#ffc726"];
            case "Bahrain":
                return ["#ce1126", "#ffffff"];
            case "Bangladesh":
                return ["#006a4e", "#f42a41"];
            case "Barbados":
                return ["#00267f", "#ffd700"];
            case "Belarus":
                return ["#c8313e", "#fedf00"];
            case "Belgium":
                return ["#000000", "#ed2939"];
            case "Belize":
                return ["#ce1126", "#003f87"];
            case "Benin":
                return ["#008751", "#ffc726"];
            case "Bhutan":
                return ["#e23d34", "#ffe982"];
            case "Bolivia":
                return ["#d52b1e", "#ffd700"];
            case "Bosnia-Herzegovina":
                return ["#005cbf", "#ffe200"];
            case "Botswana":
                return ["#75aadb", "#000000"];
            case "Brazil":
                return ["#009b3a", "#ffd700"];
            case "Brunei":
                return ["#ff0000", "#ffc726"];
            case "Bulgaria":
                return ["#d62612", "#ffffff"];
            case "Burkina Faso":
                return ["#009e49", "#ce1126"];
            case "Burundi":
                return ["#006a4e", "#ffc726"];
            case "Cambodia":
                return ["#032ea1", "#e4002b"];
            case "Cameroon":
                return ["#fcd116", "#007a5e"];
            case "Canada":
                return ["#ff0000", "#ffffff"];
            case "Central African Republic":
                return ["#4189dd", "#fcd116"];
            case "Chad":
                return ["#002664", "#cd2a3e"];
            case "Chile":
                return ["#d52b1e", "#ffffff"];
            case "China":
                return ["#de2910", "#ffde00"];
            case "Colombia":
                return ["#fdbb30", "#003893"];
            case "Comoros":
                return ["#007a5e", "#ffffff"];
            case "Costa Rica":
                return ["#002b7f", "#ce1126"];
            case "Croatia":
                return ["#dc143c", "#ffffff"];
            case "Cuba":
                return ["#002a8f", "#ffffff"];
            case "Cyprus":
                return ["#d91023", "#ffffff"];
            case "Czech Republic":
                return ["#d7141a", "#ffffff"];
            case "Czechoslovakia":
                return ["#d7141a", "#ffffff"];
            case "Democratic Republic of the Congo":
                return ["#008000", "#000000"];
            case "Denmark":
                return ["#c60c30", "#ffffff"];
            case "Djibouti":
                return ["#12a4d9", "#12a4d9"];
            case "Dominica":
                return ["#007a5e", "#ffd700"];
            case "Dominican Republic":
                return ["#002d62", "#ce1126"];
            case "East Germany (GDR)":
                return ["#ffce00", "#ffce00"];
            case "East Timor":
                return ["#ff0000", "#ffd700"];
            case "Ecuador":
                return ["#ed1c24", "#ffd700"];
            case "Egypt":
                return ["#000000", "#ffffff"];
            case "El Salvador":
                return ["#003b71", "#ffffff"];
            case "Equatorial Guinea":
                return ["#3f922d", "#ce1126"];
            case "Eritrea":
                return ["#009543", "#d21034"];
            case "Estonia":
                return ["#0072ce", "#000000"];
            case "Ethiopia":
                return ["#006633", "#ffc726"];
            case "Falkland Islands":
                return ["#00247d", "#d21034"];
            case "Fiji":
                return ["#002868", "#cf142b"];
            case "Finland":
                return ["#003580", "#ffffff"];
            case "France":
                return ["#002395", "#ed2939"];
            case "French Guiana":
                return ["#e51937", "#d7d7d7"];
            case "French Polynesia":
                return ["#002f6c", "#d21034"];
            case "Gabon":
                return ["#009e60", "#fcd116"];
            case "Gambia":
                return ["#cf142b", "#3f922d"];
            case "Georgia":
                return ["#ce1126", "#ffd700"];
            case "Germany":
                return ["#000000", "#dd0000"];
            case "Ghana":
                return ["#006b3f", "#ce1126"];
            case "Greece":
                return ["#0d5eaf", "#ffffff"];
            case "Grenada":
                return ["#e41a1c", "#fcd116"];
            case "Guadeloupe":
                return ["#007f3e", "#ffcc00"];
            case "Guatemala":
                return ["#4997d0", "#ffffff"];
            case "Guinea":
                return ["#ce1126", "#fcd116"];
            case "Guinea-Bissau":
                return ["#de2910", "#ffd700"];
            case "Guyana":
                return ["#009e49", "#ffd700"];
            case "Haiti":
                return ["#00209f", "#d21034"];
            case "Honduras":
                return ["#0073cf", "#ffffff"];
            case "Hong Kong":
                return ["#de2910", "#ffffff"];
            case "Hungary":
                return ["#436f4d", "#ce1126"];
            case "Iceland":
                return ["#003897", "#d72828"];
            case "India":
                return ["#ff9933", "#128807"];
            case "Indonesia":
                return ["#ce1126", "#ffffff"];
            case "International":
                return ["#000000", "#000000"];
            case "Iran":
                return ["#da0000", "#ffffff"];
            case "Iraq":
                return ["#007a3d", "#ffffff"];
            case "Ireland":
                return ["#169b62", "#ffffff"];
            case "Israel":
                return ["#003399", "#ffffff"];
            case "Italy":
                return ["#009246", "#ce1126"];
            case "Ivory Coast":
                return ["#f77f00", "#ffffff"];
            case "Jamaica":
                return ["#000000", "#ffcc00"];
            case "Japan":
                return ["#bc002d", "#ffffff"];
            case "Jordan":
                return ["#007a3d", "#ffffff"];
            case "Kazakhstan":
                return ["#1c3fbf", "#ffd700"];
            case "Kenya":
                return ["#006600", "#ffffff"];
            case "Kosovo":
                return ["#002d62", "#ffc726"];
            case "Kuwait":
                return ["#007a3d", "#ce1126"];
            case "Kyrgyzstan":
                return ["#ce1126", "#ffd700"];
            case "Laos":
                return ["#ce1126", "#003399"];
            case "Latvia":
                return ["#9e3039", "#ffffff"];
            case "Lebanon":
                return ["#ed1c24", "#ffffff"];
            case "Lesotho":
                return ["#009543", "#ce1126"];
            case "Liberia":
                return ["#cf142b", "#000000"];
            case "Libya":
                return ["#000000", "#ffffff"];
            case "Lithuania":
                return ["#006a4e", "#ffb612"];
            case "Luxembourg":
                return ["#00a2db", "#ed2939"];
            case "Macau":
                return ["#fcd116", "#ffffff"];
            case "Macedonia":
                return ["#d20000", "#ffd700"];
            case "Madagascar":
                return ["#007a3d", "#ffffff"];
            case "Malawi":
                return ["#ce1126", "#000000"];
            case "Malaysia":
                return ["#cc0000", "#ffffff"];
            case "Maldives":
                return ["#d21034", "#002b7f"];
            case "Mali":
                return ["#ce1126", "#fcd116"];
            case "Malta":
                return ["#cf142b", "#ffffff"];
            case "Martinique":
                return ["#00843d", "#ffcc00"];
            case "Mauritania":
                return ["#006600", "#ffce00"];
            case "Mauritius":
                return ["#000000", "#ffcd00"];
            case "Mexico":
                return ["#006847", "#ce1126"];
            case "Moldova":
                return ["#007f3e", "#cc092f"];
            case "Montenegro":
                return ["#dc143c", "#003366"];
            case "Morocco":
                return ["#c1272d", "#006233"];
            case "Mozambique":
                return ["#e13a3e", "#00a877"];
            case "Myanmar":
                return ["#f31a1a", "#f9e814"];
            case "Namibia":
                return ["#00a550", "#fcdc00"];
            case "Nepal":
                return ["#de2910", "#003893"];
            case "Netherlands":
                return ["#ae1c28", "#ffffff"];
            case "New Caledonia":
                return ["#002ba0", "#d21034"];
            case "New Hebrides":
                return ["#007a3d", "#ffce00"];
            case "New Zealand":
                return ["#00247d", "#ffffff"];
            case "Nicaragua":
                return ["#002868", "#ffffff"];
            case "Niger":
                return ["#008751", "#ffce00"];
            case "Nigeria":
                return ["#008751", "#ffffff"];
            case "North Korea":
                return ["#024fa2", "#ce1126"];
            case "North Yemen":
                return ["#000000", "#000000"];
            case "Norway":
                return ["#ef2b2d", "#ffffff"];
            case "Pakistan":
                return ["#006600", "#ffffff"];
            case "Panama":
                return ["#005293", "#d90012"];
            case "Papua New Guinea":
                return ["#000000", "#ce1126"];
            case "Paraguay":
                return ["#0038a8", "#ffffff"];
            case "People's Republic of the Congo":
                return ["#009e49", "#ffd700"];
            case "Peru":
                return ["#d91023", "#ffffff"];
            case "Philippines":
                return ["#0038a8", "#ce1126"];
            case "Poland":
                return ["#dc143c", "#ffffff"];
            case "Portugal":
                return ["#006600", "#ff0000"];
            case "Qatar":
                return ["#8e8e8e", "#8e8e8e"];
            case "Republic of the Congo":
                return ["#009e49", "#ffd700"];
            case "Rhodesia":
                return ["#11a61d", "#e41a1c"];
            case "Romania":
                return ["#002b7f", "#ffc726"];
            case "Russia":
                return ["#cc092f", "#ffd700"];
            case "Rwanda":
                return ["#75b12b", "#ce1126"];
            case "Saudi Arabia":
                return ["#006b3f", "#ffffff"];
            case "Senegal":
                return ["#008751", "#ffd700"];
            case "Serbia":
                return ["#dc143c", "#ffffff"];
            case "Serbia-Montenegro":
                return ["#002ba0", "#ed1c24"];
            case "Seychelles":
                return ["#003f87", "#ffffff"];
            case "Sierra Leone":
                return ["#1eb53a", "#0072c6"];
            case "Singapore":
                return ["#ed2939", "#ffffff"];
            case "Slovak Republic":
                return ["#ee1c25", "#0033a0"];
            case "Slovenia":
                return ["#ed2939", "#005da4"];
            case "Solomon Islands":
                return ["#0038a8", "#ffd700"];
            case "Somalia":
                return ["#4189dd", "#ffffff"];
            case "South Africa":
                return ["#007a4d", "#ffc726"];
            case "South Korea":
                return ["#003478", "#d21034"];
            case "South Sudan":
                return ["#3e896d", "#ce1126"];
            case "South Yemen":
                return ["#000000", "#000000"];
            case "Soviet Union":
                return ["#cc092f", "#ffd700"];
            case "Spain":
                return ["#c60b1e", "#ffc400"];
            case "Sri Lanka":
                return ["#007a3d", "#ffce00"];
            case "St. Kitts and Nevis":
                return ["#009e49", "#ce1126"];
            case "St. Lucia":
                return ["#007a3d", "#ffcd00"];
            case "Sudan":
                return ["#d21034", "#ffffff"];
            case "Suriname":
                return ["#007a5e", "#ffde00"];
            case "Swaziland":
                return ["#002868", "#ffc726"];
            case "Sweden":
                return ["#005cbf", "#ffce00"];
            case "Switzerland":
                return ["#ed0000", "#ffffff"];
            case "Syria":
                return ["#000000", "#ffffff"];
            case "Taiwan":
                return ["#ff0000", "#003399"];
            case "Tajikistan":
                return ["#006600", "#ffffff"];
            case "Tanzania":
                return ["#1eb53a", "#0072c6"];
            case "Thailand":
                return ["#ed2939", "#ffffff"];
            case "Togo":
                return ["#006a4e", "#ffc726"];
            case "Trinidad and Tobago":
                return ["#ce1126", "#ffffff"];
            case "Tunisia":
                return ["#ce1126", "#ffffff"];
            case "Turkey":
                return ["#e30a17", "#ffffff"];
            case "Turkmenistan":
                return ["#1eb53a", "#ffffff"];
            case "Uganda":
                return ["#000000", "#ffc726"];
            case "Ukraine":
                return ["#005bbb", "#ffd700"];
            case "United Arab Emirates":
                return ["#00732f", "#ffffff"];
            case "United Kingdom":
                return ["#00247d", "#cf142b"];
            case "United States":
                return ["#b22234", "#ffffff"];
            case "Uruguay":
                return ["#0038a8", "#ffd700"];
            case "Uzbekistan":
                return ["#1eb53a", "#ffd700"];
            case "Vanuatu":
                return ["#006a4e", "#ffce00"];
            case "Vatican City":
                return ["#ffd700", "#ffffff"];
            case "Venezuela":
                return ["#cf142b", "#002b7f"];
            case "Vietnam":
                return ["#da251d", "#ffd700"];
            case "Wallis and Futuna":
                return ["#002ba0", "#d21034"];
            case "West Bank and Gaza Strip":
                return ["#006847", "#ce1126"];
            case "West Germany (FRG)":
                return ["#000000", "#000000"];
            case "Western Sahara":
                return ["#d21034", "#ffffff"];
            case "Yemen":
                return ["#ce1126", "#ffffff"];
            case "Yugoslavia":
                return ["#d21034", "#005da4"];
            case "Zaire":
                return ["#009543", "#ffd700"];
            case "Zambia":
                return ["#000000", "#00a862"];
            case "Zimbabwe":
                return ["#007a5e", "#ffc726"];
            default:
                return ["#000000", "#ffffff"];
        }
    }
    function getGeoJsonCountryName(country)
    {
        switch (country) {
            case "Bosnia-Herzegovina":
                return "Bosnia and Herzegovina";
            case "Czech Republic":
                return "cz";
            case "Czechoslovakia":
                return "cz";
            case "Democratic Republic of the Congo":
                return "cd";
            case "Denmark":
                return "dk";
            case "Djibouti":
                return "dj";
            case "Dominica":
                return "dm";
            case "Dominican Republic":
                return "do";
            case "East Germany (GDR)":
                return "de";
            case "East Timor":
                return "tl";
            case "Ecuador":
                return "ec";
            case "Egypt":
                return "eg";
            case "El Salvador":
                return "sv";
            case "Equatorial Guinea":
                return "gq";
            case "Eritrea":
                return "er";
            case "Estonia":
                return "ee";
            case "Ethiopia":
                return "et";
            case "Falkland Islands":
                return "fk";
            case "Fiji":
                return "fj";
            case "Finland":
                return "fi";
            case "France":
                return "fr";
            case "French Guiana":
                return "gf";
            case "French Polynesia":
                return "pf";
            case "Gabon":
                return "ga";
            case "Gambia":
                return "gm";
            case "Georgia":
                return "ge";
            case "Germany":
                return "de";
            case "Ghana":
                return "gh";
            case "Greece":
                return "gr";
            case "Grenada":
                return "gd";
            case "Guadeloupe":
                return "gp";
            case "Guatemala":
                return "gt";
            case "Guinea":
                return "gn";
            case "Guinea-Bissau":
                return "gw";
            case "Guyana":
                return "gy";
            case "Haiti":
                return "ht";
            case "Honduras":
                return "hn";
            case "Hungary":
                return "hu";
            case "Hong Kong":
                return "hk";
            case "Iceland":
                return "is";
            case "India":
                return "in";
            case "Indonesia":
                return "id";
            case "International":
                return "earth";
            case "Iran":
                return "ir";
            case "Iraq":
                return "iq";
            case "Ireland":
                return "ie";
            case "Israel":
                return "il";
            case "Italy":
                return "it";
            case "Ivory Coast":
                return "ci";
            case "Jamaica":
                return "jm";
            case "Japan":
                return "jp";
            case "Jordan":
                return "jo";
            case "Kazakhstan":
                return "kz";
            case "Kenya":
                return "ke";
            case "Kosovo":
                return "xk";
            case "Kuwait":
                return "kw";
            case "Kyrgyzstan":
                return "kg";
            case "Laos":
                return "la";
            case "Latvia":
                return "lv";
            case "Lebanon":
                return "lb";
            case "Lesotho":
                return "ls";
            case "Liberia":
                return "lr";
            case "Libya":
                return "ly";
            case "Lithuania":
                return "lt";
            case "Luxembourg":
                return "lu";
            case "Macau":
                return "mo";
            case "Macedonia":
                return "mk";
            case "Madagascar":
                return "mg";
            case "Malawi":
                return "mw";
            case "Malaysia":
                return "my";
            case "Maldives":
                return "mv";
            case "Mali":
                return "ml";
            case "Malta":
                return "mt";
            case "Martinique":
                return "mq";
            case "Mauritania":
                return "mr";
            case "Mauritius":
                return "mu";
            case "Mexico":
                return "mx";
            case "Moldova":
                return "md";
            case "Montenegro":
                return "me";
            case "Morocco":
                return "ma";
            case "Mozambique":
                return "mz";
            case "Myanmar":
                return "mm";
            case "Namibia":
                return "na";
            case "Nepal":
                return "np";
            case "Netherlands":
                return "nl";
            case "New Caledonia":
                return "nc";
            case "New Hebrides":
                return "vu";
            case "New Zealand":
                return "nz";
            case "Nicaragua":
                return "ni";
            case "Niger":
                return "ne";
            case "Nigeria":
                return "ng";
            case "North Korea":
                return "kp";
            case "North Yemen":
                return "ye";
            case "Norway":
                return "no";
            case "Pakistan":
                return "pk";
            case "Panama":
                return "pa";
            case "Papua New Guinea":
                return "pg";
            case "Paraguay":
                return "py";
            case "People's Republic of the Congo":
                return "cg";
            case "Peru":
                return "pe";
            case "Philippines":
                return "ph";
            case "Poland":
                return "pl";
            case "Portugal":
                return "pt";
            case "Qatar":
                return "qa";
            case "Republic of the Congo":
                return "cd";
            case "Rhodesia":
                return "zw";
            case "Romania":
                return "ro";
            case "Russia":
                return "ru";
            case "Rwanda":
                return "rw";
            case "Saudi Arabia":
                return "sa";
            case "Senegal":
                return "sn";
            case "Serbia":
                return "rs";
            case "Serbia-Montenegro":
                return "xx";
            case "Seychelles":
                return "sc";
            case "Sierra Leone":
                return "sl";
            case "Singapore":
                return "sg";
            case "Slovak Republic":
                return "sk";
            case "Slovenia":
                return "si";
            case "Solomon Islands":
                return "sb";
            case "Somalia":
                return "so";
            case "South Africa":
                return "za";
            case "South Korea":
                return "kr";
            case "South Sudan":
                return "ss";
            case "South Yemen":
                return "ye";
            case "Soviet Union":
                return "xx";
            // return "su";   // deprecated
            case "Spain":
                return "es";
            case "Sri Lanka":
                return "lk";
            case "St. Kitts and Nevis":
                return "kn";
            case "St. Lucia":
                return "lc";
            case "Sudan":
                return "sd";
            case "Suriname":
                return "sr";
            case "Swaziland":
                return "sz";
            case "Sweden":
                return "se";
            case "Switzerland":
                return "ch";
            case "Syria":
                return "sy";
            case "Taiwan":
                return "tw";
            case "Tajikistan":
                return "tj";
            case "Tanzania":
                return "tz";
            case "Thailand":
                return "th";
            case "Togo":
                return "tg";
            case "Trinidad and Tobago":
                return "tt";
            case "Tunisia":
                return "tn";
            case "Turkey":
                return "tr";
            case "Turkmenistan":
                return "tm";
            case "Uganda":
                return "ug";
            case "Ukraine":
                return "ua";
            case "United Arab Emirates":
                return "ae";
            case "United Kingdom":
                return "gb";
            case "United States":
                return "us";
            case "Uruguay":
                return "uy";
            case "Uzbekistan":
                return "uz";
            case "Vanuatu":
                return "vu";
            case "Venezuela":
                return "ve";
            case "Vietnam":
                return "vn";
            case "Wallis and Futuna":
                return "wf";
            case "West Bank and Gaza Strip":
                return "ps";
            case "West Germany (FRG)":
                return "de";
            case "Western Sahara":
                return "eh";
            case "Yemen":
                return "ye";
            case "Yugoslavia":
                return "xx";
            case "Zaire":
                return "cd";
            case "Zambia":
                return "zm";
            case "Zimbabwe":
                return "zw";
            default:
                return country;


        }
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

    fetch('./data/countries.geojson')
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
        // fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
        fetch('./data/countries.geojson')
        .then(response => response.json())
        .then(data => {
            console.log(data)
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
          countryLayer = L.geoJson(countryFeature, {
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

      var orangeDotsLayerGroup;
    
      function addOrangeDots(data) {
        // Check if the orange dots layer group already exists
        if (orangeDotsLayerGroup) {
          // Remove the existing orange dots layer group from the map
          mymap.removeLayer(orangeDotsLayerGroup);
        }
      
        // Create a new layer group to hold the orange dots
        orangeDotsLayerGroup = L.layerGroup().addTo(mymap);
      
        data.forEach((row) => {
          const latitude = parseFloat(row.latitude);
          const longitude = parseFloat(row.longitude);
      
          if (!isNaN(latitude) && !isNaN(longitude)) {
            L.circleMarker([latitude, longitude], {
              fillColor: 'orange',
              color: 'orange',
              radius: 5
            }).addTo(orangeDotsLayerGroup);
          }
        });
      }
      
      

});

