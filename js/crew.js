const lisCrew = document.querySelectorAll('.crew__li');

const pedirCrew = async () => {
    const resp = await fetch('../js/crew.json');
    const data = await resp.json();
    
    lisCrew.forEach(li => {

        li.addEventListener('click', () => {
            lisCrew.forEach(li => {
                li.classList.remove('crew__li--active');
            })
            
            li.classList.add('crew__li--active');
            cargarPersona(data,li.id);
        })
    
    })

}

function cargarPersona(data, li) {

    const p = data.find(elem => elem.id == li);
    
    const {name,img,role,bio,id} = p;

    const imgCrew = document.querySelector('#crew__img');
    imgCrew.setAttribute('src',img);
    imgCrew.alt = name;

    const nameCrew = document.querySelector('.crew__name');
    nameCrew.innerText = name;

    const roleCrew = document.querySelector('.crew__role');
    roleCrew.innerText = role;

    const bioCrew = document.querySelector('.crew__bio');
    bioCrew.innerText = bio;
}

pedirCrew();

