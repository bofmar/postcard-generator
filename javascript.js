html2canvas(document.querySelector("form")).then(canvas => {
  document.body.appendChild(canvas)
});