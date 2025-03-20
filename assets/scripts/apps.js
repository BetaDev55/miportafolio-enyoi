const projects = [
    {
        idProject: 1,
        imgProject: '/assets/images/BetaDev.png',
        titleproject: 'Test',
        descriptionproject: 'Test',
        linkproject: '#',
    },
    {
        idProject: 2,
        imgProject: '/assets/images/BetaDev.png',
        titleproject: '',
        descriptionproject: '',
        linkproject: '',
    },
    {
        idProject: 3,
        imgProject: '/assets/images/BetaDev.png',
        titleproject: '',
        descriptionproject: '',
        linkproject: '',
    },
    {
        idProject: 4,
        imgProject: '/assets/images/BetaDev.png',
        titleproject: '',
        descriptionproject: '',
        linkproject: '',
    },
]

const references = [
    {
        id: 1,
        name: "",
        position: "",
        phone: "",
        email: "",
    },
    {
        id: 2,
        name: "",
        position: "",
        phone: "",
        email: "",
    },
    {
        id: 3,
        name: "",
        position: "",
        phone: "",
        email: "",
    },
    {
        id: 4,
        name: "",
        position: "",
        phone: "",
        email: "",
    },
]

const experience = [
    {
        id: 1,
        languageName: "JavaScript",
        progressPercentage: 35,
        img: "",
    },
    {
        id: 2,
        nombreLenguaje: "JavaScript",
        progressPercentage: 35,
        img: "",
    },
    {
        id: 3,
        nombreLenguaje: "JavaScript",
        progressPercentage: 35,
        img: "",
    },
    {
        id: 4,
        nombreLenguaje: "JavaScript",
        progressPercentage: 35,
        img: "",
    },
]

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });

        }
    });
});

function loadSetionProjects() {
    projects.forEach(project => CreateCardProjects(project))
}

function CreateCardProjects(project) {
    const cardProject = document.createElement('div')
    cardProject.classList.add('card-projects')
    const containerImg = document.createElement('div')
    containerImg.classList.add('container-img-card')
    const imgCard = document.createElement('img')
    imgCard.src = project.imgProject
    imgCard.alt = project.titleproject
    const containerDescription = document.createElement('div')
    containerDescription.classList.add('container-description-card')
    const titleCard = document.createElement('h3')
    titleCard.textContent = project.titleproject
    const descriptionCard = document.createElement('p')
    descriptionCard.textContent = project.descriptionproject
    const goToProject = document.createElement('a')
    goToProject.href = project.linkproject
    goToProject.setAttribute('target', '_blank')
    goToProject.textContent = 'Ir al proyecto'

    cardProject.appendChild(containerImg)
    cardProject.appendChild(containerDescription)

    containerImg.appendChild(imgCard)
    containerDescription.appendChild(titleCard)
    containerDescription.appendChild(descriptionCard)
    containerDescription.appendChild(goToProject)

    document.querySelector('.container-cards').appendChild(cardProject)
}

loadSetionProjects()