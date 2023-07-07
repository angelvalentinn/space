
const lisTec = document.querySelectorAll('.tec__li');

const pedirTec = async () => {
    const resp = await  fetch('../js/technology.json');
    const data = await resp.json();

    cargarData(data,1);

    lisTec.forEach(li => {
        li.addEventListener('click', () => {

            lisTec.forEach(li => {
                li.classList.remove('tec__li--active');
            })

            li.classList.add('tec__li--active');
            cargarData(data,li.innerText);
        })
    })
}

pedirTec()

function cargarData(data,li) {

    const d = data.find(elem => elem.id == li);

    const {name,images,description} = d;

    const imgTec = document.querySelector('#tec__img');
    imgTec.src = images.desktop;
    imgTec.alt = name;

    const titleTec = document.querySelector('.tec__title');
    titleTec.innerText = name;

    const descriptionTec = document.querySelector('.tec__description');
    descriptionTec.innerText = description;
}

