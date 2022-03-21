
const submitButton = document.querySelector("button");
const textAreaDiv = document.querySelector("#message");
const textArea = document.querySelector("#msg");
const newElement = document.createElement("pre");

submitButton.addEventListener("click", (e)=>{
  e.target.classList.add("invisible");
  replaceTextArea();
  html2canvas(document.querySelector("form")).then(canvas => {
    document.body.appendChild(canvas)
  });
  e.target.classList.remove("invisible");
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