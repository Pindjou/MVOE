'use strict';

const element = {};

// let mark = 'Toyota';
// let model = 'yaris';
// let year = '2006';
// let price = '4.2 €';
// let consommation = 'Essence';
// let motorVolume = '1.8';
// let kilometer = '80000';
// let airCondition = 'Air Condition';
// let interrior = 'cloth';
// let gearBox = 'Manual Gear Box';
// let adressToVisibility = 'Bonaberi 4 étages';
// let image = 'https://images.unsplash.com/photo-1592805723127-004b174a1798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80'








let removeCarInTheParkingItemButton = document.getElementsByClassName('removeCarInTheParkingItemButton');

// console.log(removeCarInTheParkingItemButton.innerHTML);

for (let i = 0; i < removeCarInTheParkingItemButton.length; i++) {

    let button = removeCarInTheParkingItemButton[i];
    button.addEventListener('click', function () {
        console.log("clicked");
    });
}



// let carData = {
//     mark,
//     modell,
//     year,
//     price,
//     consommation,
//     motorVolume,
//     kilometer,
//     airCondition,
//     interrior,
//     gearBox,
//     adressToVisibility,
//     image,

// }

// let avensis = carData;

// let yaris = carData;

// yaris.mark = "Toyota";
// yaris.modell = "yaris";
// yaris.year = "2009";
// yaris.price = "3,4";
// yaris.consommation = "Diesel";
// yaris.motorVolume = "1.3";
// yaris.kilometer = "102121";
// yaris.airCondition = "AC";
// yaris.interrior = "Leder";
// yaris.gearBox = "Automatic";
// yaris.adressToVisibility = "Akwa";
// yaris.image = "https://images.unsplash.com/photo-1564260686-3939531e5532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80";


// let carsData = [avensis, yaris];



// // console.log(yaris)


// localStorage.setItem("clicked", JSON.stringify(carsData));
// // localStorage.setItem("clicked", JSON.stringify(avensis));
// // localStorage.setItem("clicked", JSON.stringify(yaris));


// let objAutoAvensis = JSON.parse(localStorage.getItem("clicked"));

// let marque = objAutoAvensis[0].mark;
// let modell = objAutoAvensis[0].modell;
// let firstImage = objAutoAvensis[0].image;
// let avennisTotal = objAutoAvensis[0].price;



// let setAvensisToParking = document.getElementsByvalue('4,20 € pour ajouter dans votre parking').length;


// let setYarisToParking = document.getElementsByvalue('3,20 € pour ajouter dans votre parking').length;

for (let i = 0; i < setAvensisToParking; i++) {


    document.querySelector("#marke").innerHTML = marque;
    document.querySelector("#modell").innerHTML = modell;
    document.querySelector("#image").innerHTML = image;

    document.querySelector("#avensisTotal").innerHTML = price+setAvensisToParking[i];



}










//paypal-button- zum bezahlen

function initPayPalButton() {
    // paypal.Buttons({
    //     style: {
    //         shape: 'pill',
    //         color: 'blue',
    //         layout: 'vertical',
    //         label: 'buynow',

    //     },

    //     createOrder: function (data, actions) {
    //         return actions.order.create({
    //             purchase_units: [{ "description": "YARIS", "amount": { "currency_code": "EUR", "value": 50 } }]
    //         });
    //     },

    //     onApprove: function (data, actions) {
    //         return actions.order.capture().then(function (orderData) {

    //             // Full available details
    //             console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

    //             // Show a success message within this page, e.g.
    //             const element = document.getElementById('paypal-button-container');
    //             element.innerHTML = '';
    //             element.innerHTML = '<h3> Super, Merci pour ton payment!</h3>';

    //             // Or go to another URL:  actions.redirect('thank_you.html');

    //         });
    //     },

    //     onError: function (err) {
    //         console.log(err);
    //     }
    // }).render('#paypal-button-avensis');



    paypal.Buttons({
        style: {
            shape: 'pill',
            color: 'blue',
            layout: 'vertical',
            label: 'buynow',

        },

        createOrder: function (data, actions) {
            return actions.order.create({
                purchase_units: [{ "description": "YARIS", "amount": { "currency_code": "EUR", "value": 15 } }]
            });
        },

        onApprove: function (data, actions) {
            return actions.order.capture().then(function (orderData) {

                // Full available details
                console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

                // Show a success message within this page, e.g.
                const element = document.getElementById('paypal-button-container');
                element.innerHTML = '';
                element.innerHTML = '<h3> Super, Merci pour ton payment!</h3>';

                // Or go to another URL:  actions.redirect('thank_you.html');

            });
        },

        onError: function (err) {
            console.log(err);
        }
    }).render('#paypal-button-yaris');
}


initPayPalButton();