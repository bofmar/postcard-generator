
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", (e)=>{
  e.target.classList.add("invisible");
  replaceTextArea();
  // console.log(newDiv.innerHTML);
  html2canvas(document.querySelector("form")).then(canvas => {
    document.body.appendChild(canvas)
  });  
});

//Because of limitations in the way html2canvas handles
//textarea elements, we need to replace the textarea with
//a pre element on runtime to keep its' formatting.
function replaceTextArea(){
  const textAreaDiv = document.querySelector("#message");
  const textArea = document.querySelector("#msg");
  const newDiv = document.createElement("pre");

  newDiv.innerHTML = textArea.value;
  newDiv.classList.add("textarea-copy");
  textAreaDiv.appendChild(newDiv);
  textAreaDiv.removeChild(textArea);
}