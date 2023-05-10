//bnts-about-company

const btnsAboutCompany = document.querySelectorAll(".btn-about-company");
const descriptionAboutCompany = document.querySelector(".description-about-company");

btnsAboutCompany.forEach(element => {
    element.addEventListener('click', (event) => {
        let target = event.target;
        if (target.textContent === "О компании") {
            descriptionAboutCompany.textContent = "Мы - команда профессионалов в туризме с опытом работы более 10 лет и опытом личных путешествий более чем в 45 странах. Офис компании в Акапулько стал третим офисом в сети наряду с офисами, открытыми ранее в Акапулько и Лондоне. Мы знаем об отдыхе практически все, продолжая совершенствовать свои знания каждый год. Мы много путешествуем и октрываем новые страны и маршруты, чтобы предложить их вам.";
        } else if (target.textContent === "Почему выбирают нас") {
            descriptionAboutCompany.textContent = "Мы заботимся о том, чтобы вы провели отдых с удовольствием и всегда идем навстречу клиентам, предлагаем оплату туров частями, раннее бронирование, горящие туры на лучшие мировые курорты. Наши менеджеры всегда готовы проконсультировать клиентов лично и в режиме онлайн, выбрать подходящий тур.Среди предложенных вариантов вы обязательно найдете тур для семейного отдыха, для романтической поездки, для студенческих каникул или, например, для оздоровления.";
        } else {
            descriptionAboutCompany.textContent = "Наши клиенты, их потребности, мечты и цели есть основа всей деятельности нашей компании. Наша миссия устанавливиет вектор достижения амбициозной цели - стать передовой, современной и инновационной компанией по оказанию туристических услуг от продажи пакетных предложений и до составления авторских путешествий.";
        }
    })
});

//video-muted
const videoMuted = document.querySelector('.main-video-item');
videoMuted.muted = true;

//about-company
const imageAboutCompany = document.querySelector('.image-about-company');

let indexImage = 5;

setInterval(() => {
    indexImage < 7 ? indexImage++ : indexImage = 1;
    imageAboutCompany.src = `/Travel/images/img${indexImage}b.jpg`;
}, 3000);


