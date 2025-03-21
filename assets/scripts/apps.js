const projects = [
    {
        idProject: 1,
        imgProject: '/assets/images/BetaDev.png',
        titleproject: 'Proyecto de REACT',
        descriptionproject: 'Proyecto muy interactivo de REACT donde el usuario puede dar instrucciones y la pagina se va a transformar en base a lo que este solicite.',
        linkproject: 'https://github.com/BetaDev55/React',
    },
    {
        idProject: 2,
        imgProject: '/assets/images/BetaDev.png',
        titleproject: 'Zelda Game',
        descriptionproject: 'Primer proyecto en javascript, un juego de parejas con tematica de derrotar a los monstruos en Zelda.',
        linkproject: 'https://github.com/BetaDev55/ZeldaGame.JS',
    },
    {
        idProject: 3,
        imgProject: '/assets/images/BetaDev.png',
        titleproject: 'Proyecto final Lumetrio',
        descriptionproject: 'Proyecto final para el curso de front end de Lumetrio, manejé lo tipico de frontend, Javascript, CSS, HTML, REACT y le añadí un gusto que tenía por hacer animaciones con SVGS.',
        linkproject: 'https://github.com/BetaDev55/ProyectoFinalLumetrioFER',
    },
    {
        idProject: 4,
        imgProject: '/assets/images/BetaDev.png',
        titleproject: 'Proyecto final de Lumetrio en Python.',
        descriptionproject: 'Un buscaminas hecho puramente en python para la consola CMD.',
        linkproject: 'https://github.com/BetaDev55/ProyectoFinalLumetrioPython',
    },
]

const references = [
    {
        id: 1,
        name: "Santiago Betancur",
        position: "Desarrollador de Software",
        phone: "+57 (301) 234-5678",
        email: "santiago.b@techcorp.com",
    },
    {
        id: 2,
        name: "Miguel Chen",
        position: "Líder Técnico",
        phone: "+57 (304) 567-8901",
        email: "m.chen@devteam.com",
    },
    {
        id: 3,
        name: "Laura Martínez",
        position: "Gerente de Proyectos",
        phone: "+57 (305) 678-9012",
        email: "l.martinez@projecthub.com",
    },
    {
        id: 4,
        name: "David Wilson",
        position: "Desarrollador Frontend",
        phone: "+57 (300) 789-0123",
        email: "d.wilson@webdev.com",
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
    references.forEach(references => createCardReferences(references))
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

function createCardReferences(references) {
    const cardReferences = document.createElement('div')
    cardReferences.classList.add('card-references')
    const name = document.createElement('p')
    name.textContent = "Nombre:"
    const nameS = document.createElement('span')
    nameS.textContent = references.name
    const position = document.createElement('p')
    position.textContent = "Posición:"
    const positionS = document.createElement('span')
    positionS.textContent = references.position
    const phone = document.createElement('p')
    phone.textContent = "Teléfono:"
    const phoneS = document.createElement('span')
    phoneS.textContent = references.phone
    const email = document.createElement('p')
    email.textContent = "Email:"
    const emailS = document.createElement('span')
    emailS.textContent = references.email

    cardReferences.appendChild(nameS)
    cardReferences.appendChild(positionS)
    cardReferences.appendChild(phoneS)
    cardReferences.appendChild(emailS)

    document.querySelector('.container-references').appendChild(cardReferences)
}

loadSetionProjects()