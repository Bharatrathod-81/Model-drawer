const HiddebBtn = document.querySelector(".navHiddenBtn");
const outPut = document.querySelector(".child1");
const button = document.querySelector(".child2");


let counter = 0;
const  hiddenFun = () => {
    outPut.style.width = '20%';
}
const  hiddenFun1 = () => {
    counter+=1;
    if(counter%2===0) {
        outPut.style.width = '0%';
    }   
}
HiddebBtn.addEventListener("click",hiddenFun);
button.addEventListener("click",hiddenFun1);