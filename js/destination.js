/* Pedido del destination al json de manera dinámica */

const destinationContainer = document.querySelector('.destination__container');
const lisDestination = document.querySelectorAll('.destination__li');

const pedirPlanetas = async () => {
    const resp = await fetch('../js/destination.json');
    const data = await resp.json();

    lisDestination.forEach(li => {

        li.addEventListener('click', () => {

            lisDestination.forEach(li => {
                li.classList.remove('destination__active');
            })

            li.classList.add('destination__active');
            
            cargarPlaneta( data,li.innerText );
        })
    })
    
}

function cargarPlaneta(data, planet) {

    const p  = data.find(el => el.name.toLowerCase() == planet.toLowerCase());

    const { name, description, img, distance, travel } = p;

    const destinationPlanet = document.querySelector('.destination__planet');
    destinationPlanet.setAttribute('src', img);
    destinationPlanet.alt = name;

    const destinationName = document.querySelector('.destination__name');
    destinationName.innerText = name;

    const destinationDescripcion = document.querySelector('.destination__p');
    destinationDescripcion.innerText = description;

    const destinationDistance = document.querySelector('.destination__distance');
    destinationDistance.innerText = distance;

    const destionationTravel = document.querySelector('.destionation__travel');
    destionationTravel.innerText = travel;

}

pedirPlanetas();

