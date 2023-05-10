const btnsAboutCompany = document.querySelectorAll(".btn-about-company");
const descriptionAboutCompany = document.querySelector(".description-about-company");

btnsAboutCompany.forEach(element => {
    element.addEventListener('click', () => {
        
    })
});

//video-muted
const videoMuted = document.querySelector('.main-video-item');
videoMuted.muted = true;

//about-company
const imageAboutCompany = document.querySelector('.image-about-company');
for (let i = 1; i <= 7; i++) {
    setInterval(() => {
        imageAboutCompany.src = `/Travel/images/img${i}b.jpg`;
    }, 2000);
}
