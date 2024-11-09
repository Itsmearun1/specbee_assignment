let speakersData = [
  {
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    role: "Software Engineer",
    company: "Tech Solutions Inc.",
    description: "Building cutting-edge software to solve complex problems. Passionate about clean code, efficient algorithms, and creating meaningful user experiences with modern technologies.",
    socials: ["twitter", "linkedin", "github"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "John Doe",
    role: "Product Manager",
    company: "Innovative Creations",
    description: "Leading product development with a focus on delivering high-impact solutions. Skilled in cross-functional collaboration, product strategy, and customer-centric design.",
    socials: ["twitter", "linkedin", "github"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "John Doe",
    role: "Marketing Strategist",
    company: "NextGen Media",
    description: "Driving strategic marketing campaigns that combine creativity with data analytics. Focused on digital transformation and customer engagement to grow brand awareness and business results.",
    socials: ["twitter", "linkedin", "github"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "John Doe",
    role: "Chief Technology Officer",
    company: "FutureTech Innovations",
    description: "Shaping the technological vision for a fast-growing company. Passionate about leading teams in creating scalable and disruptive technologies that change industries.",
    socials: ["twitter", "linkedin"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "John Doe",
    role: "Operations Director",
    company: "Global Enterprises",
    description: "Optimizing operational processes to enhance productivity and streamline workflow across departments. Expert in managing teams, driving efficiencies, and executing growth strategies.",
    socials: ["linkedin", "github"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "John Doe",
    role: "Founder & CEO",
    company: "InnoTech Labs",
    description: "Founder of a startup focused on creating innovative solutions in the tech industry. Committed to driving change and developing technology that has a positive impact on the world.",
    socials: ["twitter", "linkedin"]
  },
];

let positionIndex = 0;

function loadCarousel() {
  const carouselContainer = document.querySelector('.carousel-cards');
  carouselContainer.innerHTML = '';

  for (let count = 0; count < 4; count++) {
    const profile = speakersData[(positionIndex + count) % speakersData.length];
    const profileCard = document.createElement('div');
    profileCard.className = 'card';
    profileCard.onclick = () => showDetails((positionIndex + count) % speakersData.length);
    profileCard.innerHTML = `
      <img src="${profile.image}" alt="${profile.name}">
      <h4 class="name">${profile.name}</h4>
      <p class="role">${profile.role}</p>
      <p class="company">${profile.company}</p>
    `;
    carouselContainer.appendChild(profileCard);
  }
}

function showDetails(idx) {
  const selectedProfile = speakersData[idx];
  document.getElementById('box-image').src = selectedProfile.image;
  document.getElementById('box-name').textContent = selectedProfile.name;
  document.getElementById('box-role').textContent = selectedProfile.role;
  document.getElementById('box-company').textContent = selectedProfile.company;
  document.getElementById('box-desc').textContent = selectedProfile.description;
  
  document.getElementById('box').style.display = 'block';
}

document.querySelector('.next-btn').addEventListener('click', () => {
  positionIndex = (positionIndex + 4) % speakersData.length;
  loadCarousel();
});

loadCarousel();
