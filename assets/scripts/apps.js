const projects = [
  {
    idProject: "project1",
    imgProject: "/assets/images/BetaDev.png",
    titleproject: "Proyecto de REACT",
    descriptionproject:
      "Proyecto muy interactivo de REACT donde el usuario puede dar instrucciones y la pagina se va a transformar en base a lo que este solicite.",
    linkproject: "https://github.com/BetaDev55/React",
  },
  {
    idProject: "project2",
    imgProject: "/assets/images/BetaDev.png",
    titleproject: "Zelda Game",
    descriptionproject:
      "Primer proyecto en javascript, un juego de parejas con tematica de derrotar a los monstruos en Zelda.",
    linkproject: "https://github.com/BetaDev55/ZeldaGame.JS",
  },
  {
    idProject: "project3",
    imgProject: "/assets/images/BetaDev.png",
    titleproject: "Proyecto final Lumetrio",
    descriptionproject:
      "Proyecto final para el curso de front end de Lumetrio, manejé lo tipico de frontend, Javascript, CSS, HTML, REACT y le añadí un gusto que tenía por hacer animaciones con SVGS.",
    linkproject: "https://github.com/BetaDev55/ProyectoFinalLumetrioFER",
  },
  {
    idProject: "project4",
    imgProject: "/assets/images/BetaDev.png",
    titleproject: "Proyecto final de Lumetrio en Python.",
    descriptionproject:
      "Un buscaminas hecho puramente en python para la consola CMD.",
    linkproject: "https://github.com/BetaDev55/ProyectoFinalLumetrioPython",
  },
];

const references = [
  {
    id: "reference1",
    name: "Santiago Betancur",
    position: "Desarrollador Front-End",
    phone: "+57 (301) 234-5678",
    email: "santiago.b@techcorp.com",
  },
  {
    id: "reference2",
    name: "Miguel Chen",
    position: "Líder Técnico",
    phone: "+57 (304) 567-8901",
    email: "m.chen@devteam.com",
  },
  {
    id: "reference3",
    name: "Laura Martínez",
    position: "Gerente de Proyectos",
    phone: "+57 (305) 678-9012",
    email: "l.martinez@projecthub.com",
  },
  {
    id: "reference4",
    name: "David Wilson",
    position: "Desarrollador Front-End",
    phone: "+57 (300) 789-0123",
    email: "d.wilson@webdev.com",
  },
];

const experiences = [
  {
    id: "experiences1",
    languageName: "HTML",
    progressPercentage: 80,
    img: "/assets/images/HTML.png",
    textPercentage: "80%",
  },
  {
    id: "experiences2",
    languageName: "CSS",
    progressPercentage: 60,
    img: "/assets/images/CSS.png",
    textPercentage: "60%",
  },
  {
    id: "experiences3",
    languageName: "Javascript",
    progressPercentage: 40,
    img: "/assets/images/JS.png",
    textPercentage: "40%",
  },
  {
    id: "experiences4",
    languageName: "REACT",
    progressPercentage: 30,
    img: "/assets/images/REACT.png",
    textPercentage: "30%",
  },
];

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

function loadSetionProjects() {
  projects.forEach((project) => CreateCardProjects(project));
  references.forEach((references) => createCardReferences(references));
  experiences.forEach((experiences) => createCardExperiences(experiences));
}

function CreateCardProjects(project) {
  const cardProject = document.createElement("div");
  cardProject.classList.add("card-projects");
  const containerImg = document.createElement("div");
  containerImg.classList.add("container-img-card");
  const imgCard = document.createElement("img");
  imgCard.src = project.imgProject;
  imgCard.alt = project.titleproject;
  const containerDescription = document.createElement("div");
  containerDescription.classList.add("container-description-card");
  const titleCard = document.createElement("h3");
  titleCard.textContent = project.titleproject;
  const descriptionCard = document.createElement("p");
  descriptionCard.textContent = project.descriptionproject;
  const goToProject = document.createElement("a");
  goToProject.href = project.linkproject;
  goToProject.setAttribute("target", "_blank");
  goToProject.textContent = "Ir al proyecto";

  cardProject.appendChild(containerImg);
  cardProject.appendChild(containerDescription);

  containerImg.appendChild(imgCard);
  containerDescription.appendChild(titleCard);
  containerDescription.appendChild(descriptionCard);
  containerDescription.appendChild(goToProject);

  document.querySelector(".container-cards").appendChild(cardProject);
}

function createCardReferences(references) {
  const cardReferences = document.createElement("div");
  cardReferences.classList.add("card-references");
  const name = document.createElement("p");
  name.textContent = "Nombre: ";
  const nameS = document.createElement("span");
  nameS.textContent = references.name;
  name.appendChild(nameS);
  const position = document.createElement("p");
  position.textContent = "Posición: ";
  const positionS = document.createElement("span");
  positionS.textContent = references.position;
  position.appendChild(positionS);
  const phone = document.createElement("p");
  phone.textContent = "Teléfono: ";
  const phoneS = document.createElement("span");
  phoneS.textContent = references.phone;
  phone.appendChild(phoneS);
  const email = document.createElement("p");
  email.textContent = "Email: ";
  const emailS = document.createElement("span");
  emailS.textContent = references.email;
  email.appendChild(emailS);

  cardReferences.appendChild(name);
  cardReferences.appendChild(position);
  cardReferences.appendChild(phone);
  cardReferences.appendChild(email);

  document.querySelector(".container-references").appendChild(cardReferences);
}

function createCardExperiences(experiences) {
  const cardExperiences = document.createElement("div");
  cardExperiences.classList.add("card-experiences");
  const img = document.createElement("img");
  img.src = experiences.img;
  img.alt = experiences.languageName;
  img.id = experiences.id;
  const progress = document.createElement("progress");
  progress.value = experiences.progressPercentage;
  progress.max = 100;
  const textPercentage = document.createElement("p");
  textPercentage.textContent = experiences.textPercentage;

  cardExperiences.appendChild(img);
  cardExperiences.appendChild(progress);
  cardExperiences.appendChild(textPercentage);

  document.querySelector(".container-experiences").appendChild(cardExperiences);
}

loadSetionProjects();
