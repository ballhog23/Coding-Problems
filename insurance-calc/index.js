'use strict';

const calculateButton = document.getElementById('calculate-button');
const priceSpan = document.getElementById('price');

calculateButton.addEventListener('click', () => {
    // save dropdown values to variables
    const liabilityTiersDropdown = document.querySelector('#liability-tiers');
    const liabilityTiersDropdownItem = liabilityTiersDropdown.value;
    const stateDropdown = document.querySelector('#state');
    const stateDropdownItem = stateDropdown.value;
    const equipmentInsuranceDropdown = document.querySelector('#equipment-insurance');
    const equipmentInsuranceDropdownItem = equipmentInsuranceDropdown.value;

    // calculate total of dropdown values
    const calculateDropdownItems =
    Number(liabilityTiersDropdownItem) +
    Number(stateDropdownItem) +
    Number(equipmentInsuranceDropdownItem)
    
    // set priceSpan text to total of the calculated dropdown values
    priceSpan.innerHTML = calculateDropdownItems;
})