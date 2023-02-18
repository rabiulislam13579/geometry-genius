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

function getInputValue(inputId){
  const inputField=document.getElementById(inputId);
  const inputFieldString=inputField.value;
  const inputFieldValue=parseFloat(inputFieldString);
  if(inputFieldValue < 0){
    return alert('plz enter a positive number');

  }
  else{
    return inputFieldValue
   }
}

//get element by id
function fillResultField(id,value){
  const resultField= document.getElementById(id);
  resultField.innerText=value;

}

//make display block the disable property
function makeDisplayBlock(elementId){
  document.getElementById(elementId).style.display='block';
}



//Rhombus


//Pentagon
const PentagonFirstInput=getInputValue('pentagon-p');
const pentagonSecondInput=getInputValue('pentagon-b');

//Ellipse
const ellipseFirstInput=getInputValue('ellipse-a');
const ellipseSecondInput=getInputValue('ellipse-b');


//validation check and event handler

//for triangle


document.getElementById('btn-triangle').addEventListener('click',function(){
  const triangleFirstInput=getInputValue('triangle-b');
  const triangleSecondInput=getInputValue('triangle-h');
     const triangleArea=0.5 * triangleFirstInput * triangleSecondInput;

     fillResultField('triangle-result',triangleArea);

     makeDisplayBlock('triangle-result-field');
     
    
  
})

//for rectangle
document.getElementById('btn-rectangle').addEventListener('click',function(){
  const rectangleFirstInput=getInputValue('rectangle-w');
  const rectangleSecondInput=getInputValue('rectangle-l');
     const rectangleArea=rectangleFirstInput * rectangleSecondInput;

     fillResultField('rectangle-result',rectangleArea);

     makeDisplayBlock('rectangle-result-field');
     
    
  
})

//for Parallelogram
document.getElementById('btn-parallelogram').addEventListener('click',function(){
  const parallelogramFirstInput=getInputValue('parallelogram-b');
  const parallelogramSecondInput=getInputValue('parallelogram-h');
     const parallelogramArea=parallelogramFirstInput *parallelogramSecondInput ;

     fillResultField('parallelogram-result',parallelogramArea);

     makeDisplayBlock('parallelogram-result-field');
     
    
  
})

//for Rhombus
document.getElementById('btn-rhombus').addEventListener('click',function(){
  const rhombusFirstInput=getInputValue('rhombus-d1');
  const rhombusSecondInput=getInputValue('rhombus-d2');
     const rhombusArea=0.5 * rhombusFirstInput *rhombusSecondInput ;

     fillResultField('rhombus-result',rhombusArea);

     makeDisplayBlock('rhombus-result-field');
     
    
  
})



