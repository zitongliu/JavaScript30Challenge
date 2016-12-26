
const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
  console.log(this);
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(function(input) {
  input.addEventListener('mouseover', handleUpdate);
});
