/*Variables used*/


const firstShareBtn = document.querySelector(".share-container");

const secondShareBtn = document.querySelector(".link-share-container");


const shareContainer = document.querySelector(".info-con-container");


firstShareBtn.addEventListener("click", ()=> {
  shareContainer.style.display = "block"

});

secondShareBtn.addEventListener("click", ()=> {

  shareContainer.style.display = "none"
})