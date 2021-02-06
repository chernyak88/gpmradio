//Модальное окно
const modal = document.getElementById("modal"),
    modalOverlay = document.getElementById("modal-overlay"),
    closeButton = document.getElementById("close-button"),
    openButton = document.getElementById("participate__btn"),
    body = document.querySelector("body");

openButton.onclick = () => {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
    body.classList.toggle("overflow");
}

closeButton.onclick = () => {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
    body.classList.toggle("overflow");
}

//Валидация формы
const form = document.forms[0];
let isValidate = false;

form.onsubmit = (e) => {

    e.preventDefault();

    const fields = document.querySelectorAll(".field"),
        modalTrue = document.getElementById("modal-true"),
        modalTrueBtn = document.getElementById("close-button-true"),
        modalFalse = document.getElementById("modal-false"),
        modalFalseBtn = document.getElementById("close-button-false");

    let values = [];

    for (let i = 0; i < fields.length; i++) {
        values.push(fields[i].value);
        if (!fields[i].value) {
            fields[i].style.borderColor = "red";
        }
        fields[i].oninput = () => {
            fields[i].style.border = "1px solid #000";
        }
    }

    if (values.every((elem) => elem !== "")) {
        isValidate = true;
    } else {
        modalFalse.classList.remove("closed");
        form.style.pointerEvents = "none";
        modalFalseBtn.onclick = () => {
            modalFalse.classList.add("closed");
            form.style.pointerEvents = "auto";
        }
    }

    if (!isValidate) {
        return false;
    } else {
        modal.classList.add("closed");
        modalTrue.classList.remove("closed");
        modalTrueBtn.onclick = () => {
            location.reload();
        }
        return true;
    }
}

//Плавная прокрутка
const linkNav = document.querySelectorAll('.scroll-to'),
    V = 0.2;
for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) {
        e.preventDefault();
        let w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            let progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                window.location.href.split('#')[0]
            }
        }
    }, false);
}

//Мобильное меню
const hamBtn  = document.querySelector('.hamburger-menu');
const popupMenu = document.querySelector('.popup');

hamBtn.addEventListener('click', function(){
  popupMenu.style.right = '0';
  body.classList.add("overflow");
});

const closeBtn = document.querySelector('.popup__close');
  
closeBtn.addEventListener('click', function() {
  popupMenu.style.right = '-500%';
  body.classList.remove("overflow");
});

const popupItem = document.querySelectorAll('.popup__item');

for (i = 0; i < popupItem.length; i++) {
  popupItem[i].onclick = function(){
    popupMenu.style.right = '-500%';
    body.classList.remove("overflow");
  };
}
