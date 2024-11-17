/* typing animation */

var typed = new Typed('.typing',{
  strings:['','Web Developer','JavaScript Developer','Web Designer'],
  typeSpeed:100,
  BackSpeed:200,
  loop:true
});

/* Aside */

const nav = document.querySelector('.nav'),
  navList = nav.querySelectorAll('li'),
  totalNavList = navList.length,
  allSection = document.querySelectorAll('.section'),
  totalSection = allSection.length;


for(let i=0;i<totalNavList;i++){
  const a = navList[i].querySelector('a');
  a.addEventListener('click',function(){
    removeBackSection();
    for(let j=0;j<totalNavList;j++){
      if(navList[j].querySelector('a').classList.contains('active')){
        addBackSection(j);
      }
      navList[j].querySelector('a').classList.remove('active');
    }
    this.classList.add('active');
    showSection(a);
    if(window.innerWidth < 1200){
      asideSectionTogglerBtn();
    }
  })
}

function sectionHidden(){
  for(let i=1;i<totalSection;i++){
    allSection[i].classList.add('hidden');
  }
}

function sectionReveled(){
  for(let i=1;i<totalSection;i++){
    if(allSection[i].classList.contains('hidden')){
      allSection[i].classList.remove('hidden');
    }
  }
}

function removeBackSection(){
  for(let i=0;i<totalSection;i++){
    allSection[i].classList.remove('back-section');
  }
}

function addBackSection(num){
  allSection[num].classList.add('back-section');
}

function showSection(element){
  for(let i=0;i<totalSection;i++){
    allSection[i].classList.remove('active');
  }
  const target = element.getAttribute('href').split('#')[1];
  document.querySelector('#'+ target).classList.add('active');
  document.querySelector('#'+ target).classList.remove('hidden');
}

function updateName(element){
  for(let i=0;i<totalNavList;i++){
    navList[i].querySelector('a').classList.remove('active');
    const target = element.getAttribute('href').split('#')[1];
    if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1]){
      navList[i].querySelector('a').classList.add('active');
    }
  }
}

document.querySelector('.hire-me').addEventListener('click',function(){
  const sectionIndex = this.getAttribute('data-section-index');
  showSection(this);
  updateName(this);
  removeBackSection();
  addBackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector('.nav-toggler'),
  aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click',function(){
  asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
  aside.classList.toggle('open');
  navTogglerBtn.classList.toggle('open');
  for(let i=0;i<totalSection;i++){
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

document.querySelector('.about .about-content .personal-info .info-item .age span').textContent =`${getAge('1999-12-28')}`;

function emailMe(){
  const email = "satyakipal111@gmail.com";
    const emailSubject = "Hello, Satyaki!";
    const emailBody = "I would like to discuss something important.";

    const emailLink = document.getElementById('email-link');
    emailLink.href = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
}
emailMe();