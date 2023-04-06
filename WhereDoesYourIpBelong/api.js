// The DOMContentLoaded event is used to ensure that the JavaScript code is executed only after the HTML has finished loading.
document.addEventListener("DOMContentLoaded", () => {
    const ipInput = document.getElementById("ipInputfield");
    const ipBtn = document.getElementById("ipBtn");

    
    window.onload = function() {
        fetch('https://ipapi.co/json')
          .then(response => response.json())
          .then(data => {
            console.log(data); // Printed in console just in case.
            for (const [key, value] of Object.entries(data)) {
                const li = document.createElement("li");
                li.innerText = `${key}: ${value}`;
                ipInfoList.appendChild(li);
            }
        })
          .catch(error => console.error(error));
      };
      
    // Function to get the IP and load in the console the hole JSON only when you click the button.
    ipBtn.addEventListener("click", () => {
        const ip = ipInput.value;
        fetch(`https://ipapi.co/${ip}/json`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Printed in console just in case.
                for (const [key, value] of Object.entries(data)) {
                    const li = document.createElement("li");
                    li.innerText = `${key}: ${value}`;
                    ipInfoList.appendChild(li);
                }
            })
            .catch(error => {
                console.error(error);
                // Handle any errors that occur during the fetch request here.
            });
    });
});
