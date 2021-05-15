var grid=document.querySelector(".rows")
let time=1000;
let squares=[];
let N=10;
let speed=2;
let timer=1000;
let current = document.getElementById("currentelementrow");
let pause = 0;
let paused = 0;


for(let i=0;i<N;i++){
	let sq=document.createElement("div");
	sq.setAttribute('id',i);
	sq.setAttribute('class',"col-sm");
	sq.setAttribute('style','background-color: #ffc107');
	sq.innerHTML= Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1);
	grid.appendChild(sq);
	squares.push(sq);
}


function sleep(ms) {
  if(paused!=1)
	return new Promise(resolve => setTimeout(resolve, ms));
  else{
    while(1)
    {
      if(paused==0){
      return new Promise(resolve => setTimeout(resolve, ms));
      }
    }    
  }
}


function addSp()
{
  if(speed<5){speed++;
    document.querySelector("#speed").innerHTML=speed+"x";
  }
}
function subSp()
{
  if(speed>0){speed--;
    document.querySelector("#speed").innerHTML=speed+"x";
  }
}

// function pause()
// {
//   paused = 1;
// }

// function play()
// {
//   paused = 0;
// }

function start(){
  // InsertionSort();
  // if(!pause){ 
  //     pause=1;
  //     document.querySelector("#start").innerHTML="Restart";
      InsertionSort();
  // }
  // else{
  //     location.reload();
  // }
}

function newArray(){
  //     document.querySelector("#start").innerHTML="Restart";
  location.reload();
}

function last(){
    speed = 0;
}


async function textEdit(msg)
{
	document.querySelector(".form-control").innerHTML="Elements at correct place are colored in blue after each iteration!!!\nElement to be inserted is shown at top box and element it is compared to is shown with pink colour \n"+msg;
}

async function textremove()
{
  document.querySelector(".form-control").innerHTML="Elements at correct place are colored in blue after each iteration!!!"
}

async function colorev(i)
{
	squares[i].setAttribute('style','background-color: #ffc107 ');
}

async function colorChange(i,j)
{
	squares[i].setAttribute('style','background-color: #0dcaf0 ');
	squares[j].setAttribute('style','background-color: #0dcaf0 ');
}

async function shift(j)
{
	squares[j+1].innerHTML=squares[j].innerHTML;
    squares[j].innerHTML="  ";
}


async function currentElem(i)
{
	squares[i].setAttribute('style','background-color: #d63384 ');
}

async function currElem(i)
{
	squares[i].setAttribute('style','background-color: lightblue ');
}


async function lineHighlight(i){
  console.log(document.getElementsByClassName(i));
  var list, index;
  list = document.getElementsByClassName(i);
  for (index = 0; index < list.length; ++index) {
      list[index].setAttribute('style', 'background-color: #20c997');
  }
  
}

async function linedehighlight(i){
  console.log(document.getElementsByClassName(i));
  var list, index;
  list = document.getElementsByClassName(i);
  for (index = 0; index < list.length; ++index) {
      list[index].setAttribute('style', 'background-color: greenyellow');
  }
 
}



async function InsertionSort()
{
	textEdit("Unsorted Array !!!");
  lineHighlight("line l1");
  await sleep(2*timer/speed);
  linedehighlight("line l1");
	for(let i=1;i<N;i++)
	{
        let key = parseInt(squares[i].innerHTML);
        
        await sleep(2*timer/speed);
        textEdit("Select key");
        squares[i].setAttribute('style','background-color: #fff ');
        lineHighlight("line l3");
        await sleep(2*timer/speed);
        await colorev(i);
        linedehighlight("line l3");

        await sleep(3*timer/speed);
        
        let j = i-1;
        current.innerHTML= squares[i].innerHTML;
        squares[i].innerHTML=" ";

        while(j>=0 && parseInt(squares[j].innerHTML) > key)
        {
          
          await sleep(2*timer/speed);
                      
            
            await sleep(2*timer/speed);
            currentElem(j);
            lineHighlight("line l5")
            textEdit("As selected element is greater than current element create gap and move one element left")
            await sleep(2*timer/speed);
            linedehighlight("line l5");
            await sleep(2*timer/speed);
            lineHighlight("line l6");
            await sleep(2*timer/speed);
            shift(j);
            await sleep(2*timer/speed);
            linedehighlight("line l6");
            await sleep(2*timer/speed);
            squares[j].setAttribute('style','background-color: #ffc107 ');
            j = j-1;
            
            await sleep(2*timer/speed);
            await sleep(2*timer/speed);
            
        }
        textEdit("Insert the element in its correct position");
        await sleep(2*timer/speed);
        lineHighlight("line l9");
        squares[j+1].innerHTML=key;
        current.innerHTML= " ";
        await sleep(2*timer/speed);
        linedehighlight("line l9");
        await sleep(2*timer/speed);
        textremove();
        await sleep(2*timer/speed);
        for(let k = 0;k<=i;++k)
        {
            squares[k].setAttribute('style','background-color: lightblue ')

        }
        await sleep(2*timer/speed);
    }
    textEdit("Array is sorted hurrayy!!")

}