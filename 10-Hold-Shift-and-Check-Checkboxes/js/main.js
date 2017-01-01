

let lastChecked;


var handleCheck = function(e){
  console.log(e);
  // Check if they had the shift key down
  // And check that they are checking it
  let inBetween = false;
  if(e.shiftKey && this.checked){
    // go ahead and do what we please
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;

      }

      if(inBetween){
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;
}
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
console.log(checkboxes);
checkboxes.forEach(checkbox => checkbox.addEventListener('click',handleCheck));
