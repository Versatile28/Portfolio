let data = [
   {
      id: '1',
      name: 'Cataract Detection using Deep Learning',
      count: '4',
      skills: ['Python', 'VGG-19', 'CNN', 'Machine Learning'],
      desc: "This project focuses on developing an automated system for cataract detection using deep learning techniques, specifically leveraging the VGG19 architecture. The solution aims to provide a non-invasive, scalable, and cost-effective diagnostic tool, enhancing early detection and accessibility in ophthalmic healthcare. Using a curated dataset of fundus images sourced from publicly available platforms like Kaggle and GitHub, the system was designed to classify cataract and non-cataract cases effectively. Images were preprocessed through resizing, normalization, and data augmentation techniques, including rotation, flipping, and scaling, to improve generalization and address dataset imbalances. The VGG19 model, fine-tuned for binary classification, utilized ReLU activations and a softmax output layer, optimized with cross-entropy loss and the Adam optimizer. Achieving a validation accuracy of 90.56% and a test accuracy of 84.25%, the model demonstrated strong potential for real-world deployment. Insights gained include the critical role of preprocessing, addressing class imbalance, and evaluating performance using confusion matrices and classification metrics, marking a significant step toward integrating AI into ophthalmic healthcare systems.",
      github: 'https://github.com/Versatile28/Cataract-Detection-Using-Deep-Learning',
      page: 'https://github.com/Versatile28/Cataract-Detection-Using-Deep-Learning',
      image: ''
   },
   {
      id: '2',
      name: 'Weather App',
      count: '4',
      skills: ['HTML', 'CSS', 'JS', 'OpenWeatherMap API'],
      desc: "The Weather App is a responsive and interactive web application designed to provide real-time weather information for any city. Built using HTML, CSS, and JavaScript, it integrates the OpenWeatherMap API to fetch accurate weather details such as temperature, humidity, wind speed, and current conditions, all presented with appropriate icons for better user understanding. The app features a clean and modern layout with a minimalist style, ensuring a seamless experience across different devices. It dynamically updates weather data, displays visually appealing icons, and includes error-handling mechanisms for invalid city names or unavailable data. Designed with responsiveness in mind, the Weather App adapts smoothly to various screen sizes, making it a reliable tool for users seeking quick and accurate weather updates.",
      github: 'https://github.com/Versatile28/Weather-App',
      page: 'https://versatile28.github.io/Weather-App/',
      image: '../images/project/weather_app.png',
   },
   {
      id: '3',
      name: 'Basic Calculator',
      count: '2',
      skills: ['HTML', 'CSS'],
      desc: "This project is a basic calculator web application designed with a clean and modern layout using HTML and CSS. The interface is minimalistic yet functional, with a focus on responsive design to ensure usability across various devices. The calculator layout was structured using semantic HTML5, organizing buttons and the display for intuitive functionality. Styled with CSS, the design incorporates visually appealing elements such as hover effects on buttons to enhance interactivity. Through this project, I gained valuable insights into creating responsive layouts and crafting an engaging user experience using fundamental web development techniques.",
      github: 'https://github.com/Versatile28/Calculator',
      page: 'https://versatile28.github.io/Calculator/',
      image: '../images/project/calculator.png',
   },
   {
      id: '4',
      name: 'Password Generator',
      count: '3',
      skills: ['HTML', 'CSS', 'JS'],
      desc: "The Password Generator App is a user-friendly tool designed to create secure and random passwords, ensuring enhanced security for personal and professional accounts. Built with HTML, CSS, and JavaScript, the app features a modern and clean layout with a responsive design, making it accessible across all devices. Users can customize their passwords by selecting the desired length and choosing from options such as uppercase letters, lowercase letters, numbers, and special characters. The app instantly generates a password based on the chosen criteria and includes a convenient `Copy to Clipboard` functionality. With intuitive error handling and real-time updates, the Password Generator App offers a seamless and secure experience for users seeking robust password solutions.",
      github: 'https://github.com/Versatile28/Password_generator',
      page: 'https://versatile28.github.io/Password_generator/',
      image: '../images/project/password_generator.png',
   },
   {
      id: '5',
      name: 'Traval Web Page - My India',
      count: '3',
      skills: ['HTML', 'CSS', 'JS'],
      desc: "The My India travel webpage is a dynamic and interactive website designed to provide users with an engaging experience while exploring travel destinations, activities, and booking options. Built using HTML, CSS, and JavaScript, the site features a modern, responsive layout with smooth transitions and dynamic sliders, offering a visually appealing and user-friendly interface. Key functionalities include a dynamic slider and carousel to highlight popular destinations and travel packages, a responsive design ensuring compatibility across devices, and a functional form for inquiries or trip bookings. The use of semantic HTML5, Flexbox, and responsive design techniques ensures a seamless browsing experience. Hosted on Netlify for fast loading and reliability, this project combines technical precision and aesthetic appeal to cater to the needs of travelers.",
      github: 'https://github.com/Versatile28/My-India',
      page: 'https://my-india.netlify.app/',
      image: '../images/project/my_india.png',
   },
   {
      id: '6',
      name: 'Mapty - Workout Tracking App',
      count: '4',
      skills: ['HTML', 'CSS', 'JS', 'Leaflet.js'],
      desc: "Mapty is a feature-rich workout tracking app designed to enhance fitness journeys by combining real-time geolocation, interactive maps, and persistent data storage. Built with HTML, CSS, JavaScript, and the Leaflet.js library, the app enables users to log and visualize workouts like running or cycling directly on a map. Leveraging the Geolocation API, Mapty pinpoints the user's location, allowing for the placement of workout markers and seamless integration of geospatial data. Its user-friendly interface includes forms for logging workout details such as distance, duration, and type, while ensuring responsive performance across all devices. Workout data is saved in the browser's local storage, preserving user progress even after app closures or page refreshes. With robust error handling and validation, Mapty offers a reliable and intuitive experience for fitness enthusiasts.",
      github: 'https://github.com/Versatile28/Mapty',
      page: 'https://versatile28.github.io/Mapty/',
      image: '',
   }
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

         if(project.id==1 || project.id==6){
            console.log('1');
            document.querySelector('.project .project-info').style.flex = '0 0 100%';
            document.querySelector('.project .project-info').style.maxWidth = '100%';
            document.querySelector('.project .container .project-img').style.display = 'none';
            document.querySelector('.project .container .project-img').style.flex = 'none';
            document.querySelector('.project .container .project-img').style.maxWidth = '0';
         }else{
            document.querySelector('.project .project-info').style.flex = '0 0 60%';
            document.querySelector('.project .project-info').style.maxWidth = '60%';
            document.querySelector('.project .container .project-img').style.display = 'block';
            document.querySelector('.project .container .project-img').style.flex = '0 0 40%';
            document.querySelector('.project .container .project-img').style.maxWidth = '40%';
         }

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
