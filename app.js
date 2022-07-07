
'use strict';

//elemente laden
const elements = {};

// 2. Auto yaris erstmal initial ausgeblendet
// document.getElementById("Yaris").style.display = "none";

// ausgewältes Auto aus der navigation bar anzeigen
function autoshow(wichKindOfAuto) {

    if (wichKindOfAuto == Avensis) {
        document.getElementById("Avensis").style.display = "block";
        document.getElementById("Yaris").style.display = "none";
    } if (wichKindOfAuto == Yaris) {
        document.getElementById("Avensis").style.display = "none";
        document.getElementById("Yaris").style.display = "block ";

    }
}

// Autos bilder in der karusell anzeigen
// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("demo");
//     let captionText = document.getElementById("caption");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     captionText.innerHTML = dots[slideIndex - 1].alt;
// }

// auto im Parking abstellen

// let addCarInToTheParkingItemButton = document.getElementsByClassName('btn btn-price'); //

// for (let i = 0; i < addCarInToTheParkingItemButton.length; i++) {

//     // element.addEventListener("click", function () {
//     let button = addCarInToTheParkingItemButton[i];
//     button.addEventListener("click", function () {
//         getElementById(Avensis);



//     });
//     // })
// }


//paypal-button- zum bezahlen

// function initPayPalButton() {
//     paypal.Buttons({
//         style: {
//             shape: 'pill',
//             color: 'blue',
//             layout: 'vertical',
//             label: 'buynow',

//         },

//         createOrder: function (data, actions) {
//             return actions.order.create({
//                 purchase_units: [{ "description": "YARIS", "amount": { "currency_code": "EUR", "value": 50 } }]
//             });
//         },

//         onApprove: function (data, actions) {
//             return actions.order.capture().then(function (orderData) {

//                 // Full available details
//                 console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

//                 // Show a success message within this page, e.g.
//                 const element = document.getElementById('paypal-button-container');
//                 element.innerHTML = '';
//                 element.innerHTML = '<h3> Super, Merci pour ton payment!</h3>';

//                 // Or go to another URL:  actions.redirect('thank_you.html');

//             });
//         },

//         onError: function (err) {
//             console.log(err);
//         }
//     }).render('#paypal-button-avensis');



//     paypal.Buttons({
//         style: {
//             shape: 'pill',
//             color: 'blue',
//             layout: 'vertical',
//             label: 'buynow',

//         },

//         createOrder: function (data, actions) {
//             return actions.order.create({
//                 purchase_units: [{ "description": "YARIS", "amount": { "currency_code": "EUR", "value": 15 } }]
//             });
//         },

//         onApprove: function (data, actions) {
//             return actions.order.capture().then(function (orderData) {

//                 // Full available details
//                 console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

//                 // Show a success message within this page, e.g.
//                 const element = document.getElementById('paypal-button-container');
//                 element.innerHTML = '';
//                 element.innerHTML = '<h3> Super, Merci pour ton payment!</h3>';

//                 // Or go to another URL:  actions.redirect('thank_you.html');

//             });
//         },

//         onError: function (err) {
//             console.log(err);    
//         }
//     }).render('#paypal-button-yaris');
// }





// function getCarsData() {
//     //Per ajax carsData.JSON laden
//     // umwandeln in Array um
//     //übergeben carsData an renderCars



// 

const loadData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', './carsData.json');
    xhr.addEventListener('load', processData);
    xhr.send();
}


const domMapping = () => {
    elements.main = dom.$('main');
    elements.autos = dom.$("#autos");
    elements.slideshowContainer = dom.$(".slideshow-container");
}




// function renderCars(carsData) {
//     //Daten struc        
//     // mit übergebenen Array für jedes Objekt eines neuen Dom element

// }

const renderData = carsData => {


    // for (let carData of carsData){

    //     const  container = dom.createEl(false, 'div', elements.autos);


    // }

    for (let carData of carsData) {
        // content, type, parent, classes
        // dom.createEl(modell.carsData, 'h3', elements.main);
        const container = dom.createEl(false, 'div', elements.autos);
        dom.createEl(carData.mark + " " + carData.modell, "h3", container);
        // const container = dom.createEl(false, 'div', elements.autos);
        dom.createEl(carData.color, "h3", container);

        let content = dom.createEl(false, 'table', container);


        for (let key in carData) {
            // console.log(key);

            let trennung = dom.createEl(false, 'tr', content);

            dom.createEl(key, 'td', trennung);
            dom.createEl(carData[key], 'td', trennung);



        }
    }

    const contained = dom.createEl(false, 'button', element.autos);
    dom.createEl = ("3.2 to add in Your Parking", 'value', contained);


        // <!-- <input type="submit" class="btn btn-price" value="Ajouter dans votre parking"> -->


   


    let carPictures = [];
     
    for (let car of carsData) {

        for (let image of car.images)
            carPictures.push(image);
    }

    for (let image of carPictures) {
        let imageEl = dom.createEl(false, 'img')
        imageEl.src = image
        elements.slideshowContainer.append(imageEl)
    }


    

}






const processData = evt => {
    // Wenn die Daten erfolgreich geladen worden sind, rendere sie
    if (evt.target.status == 200) renderData(JSON.parse(evt.target.responseText))

    // Bei einem Fehler eine Warnung ausgeben
    else console.warn(evt.target.statusText);
}


const init = () => {
    loadData();
    domMapping();

    // initPayPalButton();

}

init();


// INIT
// document.addEventListener('DOMContentLoaded', init);
