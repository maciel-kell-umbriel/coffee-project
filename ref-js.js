"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if ((coffee.roast === selectedRoast || selectedRoast === 'All') && coffee.name.toLowerCase().includes(searchbar.value.toLowerCase())) {
            filteredCoffees.push(coffee);

        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// create flex box, set to rows, and wrap.
// each name needs to be a div flex item. 50% width

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

function addCoffees(e) {
    e.preventDefault();
    console.log(e)
    var addID = coffees.length + 1;
    var addName = newCoffee.value.toString();
    var addRoast = newRoast.value.toString();
    var input = {id: addID, name: addName, roast: addRoast};
    coffees.push(input);
    console.log(coffees);
    tbody.innerHTML = renderCoffees(coffees);
}


var tbody = document.querySelector('#coffees');
var submitButton2 = document.querySelector('#submit2');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchbar = document.querySelector('#search-bar');

var newCoffee = document.querySelector('#addNewCoffee')
var newRoast = document.querySelector('#newRoastSelection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
submitButton2.addEventListener('click', addCoffees);

searchbar.addEventListener('keyup', updateCoffees);
