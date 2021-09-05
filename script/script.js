const mario = document.querySelector(".mario");
const marioİmg = document.querySelector(".mario-img");
const marioMidMap = document.querySelector(".middle");
const energyBar = document.querySelector(".inner-energy");
const playMusic = document.querySelector(".music-icon");
const flagMusic = document.querySelector(".flag-music");
const marioMusic = document.querySelector(".mario-music");
const responsiveArrow = document.querySelector(".responsive-arrow");
const linkedin = document.querySelector(".linkedin-link");
const github = document.querySelector(".github-link");
const mail = document.querySelector(".mail-link");
var kordinat = 0;
var enerji = 100;

//Play Music
playMusic.addEventListener("click", function (e) {
    var target = e.target.classList;
    if (target[2] == "fa-play") {
        target.replace("fa-play", "fa-stop");
        marioMusic.play();
    }
    else {
        target.replace("fa-stop", "fa-play");
        marioMusic.pause();
    }
});

//Move Mario
window.addEventListener("keydown", (e) => {
    if (e.key == "ArrowRight") {
        //Energy
        runToRight();
    }

    if (e.key == "ArrowLeft") {
        runToLeft();

    }

    if (e.key == "ArrowDown") {
        arrowDown();
    }
});

//Refresh Mario
window.addEventListener("keyup", (e) => {
    if (e.key == "ArrowRight" || e.key == "ArrowLeft" || e.key == "ArrowDown") {
        marioWait();
    }
});

//mobile move
responsiveArrow.addEventListener("touchstart", function (e) {
    e.preventDefault();
    var target = e.target;
    if (target.classList[1] == "fa-arrow-right") {
        var rightInterval = setInterval(runToRight, 30)
    }
    if (target.classList[1] == "fa-arrow-left") {
        var rightInterval = setInterval(runToLeft, 30)
    }
    if (target.classList[1] == "fa-arrow-down") {
        var rightInterval = setInterval(arrowDown, 30)
    }

    //Dokunmayı Bıraktıgında
    responsiveArrow.addEventListener("touchend", function (e) {
        if (target.classList[1] == "fa-arrow-right") {
            clearInterval(rightInterval);
            marioWait();
        }
        if (target.classList[1] == "fa-arrow-left") {
            clearInterval(rightInterval);
            marioWait();
        }
        if (target.classList[1] == "fa-arrow-down") {
            clearInterval(rightInterval);
            marioWait();
        }
    });
})

//Run To Right
function runToRight() {
    if (enerji <= 40) {
        energyBar.classList.add("active");
    }
    if ((enerji >= 43 && energyBar.classList[1] == "active")) {
        energyBar.classList.remove("active");
    }
    if (!(enerji <= 0)) {
        enerji -= 0.3;
        energyBar.style.width = `${enerji}%`

    }
    if ((kordinat <= 380 && enerji > 0)) {
        kordinat += 0.5;
        mario.style.left = `${kordinat}vw`;

        if (!(marioİmg.src[marioİmg.src.length - 7] == "g")) {
            marioİmg.setAttribute("src", "images/mario/run-to-right.gif");
        }
        if (kordinat <= 100.5 && kordinat >= 100) {
            marioMidMap.style.transform = "translateX(-100vw)";
        }
        if (kordinat <= 200.5 && kordinat >= 200) {
            marioMidMap.style.transform = "translateX(-200vw)";
        }
        if (kordinat <= 300.5 && kordinat >= 300) {
            marioMidMap.style.transform = "translateX(-300vw)";
        }
        if (kordinat <= 310.6 && kordinat >= 310) {
            github.style.opacity = "1";
            github.style.bottom = "42vh"
            flagMusic.play();
        }
        if (kordinat <= 341.1 && kordinat >= 340.5) {
            linkedin.style.opacity = "1";
            linkedin.style.bottom = "42vh"
            flagMusic.play();
        }
        if (kordinat <= 369.6 && kordinat >= 369) {
            mail.style.opacity = "1";
            mail.style.bottom = "42vh"
            flagMusic.play();
        }


    }
};

//Run to Left
function runToLeft() {
    if (enerji <= 40) {
        energyBar.classList.add("active");
    }
    if ((enerji >= 43 && energyBar.classList[1] == "active")) {
        energyBar.classList.remove("active");
    }
    if (!(enerji <= 0)) {
        enerji -= 0.3;
        energyBar.style.width = `${enerji}%`

    }
    if (kordinat >= 0 && enerji >= 0) {
        kordinat -= 0.4;
        mario.style.left = `${kordinat}vw`;
        if (!(marioİmg.src[marioİmg.src.length - 7] == "e")) {
            marioİmg.setAttribute("src", "images/mario/run-to-left.gif")
        }
        if (kordinat >= 99.5 && kordinat <= 100) {
            marioMidMap.style.transform = "translateX(0vw)";
        }
        if (kordinat >= 199.5 && kordinat <= 200) {
            marioMidMap.style.transform = "translateX(-100vw)";
        }
        if (kordinat >= 299.5 && kordinat <= 300) {
            marioMidMap.style.transform = "translateX(-200vw)";
        }
    }
}

//Arrow Down    
function arrowDown() {
    if (enerji <= 100) {
        enerji += 1;
        energyBar.style.width = `${enerji}%`
    }
    if (!(marioİmg.src[marioİmg.src.length - 7] == "r")) {
        marioİmg.setAttribute("src", "images/mario/eat-mario.gif")
    }
};

//Mario Wait
function marioWait() {
    marioİmg.setAttribute("src", "images/mario/waitt.png")
}