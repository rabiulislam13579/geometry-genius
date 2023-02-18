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

//add new html file bu clicking blog button
document.getElementById('btn-blog').addEventListener('click',function(){
  window.location.href='blog.html'
})


//function for take value from the input field

function getInputValue(elementId){
  const inputField=document.getElementById(elementId);
  const inputFieldString=inputField.value;
  const inputFieldValue=parseFloat(inputFieldString);
  return inputFieldValue;
}


//get the value of input field

//triangle
const triangleFirstInput=getInputValue('triangle-b');
const triangleSecondInput=getInputValue('triangle-h');

//rectangle
const rectangleFirstInput=getInputValue('rectangle-w');
const rectangleSecondInput=getInputValue('rectangle-l');

//Parallelogram
const parallelogramFirstInput=getInputValue('parallelogram-b');
const parallelogramSecondInput=getInputValue('parallelogram-h');

//Rhombus
const rhombusFirstInput=getInputValue('rhombus-d1');
const rhombusSecondInput=getInputValue('rhombus-d2');

//Pentagon
const PentagonFirstInput=getInputValue('pentagon-p');
const pentagonSecondInput=getInputValue('pentagon-b');

//Ellipse
const ellipseFirstInput=getInputValue('ellipse-a');
const ellipseSecondInput=getInputValue('ellipse-b');
console.log(ellipseFirstInput+ellipseSecondInput);