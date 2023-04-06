// Get references to HTML elements
const ipInput = document.getElementById('ipInputfield');
const ipBtn = document.getElementById('ipBtn');
const ipInfoDiv = document.getElementById('ipInfo');

// Function to display IP information in HTML
function displayIpInfo(data) {
    // Create an array of objects for the IP data
    const ipData = [
        { label: 'IP Address', value: data.ip },
        { label: 'City', value: data.city },
        { label: 'Postal Code', value: data.postal },
        { label: 'Region', value: data.region },
        { label: 'Country', value: data.country_name },
        { label: 'Languages', value: data.languages },
        { label: 'Latitude', value: data.latitude },
        { label: 'Longitude', value: data.longitude },
        { label: 'Timezone', value: data.timezone },
        { label: 'Organization', value: data.org },
        { label: 'Country Calling Code', value: data.country_calling_code	 },
        { label: 'Currency', value: data.currency_name	 },
        { label: 'Time Zone', value: data.timezone	 },
        { label: 'Country Specific TLD (top-level domain)', value: data.country_tld	 }

    ];

    // Create a list element for the IP data
    const ipList = document.createElement('ul');

    // Loop through the IP data and create list items
    ipData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${item.label}:</strong> ${item.value}`;
        ipList.appendChild(listItem);
    });

    // Clear any existing IP information from the div and add the new list
    ipInfoDiv.innerHTML = '';
    ipInfoDiv.appendChild(ipList);
}

// Fetch IP information for the user's own IP when the page loads
fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => displayIpInfo(data));

// Add event listener to search button
ipBtn.addEventListener('click', () => {
    const ip = ipInput.value.trim();

    // Fetch IP information for the entered IP address
    fetch(`https://ipapi.co/${ip}/json/`)
        .then(response => response.json())
        .then(data => displayIpInfo(data))
        .catch(error => console.log(error));
});
