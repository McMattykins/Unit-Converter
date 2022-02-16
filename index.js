/* 
Key Feature of page:
The convertions are displayed using template literals and the units 
will be displayed as either singular or plural based on it's value.
 */

let unitEl = document.getElementById("unit-el");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");
let inputEl = document.getElementById("input-el");
let unitValue = 1;

//Coefficients for conversions
let m2ft = 3.28084;
let l2gal = 0.2199692;
let kg2lb = 2.204623;

//Initialize
unitEl.textContent = unitValue;
convertion();

//Update the value on key up
inputEl.onchange = function () {
  if (this.value === "" || this.value < 0) {
    return;
  }
  unitValue = parseFloat(this.value);
  console.log(typeof unitValue, unitValue);
  unitEl.textContent = unitValue;
  convertion();
};

function convertion() {
  //Calculates and results all reduced to 3 decimal places
  let feet = (unitValue * m2ft).toFixed(3);
  let meters = (unitValue / m2ft).toFixed(3);
  let gallons = (unitValue * l2gal).toFixed(3);
  let liters = (unitValue / l2gal).toFixed(3);
  let kilograms = (unitValue * kg2lb).toFixed(3);
  let pounds = (unitValue / kg2lb).toFixed(3);
  //Updates the length convertions and conjugates units
  lengthEl.textContent = `
        ${unitValue} ${unitValue === 1 ? "meter" : "meters"} = 
        ${feet} ${feet === 1 ? "foot" : "feet"} | 
        ${unitValue} ${unitValue === 1 ? "foot" : "feet"} = 
        ${meters} ${meters === 1 ? "meter" : "meters"} 
        `;
  //Updates the volume convertions and conjugates units
  volumeEl.textContent = `
        ${unitValue} ${unitValue === 1 ? "liter" : "liters"} = 
        ${gallons} ${gallons === 1 ? "gallon" : "gallons"} | 
        ${unitValue} ${unitValue === 1 ? "gallon" : "gallons"} = 
        ${liters} ${liters === 1 ? "liter" : "liters"} 
        `;
  //Updates the mass convertions and conjugates units
  massEl.textContent = `
        ${unitValue} ${unitValue === 1 ? "kilogram" : "kilograms"} = 
        ${pounds} ${pounds === 1 ? "pound" : "pounds"} | 
        ${unitValue} ${unitValue === 1 ? "pound" : "pounds"} = 
        ${kilograms} ${kilograms === 1 ? "kilogram" : "kilograms"} 
        `;
}
