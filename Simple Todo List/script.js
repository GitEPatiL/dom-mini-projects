let listContainer = document.querySelector(".listContainer");
let addInput = document.querySelector("#addInput");
let addBtn = document.querySelector(".addBtn");

let list = [
  {
    id: 1234,
    text: "hello",
  },
  {
    id: 234,
    text: "hiiii",
  },
];

const renderList = (arr) => {
  listContainer.innerHTML = "";

  arr.forEach((obj) => {
    let divElem = document.createElement("div");
    divElem.classList = "list";
    divElem.innerHTML = `
          <p>${obj.text}</p>
           `;

    let buttonElement = document.createElement("button");
    buttonElement.innerText = "❌";
    divElem.appendChild(buttonElement);
    divElem.onclick =()=>{
      handleRemoveList(obj.id)
    }

    listContainer.append(divElem);
  });
};

renderList(list);

const addTask = () => {
  let obj = {
    id: Date.now(),
    text: addInput.value,
  };
  list.unshift(obj);
  console.log(list);
  renderList(list);
  addInput.value = "";
};



function handleRemoveList(id){
   let filteredList = list.filter(obj =>{
    return obj.id !== id
   })
   list= filteredList
   renderList(list)
}

addBtn.addEventListener("click", addTask);


addInput.addEventListener('keydown',(e)=>{
  if(e.key === "Enter"){
    e.preventDefault();
    addTask();
  }
})
