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

const colorMapping = {
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

const regionCountries = {
    'Central America & Caribbean': ["Dominican Republic", "Guatemala", "Nicaragua", "Costa Rica", "Panama", "El Salvador", "Haiti", "Honduras", "Jamaica", "Bahamas", "Barbados", "Trinidad and Tobago", "Grenada", "Belize", "Guadeloupe", "Martinique", "Dominica", "Cuba", "Antigua and Barbuda", "St. Kitts and Nevis", "St. Lucia"],
    'North America': ["Mexico", "United States", "Canada"],
    'Southeast Asia': ["Philippines", "Cambodia", "Brunei", "Thailand", "Myanmar", "Malaysia", "Singapore", "Indonesia", "Laos", "Vietnam", "East Timor"],
    'Western Europe': ["Greece", "Italy", "Switzerland", "Spain", "Ireland", "United Kingdom", "Netherlands", "Belgium", "Sweden", "Austria", "France", "Portugal", "Cyprus", "Andorra", "Malta", "Denmark", "Norway", "Vatican City", "Luxembourg", "Iceland", "Finland", "Germany"],
    'East Asia': ["Japan", "Taiwan", "South Korea", "Hong Kong", "China", "North Korea", "Macau"],
    'South America': ["Uruguay", "Venezuela", "Brazil", "Argentina", "Paraguay", "Colombia", "Bolivia", "Peru", "Chile", "Ecuador", "Guyana", "Suriname", "French Guiana", "Falkland Islands"],
    'Eastern Europe': ["East Germany (GDR)", "Poland", "Albania", "Bulgaria", "Romania", "Hungary", "Croatia", "Lithuania", "Ukraine", "Moldova", "Russia", "Bosnia-Herzegovina", "Latvia", "Estonia", "Slovak Republic", "Macedonia", "Belarus", "Czech Republic", "Slovenia", "Kosovo", "Montenegro", "Serbia"],
    'Sub-Saharan Africa': ["Ethiopia", "Zambia", "Sudan", "Botswana", "Chad", "South Africa", "Kenya", "Somalia", "Tanzania", "Namibia", "Nigeria", "Angola", "Mauritania", "Djibouti", "Mozambique", "Uganda", "Lesotho", "Gabon", "Senegal", "Zimbabwe", "Guinea", "Central African Republic", "Seychelles", "Swaziland", "Burkina Faso", "Niger", "Togo", "Ghana", "Liberia", "Republic of the Congo", "Mali", "Rwanda", "Sierra Leone", "Cameroon", "Madagascar", "Burundi", "Ivory Coast", "Equatorial Guinea", "Malawi", "Comoros", "Benin", "Gambia", "Eritrea", "Democratic Republic of the Congo", "Guinea-Bissau", "South Sudan"],
    'Middle East & North Africa': ["Jordan", "Egypt", "Lebanon", "Turkey", "Iran", "Israel", "Kuwait", "West Bank and Gaza Strip", "Algeria", "Morocco", "Syria", "United Arab Emirates", "Iraq", "Saudi Arabia", "Western Sahara", "Tunisia", "Libya", "Bahrain", "Qatar", "Yemen", "International"],
    'Australasia & Oceania': ["Australia", "New Zealand", "New Hebrides", "New Caledonia", "Fiji", "Papua New Guinea", "Wallis and Futuna", "French Polynesia", "Vanuatu", "Solomon Islands"],
    'South Asia': ["Pakistan", "India", "Afghanistan", "Sri Lanka", "Bangladesh", "Nepal", "Maldives", "Mauritius", "Bhutan"],
    'Central Asia': ["Georgia", "Azerbaijan", "Armenia", "Kazakhstan", "Tajikistan", "Uzbekistan", "Kyrgyzstan", "Turkmenistan"]
};

const countryNames = ['World', 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia-Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Czechoslovakia', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Germany (GDR)', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guadeloupe', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'International', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Martinique', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nepal', 'Netherlands', 'New Caledonia', 'New Hebrides', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Yemen', 'Norway', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', "People's Republic of the Congo", 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Republic of the Congo', 'Rhodesia', 'Romania', 'Russia', 'Rwanda', 'Saudi Arabia', 'Senegal', 'Serbia', 'Serbia-Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovak Republic', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'South Yemen', 'Soviet Union', 'Spain', 'Sri Lanka', 'St. Kitts and Nevis', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Wallis and Futuna', 'West Bank and Gaza Strip', 'West Germany (FRG)', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zaire', 'Zambia', 'Zimbabwe'];

const regionNames = ['Australasia & Oceania', 'Central America & Caribbean', 'Central Asia', 'East Asia', 'Eastern Europe', 'Middle East & North Africa', 'North America', 'South America', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'Western Europe']


var dotsLayerGroup;
// var countryLayer;
var selectedCountryLayers = [];

var forceSlider = false;
var forceSliderValue = "2000";


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
    }

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    function updateGraph(buttonNumber) {

        const textContainer = document.querySelector(".text-container");
        const graphContainer = document.querySelector(".graph-container");
        const mapContainer = document.getElementById('map');
        const mapBox = document.querySelector(".map leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom");
        
        const oldDiv1 = graphContainer.querySelector('.graph1');
        const oldDiv2 = graphContainer.querySelector('.graph2');
        const oldDiv3 = graphContainer.querySelector('.legend-container');

        const oldDiv1_txt = graphContainer.querySelector('.graph1_txt');
        const oldDiv2_txt = graphContainer.querySelector('.graph2_txt');
        const oldDivx_txt = graphContainer.querySelector('.extra_txt');

        var div1 = document.createElement('div');
        div1.className = 'graph1';
        div1.style.width = '100%';
        div1.style.height = '100%';

        var div1_txt = document.createElement('div');
        div1_txt.className = 'graph1_txt';
        div1_txt.style.width = '100%';
        div1_txt.style.height = '100%';

        var div2 = document.createElement('div');
        div2.className = 'graph2';
        div2.style.width = '100%';
        div2.style.height = '100%';
        div2.style.border = '0px solid #3C3C3C';

        var div2_txt = document.createElement('div');
        div2_txt.className = 'graph2_txt';
        div2_txt.style.width = '100%';
        div2_txt.style.height = '100%';

        var extra_txt = document.createElement('div');
        extra_txt.className = 'extra_txt';
        extra_txt.style.width = '100%';
        extra_txt.style.height = '100%';

        if (oldDiv1) {
            oldDiv1.remove();
        }

        if (oldDiv2) {
            oldDiv2.remove();
        }

        if (oldDiv3) {
            oldDiv3.remove();
        }

        if (oldDiv1_txt) {
            oldDiv1_txt.remove();
        }

        if (oldDiv2_txt) {
            oldDiv2_txt.remove();
        }

        if (oldDivx_txt) {
            oldDivx_txt.remove();
        }

        if (dotsLayerGroup) {
            // Remove the existing orange dots layer group from the map
            mymap.removeLayer(dotsLayerGroup);
        }

        // // If a country layer already exists, remove it
        // if (countryLayer) {
        //     mymap.removeLayer(countryLayer);
        // }
        deselectCountries();

        switch (buttonNumber) {
            case 1:
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
                textContainer.innerHTML = ` <h3>Group Profiles: Unveiling Patterns of Deadly Forces</h3>
                                            <p>
                                                This section explores the activities of the ten deadliest terrorist groups, as determined by the number of casualties they have caused. It provides an overview of the methods employed by these groups, enabling an insight into their modus operandi.
                                            </p>`;
                div1_txt.innerHTML = `  <p>
                                            The bar chart presents a clear view of the groups in descending order of the casualties they have caused. By hovering over a bar, detailed information about a group and its impact in terms of fatalities can be accessed. 
                                        </p>`;
                div2_txt.innerHTML = `  <p>
                                            Accompanying the bar chart is a heatmap that shows the usage frequency of different attack methods by these groups. Each cell in the heatmap represents the count of a specific method's usage by a particular group, with color intensity indicating the frequency. This visualization helps identify any preferred or recurrent methods of these groups.
                                        </p>`;
                extra_txt.innerHTML = ` <p style="font-size:90%; padding-left:10%; padding-right:10%; padding-top:10px; padding-bottom:10px; color:dimgrey">
                                            <em>Note: The groups are displayed as per their name at the time of the attack. No consideration has been given to merging of groups or any changes in their names. This could mean that different names referring to the same group in different times or contexts are treated as separate entities.<\em>
                                        </p>
                                        <p>
                                            These two visualizations together offer a comprehensive view into the operations of the most perilous terrorist groups. The data should be interpreted with care, remembering that these figures represent tragic losses and the considerable impact of these groups' activities globally.
                                        </p>`
                graphContainer.appendChild(div1);
                graphContainer.appendChild(div1_txt);
                graphContainer.appendChild(div2);
                graphContainer.appendChild(div2_txt);
                graphContainer.appendChild(extra_txt);

                d3.csv("https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/master/data/miscellaneous/fatalities_per_group.csv")
                  .then(data => {
                      var processedData = data.sort((a, b) => b.nkill - a.nkill).slice(0, 10);
                      plotData(processedData);
                  })
                  .catch(error => console.error('Error:', error))

              
              // Fetch and process heatmap_data_pivot.csv
                d3.csv("https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/master/data/heatmap/heatmap_data.csv")
                  .then(data => {
                      plotHeatmap(data);
                  })
                  .catch(error => console.error('Error:', error));
                
                  break;
            case 2:
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
                textContainer.innerHTML = ` <h3>Attack Hotspots: Exploring Spatial Trends in Target Selection</h3>
                                            <p>
                                                The "Attack Hotspots" section allows you to delve into the spatial patterns of target selection in global terrorism incidents from 1970 to 2020. By using the slider, you can choose a specific year and observe the distribution of attacks across the world.
                                            </p>`;
                div1_txt.innerHTML = `  <p>
                                            The interactive map allows you to zoom in, pan, and explore different regions. Attack locations are represented by circles, with each circle representing a specific incident. The size of the circles remains constant, ensuring a consistent visual representation.
                                        </p>
                                        <p>
                                            While the attack locations are not color-coded, you can hover over the legend to gain insights into the selection of colors. The legend provides information on similar target types that share similar colors, offering a way to identify patterns based on target similarities.
                                        </p>
                                        <p>
                                            To access more details about a specific incident, simply click on a circle on the map. This will provide information such as the target type, country, the responsible group for the attack, and a summary of the incident if available. This additional context helps paint a more comprehensive picture of the attack landscape.
                                        </p>`;
                extra_txt.innerHTML = ` <p>
                                            Keep in mind that the "Attack Hotspots" section provides a general overview of attack density across the entire period of 1970 to 2020. By exploring this visualization, you can gain insights into how target selection varies geographically and discover any spatial trends that emerge.
                                        </p>`;
                // Create a slider
                const slider = document.createElement('input');
                slider.type = 'range';
                slider.min = '1970';
                slider.max = '2020';
                if (forceSlider) {
                    slider.value = forceSliderValue;
                    forceSlider = false;
                } else {
                    slider.value = '2000';
                }
                slider.classList.add('slider');
    
                // Create a label to display the slider value
                const sliderLabel = document.createElement('span');
                sliderLabel.innerHTML = `Year: ${slider.value}`;
                sliderLabel.classList.add('slider-label');
    
                //--------------------------------------------------------------------------------
                // Wait for the end of the interaction with the slider
                // // Add an event listener to update the label when the slider value changes
                // slider.addEventListener('input', () => {
                //     sliderLabel.innerHTML = `Year: ${slider.value}`;

                //     const dataUrl = `https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/Aristotelis/data/density_map/density_map_${slider.value}.csv`
                //     d3.csv(dataUrl)
                //         .then(data => {
                //             populateMap(data)
                //         })
                //         .catch(error => console.error('Error:', error));
                // })

                //--------------------------------------------------------------------------------
                // No wait for the end of the interaction with the slider
                // // Update label when slider value changes
                // slider.addEventListener('input', () => {
                //     sliderLabel.innerHTML = `Year: ${slider.value}`;
                // });

                // // Load new data when user has finished interacting with slider
                // slider.addEventListener('change', () => {
                //     const dataUrl = `https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/Aristotelis/data/density_map/density_map_${slider.value}.csv`
                //     d3.csv(dataUrl)
                //         .then(data => {
                //             populateMap(data)
                //         })
                //         .catch(error => console.error('Error:', error));
                // });

                //-------------------------------------------------------------------------------- 
                // On each change of the slider, wait for 100ms before loading the new data
                let timeout;

                slider.addEventListener('input', () => {
                    sliderLabel.innerHTML = `Year: ${slider.value}`;

                    // Clear the previous timeout if it exists
                    if (timeout) {
                        clearTimeout(timeout);
                    }

                    // Set a new timeout
                    timeout = setTimeout(() => {
                        const dataUrl = `https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/Aristotelis/data/density_map/density_map_${slider.value}.csv`
                        d3.csv(dataUrl)
                            .then(data => {
                                populateMap(data)
                            })
                            .catch(error => console.error('Error:', error));
                    }, 100); // Delay in milliseconds
                });

                const dataUrl = `https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/Aristotelis/data/density_map/density_map_${slider.value}.csv`
                d3.csv(dataUrl)
                    .then(data => {
                        populateMap(data)
                    })
                    .catch(error => console.error('Error:', error));


                
                // Create the legend container
                const legendContainer = document.createElement('div');
                legendContainer.classList.add('legend-container');
                legendContainer.style.padding = '10px';
                legendContainer.style.border = '1px solid #ccc';
                legendContainer.style.borderRadius = '5px';

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

                // Append the slider and label to the image container
                imageContainer.appendChild(slider);
                imageContainer.appendChild(sliderLabel);
                
                // Append the legend container and text to the graph container
                graphContainer.appendChild(imageContainer);
                graphContainer.appendChild(legendContainer);
                graphContainer.appendChild(div1_txt);
                graphContainer.appendChild(extra_txt);

                break;
            case 3:
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
                textContainer.innerHTML = ` <h3>Temporal Patterns: Unveiling Trends Across Time</h3>
                                            <p>
                                                The "Temporal Patterns" section allows you to explore the temporal distribution of terrorist attacks throughout the year. By examining the heatmap visualization, you can uncover patterns and insights related to the frequency of attacks based on specific dates.
                                            </p>
                                            <p>
                                                The heatmap represents the data by color-coding each cell based on the count of attacks. The color intensity indicates the relative frequency, with darker cells representing higher attack counts.
                                            </p>`;
                div1_txt.innerHTML = `  <p>
                                            The x-axis of the heatmap represents the months of the year, while the y-axis represents the days of each month. Each cell contains information about the total number of attacks that occurred on that specific date across all years in the dataset.
                                        </p>
                                        <p>
                                            When exploring the "Temporal Patterns" heatmap, pay attention to any notable trends or patterns that emerge. For example, you may observe a higher concentration of attacks around the middle of the year and middle of the month. Further analysis, including statistical evaluation, can help identify significant temporal patterns in the data.
                                        </p>
                                        <p>
                                            Additionally, intriguing spikes in activity can be observed on specific dates such as January 1st, April 15th, May 16th, and May 29th. The spike on January 1st may be linked to New Year's celebrations and the symbolism associated with the start of a new year. However, further investigation is needed to determine the exact reasons behind these spikes. Similarly, the spikes on April 15th, May 16th, and May 29th present interesting anomalies within the dataset, but their significance and underlying factors require additional research and analysis. These dates might be associated with specific historical events, cultural significance, or political and ideological factors. Further investigation would help shed light on the reasons behind these observed patterns.
                                        </p>
                                        <p>
                                            It is important to note that the "Temporal Patterns" section provides valuable insights into the temporal distribution of terrorist attacks. However, statistical significance and additional context should be considered when interpreting the patterns observed.
                                        </p>
                                        <p>
                                            Finally, be aware that the low activity on February 29th should not mislead you. This date appears only once every four years due to it being a leap year.
                                        </p>`;

                graphContainer.appendChild(div1);
                graphContainer.appendChild(div1_txt);

                if (!imageContainer.hasChildNodes()) {
                    d3.csv("https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/master/data/miscellaneous/seasonality_raw.csv")
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
                textContainer.innerHTML = ` <h2>Regional Impact: Exploring Terrorism Trends by Region</h2>
                                            <p>
                                                The "Regional Impact" section provides insights into the impact of terrorism on different regions around the world. By selecting a specific region from the dropdown menu, you can explore the trends and analyze the severity of terrorist attacks in that particular area.
                                            </p>
                                            <p>
                                                The interactive map allows you to zoom and pan to navigate different regions. When a region is selected from the dropdown menu, it gets highlighted on the map with a red overlay, enabling you to easily identify the area of focus.
                                            </p>
                                            <p>
                                                The section includes a scatterplot that displays the fatal attacks within the selected region. Each data point represents an attack, with the x-axis representing the years and the y-axis indicating the number of casualties. Hovering over a data point provides additional information such as the event ID, country, number of casualties, and the year of the attack.
                                            </p>
                                            <p>
                                                The "Regional Impact" section aims to highlight trends and patterns in terrorism, showcasing which countries have experienced the highest number of attacks and the severity of the casualties. By exploring this section, you can gain a better understanding of the impact of terrorism across different regions.
                                            </p>
                                            <p>
                                                Please note that the selection of regions and countries does not imply any particular focus or significance. The data provides a comprehensive view of terrorism trends and impacts globally, without emphasizing any specific area.
                                            </p>`;

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
        
                // Append the dropdown menu and the image to the imageContainer
                imageContainer.appendChild(regionSelect);
                imageContainer.appendChild(regionImage);

                graphContainer.appendChild(imageContainer);

                
        
                regionSelect.addEventListener('change', () => {

                    if (div1 && div1.parentNode) {
                        div1.parentNode.removeChild(div1);
                    }

                    if (div1_txt && div1_txt.parentNode) {
                        div1_txt.parentNode.removeChild(div1_txt);
                    }

                    if (extra_txt && extra_txt.parentNode) {
                        extra_txt.parentNode.removeChild(extra_txt);
                    }

                    // Ensure to re-create the div1 element after removing it
                    div1 = document.createElement('div');
                    div1.className = 'graph1';
                    div1.style.width = '100%';
                    div1.style.height = '100%';

                    // Ensure to re-create the div1_txt and extra_txt elements after removing them
                    div1_txt = document.createElement('div');
                    div1_txt.className = 'graph1_txt';
                    div1_txt.style.width = '100%';
                    div1_txt.style.height = '100%';
                    div1_txt.style.marginTop = '75px';
                    div1_txt.innerHTML = `<b>${regionSelect.value}</b>`;

                    extra_txt = document.createElement('div');
                    extra_txt.className = 'extra_txt';
                    extra_txt.style.width = '100%';
                    extra_txt.style.height = '100%';
                    extra_txt.style.marginTop = '10px';
                    
                    switch (regionSelect.value) {
                        case 'North America':
                            extra_txt.innerHTML = ``;
                            break;
                        case 'Central America & Caribbean':
                            extra_txt.innerHTML = ` <p>
                                                        Central America and the Caribbean region underwent a tumultuous period during the 1980s and early 1990s, marked by heightened instances of terrorism and violence. The political instability and conflict prevalent during this era amplified these adversities.
                                                    </p>
                                                    <p>
                                                        The nations most severely affected by these conditions were <a href="https://www.britannica.com/place/Guatemala" target="_blank">Guatemala</a>, <a href="https://www.britannica.com/place/Nicaragua" target="_blank">Nicaragua</a>, and <a href="https://www.britannica.com/place/El-Salvador" target="_blank">El Salvador</a>. Several crucial elements contributed to the escalation of terrorism and violent activity in Central America:
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            <strong>Cold War Politics:</strong> During the Cold War, Central America emerged as a strategic hotspot for the United States and the Soviet Union. Proxy wars between anti-communist entities and left-leaning guerrilla factions further destabilized the region.
                                                        </li>
                                                        <li>
                                                            <strong>Civil Wars and Revolutions:</strong> Nicaragua, El Salvador, and Guatemala were engulfed in civil wars characterized by rampant violence and terrorist acts. These conflicts were shaped by both internal and external influences, with left-wing guerrilla groups clashing against right-wing administrations.
                                                        </li>
                                                        <li>
                                                            <strong>Socioeconomic Inequality:</strong> The substantial socioeconomic disparity in Central America fostered conditions conducive to political unrest and violence. Disenfranchised communities often employed violent tactics to voice their dissatisfaction and advocate for societal transformation.
                                                        </li>
                                                        <li>
                                                            <strong>Drug Trafficking:</strong> Positioned geographically as a key transit region for drug trafficking—especially for cocaine moving from South America to the United States—Central America witnessed increased violence and terrorism as drug cartels employed brutal methods to safeguard their operations.
                                                        </li>
                                                        <li>
                                                            <strong>Legacy of Colonialism and Imperialism:</strong> The historical remnants of colonialism and imperialism in Central America sowed the seeds of political instability and social discord, which ultimately cultivated a climate ripe for violence and terrorism.
                                                        </li>
                                                        <li>
                                                            <strong>State Terrorism:</strong> Certain governments in the region, including Guatemala, employed acts of terrorism against their own citizens to quell opposition and maintain control, leading to widespread human rights abuses.
                                                        </li>
                                                    </ul>
                                                    <p>
                                                    These contributing elements often interacted in intricate patterns, and the circumstances varied significantly across countries. The region was scarred by several lethal incidents, such as the <a href="https://www.zinnedproject.org/news/tdih/el-mozote-massacre-in-el-salvador" target="_blank">El Mozote massacre</a> in El Salvador in 1981, which led to an estimated 800 to 1,000 fatalities, and the <a https://americanarchive.org/exhibits/newshour-cold-war/nicaragua">Nicaraguan revolution</a> in 1984 and 1985. These horrific events underscore the severe repercussions of the violence and terrorism that afflicted the region during that period.
                                                    </p>
                                                    <p>
                                                    The history of the Central America and Caribbean region provides a significant case study for understanding the repercussions of terrorism and violence within a context of political instability, socioeconomic challenges, and historical factors. A thorough examination of this history illuminates the intricate dynamics that influence terrorism trends and their resulting impacts.
                                                    </p>`;
                            break;
                        case 'South America':
                            extra_txt.innerHTML = ``;
                            break;
                        case 'East Asia':
                            extra_txt.innerHTML = ` <p>
                                                        East Asia exhibits a diverse landscape of terrorism activities, with a marked increase in incidents from 1990 until 2020. This period of heightened activity was primarily due to numerous incidents in China, particularly in the Xinjiang Uyghur Autonomous Region. There was also a significant escalation in geopolitical tensions involving North Korea during this period.
                                                    </p>
                                                    <p>
                                                        The <a href="https://en.wikipedia.org/wiki/Xinjiang_conflict" target="_blank">Xinjiang conflict</a> in China, characterized by violent activities from Uyghur separatist groups, significantly contributed to the rise in terrorist incidents in the region during this period. This conflict, rooted in religious, ethnic, and political issues, has had far-reaching consequences and sparked a surge in violence and security challenges across East Asia.
                                                    </p>
                                                    <p>
                                                        In 2013, a distinct period of escalated tensions, known as the <a href="https://en.wikipedia.org/wiki/2013_North_Korea_crisis" target="_blank">2013 North Korea crisis</a>, occurred. This crisis, characterized by heightened rhetoric from North Korea and threats of nuclear attacks against South Korea, Japan, and the United States, underlines the complexity of terrorism dynamics in East Asia, where geopolitical tensions often intertwine with potential acts of violence. The 2013 North Korea crisis had a profound effect not only on East Asia but also on the global discourse surrounding nuclear proliferation and regional security.
                                                    </p>
                                                    <p>
                                                        Overall, East Asia presents a diverse terrorism landscape, with each country having its unique dynamics and factors contributing to terrorism activities. While the number of attacks remains relatively high compared to other regions, the Xinjiang conflict and the 2013 North Korea crisis serve as significant factors that contributed to the period of heightened activity. Understanding these dynamics is crucial for effective policy-making and fostering stability and security in the region.
                                                    </p>`;
                            break;
                        case 'Southeast Asia':
                            extra_txt.innerHTML = ``;
                            break;
                        case 'South Asia':
                            extra_txt.innerHTML = ``;
                            break;
                        case 'Central Asia':
                            extra_txt.innerHTML = ` <p>
                                                        Central Asia, while having an average level of terrorism incidents in comparison to other regions, has experienced periods of heightened activity. Notably, between 1988 and 2000, the region witnessed a surge in incidents, with some conflicts leading to high casualties. This was largely due to the First Nagorno-Karabakh War, the Tajikistani Civil War, and the wars in Abkhazia and South Ossetia.
                                                    </p>

                                                    <p>
                                                        The <a href="https://www.bbc.com/news/world-europe-18270325" target="_blank">First Nagorno-Karabakh War</a> took place in Azerbaijan from 1988 to 1994, contributing to an increase in terrorist incidents during this period . Similarly, the <a href="https://www.rferl.org/a/tajikistan-civil-war-20-years-later/28488152.html" target="_blank">Tajikistani Civil War</a> from 1992 to 1997 led to a notable rise in terrorism activities in Tajikistan. Furthermore, Georgia faced significant conflicts during the <a href="https://www.rferl.org/a/war-abkhazia-25-years/29487023.html" target="_blank">War in Abkhazia</a> and the <a href="https://www.rferl.org/a/timeline-georgia-south-ossetia-conflict/27435424.html" target="_blank">conflict in South Ossetia</a> from 1992 to 2000, which heavily impacted the region's terrorism landscape.
                                                    </p>

                                                    <p>
                                                        It is also important to highlight that some countries in Central Asia, such as Kazakhstan, Uzbekistan, and Armenia, have experienced fewer incidents of terrorism. This illustrates the varied experiences within the region. Additionally, despite lower overall activity, there were notable increases in terrorist incidents in Tajikistan in 2019 and 2020, indicating ongoing security challenges.
                                                    </p>

                                                    <p>
                                                        Overall, the Central Asia region provides a comprehensive view of the terrorism landscape in the area. While the number of attacks is average compared to other regions, the aforementioned conflicts serve as significant factors that contributed to periods of heightened activity. Understanding the local and historical context is crucial for comprehending the dynamics of terrorism in this region.
                                                    </p>`;
                            break;
                        case 'Western Europe':
                            extra_txt.innerHTML = ``;
                            break;
                        case 'Eastern Europe':
                            extra_txt.innerHTML = ` <p>
                                                        The Eastern Europe region has seen a substantial amount of conflict and terrorism, particularly within the territories of Russia and Ukraine.
                                                    </p>
                                                    <p>
                                                        The prominence of Russia in this context can largely be attributed to the long-standing conflicts in regions such as <a href="https://en.wikipedia.org/wiki/Second_Chechen_War">Chechnya</a>, <a href="https://en.wikipedia.org/wiki/War_of_Dagestan">Dagestan</a>, and <a href="https://en.wikipedia.org/wiki/War_in_Ingushetia">Ingushetia</a>. The separatist movements and insurgencies in these areas have spurred numerous terrorist attacks over the years. One noteworthy event that transpired within this period is the 2010 <a href="https://en.wikipedia.org/wiki/2010_Moscow_Metro_bombings">Moscow Metro bombings</a>, which resulted in numerous casualties and heightened international awareness regarding the security challenges facing Russia. These internal conflicts within Russia have significantly contributed to the region's terrorism landscape.
                                                    </p>
                                                    <p>
                                                        In the case of Ukraine, the significant increase in terrorist incidents in 2015 is largely linked to the political and military crisis that emerged in 2014. The <a href="https://en.wikipedia.org/wiki/Annexation_of_Crimea_by_the_Russian_Federation#:~:text=In%20February%20and%20March%202014,the%20wider%20Russo-Ukrainian%20War.">annexation of Crimea by Russia</a> and the subsequent pro-Russian unrest in Eastern Ukraine led to a full-scale war in the Donbas region. This conflict has caused a surge in violence and security challenges throughout the region, leading to a high number of casualties.
                                                    </p>
                                                    <p>
                                                        Despite the significant contribution of Russia and Ukraine to the number of terrorist incidents in Eastern Europe, it's important to note that other countries in the region have also experienced isolated incidents of terrorism. However, the scale and impact of these incidents are generally lower compared to those in Russia and Ukraine.
                                                    </p>
                                                    <p>
                                                        Overall, the Eastern Europe region presents a complex and challenging terrorism landscape. The significant impact of the conflicts in Russia and Ukraine emphasizes the importance of understanding local and historical contexts when studying the dynamics of terrorism in this region.
                                                    </p>`;
                            break;
                        case 'Middle East & North Africa':
                            extra_txt.innerHTML = ` <p>
                                                        The Middle East and North Africa (MENA) region, known for its rich history and cultural diversity, has been marked by an unfortunate prevalence of conflict and terrorism. The region's tumultuous past has resulted in significant volatility, with numerous countries experiencing recurring periods of unrest and violence. 
                                                    </p>
                                                    <p>
                                                        The State of Israel, for example, has been notably affected by the ongoing <a href="https://www.britannica.com/topic/Israeli-Palestinian-conflict" target="_blank">Israeli-Palestinian</a> conflict, which has led to regular occurrences of terrorism over the decades. This enduring conflict continues to shape the region's socio-political landscape, underscoring the necessity for lasting peace initiatives.
                                                    </p>
                                                    <p>
                                                        Syria, another country in the region, has been engulfed in a long-lasting <a href="https://www.bbc.com/news/world-middle-east-26116868" target="_blank">civil war</a>, marked by pervasive violence and terrorism. This conflict has not only destabilized the country internally but has also had ripple effects across the region and the world.
                                                    </p>
                                                    <p>
                                                        Egypt, a pivotal nation in North Africa, went through a significant period of unrest during the <a href="https://www.britannica.com/event/Egyptian-Revolution-of-2011" target="_blank">Egyptian Revolution</a> in 2011. This event, part of the wider Arab Spring, catalyzed substantial security challenges and marked a major turning point in the country's history.
                                                    </p>
                                                    <p>
                                                        <a href="https://www.cfr.org/backgrounder/turkeys-terrorism-problem" target="_blank">Turkey</a>, straddling the continents of Europe and Asia, has also experienced considerable terrorism activity throughout its history. Various internal and external factors have contributed to this, emphasizing the multifaceted nature of the terrorism phenomenon in the region.
                                                    </p>
                                                    <p>
                                                        It's essential to note that the MENA region is a mosaic of various nations, each with its own unique experiences and historical contexts. While certain countries and events have been highlighted here, a comprehensive understanding requires a broader examination of the region's intricate tapestry. The complexities within the MENA region, coupled with the severity of the events witnessed, underscore the importance of continuous research and analysis. This ongoing exploration helps to address the root causes of terrorism and fosters the development of strategies to enhance stability and security in the region.
                                                    </p>`;
                            break;
                        case 'Sub-Saharan Africa':
                            extra_txt.innerHTML = ``;
                            break;
                        case 'Australasia & Oceania':
                            extra_txt.innerHTML = ` <p>
                                                        The Australasia & Oceania region has generally experienced a relatively low number of terrorist attacks. However, between 1988 and 1998, there was a notable increase in incidents with higher casualties. This period of heightened activity can largely be attributed to the Bougainville conflict, which significantly impacted the region.
                                                    </p>
                                                    <p>
                                                        The <a href="https://www.c-r.org/programme/pacific/bougainville-conflict-focus" target="_blank">Bougainville conflict</a>, a long-standing armed conflict that took place in Papua New Guinea, resulted in increased terrorist incidents during this time. The conflict, rooted in socio-political and economic issues, had far-reaching consequences and caused a surge in violence and security challenges throughout the region. For more information about the Bougainville conflict, please visit the [link placeholder].
                                                    </p>
                                                    <p>
                                                        It is worth noting that in 2019, an outlier incident occurred in New Zealand, resulting in up to 43 casualties. This incident, known as the <a href="https://www.rnz.co.nz/news/chch-terror" target="_blank">Christchurch mosque shootings</a>, stands out due to its severity and serves as a tragic reminder of the potential impact of terrorism, even in regions with typically low activity. The Christchurch mosque shootings had a profound effect not only on New Zealand but also on the global discourse surrounding extremism and the need for unity against hatred.
                                                    </p>

                                                    <p>
                                                        Overall, the Australasia & Oceania region presents an overview of the terrorism landscape in the area. While the number of attacks remains relatively low compared to other regions, the Bougainville conflict serves as a significant factor that contributed to the period of heightened activity. Understanding the local and historical context is crucial for comprehending the dynamics of terrorism in this region.
                                                    </p>`;
                            break;
                        default:
                            extra_txt.innerHTML = ``;
                            break;
                    }


                    graphContainer.appendChild(div1_txt);
                    graphContainer.appendChild(div1);
                    graphContainer.appendChild(extra_txt);
                   

                    // console.log(countryLayer);
                    // If a country layer already exists, remove it
                    // if (countryLayer) {
                    //     mymap.removeLayer(countryLayer);
                    // }
                    deselectCountries();
                    // console.log(countryLayer);
                    for (const index in regionCountries[regionSelect.value]) {
                        const country = regionCountries[regionSelect.value][index];
                        highlightCountry(country);
                    }
                    // highlightCountry(countrySelect.value);

                    const dataUrl = `https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/master/data/regions/victims/${encodeURIComponent(regionSelect.value) }.csv`
                    d3.csv(dataUrl)
                        .then(data => {

                            plotScatterPlot(data); // Add animation again
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


                    if (div1 && div1.parentNode) {
                        div1.parentNode.removeChild(div1);
                    }

                    if (div1_txt && div1_txt.parentNode) {
                        div1_txt.parentNode.removeChild(div1_txt);
                    }

                    if (extra_txt && extra_txt.parentNode) {
                        extra_txt.parentNode.removeChild(extra_txt);
                    }

                    // Ensure to re-create the div1 element after removing it
                    div1 = document.createElement('div');
                    div1.className = 'graph1';
                    div1.style.width = '100%';
                    div1.style.height = '100%';

                    // Ensure to re-create the div1_txt and extra_txt elements after removing them
                    div1_txt = document.createElement('div');
                    div1_txt.className = 'graph1_txt';
                    div1_txt.style.width = '100%';
                    div1_txt.style.height = '100%';
                    div1_txt.style.marginTop = '75px';
                    // div1_txt.innerHTML = `<b>${countrySelect.value}</b>`;

                    extra_txt = document.createElement('div');
                    extra_txt.className = 'extra_txt';
                    extra_txt.style.width = '100%';
                    extra_txt.style.height = '100%';
                    extra_txt.style.marginTop = '10px';

                    // Create a container for the flagCircle and label
                    const legendContainer = document.createElement('div');
                    legendContainer.classList.add('legend-container');

                    // Create a color circle
                    const flagCircle = document.createElement('div');
                    flagCircle.innerHTML = `<img src="https://raw.githubusercontent.com/HatScripts/circle-flags/gh-pages/flags/${getCountryAbbr(countrySelect.value)}.svg" style="width: 50px; height: 50px; margin-right: 20px">`;

                    // Create a label for the target subtype
                    const label = document.createElement('span');
                    label.innerHTML = `<b>${countrySelect.value}</b>`;
                    label.style.display = 'flex';
                    label.style.alignItems = 'center';
                    label.style.fontSize = '30px';
                    label.style.color = 'black';

                    // Append the color circle and label to the legend container
                    legendContainer.appendChild(flagCircle);
                    legendContainer.appendChild(label);

                    // Append the legend container to div1_txt
                    div1_txt.appendChild(legendContainer);

                    


                    graphContainer.appendChild(div1_txt);
                    graphContainer.appendChild(div1);
                    graphContainer.appendChild(extra_txt);

                    // Update the image source (modify this to match your actual file paths and naming conventions)
                    //countryImage.src = `/data/countries/${countrySelect.value.replace(/ /g, '_')}.png`;
                    //countryImage.alt = countrySelect.value;
                    //const imageUrl = `/data/countries/${selectedCountry}.png`;

        
                    // If a country layer already exists, remove it
                    // console.log(countryLayer);
                    // if (countryLayer) {
                    //     mymap.removeLayer(countryLayer);
                    // }
                    // console.log(countryLayer);
                    deselectCountries();
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
                textContainer.innerHTML = `<h2>Welcome to 'Unveiling Patterns: A Data-Driven Insight into Global Terrorism'</h2>
                        <p>
                            This platform provides an interactive exploration of data from the Global Terrorism Database (GTD), covering the
                            span of half a century from 1970 to 2020. Please note that data for the year 1973 is missing from the GTD.
                        </p>
                        <p>
                            Through this visualization portal, we aim to present an unbiased, comprehensive view of global terrorism patterns,
                            focusing on diverse aspects such as attack frequency, casualties, seasonality, regional trends, methods, and targets
                            of attacks. The data can be explored via various interactive visualizations, each carefully designed to convey
                            specific aspects of the data. This includes an overview of terrorist groups and their preferred methods of attack, a
                            geographically focused view of attack density, trend analysis, region-specific exploration, and a country-wise
                            deep-dive.
                        </p>
                        <p>
                            By presenting this data, we hope to foster an understanding of the patterns and impacts of terrorism on a global
                            scale. The information should be handled with care due to the sensitive nature of the subject matter. We encourage
                            you to navigate through the visualizations and uncover the hidden patterns of global terrorism.
                        </p>
                        <p>
                            Understanding patterns in terrorism is crucial for various stakeholders - from policymakers and security agencies to
                            researchers and citizens. It allows us to comprehend the scope of this global issue, identify hotspots, discern
                            trends, and possibly, infer underlying causes and implications. The power of data visualization is employed here to
                            present this complex and expansive data in an intuitive and interactive manner, facilitating better comprehension
                            and deeper analysis.
                        </p>
                        <p>
                            The objective of this project is to provide an accessible tool for understanding the landscape of global terrorism,
                            thereby contributing to informed discussions, policy making, and educational endeavors. We uphold the principle of
                            data neutrality, providing an unbiased view and leaving room for interpretation based on the data.
                        </p>
                        <p>
                            Feel free to start your journey by selecting any of the five categories. Should you require assistance in navigating
                            through the website, please click on the 'Help' button on the top right corner for guidance.
                        </p>`;
        }

    }
      

    function plotData(data) {
        // Set the dimensions and margins of the graph
        const width = 600;
        const height = 400;

        var margin = {top: 10, right: 10, bottom: 40, left: 100};
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

        g.append("text")
            .attr("text-anchor", "end")
            .attr("x", 2*innerWidth/3)
            .attr("y", innerHeight + 50)
            .text("<b>Casualties</b>");

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
        const width = 500;
        const height = 400;

        var margin = { top: 30, right: 30, bottom: 30, left: 150 };
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
        const width = 900;
        const height = 500
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

        var monthAbbreviations = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var x = d3.scalePoint()
            .domain(monthAbbreviations)    // Use month abbreviations as domain
            .range([0, innerWidth]);
        g.append("g")
            .attr("transform", "translate(0," + innerHeight * .8 + ")")
            .call(d3.axisBottom(x).tickSize(-innerHeight * .7))
            .select(".domain")
            .remove();

        g.selectAll(".tick line").attr("stroke", "#b8b8b8");  // Vertical grid lines above month names

        // // Add X axis label:
        // g.append("text")
        //     .attr("text-anchor", "end")
        //     .attr("x", 2*innerWidth/3)
        //     .attr("y", innerHeight - 30 )
        //     .text("Time (month)");

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
            .x(function(d) { return x(monthAbbreviations[d.data.imonth - 1]); })
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
            })
            .on("click", function(event, d) {
                forceSlider = true;
                forceSliderValue = d.key;

                tooltip.interrupt();
                tooltip.style("opacity", 0)
                d3.selectAll(".myArea").style("opacity", .8).style("stroke", "none")

                updateGraph(2);
                updateButton(2);
            });
    }

    function plotSeasonality(data) {
        const width = 500;
        const height = 600;

        var margin = { top: 30, right: 30, bottom: 30, left: 150 };
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
        const xValue = d => d.imonth;
        const yValue = d => d.iday;

        var monthAbbreviations = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var x = d3.scaleBand()
            .domain(monthAbbreviations)    // Use month abbreviations as domain
            .range([0, innerWidth]);
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
            // .interpolator(d3.interpolateViridis)
            .range(['white', 'crimson'])
            .domain([450, 700]);


        g.selectAll()
            .data(data, function (d) { return d.imonth + ':' + d.iday; })
            .enter()
            .append("rect")
            .attr("x", function (d) { return x(monthAbbreviations[d.imonth - 1]) })
            .attr("y", function (d) { return y(d.iday) })
            .attr("width", x.bandwidth())
            .attr("height", y.bandwidth())
            .attr("rx", 4)
            .attr("ry", 4)
            .attr("stroke-width", 1)
            .attr("stroke", "dimgrey")
            .style("fill", function (d) { return myColor(+d.count) })
            .on("mouseover", function (event, d) {

                tooltip.transition()
                    .duration(200)
                    .style("opacity", 0.9);
                tooltip.html(`<p> The <b>${d.iday} of ${numToMonth(+d.imonth)}</b>  <br> has on average <b>${+d.count} attacks</b></p>`)
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
                // d3.selectAll('rect')
                //     .transition().duration(200)
                //     .style("filter", "brightness(1)")
                //     .style("stroke", "none")
                //     .style("stroke-width", "0px")

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

        let maxNkill = Number.NEGATIVE_INFINITY;

        for (const key in data) {
            const nkill = parseFloat(data[key]['nkill']);
            if (nkill > maxNkill) {
                maxNkill = nkill;
            }
        }

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
            .domain([1970, 1970])
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

                g.selectAll("circle")
                    .filter(function (data) { return data.country_txt === d.country_txt; })
                    .style("opacity", 0.8);
                g.selectAll("circle")
                    .filter(function (data) { return data.country_txt !== d.country_txt; })
                    .style("opacity", 0.1);
            })
            .on("mouseout", function (d) {
                // Make tooltip invisible
                tooltip.interrupt();
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);

                g.selectAll("circle")
                    .filter(function (data) { return data.country_txt === d.country_txt; })
                    .style("opacity", 0.5);
                g.selectAll("circle")
                    .filter(function (data) { return data.country_txt !== d.country_txt; })
                    .style("opacity", 0.5);
            });

        // Add the X Axis
        x.domain([1970, 2020])
        g.select(".x-axis")
            .transition()
            .duration(1000)
            .attr("opacity", 1)
            .call(d3.axisBottom(x).tickFormat(d3.format("d")));

        y.domain([0, maxNkill])  // Cap on the max number of casualties
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
                fillOpacity: 0.3,
                stroke: false,
                radius: 5
            }).addTo(dotsLayerGroup);

            var countryFlagSrc = `https://raw.githubusercontent.com/HatScripts/circle-flags/gh-pages/flags/${getCountryAbbr(row.country_txt)}.svg`;
            var content = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <img src="${countryFlagSrc}" style="width: 50px; height: 50px; margin-right: 70px">
                </div>
                <div>
                    <b>Target: ${row.targtype1_txt}</b><br>
                    Location: ${row.country_txt}<br>
                    Casualties: ${d3.format("d")(row.nkill)}<br>
                    Group: ${row.gname}<br>
                    Summary: ${row.summary}
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
            case "World":
                return "earth";
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

    function getGeoJsonCountryNames(country)
    {
        switch (country) {
            case "Bosnia-Herzegovina":
                return ["Bosnia and Herzegovina"];
            case "Cyprus":
                return ["Cyprus", "Northern Cyprus"];
            case "Czechoslovakia":
                return ["Czech Republic", "Slovakia"];
            case "East Germany (GDR)":
                return ["Germany"];
            case "Guinea-Bissau":
                return ["Guinea Bissau"];
            case "New Hebrides":
                return ["Vanuatu"];
            case "North Yemen":
                return ["Yemen"];
            case "People's Republic of the Congo":
                return ["Democratic Republic of the Congo"];
            case "Rhodesia":
                return ["Zimbabwe"];
            case "Serbia":
                return ["Republic of Serbia"]
            case "Serbia-Montenegro":
                return ["Serbia", "Montenegro"];
            case "Slovak Republic":
                return ["Slovakia"];
            case "South Yemen":
                return ["Yemen"];
            case "Soviet Union":
                return ["Russia", "Ukraine", "Belarus", "Kazakhstan", "Uzbekistan", "Turkmenistan", "Tajikistan", "Kyrgyzstan", "Georgia", "Armenia", "Azerbaijan", "Moldova", "Lithuania", "Latvia", "Estonia"];
            case "Tanzania":
                return ["United Republic of Tanzania"];
            case "United Kingdom":
                return ["England", "Scotland", "Wales", "Northern Ireland"];
            case "United States":
                return ["USA"];
            case "West Bank and Gaza Strip":
                return ["West Bank"];
            case "West Germany (FRG)":
                return ["Germany"];
            case "Yugoslavia":
                return ["Serbia", "Croatia", "Bosnia and Herzegovina", "Slovenia", "Macedonia", "Montenegro", "Kosovo"];
            case "Zaire":
                return ["Democratic Republic of the Congo"];
            default:
                return [country];


        }
    }



    
    
    // Define the map object and add it to the "map" div container
    //var mymap = L.map('map').setView([46.5197, 6.6323], 2);
    // Add the tile layer to the map
    //L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //    maxZoom: 18,
    //    tileSize: 512,
    //    zoomOffset: -1
    //}).addTo(mymap);¨

    var mymap = L.map('map', {
        minZoom: 2 // Set the minimum zoom level
    }).setView([46.5197, 6.6323], 2);
    

    // Set the maximum bounds of the map to prevent repetitions
    var southWest = L.latLng(-90, -180);
    var northEast = L.latLng(90, 180);
    var bounds = L.latLngBounds(southWest, northEast);
    mymap.setMaxBounds(bounds);
    mymap.on('drag', function () {
        mymap.panInsideBounds(bounds, { animate: false });
    });


    mymap.createPane('labels');
    mymap.getPane('labels').style.zIndex = 650;
    mymap.getPane('labels').style.pointerEvents = 'none';


    var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
    }).addTo(mymap);

    positron.setZIndex(10);

    var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
    }).addTo(mymap);
    
    var GeoJsonData; // Variable to hold the GeoJSON data

    fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
    .then(response => response.json())
    .then(data => {
        GeoJsonData = data;
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

    geojson.eachLayer(function (layer) {
        layer.bindPopup(layer.feature.properties.name);
    });

    mymap.fitBounds(geojson.getBounds());


    function highlightCountry(countryName) {

    var countryNames = getGeoJsonCountryNames(countryName);
    for (var i = 0; i < countryNames.length; i++) {
        var countryFeature = GeoJsonData.features.find(feature => feature.properties.name === countryNames[i]);
        if (countryFeature) {
        // Create a Leaflet GeoJSON layer with only the specified country feature
        var countryLayer = L.geoJson(countryFeature, {
            style: {
            fillColor: '#7a9f79',
            weight: 2,
            color: '#315e26',
            fillOpacity: 0.5
            }
        }).addTo(mymap);

        // Add the country layer to the selectedCountryLayers array
        selectedCountryLayers.push(countryLayer);
    
        // Fit the map to the bounds of the country layer
        mymap.fitBounds(countryLayer.getBounds());
        }
    }
    }  

    // Update the deselection process
    function deselectCountries() {
        // Remove each selected country layer from the map
        selectedCountryLayers.forEach(layer => {
            mymap.removeLayer(layer);
        });

        // Clear the selectedCountryLayers array
        selectedCountryLayers = [];
    }

});

