let colorInput = document.querySelector("#colorInput")
let randombtn = document.querySelector('.randombtn');
let applyBtn = document.querySelector('.applyBtn');
let currentColorValue = document.querySelector('.currentColorValue');
let container = document.querySelector('.container')


const getRandomColor= () => {
    return '#' + Math.floor(Math.random()* 16777215).toString(16);
}

const changeColor =(color)=>{
  container.style.backgroundColor=color;
}

const handleRandomButtonClick =()=>{
   let randomColor = getRandomColor();

   changeColor(randomColor);
   currentColorValue.textContent = randomColor;
   console.log(randomColor)
}

colorInput.addEventListener("input",()=>{
    changeColor(colorInput.value)
})

const handleApplyBtnClick = ()=>{
    let color = colorInput.value

    container.style.backgroundColor=color;
    currentColorValue.textContent=color;
    console.log(color)
}



randombtn.addEventListener('click',handleRandomButtonClick)


applyBtn.addEventListener('click',handleApplyBtnClick)








// changeColor('black')