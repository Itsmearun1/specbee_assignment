let dataSet = [
  {
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    role: "Software Engineer",
    company: "Tech Solutions Inc.",
    desc: "Building cutting-edge software to solve complex problems. Passionate about clean code, efficient algorithms, and creating meaningful user experiences with modern technologies.",
    social: ["twitter", "linkedin", "github"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "John Doe",
    role: "Product Manager",
    company: "Innovative Creations",
    desc: "Leading product development with a focus on delivering high-impact solutions. Skilled in cross-functional collaboration, product strategy, and customer-centric design.",
    social: ["twitter", "linkedin", "github"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "John Doe",
    role: "Marketing Strategist",
    company: "NextGen Media",
    desc: "Driving strategic marketing campaigns that combine creativity with data analytics. Focused on digital transformation and customer engagement to grow brand awareness and business results.",
    social: ["twitter", "linkedin", "github"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "John Doe",
    role: "Chief Technology Officer",
    company: "FutureTech Innovations",
    desc: "Shaping the technological vision for a fast-growing company. Passionate about leading teams in creating scalable and disruptive technologies that change industries.",
    social: ["twitter", "linkedin"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "John Doe",
    role: "Operations Director",
    company: "Global Enterprises",
    desc: "Optimizing operational processes to enhance productivity and streamline workflow across departments. Expert in managing teams, driving efficiencies, and executing growth strategies.",
    social: ["linkedin", "github"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "John Doe",
    role: "Founder & CEO",
    company: "InnoTech Labs",
    desc: "Founder of a startup focused on creating innovative solutions in the tech industry. Committed to driving change and developing technology that has a positive impact on the world.",
    social: ["twitter", "linkedin"]
  },
];


  
  let currentIndex = 0;

function renderCarousel() {
  const carouselCards = document.querySelector('.carousel-cards');
  carouselCards.innerHTML = '';

  for (let i = 0; i < 4; i++) {
    const speaker = dataSet[(currentIndex + i) % dataSet.length];
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => showbox((currentIndex + i) % dataSet.length);
    card.innerHTML = `
      <img src="${speaker.image}" alt="${speaker.name}">
      <h4 class="name">${speaker.name}</h4>
      <p class="role">${speaker.role}</p>
      <p class="company">${speaker.company}</p>
    `;
    carouselCards.appendChild(card);
  }
}

function showbox(index) {
  const speaker = dataSet[index];
  document.getElementById('box-image').src = speaker.image;
  document.getElementById('box-name').textContent = speaker.name;
  document.getElementById('box-role').textContent = speaker.role;
  document.getElementById('box-company').textContent = speaker.company;
  document.getElementById('box-desc').textContent = speaker.desc;
  
  document.getElementById('box').style.display = 'block';
}

document.querySelector('.next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex + 4) % dataSet.length;
  renderCarousel();
});

renderCarousel();