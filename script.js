const userInput = document.querySelector("#number");
const convertButton = document.querySelector("#convert-btn");
const outputContainer = document.querySelector("#output-container");
const outputDiv = document.querySelector("#output");

function convertToRoman(input) {
    const romanRef = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let output = '';

    if (input === "") {
        outputDiv.innerHTML = `
        <p>Please enter a valid number.</p>
        `;
        outputContainer.classList.add('invalid-output-container', 'shake-warning');
    } else if (input < 1) {
        outputDiv.innerHTML = `
        <p>Please enter a number greater than or equal to 1.</p>
        `;
        outputContainer.classList.add('invalid-output-container', 'shake-warning');
    } else if (input >= 4000) {
        outputDiv.innerHTML = `
        <p>Please enter a number less than or equal to 3999.</p>
        `;
        outputContainer.classList.add('invalid-output-container', 'shake-warning');
    } else {
        for (let key in romanRef) {
            while (input >= romanRef[key]) {
                output += key;
                input -= romanRef[key];
            };
        };
    
        outputDiv.innerHTML = `
        <p>${output}</p>
        `;
        outputContainer.classList.add('output-container');
    }
    
    outputContainer.style.display = "flex";
    outputDiv.style.display = "block";
};

convertButton.addEventListener('click', function() {
    outputContainer.className = "";
    void outputContainer.offsetWidth; //force re-render element
    convertToRoman(userInput.value);
});

userInput.addEventListener('keypress', function(event) {
    if(event.key === "Enter") {
        convertButton.click();
    }
})

