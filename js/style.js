//generate random background color 
for(let i=0 ; i<6; i++){
    const colorChange = document.getElementsByClassName('color')[i];

colorChange.addEventListener('mouseover', () => {
  colorChange.style.backgroundColor = colors();
});

function colors() {
  let colorArray = [];    

  for(let i =0; i < 3 ; i++){
    colorArray.push(Math.floor(Math.random() * (255 - 0) + 0));
  }
  // rgb -> hex
  let color = colorArray
    .map( x => x.toString(16))
    .join('');

  return `#${color}`;
}
}
