const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow (e){
  console.log(e);
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;
  const {offsetWidth: width, offsetHeight: height} = hero;
  let {offsetX: x, offsetY: y} = e;

  // when the mouse is the h1 "WOAH", the target is the h1 and not the div.
  if(this !== e.target){
    x = x + e.target.offsetLet;
    y = y + e.target.offsetTop;
  }
  console.log(x, y);

  const xWalk = (x / width * walk) - (walk / 2);
  const yWalk = (y / height * walk) - (walk / 2);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;
  console.log(xWalk, yWalk);
}

hero.addEventListener('mousemove',shadow);
