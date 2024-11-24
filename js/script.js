let data = [
   {
      id: '1',
      name: 'Cataract Detection using Deep Learning',
      count: '2',
      skills: ['Python', 'VGG-19'],
      desc: "I'm a web designer, specializing in creating visually appealing and user-friend interfaces that enhance user experience on websites and web applications. My role involves working with HTML, CSS, JavaScript, and design tools to bring concepts to life and ensure responsive, accessible designs.",
      github: 'https://github.com/Versatile28/QR-code-component',
      page: 'https://versatile28.github.io/QR-code-component/',
      image: 'https://wallpapers.com/images/hd/hd-nature-landscape-portrait-wwvfe5ydt4y38zk3.webp',
   },
   {
      id: '2',
      name: 'Telemedicine',
      count: '5',
      skills: ['HTML', 'CSS', 'JS', 'PHP', 'SQL'],
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      github: 'https://github.com/Versatile28/blog-preview-card',
      page: 'https://versatile28.github.io/blog-preview-card/',
      image: 'https://pbs.twimg.com/media/C2ZpYnHVQAAmWHT?format=jpg&name=large',
   },
   {
      id: '3',
      name: 'Telemedicine',
      count: '5',
      skills: ['HTML', 'CSS', 'JS', 'PHP', 'SQL'],
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      github: 'https://github.com/Versatile28/blog-preview-card',
      page: 'https://versatile28.github.io/blog-preview-card/',
      image: 'https://pbs.twimg.com/media/C2ZpYnHVQAAmWHT?format=jpg&name=large',
   },
   {
      id: '4',
      name: 'Telemedicine',
      count: '5',
      skills: ['HTML', 'CSS', 'JS', 'PHP', 'SQL'],
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      github: 'https://github.com/Versatile28/blog-preview-card',
      page: 'https://versatile28.github.io/blog-preview-card/',
      image: 'https://pbs.twimg.com/media/C2ZpYnHVQAAmWHT?format=jpg&name=large',
   },
   {
      id: '5',
      name: 'Telemedicine',
      count: '5',
      skills: ['HTML', 'CSS', 'JS', 'PHP', 'SQL'],
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      github: 'https://github.com/Versatile28/blog-preview-card',
      page: 'https://versatile28.github.io/blog-preview-card/',
      image: 'https://pbs.twimg.com/media/C2ZpYnHVQAAmWHT?format=jpg&name=large',
   },
   {
      id: '6',
      name: 'Telemedicine',
      count: '5',
      skills: ['HTML', 'CSS', 'JS', 'PHP', 'SQL'],
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      github: 'https://github.com/Versatile28/blog-preview-card',
      page: 'https://versatile28.github.io/blog-preview-card/',
      image: 'https://pbs.twimg.com/media/C2ZpYnHVQAAmWHT?format=jpg&name=large',
   },
];

/* typing animation */

var typed = new Typed('.typing', {
   strings: ['', 'Web Developer', 'JavaScript Developer', 'Web Designer'],
   typeSpeed: 100,
   BackSpeed: 200,
   loop: true,
});

/* Aside */

const nav = document.querySelector('.nav'),
   navList = nav.querySelectorAll('li'),
   totalNavList = navList.length,
   allSection = document.querySelectorAll('.section'),
   totalSection = allSection.length;
let test = 0;

for (let i = 0; i < totalNavList; i++) {
   const a = navList[i].querySelector('a');

   a.addEventListener('click', function () {
      console.log(this.href);
      if (test < 1000 && this.href.endsWith('#home')) {
         test += 1;
      } else {
         test = 1000;
         removeBackSection();
         for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector('a').classList.contains('active')) {
               addBackSection(j);
            }
            navList[j].querySelector('a').classList.remove('active');
         }
         this.classList.add('active');
         showSection(a);
         if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
         }
      }
   });
}

function removeBackSection() {
   for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove('back-section');
   }
   document.querySelector('.project').classList.remove('back-section');
}

function addBackSection(num) {
   allSection[num].classList.add('back-section');
   if (document.querySelector('.project').classList.contains('active')) {
      document.querySelector('.project').classList.add('back-section');
   }
}

function showSection(element) {
   for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove('active');
   }
   const target = element.getAttribute('href').split('#')[1];
   document.querySelector('#' + target).classList.add('active');
   document.querySelector('#' + target).classList.remove('hidden');

   const target1 = element.getAttribute('href').split('#')[1];
   const targetSection = document.querySelector('#' + target1);

   if (!targetSection.classList.contains('project')) {
      clearSkillTags();
   }
}

function showProject() {
   for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove('active');
   }
   document.querySelector('.project').classList.add('active');
   document.querySelector('.project').classList.remove('hidden');
}

function updateName(element) {
   for (let i = 0; i < totalNavList; i++) {
      navList[i].querySelector('a').classList.remove('active');
      const target = element.getAttribute('href').split('#')[1];
      if (
         target ===
         navList[i].querySelector('a').getAttribute('href').split('#')[1]
      ) {
         navList[i].querySelector('a').classList.add('active');
      }
   }
}

function clearSkillTags() {
   const skillContainer = document.querySelector('.project-info .technology');
   while (skillContainer.firstChild) {
      skillContainer.removeChild(skillContainer.firstChild);
   }
}

document.querySelector('.hire-me').addEventListener('click', function () {
   const sectionIndex = this.getAttribute('data-section-index');
   showSection(this);
   updateName(this);
   removeBackSection();
   addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector('.nav-toggler'),
   aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', function () {
   asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
   aside.classList.toggle('open');
   navTogglerBtn.classList.toggle('open');
   for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.toggle('open');
   }
}

function getAge(dateString) {
   var today = new Date();
   var birthDate = new Date(dateString);
   var age = today.getFullYear() - birthDate.getFullYear();
   var m = today.getMonth() - birthDate.getMonth();
   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
   }
   return age;
}

document.querySelector(
   '.about .about-content .personal-info .info-item .age span'
).textContent = `${getAge('1999-12-28')}`;

const emailLink = document.querySelectorAll('.email-link');
console.log(emailLink);
function emailMe() {
   const email = 'satyakipal111@gmail.com';
   const emailSubject = 'Hello, Satyaki!';
   const emailBody = 'I would like to discuss something important.';
   for (let i = 0; i < emailLink.length; i++) {
      emailLink[i].href = `mailto:${email}?subject=${encodeURIComponent(
         emailSubject
      )}&body=${encodeURIComponent(emailBody)}`;
   }
}
emailMe();

let value = 1;
for (let i = 1; i <= 6; i++) {
   const portfolioItem = document.getElementById(`item${i}`);

   portfolioItem.addEventListener('click', function () {
      value = i;
      console.log(`Button ${i} clicked. Value is now ${value}`);
      fetchData();
      const sectionIndex = this.getAttribute('data-section-index');
      showProject();
      //  updateName1();
      removeBackSection();
      addBackSection(sectionIndex);
   });
}

function fetchData() {
   data.forEach((project) => {
      if (project.id == value) {
         const projectName = document.querySelector('.project-info h3'),
            skill = document.querySelector('.project-info .technology'),
            desc = document.querySelector('.project .project-info p'),
            github = document.querySelector('.project .github'),
            openPage = document.querySelector('.project .openPage'),
            projectImg = document.querySelector('.project .project-img img');

         projectName.textContent = `${project.name}`;
         for (let i = 0; i < project.count; i++) {
            const newSpan = document.createElement('span');
            newSpan.textContent = `${project.skills[i]}`;
            skill.appendChild(newSpan);
         }
         desc.textContent = `${project.desc}`;
         github.href = `${project.github}`;
         openPage.href = `${project.page}`;
         projectImg.src = `${project.image}`;
      }
   });
}
fetchData();
