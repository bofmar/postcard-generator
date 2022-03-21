
const submitButton = document.querySelector("#save-button");
const textAreaDiv = document.querySelector("#message");
const textArea = document.querySelector("#msg");
const newElement = document.createElement("pre");
const closeModalButton = document.querySelector("[data-close-button]");
const overlay = document.querySelector("#overlay");
const modalBody = document.querySelector(".modal-body");
const savePng = document.querySelector("#png")
let image;

submitButton.addEventListener("click", (e)=>{
  e.target.classList.add("invisible"); //make button invisible so that it will not be drawn on the canvas
  replaceTextArea(); //remove unwanted elements
  html2canvas(document.querySelector("form")).then(canvas => {
    modalBody.appendChild(canvas) //add canvas to popup for preview
    image = canvas.toDataURL("image/png").replace("image/png","image/octet-stream"); //get the URL for the download
  });
  const modal = document.querySelector("#modal");
  //make the popup and overlay appear
  openModal(modal);
  e.target.classList.remove("invisible"); //re-enable the button
  resetTextArea();
});

//Because of limitations in the way html2canvas handles
//textarea elements, we need to replace the textarea with
//a pre element on runtime to keep its' formatting.
function replaceTextArea(){
  newElement.innerHTML = textArea.value;
  newElement.classList.add("textarea-copy");
  textAreaDiv.appendChild(newElement);
  textAreaDiv.removeChild(textArea);
}

//after the canvas is drawn, we revert the changes to the DOM
//to allow the user to change his inputs
function resetTextArea(){
  textAreaDiv.removeChild(newElement);
  textAreaDiv.appendChild(textArea);
}

closeModalButton.addEventListener("click", (e) =>{
  const modal = e.target.closest(".modal");
  closeModal(modal);
})

//draw popup
function openModal(modal){
  if(modal === null){
    return
  }
  modal.classList.add("active")
  overlay.classList.add("active");
}

//close popup
function closeModal(modal){
  if(modal === null){
    return
  }
  modal.classList.remove("active");
  overlay.classList.remove("active");  
  //detach the previews canvas
  modalBody.removeChild(document.querySelector("canvas"));
}

//save the image
savePng.addEventListener("click", ()=>{
  window.location.href = image;
})