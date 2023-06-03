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

let forceSlider = false;
let forceSliderValue = "2000";
let targetsSelected = Object.keys(colorMapping);


// Wait for the HTML and CSS to load before running JavaScript
document.addEventListener("DOMContentLoaded", function () {

    window.onload = function () {
        scrollToTop();
    };

    // Define variables for the map container and switch button
    var mapContainer_ = document.querySelector(".map");
    mapContainer_.style.borderRadius = "0";
    // mapContainer_.style.display = "none";

    // Define variables for the five other buttons
    const button1 = document.querySelector("#button-1");
    const button2 = document.querySelector("#button-2");
    const button3 = document.querySelector("#button-3");
    const button4 = document.querySelector("#button-4");
    const button5 = document.querySelector("#button-5");
    const logoButton = document.querySelector("#button-logo");
    const homeButton = document.querySelector("#button-home");
    const helpButton = document.getElementById("button-help");
    const helpWindow = document.getElementById("helpWindow");
    const closeButton = document.getElementById("closeButton");

    document.querySelectorAll('.email-link').forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const email = this.dataset.clipboardText;
            const el = document.createElement('textarea');
            el.value = email;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);

            // Show the popup
            const popup = document.getElementById('popup');
            popup.style.display = 'block';
            popup.style.opacity = '1';

            // Position the popup
            const rect = this.getBoundingClientRect();
            popup.style.top = (rect.top + window.scrollY + rect.height + 10) + 'px';
            popup.style.left = (rect.left + window.scrollX + rect.width / 2) + 'px';

            // Hide the popup after 2 seconds
            setTimeout(() => {
                popup.style.opacity = '0';
                setTimeout(() => {
                    popup.style.display = 'none';
                }, 1000);
            }, 2000);
        });
    });

    defaultViz();
   

    // Add click event listeners to the five buttons
    button1.addEventListener("click", function () {
        // Change the graph display to show statistics related to button 1
        scrollToTop();
        updateGraph(1);
        updateButton(1);
    });

    button2.addEventListener("click", function () {
        // Change the graph display to show statistics related to button 2
        scrollToTop();
        updateGraph(2);
        updateButton(2);
    });

    button3.addEventListener("click", function () {
        // Change the graph display to show statistics related to button 3
        scrollToTop();
        updateGraph(3);
        updateButton(3);
    });

    button4.addEventListener("click", function () {
        // Change the graph display to show statistics related to button 4
        scrollToTop();
        updateGraph(4);
        updateButton(4);
    });

    button5.addEventListener("click", function () {
        // Change the graph display to show statistics related to button 5
        scrollToTop();
        updateGraph(5);
        updateButton(5);
    });

    homeButton.addEventListener("click", function () {
        scrollToTop();
        updateGraph(-1);
        updateButton(-1);
    });

    logoButton.addEventListener("click", function () {
        scrollToTop();
        updateGraph(-1);
        updateButton(-1);
    });

    helpButton.addEventListener("click", function () {
        helpWindow.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        // console.log("close button clicked");
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
        div1.style.display = 'flex';
        div1.style.justifyContent = 'center';
        div1.style.alignItems = 'center';


        var div1_txt = document.createElement('div');
        div1_txt.className = 'graph1_txt';
        div1_txt.style.width = '100%';
        div1_txt.style.height = '100%';

        var div2 = document.createElement('div');
        div2.className = 'graph2';
        div2.style.width = '100%';
        div2.style.height = '100%';
        div2.style.display = 'flex';
        div2.style.justifyContent = 'center';
        div2.style.alignItems = 'center';


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

        deselectCountries();

        switch (buttonNumber) {
            case 1:
                mapContainer.style.display = "none";
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
                textContainer.innerHTML = ` <h3>Group Profiles: Unraveling the Patterns of Deadly Forces</h3>

<p>
Let's dive deeper into the patterns of the ten deadliest terrorist groups, ranked by the number of casualties they've caused over the span of 50 years. This section shines a light on their chosen methods of operation, offering a closer look at their devastating impact.
</p>`;
                div1_txt.innerHTML = ` <p>
The <strong>bar chart</strong> provides a stark illustration of these groups, organized in descending order of casualties. Hover over a bar, and you'll find a detailed breakdown, revealing the full name of the organization along with the staggering number of lives lost due to their actions.
</p>`;
                div2_txt.innerHTML = ` <p>
Paired with the bar chart is a <strong>heatmap</strong> that paints a vivid picture of the frequency at which these groups resort to different methods of attack. Each cell within the heatmap corresponds to a specific method's usage by a particular group, with the intensity of the color mirroring the frequency. The darker the cell, the higher the frequency, thereby indicating a preferred or recurrent method. Hover over a cell, and you'll uncover the total number of instances a group has used a particular method, along with the full name of the group.
</p>`;
                extra_txt.innerHTML = `<p style="font-size:90%; padding-left:10%; padding-right:10%; padding-top:10px; padding-bottom:10px; color:dimgrey">
<em>Note</em>: The terrorist groups are represented as per their name at the time of the attack. Changes in their names or merging of groups over time have not been accounted for. Consequently, different names referring to the same group in different times or contexts are treated as separate entities.
</p>

<p>
Together, these visualizations offer a comprehensive understanding of the operations of the most lethal terrorist groups. As you navigate this data, remember the real-world implications - every figure represents a tragic loss, a testament to the far-reaching impacts of these groups' activities worldwide. Handle this information with care as you continue to uncover the patterns of global terrorism.
</p>`;
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
                mapContainer.style.display = "block";
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
                textContainer.innerHTML = ``;
                div1_txt.innerHTML = `<h3>Attack Hotspots: A Global View of Terror</h3>

<p>
This feature invites you to survey the global distribution of terrorist attacks, year by year. With the help of a slider, you can travel through time, observing the shifts and movements in terror hotspots from 1970 to 2020. Every circle on the map is a tale of an attack, color-coded by the target type.
</p>

<p>
The color scheme of the circles has been thoughtfully designed to signify various target types and their characteristics. For instance, red - a color often synonymous with danger, urgency, and attention - is used for "Private Citizens & Property", while green, commonly associated with law enforcement, stands for "Police". A comprehensive list of color descriptions is available in the legend. 
</p>

<p>
Each circle is more than a colored dot. Click on it, and a pop-up reveals the story behind the attack. The pop-up contains information about the target, the country where the attack occurred, the terrorist group involved, and a brief summary of the incident, providing a snapshot of the event. 
</p>

<p style="font-size:90%; padding-left:10%; padding-right:10%; padding-bottom:10px; color:dimgrey">
<em>Note</em>: The data displayed initially represents all attacks worldwide for the selected year. To narrow down the view, you can select specific target types from a dropdown menu. However, the visual representation is limited to one year at a time, adjustable with the slider.
</p>

<p>
The "Attack Hotspots" feature offers a geographical and temporal perspective on the prevalence of terrorism. As you navigate this map, remember that each circle represents an act of terror that has impacted lives and communities. Use this information responsibly as you continue your exploration of global terrorism patterns.
</p>`;
                extra_txt.innerHTML = ``;
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
                targetsSelected = Object.keys(colorMapping);
    
                // Create a label to display the slider value
                const sliderLabel = document.createElement('span');
                sliderLabel.innerHTML = `Year: ${slider.value}`;
                sliderLabel.classList.add('slider-label');
    
                //-------------------------------------------------------------------------------- 
                // On each change of the slider, wait for 50ms before loading the new data
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
                                populateMap(data, targetsSelected)
                            })
                            .catch(error => console.error('Error:', error));
                    }, 50); // Delay in milliseconds
                });

                const dataUrl = `https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/Aristotelis/data/density_map/density_map_${slider.value}.csv`
                d3.csv(dataUrl)
                    .then(data => {
                        populateMap(data, targetsSelected)
                    })
                    .catch(error => console.error('Error:', error));

                // Create the legend container
                const legendContainer = document.createElement('div');
                legendContainer.classList.add('legend-container');
                legendContainer.style.padding = '10px';
                legendContainer.style.border = '1px solid #ccc';
                legendContainer.style.borderRadius = '5px';

                const legendInstructions = document.createElement('p');
                legendInstructions.innerHTML = 'Click on a legend item to filter the map by target type:';
                legendInstructions.style.width = '100%';
                legendInstructions.style.color = 'black';

                legendContainer.appendChild(legendInstructions);


                // Iterate through the colorMapping object and create legend items
                for (const target in colorMapping) {
                    const color = colorMapping[target];

                    // Create a legend item
                    const legendItem = document.createElement('div');
                    legendItem.classList.add('legend-item');

                    legendItem.addEventListener('click', function () {
                        if (targetsSelected.includes(target)) {
                            targetsSelected = targetsSelected.filter(item => item !== target);
                            legendItem.style.opacity = 0.5;

                        } else {
                            targetsSelected.push(target);
                            legendItem.style.opacity = 1;
                        }

                        // Update the map
                        const dataUrl = `https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/master/data/density_map/density_map_${slider.value}.csv`
                        d3.csv(dataUrl)
                            .then(data => {
                                populateMap(data, targetsSelected)
                            })
                            .catch(error => console.error('Error:', error));


                    });

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

                const clearTargets = document.createElement('div');
                clearTargets.classList.add('legend-item');
                clearTargets.innerHTML = '<b>Clear Selection</b>';
                clearTargets.style.opacity = 1;
                // clearTargets.style.padding = '10px';
                clearTargets.style.marginLeft = '5%';
                clearTargets.addEventListener('click', function () {
                    targetsSelected = [];
                    const legendItems = legendContainer.querySelectorAll('.legend-item');
                    legendItems.forEach(item => {
                        item.style.opacity = 0.5;
                    });
                    clearTargets.style.opacity = 1;
                    allTargets.style.opacity = 1;

                    // Update the map
                    const dataUrl = `https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/master/data/density_map/density_map_${slider.value}.csv`
                    d3.csv(dataUrl)
                        .then(data => {
                            populateMap(data, targetsSelected)
                        })
                        .catch(error => console.error('Error:', error));
                });

                const allTargets = document.createElement('div');
                allTargets.classList.add('legend-item');
                allTargets.innerHTML = '<b>Select All</b>';
                allTargets.style.opacity = 1;
                allTargets.style.marginLeft = '10%';
                // allTargets.style.padding = '10px';
                // allTargets.style.border = '1px solid #ccc';
                allTargets.addEventListener('click', function () {
                    targetsSelected = Object.keys(colorMapping);
                    const legendItems = legendContainer.querySelectorAll('.legend-item');
                    legendItems.forEach(item => {
                        item.style.opacity = 1;
                    });
                    allTargets.style.opacity = 1;
                    clearTargets.style.opacity = 1;

                    // Update the map
                    const dataUrl = `https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/master/data/density_map/density_map_${slider.value}.csv`
                    d3.csv(dataUrl)
                        .then(data => {
                            populateMap(data, targetsSelected)
                        })
                        .catch(error => console.error('Error:', error));
                });

                legendContainer.appendChild(allTargets);
                legendContainer.appendChild(clearTargets);

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
                mapContainer.style.display = "none";
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
                textContainer.innerHTML = ` <h3>Temporal Patterns: Tracing the Ebb and Flow of Terror Over Time</h3>
<p>
Immerse yourself in the exploration of the temporal distribution of terrorist attacks throughout the year. The heatmap visualization here serves as a guide, enabling you to dissect the rhythm of terror, helping unearth patterns and insights related to the frequency of attacks on specific dates.
</p>`;
                div1_txt.innerHTML = ` <p>
The <strong>heatmap</strong> uses color intensity to depict data, with each cell's hue directly tied to the count of attacks. Darker cells denote a higher frequency, translating to a larger number of attacks.
</p>
<p>
The axes of the heatmap offer a granular temporal perspective: the x-axis represents the <em>months of the year</em>, and the y-axis denotes the <em>days of each month</em>. Each cell in this grid holds the cumulative count of attacks that have occurred on a particular date across all years covered in the dataset.
</p>
<p>
As you navigate the "<strong>Temporal Patterns</strong>" heatmap, be on the lookout for any discernable trends or patterns. For instance, you may notice a higher concentration of attacks around the middle of the year or month. A deeper dive, backed by statistical analysis, can help unearth significant temporal patterns hidden in this data.
</p>
<p>
Certain dates—<strong>January 1st, April 15th, May 16th, and May 29th</strong>—exhibit conspicuous spikes in activity. The surge on January 1st could potentially be linked to the symbolism associated with New Year's celebrations and the onset of a new year. However, the exact reasons behind these spikes warrant more comprehensive investigation. Similarly, the spikes on April 15th, May 16th, and May 29th present intriguing anomalies within the dataset. Their significance and underlying reasons—whether they're tied to specific historical events, cultural significance, or political and ideological factors—demand further scrutiny and analysis.
</p>
<p style="font-size:90%; padding-left:10%; padding-right:10%; padding-top:10px; padding-bottom:10px; color:dimgrey">
<em>Note</em>: The "<strong>Temporal Patterns</strong>" section is a powerful tool that provides valuable insights into the temporal distribution of terrorist attacks. However, keep in mind the importance of considering statistical significance and additional context when interpreting the observed patterns.
</p>
<p>
Lastly, don't be misled by the low activity on <strong>February 29th</strong>. This date only occurs once every four years, owing to it being a leap day. The lower frequency of attacks on this date is not indicative of a trend but is rather a reflection of its less frequent occurrence.
</p>
<p>
This exploration through time offers a comprehensive perspective on the rhythm of global terrorism. As you delve into this data, remember that each figure and pattern represents real-world incidents, each with its own story and impact. Treat this information with the gravity it deserves as you continue to uncover the temporal patterns of global terrorism.
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
                mapContainer.style.display = "block";
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
                textContainer.innerHTML = `<h2>Regional Impact: Unfolding Terrorism Trends Across Regions</h2>
<p>
This section provides a unique perspective on the impacts and trends of <strong>terrorism</strong> in diverse world regions. Use the interactive <strong>map</strong> to select a region of interest, visualizing the geographical scope of your analysis.
</p>
<p>
Complementing the map is a <strong>scatterplot</strong> showing fatal attacks within your chosen region. Each data point represents an attack, plotted against time and the number of casualties. Hover over a data point to reveal the event ID, country, number of casualties, and the year of the attack.
</p>
<p>
The "Regional Impact" section illuminates trends and patterns in <strong>terrorism</strong>, showcasing the countries within each region that have experienced the most severe attacks. The aim is to foster a better understanding of the geographical distribution and impact of terrorism.
</p>
<p>
Remember, each data point represents a tragic event in our shared history, urging us to learn from the past as we navigate the future.
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
                    div1.style.display = 'flex';
                    div1.style.justifyContent = 'center';
                    div1.style.alignItems = 'center';


                    // Ensure to re-create the div1_txt and extra_txt elements after removing them
                    div1_txt = document.createElement('div');
                    div1_txt.className = 'graph1_txt';
                    div1_txt.style.width = '100%';
                    div1_txt.style.height = '100%';
                    div1_txt.style.marginTop = '75px';
                    div1_txt.innerHTML = `<b>${regionSelect.value}</b>`;
                    div1_txt.style.fontSize = '30px';

                    extra_txt = document.createElement('div');
                    extra_txt.className = 'extra_txt';
                    extra_txt.style.width = '100%';
                    extra_txt.style.height = '100%';
                    extra_txt.style.marginTop = '10px';
                    
                    switch (regionSelect.value) {
                        case 'North America':
                            extra_txt.innerHTML = `<p>
The North American region, encompassing countries such as the United States, Canada, and Mexico, has seen a multitude of terrorism-related incidents over the past half-century. These incidents range greatly in their scale, impact, and underlying reasons. A deeper look into the historical context of the region can yield valuable insights into the landscape of terrorism:
</p>
<ul>
    <li>
        <strong>Early Period (1970-1990):</strong> Throughout the initial two decades, the region witnessed a medium-low frequency of incidents, many of which resulted in relatively low casualties. Nevertheless, there were significant high-casualty incidents, such as the bombing of Air India flight 182 off the coast of Ireland in 1985 that originated from Canada, and the Oklahoma City bombing in the United States in 1995.
    </li>
    <li>
        <strong>Post-2003 Period:</strong> There was a noticeable reduction in terrorist activity for a few years following 2003. This could potentially be attributed to heightened security protocols and counter-terrorism efforts, particularly in the aftermath of the September 11 attacks in 2001.
    </li>
    <li>
        <strong>Country-Specific Trends:</strong> The United States and Mexico are the most active countries in terms of the number of incidents, with the United States experiencing a larger frequency. This could be reflective of a variety of factors, such as differing political and socioeconomic conditions, as well as potential biases in reporting.
    </li>
</ul>
<p>
Despite these limitations, the data provides a useful starting point for understanding the intricacies of terrorism in North America. Further research and analysis, supplemented by additional data sources, could assist in revealing more detailed patterns and trends, inform policy-making, and contribute to efforts to enhance security and stability in the region.
</p>`;
                            break;
                        case 'Central America & Caribbean':
                            extra_txt.innerHTML = ` <p>
During the 1980s and early 1990s, Central America and the Caribbean endured a turbulent period characterized by increased instances of terrorism and violence. This challenging era, marked by political instability and conflict, was particularly severe in <a href="https://www.britannica.com/place/Guatemala" target="_blank">Guatemala</a>, <a href="https://www.britannica.com/place/Nicaragua" target="_blank">Nicaragua</a>, and <a href="https://www.britannica.com/place/El-Salvador" target="_blank">El Salvador</a>. Several critical factors contributed to the surge of terrorism and violence in this region:
</p>
<ul>
    <li>
        <strong>Cold War Politics:</strong> Central America became a strategic battleground during the Cold War, with proxy wars between anti-communist and left-leaning factions further destabilizing the region.
    </li>
    <li>
        <strong>Civil Wars and Revolutions:</strong> Nicaragua, El Salvador, and Guatemala were consumed by civil wars characterized by intense violence and acts of terrorism. These conflicts, inflamed by both internal and external influences, often saw left-wing guerrilla groups clashing against right-wing governments.
    </li>
    <li>
        <strong>Socioeconomic Inequality:</strong> The significant socioeconomic disparity in Central America created conditions that nurtured political unrest and violence. Marginalized communities frequently resorted to violent methods to express their discontent and advocate for change.
    </li>
    <li>
        <strong>Drug Trafficking:</strong> Central America's geographical position as a pivotal transit area for drug trafficking, particularly for cocaine transported from South America to the United States, resulted in an escalation of violence and terrorism as drug cartels used ruthless tactics to protect their operations.
    </li>
    <li>
        <strong>Legacy of Colonialism and Imperialism:</strong> The lingering effects of colonialism and imperialism in Central America led to political instability and social discord, creating an environment conducive to violence and terrorism.
    </li>
    <li>
        <strong>State Terrorism:</strong> Governments, such as Guatemala's, employed terrorist acts against their own citizens to suppress opposition and retain control, resulting in widespread human rights abuses.
    </li>
</ul>
<p>
These factors often interacted in complex ways, with circumstances differing considerably across countries. The region witnessed several lethal incidents, including the <a href="https://www.zinnedproject.org/news/tdih/el-mozote-massacre-in-el-salvador" target="_blank">El Mozote massacre</a> in El Salvador in 1981, with an estimated 800 to 1,000 fatalities, and the <a href="https://americanarchive.org/exhibits/newshour-cold-war/nicaragua">Nicaraguan revolution</a> in 1984 and 1985. These tragic events highlight the severe consequences of the violence and terrorism that plagued the region during this period.
</p>
<p>
The history of Central America and the Caribbean is an important case study in understanding the impacts of terrorism and violence within the backdrop of political instability, socioeconomic difficulties, and historical influences. A comprehensive examination of this history reveals the intricate dynamics that shape terrorism trends and their ensuing consequences.
</p>`;
                            break;
                        case 'South America':
                            extra_txt.innerHTML = `<p>
The trajectory of terrorism in South America, spanning from 1970 to 2020, is characterized by distinct phases of escalated activity, closely tied to specific regional contexts and socio-political events. Some of the most significant periods include:
</p>
<ul>
    <li>
        <strong>Dirty War in Argentina (1974-1983):</strong> Throughout the 1970s, Argentina emerged as a primary contributor to South America's terrorism landscape, likely a consequence of the Dirty War. This era witnessed state terrorism in Argentina against political dissidents and individuals perceived to be threats to the ruling military junta.
    </li>
    <li>
        <strong>The Lost Decade in Peru (1980-1990):</strong> Peru experienced a marked surge in terrorist activities during this time, which corresponded with the nation's social and economic crises. Often referred to as "The Lost Decade," this period was characterized by escalated conflict and instability.
    </li>
    <li>
        <strong>Colombian Conflict (1964-Present):</strong> Colombia has persistently faced high levels of terrorist activities from 1975 onwards, with the ongoing Colombian conflict being a substantial contributing factor. The 1980s, in particular, saw an escalation in violence across numerous regions of the country, leading to an overall surge in incidents of terrorism.
    </li>
</ul>
<p>
These periods highlight the complex nature of terrorism, which is frequently intertwined with a nation's social, political, and economic landscapes. A comprehensive understanding of these contexts is essential for interpreting trends and patterns in the data.
</p>`;
                            break;
                        case 'East Asia':
                            extra_txt.innerHTML = ` <p>
East Asia underwent a notable increase in terrorism activities from the 1990s through 2020, primarily driven by events in China and North Korea. Key nations that experienced these turbulent conditions included China, particularly its Xinjiang Uyghur Autonomous Region, and North Korea during a period of escalated geopolitical tension.
</p>
<p>
Several influential factors contributed to the rise of terrorism and violence in East Asia:
</p>
<ul>
    <li>
        <strong>Separatist Movements:</strong> The <a href="https://en.wikipedia.org/wiki/Xinjiang_conflict" target="_blank">Xinjiang conflict</a> in China, characterized by violent activities from Uyghur separatist groups, significantly contributed to the rise in terrorist incidents in the region. This conflict, rooted in religious, ethnic, and political issues, sparked a surge in violence and security challenges across East Asia.
    </li>
    <li>
        <strong>Geopolitical Tensions:</strong> East Asia has been a stage for significant geopolitical tensions, particularly involving North Korea. The <a href="https://en.wikipedia.org/wiki/2013_North_Korea_crisis" target="_blank">2013 North Korea crisis</a> exemplifies this, marked by heightened rhetoric from North Korea and threats of nuclear attacks against South Korea, Japan, and the United States. This crisis underlines the complexity of terrorism dynamics in East Asia, where geopolitical tensions often intertwine with potential acts of violence.
    </li>
</ul>
<p>
The combination of these elements led to a period of heightened activity, with specific incidents such as the Xinjiang conflict and the 2013 North Korea crisis significantly influencing the trend of terrorism in the region. These incidents not only affected East Asia but also had profound implications for global discussions on issues such as religious and ethnic conflicts, nuclear proliferation, and regional security.
</p>
<p>
The history of East Asia provides an insightful case study for understanding the impact of terrorism and violence within the context of political instability, ethnic and religious conflicts, and international tensions. A comprehensive examination of this history elucidates the intricate dynamics that influence terrorism trends and their resulting impacts.
</p>`;
                            break;
                        case 'Southeast Asia':
                            extra_txt.innerHTML = `<p>
Southeast Asia, a vibrant region marked by diverse cultures and robust economic growth, has had its share of challenges with regards to terrorism. Over the period of 1970 to 2020, the region witnessed numerous incidents attributed to various socio-political upheavals in different countries. The trend of terrorism in the region reflects the complexities of local conflicts, historical grievances, and the struggle for political power.
</p>
<ul>
    <li>
        <strong>Philippines:</strong> In the Philippines, the increase in terrorist activities from 1986 coincides with the People Power Revolution (also known as the EDSA Revolution). This peaceful demonstration marked the end of the Marcos regime and led to a period of political instability, potentially providing fertile ground for terrorist groups.
    </li>
    <li>
        <strong>Indonesia:</strong> The authoritarian rule of President Suharto, spanning from 1967 to the late 1990s, marked a tense period in Indonesian history. The public's dissatisfaction with corruption, nepotism, and lack of political freedom increased demands for political reform, which was met with resistance and resulted in a rise in terrorist incidents.
    </li>
    <li>
        <strong>Thailand:</strong> The escalation of terrorism in Thailand, particularly from 2004 onwards, can be traced to several intertwining factors. These include historical grievances in the southern regions, a separatist movement, radicalization, heavy-handed responses from security forces, and the presence of organized criminal networks. All these elements combined to create a persistent issue of terrorism in the country.
    </li>
</ul>
<p>
These instances highlight the complexities of terrorism in Southeast Asia. It's not just about individual events or actors, but rather a combination of factors—local conflicts, political power struggles, historical disputes—that come together to shape the landscape of terrorism. Recognizing these patterns and understanding the underlying causes are key steps towards developing effective counter-terrorism strategies and fostering long-term peace and stability in the region.
</p>`;
                            break;
                        case 'South Asia':
                            extra_txt.innerHTML = `<p>
In the last few decades of the 20th century and into the 21st century, South Asia has faced a challenging period marked by persistent instances of terrorism and violence. This era, characterized by political instability and conflict, has been especially prominent in <a href="https://www.britannica.com/place/India" target="_blank">India</a>, <a href="https://www.britannica.com/place/Pakistan" target="_blank">Pakistan</a>, and <a href="https://www.britannica.com/place/Afghanistan" target="_blank">Afghanistan</a>. Several critical factors have contributed to the prevalence of terrorism and violence in this region:
</p>
<ul>
    <li>
        <strong>Religious Extremism:</strong> South Asia has been a hotbed for religious extremism, with groups using religious ideologies to justify violent acts. This has been particularly prominent in the context of Islamist extremism.
    </li>
    <li>
        <strong>Political Instability:</strong> The political landscape of South Asia is marked by frequent changes in government, corruption, and weak governance structures. Such instability often creates vacuums that are exploited by terrorist groups.
    </li>
    <li>
        <strong>Socioeconomic Disparity:</strong> Despite rapid economic growth in some parts of South Asia, significant levels of poverty and socioeconomic disparity persist. Such inequality can fuel discontent and provide fertile grounds for recruitment by extremist groups.
    </li>
    <li>
        <strong>Territorial Disputes:</strong> Territorial disputes, most notably between India and Pakistan over Kashmir, have been a source of conflict and have spurred incidents of terrorism and violence.
    </li>
    <li>
        <strong>Legacy of Colonialism:</strong> The impact of colonial rule, particularly by the British Empire, has left lasting effects on the region, including border disputes and communal tension, which have often been triggers for terrorism and violence.
    </li>
    <li>
        <strong>State-Sponsored Terrorism:</strong> Accusations of state-sponsored terrorism, particularly between India and Pakistan, have further complicated the regional dynamics and contributed to the persistence of terrorism.
    </li>
</ul>
<p>
These factors often interact in complex ways, with circumstances differing significantly across countries. The region has witnessed several lethal incidents, including the <a href="https://www.britannica.com/event/Mumbai-terrorist-attacks-of-2008" target="_blank">2008 Mumbai attacks</a> in India, and the <a href="https://www.britannica.com/event/School-Attack-in-Peshawar-Pakistan" target="_blank">2014 Peshawar school massacre</a> in Pakistan. These tragic events underscore the severe consequences of the violence and terrorism that have plagued the region during this period.
</p>
<p>
The history of South Asia offers valuable insights into understanding the impacts of terrorism and violence within the backdrop of political instability, socioeconomic difficulties, and historical influences. A comprehensive examination of this history reveals the intricate dynamics that shape terrorism trends and their ensuing consequences.
</p>`;
                            break;
                        case 'Central Asia':
                            extra_txt.innerHTML = ` <p>
Despite an average level of terrorism incidents relative to other global regions, Central Asia has experienced periods of heightened activity, particularly between 1988 and 2000. This surge in incidents was largely due to several conflicts, including the First Nagorno-Karabakh War, the Tajikistani Civil War, and the wars in Abkhazia and South Ossetia, each resulting in substantial casualties.
</p>
<p>
Key conflicts that influenced the terrorism landscape in Central Asia include:
</p>
<ul>
    <li>
        <strong>Nagorno-Karabakh War:</strong> The <a href="https://www.bbc.com/news/world-europe-18270325" target="_blank">First Nagorno-Karabakh War</a> in Azerbaijan (1988-1994) significantly increased the number of terrorist incidents in the region.
    </li>
    <li>
        <strong>Tajikistani Civil War:</strong> The <a href="https://www.rferl.org/a/tajikistan-civil-war-20-years-later/28488152.html" target="_blank">Tajikistani Civil War</a> (1992-1997) led to a marked rise in terrorism activities in Tajikistan.
    </li>
    <li>
        <strong>Conflicts in Georgia:</strong> The <a href="https://www.rferl.org/a/war-abkhazia-25-years/29487023.html" target="_blank">War in Abkhazia</a> and the <a href="https://www.rferl.org/a/timeline-georgia-south-ossetia-conflict/27435424.html" target="_blank">conflict in South Ossetia</a> (1992-2000) significantly impacted the region's terrorism landscape.
    </li>
</ul>
<p>
While the region is heterogeneous in terms of terrorism incidents, with countries like Kazakhstan, Uzbekistan, and Armenia experiencing fewer attacks, the region has not been completely exempt from security challenges. For instance, Tajikistan saw an increase in terrorist incidents in 2019 and 2020, underlining the ongoing security issues in the region.
</p>
<p>
Central Asia, with its diverse experiences of terrorism, presents a complex picture of the terrorism landscape. While the overall number of attacks aligns with global averages, the region's history of specific conflicts contributed significantly to periods of heightened activity. Understanding the historical and local context is essential for comprehending the dynamics of terrorism in Central Asia.
</p>`;
                            break;
                        case 'Western Europe':
                            extra_txt.innerHTML = `<p>
During the period from 1980 to 2020, several countries in Western Europe have experienced significant incidents of terrorism. Here are some notable examples:
</p>

<ul>
    <li>
        <strong>The United Kingdom:</strong> The UK has faced terrorism incidents, such as the Brighton Hotel Bombing in 1984, the Bishopsgate Bombing in 1993, the Docklands Bombing in 1996, the Omagh Bombing in 1998, the 2005 London Bombings, the 2007 Glasgow International Airport Attack, and the 2013 Woolwich Attack.
    </li>
    <li>
        <strong>Greece:</strong> Greece witnessed various incidents related to terrorism, including attacks by the Revolutionary Organization 17 November (17N), bombings and assassinations, attacks on foreign diplomats, and anarchist violence.
    </li>
    <li>
        <strong>Spain:</strong> Spain has dealt with terrorism from groups like ETA (Euskadi Ta Askatasuna), Islamist extremist groups, and anarchist groups. The Madrid train bombings in 2004 and attacks by ETA are notable examples.
    </li>
    <li>
        <strong>France:</strong> France has experienced significant terrorist attacks, such as the Paris Metro Bombing in 1982, the Paris Airplane Bombing in 1983, the Marseille Train Station Bombing in 1983, the Paris Supermarket Bombing in 1985, the 2015 Paris Attacks, the 2016 Nice Truck Attack, and the Charlie Hebdo Shooting in 2015.
    </li>
</ul>

<p>
These incidents reflect the historical events and periods that these countries have gone through. They have faced challenges related to political instability, civil wars, socioeconomic inequality, drug trafficking, colonialism, and state terrorism. Governments have implemented counterterrorism measures to address these threats.
</p>

<p>
It is important to note that the examples mentioned here represent a fraction of the terrorism incidents that occurred in each country during the specified period. The impact of terrorism in these regions is complex and interconnected with their unique historical contexts.
</p>`;
                            break;
                        case 'Eastern Europe':
                            extra_txt.innerHTML = ` <p>
Eastern Europe, particularly Russia and Ukraine, has experienced substantial conflict and terrorism. This trend can be attributed to numerous long-standing conflicts and political crises.
</p>
<p>
Key conflicts and incidents that have shaped the terrorism landscape in Eastern Europe include:
</p>
<ul>
    <li>
        <strong>Conflicts in Russia:</strong> The prominence of terrorism in Russia can be traced back to enduring conflicts in regions such as <a href="https://en.wikipedia.org/wiki/Second_Chechen_War">Chechnya</a>, <a href="https://en.wikipedia.org/wiki/War_of_Dagestan">Dagestan</a>, and <a href="https://en.wikipedia.org/wiki/War_in_Ingushetia">Ingushetia</a>. Separatist movements and insurgencies in these areas have spurred numerous terrorist attacks over the years, including the 2010 <a href="https://en.wikipedia.org/wiki/2010_Moscow_Metro_bombings">Moscow Metro bombings</a>, a major incident that drew international attention to Russia's security challenges.
    </li>
    <li>
        <strong>Conflict in Ukraine:</strong> A significant surge in terrorist incidents in Ukraine in 2015 is largely linked to the political and military crisis that emerged in 2014. The <a href="https://en.wikipedia.org/wiki/Annexation_of_Crimea_by_the_Russian_Federation#:~:text=In%20February%20and%20March%202014,the%20wider%20Russo-Ukrainian%20War.">annexation of Crimea by Russia</a> and the subsequent pro-Russian unrest in Eastern Ukraine led to a full-scale war in the Donbas region, causing a significant increase in violence and security challenges in the region.
    </li>
</ul>
<p>
Beyond Russia and Ukraine, other countries in Eastern Europe have also experienced isolated incidents of terrorism, although these incidents are generally fewer and less impactful.
</p>
<p>
Eastern Europe, with its diverse experiences of terrorism, presents a complex picture of the terrorism landscape. The substantial impact of conflicts in Russia and Ukraine underscores the importance of understanding local and historical contexts when studying the dynamics of terrorism in this region.
</p>`;
                            break;
                        case 'Middle East & North Africa':
                            extra_txt.innerHTML = `<p>
The Middle East and North Africa (MENA) region, with its rich history and cultural diversity, has been significantly marked by conflict and terrorism. Several countries within the region have experienced recurring periods of unrest and violence due to various factors. Understanding the complex tapestry of the region requires a closer look at key events and issues that have shaped its terrorism landscape:
</p>
<ul>
    <li>
        <strong>Israeli-Palestinian Conflict:</strong> The State of Israel has been notably affected by the ongoing Israeli-Palestinian conflict, leading to regular occurrences of terrorism over decades. This enduring conflict continues to shape the region's socio-political landscape and underscores the necessity for lasting peace initiatives.
    </li>
    <li>
        <strong>Algerian Revolution:</strong> The Algerian War of Independence against the French colonial rule (1954-1962), also known as the Algerian Revolution, was a period of intense conflict and violent tactics, including terrorism. The war left an indelible impact on Algeria and influenced its post-independence political and social structures.
    </li>
    <li>
        <strong>Civil War in Syria:</strong> Syria has been engulfed in a long-lasting civil war marked by pervasive violence and terrorism. This conflict has not only destabilized Syria internally, but also had ripple effects across the region and the world.
    </li>
    <li>
        <strong>Egyptian Revolution:</strong> Egypt went through a significant period of unrest during the Egyptian Revolution of 2011, part of the wider Arab Spring. This event catalyzed substantial security challenges and marked a major turning point in the country's history.
    </li>
    <li>
        <strong>Iranian Revolution:</strong> The Iranian Revolution of 1979 led to a major shift in the regional power dynamics, and its consequences have had long-term effects on terrorism and regional conflicts. The establishment of an Islamic Republic has influenced Iran's relationships with other countries, both in and out of the region.
    </li>
    <li>
        <strong>Iraq Wars:</strong> The two Iraq wars (1991 and 2003) significantly destabilized the country and led to an increase in terrorism activities. The 2003 invasion led to the rise of groups such as Al-Qaeda in Iraq, which later evolved into ISIS.
    </li>
    <li>
        <strong>Conflict in Yemen:</strong> Yemen has been marred by high terrorist activities since 2010, attributable to political instability, weak governance, geographic challenges, socioeconomic issues, and sectarian tensions. The presence of groups like Al-Qaeda in the Arabian Peninsula (AQAP) has further exacerbated the security situation.
    </li>
    <li>
        <strong>Terrorism in Turkey:</strong> Turkey, straddling Europe and Asia, has experienced considerable terrorism activity throughout its history due to various internal and external factors, reflecting the multifaceted nature of terrorism in the region.
    </li>
</ul>
<p>
Each country in the MENA region has its unique experiences and historical contexts. The complexities within the MENA region, coupled with the severity of the events witnessed, underscore the importance of continuous research and analysis. This ongoing exploration helps to address the root causes of terrorism and fosters the development of strategies to enhance stability and security in the region.
</p>`;
                            break;
                        case 'Sub-Saharan Africa':
                            extra_txt.innerHTML = `<p>
Between 1980 and 2020, Sub-Saharan Africa has witnessed significant incidents of terrorism across various countries. Here are some notable examples:
</p>

<ul>
    <li>
        <strong>Democratic Republic of Congo (DRC):</strong> The DRC has faced terrorist incidents involving groups such as the Allied Democratic Forces (ADF), Nationalist and Integrationist Front (FNI), Democratic Forces for the Liberation of Rwanda (FDLR), and the Lord's Resistance Army (LRA).
    </li>
    <li>
        <strong>Nigeria:</strong> Nigeria has confronted terrorism challenges with groups like Boko Haram, Movement for the Emancipation of the Niger Delta (MEND), and conflicts between Fulani herdsmen and farming communities.
    </li>
    <li>
        <strong>Angola:</strong> Angola experienced acts of terrorism during the civil war between the MPLA government and the UNITA rebel group.
    </li>
    <li>
        <strong>Rwanda:</strong> Rwanda witnessed acts of terrorism during the civil war and genocide of 1994, involving the Rwandan Patriotic Front (RPF) and extremist Hutu groups.
    </li>
    <li>
        <strong>Somalia:</strong> Somalia saw a surge in terrorism primarily driven by Al-Shabaab, targeting government institutions, military bases, and civilians.
    </li>
    <li>
        <strong>Uganda:</strong> Uganda faced terrorism challenges with groups like the Lord's Resistance Army (LRA), Allied Democratic Forces (ADF), and incidents such as the hijacking of Ethiopian Airlines Flight 961 and coordinated bombings in Kampala.
    </li>
</ul>

<p>
These incidents occurred in the context of armed conflicts, political instability, ethnic tensions, and weak governance. Governments and international actors have made efforts to address terrorism and enhance security in the region. However, it's important to note that the examples mentioned here represent a fraction of the terrorism incidents that occurred in each country during the specified period.
</p>`;
                            break;
                        case 'Australasia & Oceania':
                            extra_txt.innerHTML = ` <p>
The Australasia & Oceania region, known for its diverse cultures and unique geographical features, has generally experienced a relatively low number of terrorist attacks. Nevertheless, there have been periods of notable activity and incidents that have left a significant mark on the region's history of terrorism. Below are some key events and issues that have shaped the terrorism landscape in this area:
</p>
<ul>
    <li>
        <strong>Bougainville Conflict:</strong> Between 1988 and 1998, the region saw a notable increase in incidents with higher casualties, largely attributed to the Bougainville conflict in Papua New Guinea. This long-standing armed conflict, rooted in socio-political and economic issues, had far-reaching consequences and led to a surge in violence and security challenges throughout the region. For more information about the Bougainville conflict, please visit the <a href="https://www.c-r.org/programme/pacific/bougainville-conflict-focus" target="_blank">link</a>.
    </li>
    <li>
        <strong>Christchurch Mosque Shootings:</strong> In 2019, an outlier incident occurred in New Zealand, resulting in up to 43 casualties. Known as the <a href="https://www.rnz.co.nz/news/chch-terror" target="_blank">Christchurch mosque shootings</a>, this event stands out due to its severity and serves as a tragic reminder of the potential impact of terrorism, even in regions with typically low activity. The shootings had a profound effect not only on New Zealand but also on the global discourse surrounding extremism and the need for unity against hatred.
    </li>
</ul>
<p>
While the number of attacks in the Australasia & Oceania region remains relatively low compared to other regions, these significant incidents reveal the broader context of terrorism within the area. The Bougainville conflict and the Christchurch mosque shootings serve as critical factors in understanding the region's experience with terrorism. Comprehending the local and historical context is crucial for understanding the dynamics of terrorism in this region.
</p>`;
                            break;
                        default:
                            extra_txt.innerHTML = ``;
                            break;
                    }


                    graphContainer.appendChild(div1_txt);
                    graphContainer.appendChild(div1);
                    graphContainer.appendChild(extra_txt);
                   

                    deselectCountries();

                    for (const index in regionCountries[regionSelect.value]) {
                        const country = regionCountries[regionSelect.value][index];
                        highlightCountry(country);
                    }

                    const dataUrl = `https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/master/data/regions/victims/${encodeURIComponent(regionSelect.value) }.csv`
                    d3.csv(dataUrl)
                        .then(data => {

                            plotScatterPlot(data);
                        })
                        .catch(error => console.error('Error:', error));
                });

                break;
            case 5:
                mapContainer.style.display = "block";
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
                textContainer.innerHTML = `<h3>Country-Specific Analysis: Unveiling Patterns in Terror</h3>

<p>
In the Country-Specific Analysis section, you have the power to expose the rhythm of terrorism in a selected country. By choosing a country from the dropdown menu, the map springs to life, highlighting your chosen territory, and a streamgraph unfurls beneath.
</p>

<p>
The <b>streamgraph</b> is a visual symphony, depicting the frequency of terrorist attacks across time. The x-axis dances through the months, while the width of the stream pulses to the beat of the number of attacks in each month.
</p>

<p>
The design of this feature is purposeful, yet open-ended. It provides a detailed tableau of terrorism patterns for a chosen country, but the interpretation of this tableau is an open invitation. Each user is an analyst, free to explore, scrutinize, and draw personal insights.
</p>

<p>
The "Country-Specific Analysis" feature offers an intuitive interface to probe the patterns of terrorism. As you navigate this streamgraph, remember that every crest and trough represents a moment of terror that has impacted lives and communities. Use this information responsibly as you continue your exploration of global terrorism patterns.
</p>
`;

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
                    div1.style.display = 'flex';
                    div1.style.justifyContent = 'center';
                    div1.style.alignItems = 'center';


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
                mapContainer.style.display = "block";
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
                defaultViz();
                textContainer.innerHTML = `<h2>Welcome to 'Unveiling Patterns: A Data-Driven Insight into Global Terrorism'</h2>
                        <p>Our platform brings you an <i>interactive exploration</i> of data sourced from the <b>Global
                                Terrorism
                                Database (GTD)</b>. We delve into the depths of half a century, from 1970 to 2020, but please note that the
                            <i>year 1993 is
                                missing</i> from the GTD. </p>
                        <p> </p>
                        <h3 style="padding-left: 25px;">🔍 Our Aim</h3>
                        <p>Our mission is to present an <b>unbiased, comprehensive view of global terrorism patterns</b>. We've focused on
                            diverse
                            facets, including <i>attack frequency, casualties, seasonality, regional trends, and methods and targets of
                                attacks</i>.
                        </p>
                        <p> </p>
                        <h3 style="padding-left: 25px;">🎨 Interactive Visualizations</h3>
                        <p>We've carefully designed <b>various interactive visualizations</b>, each honed to highlight specific aspects of the
                            data.
                            From an <i>overview of terrorist groups and their preferred methods of attack</i>, to a <i>deep-dive into
                                country-specific
                                trends</i>, we invite you to navigate these visuals and unearth the <b>hidden patterns of global terrorism</b>.
                        </p>
                        <p> </p>
                        <h3 style="padding-left: 25px;">🌐 Global Impact</h3>
                        <p>By presenting this data, our goal is to foster a <b>global understanding of the patterns and impacts of
                                terrorism</b>. We
                            must mention the <i>sensitive nature of this topic</i>, and we urge you to handle the information with care. </p>
                        <p> </p>
                        <h3 style="padding-left: 25px;">🎯 Relevance</h3>
                        <p>Grasping the <b>patterns of terrorism</b> is vital for everyone – from policymakers and security agencies, to
                            researchers
                            and everyday citizens. We hope this platform aids in <i>comprehending the scope of this global issue, identifying
                                hotspots, discerning trends, and potentially, inferring underlying causes and implications</i>. </p>
                        <p> </p>
                        <h3 style="padding-left: 25px;">📚 Our Objective</h3>
                        <p>The goal of this project is to offer an <b>accessible tool for understanding the landscape of global terrorism</b>.
                            By doing
                            so, we aim to contribute to informed discussions, policy making, and educational endeavors. We believe in <i>data
                                neutrality</i>, providing an unbiased view while leaving room for interpretation based on the data. </p>
                        <p> </p>
                        <h3 style="padding-left: 25px;">🚀 Ready to Begin?</h3>
                        <p>Feel free to embark on your journey by selecting any of the five categories. If you need assistance navigating the
                            website, our 'Help' button on the top right corner is your guide. Let's start <b>uncovering patterns</b> together.
                        </p>`;
        }

    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Optional: Adds smooth scrolling animation
        });
    }   

//----------------------------------------------------------------------------//
    function defaultViz() {

        if (dotsLayerGroup) {
            // Remove the existing orange dots layer group from the map
            mymap.removeLayer(dotsLayerGroup);
        }

        const dataUrl = `https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/master/data/miscellaneous/kills_loc_10.csv`
        d3.csv(dataUrl)
            .then(data => {
                densityMap(data)
            })
            .catch(error => console.error('Error:', error));

    }

    function densityMap(data) {
        // Create a new layer group to hold the dots
        dotsLayerGroup = L.layerGroup().addTo(mymap);

        // Define your color scale
        const colorScale = d3.scaleLog()
            .domain([1, 1700]) // input domain: min and max nkill
            .range([0.7, 0]); // output range: 0-1 range for color interpolation

        data.forEach((row) => {
            const latitude = parseFloat(row.latitude);
            const longitude = parseFloat(row.longitude);

            // Get color for this marker based on nkill
            const nkill = parseFloat(row.nkill);
            const color = d3.interpolateSpectral(colorScale(nkill));

            var circleMarker = L.circleMarker([latitude, longitude], {
                fillColor: color,
                color: color,
                fillOpacity: 1,
                stroke: false,
                radius: 2.5
            }).addTo(dotsLayerGroup);

            var content = `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div class="color-circle" style="background-color: ${color}; padding-right: 10">
                    </div>
                    <span>Losses: <b>${d3.format("d")(row.nkill)}</b></span>
                </div>`;



            circleMarker.bindPopup(content);
            circleMarker.on('click', function (e) {
                this.openPopup();
            });         
        });

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
            .attr("x", 0.6*innerWidth)
            .attr("y", innerHeight + 50)
            .text("Casualties")
            .style("font-weight", "bold")
            .style("color", "dimgray");

        g.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("x", 0 - (innerHeight / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Group")
            .style("font-weight", "bold")
            .style("color", "dimgray");


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

        var margin = { top: 30, right: 30, bottom: 30, left: 110 };
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

        g.append("text")
            .attr("text-anchor", "end")
            .attr("x", 0.6 * innerWidth)
            .attr("y", innerHeight + 75)
            .text("Group")
            .style("font-weight", "bold")
            .style("color", "dimgray");

        var y = d3.scaleBand()
            .range([innerHeight, 0])
            .domain(data.map(d => weaponSubtypeAliases[yValue(d)]))
            .padding(0.01);
        g.append("g")
            .call(d3.axisLeft(y));

        g.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("x", 0 - (innerHeight / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Weapon Used")
            .style("font-weight", "bold")
            .style("color", "dimgray");


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
        g.append("text")
            .attr("text-anchor", "end")
            .attr("x", 0.6 * innerWidth)
            .attr("y", innerHeight - 30 )
            .text("Month")
            .style("font-weight", "bold")
            .style("color", "dimgray");

        var y = d3.scaleLinear()
            .domain([-d3.max(countsByMonth) * 2.5, d3.max(countsByMonth) * 2.5])
            .range([ innerHeight, 0 ]);
        g.append("g")
            .call(d3.axisLeft(y).tickFormat(d => d3.format('.2s')(Math.abs(d))))
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

                scrollToTop();
                updateGraph(2);
                updateButton(2);
            });
    }

    function plotSeasonality(data) {
        const width = 500;
        const height = 600;

        var margin = { top: 30, right: 30, bottom: 30, left: 50 };
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

        g.append("text")
            .attr("text-anchor", "end")
            .attr("x", 0.6 * innerWidth)
            .attr("y", innerHeight + 45)
            .text("Month")
            .style("font-weight", "bold")
            .style("color", "dimgray");

        var y = d3.scaleBand()
            .range([innerHeight, 0])
            .domain(data.map(d => yValue(d)))
            .padding(0.01);
        g.append("g")
            .call(d3.axisLeft(y));

        g.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("x", 0 - (innerHeight / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Day of the Month")
            .style("font-weight", "bold")
            .style("color", "dimgray");

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

        g.append("text")
            .attr("text-anchor", "end")
            .attr("x", 0.6 * innerWidth)
            .attr("y", innerHeight + 45)
            .text("Year")
            .style("font-weight", "bold")
            .style("color", "dimgray");

        var y = d3.scaleLinear()
            .domain([0, 0])
            .range([innerHeight, 0]);
        g.append("g")
            .attr("class", "y-axis")
            .call(d3.axisLeft(y))
            .attr("opacity", 0);

        g.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("y", -margin.left)
            .attr("x", -innerHeight / 2)
            .attr("dy", ".75em")
            .attr("transform", "rotate(-90)")
            .text("Casualties")
            .style("font-weight", "bold")
            .style("color", "dimgray");

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
            .duration(200) //1000 before
            .attr("opacity", 1)
            .call(d3.axisBottom(x).tickFormat(d3.format("d")));

        y.domain([0, maxNkill])  // Cap on the max number of casualties
        g.select(".y-axis")
            .transition()
            .duration(200) //1000 before
            .attr("opacity", 1)
            .call(d3.axisLeft(y));

        g.selectAll("circle")
            .transition()
            .delay(function (d, i) { return (i * 3) })
            .duration(20) //200 before
            .attr("cx", function (d) { return x(+d.year); })
            .attr("cy", function (d) { return y(+d.nkill); })

    }

    function populateMap(data, targetsDisplay) {

        // Check if the dots layer group already exists
        if (dotsLayerGroup) {
            // Remove the existing orange dots layer group from the map
            mymap.removeLayer(dotsLayerGroup);
        }

        // Create a new layer group to hold the orange dots
        dotsLayerGroup = L.layerGroup().addTo(mymap);

        data.forEach((row) => {
            const latitude = parseFloat(row.latitude);
            const longitude = parseFloat(row.longitude);

            let target_opacity = 0;
            if (targetsDisplay.includes(row.targtype1_txt)) {
                target_opacity = 0.3;
            }


            var circleMarker = L.circleMarker([latitude, longitude], {
                fillColor: colorMapping[row.targtype1_txt],
                color: colorMapping[row.targtype1_txt],
                fillOpacity: target_opacity,
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
            circleMarker.on('click', function (e) {
                this.openPopup();
            });                
        });
    }
//---------------------------------------------------------------------------//
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

//--------------------------------------------------------------------------//

    
    
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

    // mymap.fitBounds(geojson.getBounds());


    function highlightCountry(countryName) {

    var countryNames = getGeoJsonCountryNames(countryName);
    for (var i = 0; i < countryNames.length; i++) {
        var countryFeature = GeoJsonData.features.find(feature => feature.properties.name === countryNames[i]);
        if (countryFeature) {
        // Create a Leaflet GeoJSON layer with only the specified country feature
        var countryLayer = L.geoJson(countryFeature, {
            style: {
            fillColor: '#e53f71',
            weight: 4,
            color: '#9c3587',
            fillOpacity: 0.75
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

