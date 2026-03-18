
let headerBtn = document.querySelector(".header_btn")
let schoolioStart = document.querySelector(".schoolio_start")
let schoolioClose = document.querySelector(".schoolio_close")


headerBtn.addEventListener("click", function () {
    schoolioStart.style.top = "20%";
    schoolioStart.style.opacity = "1";
})


schoolioClose.addEventListener("click", function () {
    schoolioStart.style.top = "-100%";
    schoolioStart.style.opacity = "0";
})



let freeBtn = document.querySelector(".free_btn")
let freeStart = document.querySelector(".free1_start")
let freeClose = document.querySelector(".free1_close")


freeBtn.addEventListener("click", function () {
    freeStart.style.top = "20%";
    freeStart.style.opacity = "1";
})


freeClose.addEventListener("click", function () {
    freeStart.style.top = "-100%";
    freeStart.style.opacity = "0";
})

let homeBtn = document.querySelector(".home_btn")
let home = document.querySelector(".home1_start")
let home1Btn = document.querySelector(".home1_btn")
let home1Close = document.querySelector(".home1_close")

homeBtn.addEventListener("click", function () {
    home.style.top = "20%";
    home.style.opacity = "1";
})


home1Close.addEventListener("click", function () {
    home.style.top = "-100%";
    home.style.opacity = "0";
})

let suplBtn = document.querySelector(".supl_btn")
let supl = document.querySelector(".supl1_start")
let supl1Btn = document.querySelector(".supl1_btn")
let supl1Close = document.querySelector(".supl1_close")

suplBtn.addEventListener("click", function () {
    supl.style.top = "20%";
    supl.style.opacity = "1";
})


supl1Close.addEventListener("click", function () {
    supl.style.top = "-100%";
    supl.style.opacity = "0";
})


let tutBtn = document.querySelector(".tut_btn")
let tut = document.querySelector(".tut1_start")
let tut1Btn = document.querySelector(".tut1_btn")
let tut1Close = document.querySelector(".tut1_close")

tutBtn.addEventListener("click", function () {
    tut.style.top = "20%";
    tut.style.opacity = "1";
})


tut1Close.addEventListener("click", function () {
    tut.style.top = "-100%";
    tut.style.opacity = "0";
})

const toast = document.getElementById("toast");

tut1Btn.addEventListener("click", function () {
    toast.classList.add("show");


    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
})

let teacherStarted = document.querySelector(".teacher1_start")
let teacher1Btn = document.querySelector(".teacher1_btn")
let teacherClose = document.querySelector(".teacher1_close")
let teachBtn = document.querySelector(".teach_btn")

teachBtn.addEventListener("click", function () {
    teacherStarted.style.top = "20%";
    teacherStarted.style.opacity = "1";
})

teacherClose.addEventListener("click", function () {
    teacherStarted.style.top = "-100%";
    teacherStarted.style.opacity = "0";
})

let parent = document.querySelector(".parent_start")
let footerBtn = document.querySelector(".footer_btn1")
let parentBtn = document.querySelector(".parent_btn")
let parentClose = document.querySelector(".parent_close")

footerBtn.addEventListener("click", function () {
    parent.style.top = "20%";
    parent.style.opacity = "1";
})

parentClose.addEventListener("click", function () {
    parent.style.top = "-100%";
    parent.style.opacity = "0";
})

let teach = document.querySelector(".teach1_start")
let teach1Btn = document.querySelector(".teach1_btn")
let teachClose = document.querySelector(".teach1_close")
let teacherbtn = document.querySelector(".footer_btn2")

teacherbtn.addEventListener("click", function () {
    teach.style.top = "20%";
    teach.style.opacity = "1";
})

teachClose.addEventListener("click", function () {
    teach.style.top = "-100%";
    teach.style.opacity = "0";
})


let tutorModal = document.querySelector(".tutor_start");
let tutBtn1 = document.querySelector(".tut_btn");
let tutorClose = document.querySelector(".tutor_close");


tutBtn1.addEventListener("click", function () {
    tutorModal.style.top = "20%";
    tutorModal.style.opacity = "1";
});


tutorClose.addEventListener("click", function () {
    tutorModal.style.top = "-100%";
    tutorModal.style.opacity = "0";
});