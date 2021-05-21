
var grid=document.querySelector("#mainStr")
let time=1000;
let squares=[];
let N=8;
let speed=2;
let timer=1000;
let pause=0;

for(let i=0;i<N;i++)
{
	let sq=document.createElement("div");
	sq.setAttribute('id',i);
	sq.setAttribute('class',"col-sm");
	sq.setAttribute('style','background-color: #ffc107');
//	sq.setAttribute('style','border: 2px solid black')
	sq.innerHTML=Math.floor(Math.random() * 10);//34-i*i;
	grid.appendChild(sq);
	squares.push(sq);
}

let s = "[";
for(let i=0;i<N;i++){
    s += squares[i].innerHTML;
    if(i<N-1){
        s += ", "
    }
}
s += "]"

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }
  function addSp()
  {
	  if(speed<10){speed++;
	document.getElementById("speed").innerHTML=speed+"x";
	}
  }
  function subSp()
  {
	  if(speed>1){speed--;
		document.getElementById("speed").innerHTML=speed+"x";
	}
  }
  function begin()
  {
      //document.getElementById("#begin").disabled="True";
      if(!pause)
        { pause=1;
	  document.getElementById("start").innerHTML="Restart";
	 BubbleSort();}
      else
      {location.reload();
      }
      
    //  document.getElementById("#begin").disabled="True";

  }

  function last(){
    speed = 0;
}


  async function setback(id,chk)
  {
  if(chk)
  document.getElementById(id).setAttribute('style','background-color : #20c997');
  else
  document.getElementById(id).setAttribute('style','background-color : #CBEABA');
  }
async function textEdit(msg)
{
	document.querySelector("#floatingTextarea2").innerHTML=/*"Elements at correct place are colored in green!!! \n*/"Unsorted Array: "+s+"\n"+msg;
}
async function colorev(i,j)
{
	squares[i].setAttribute('style','background-color: #ffc107 ');
	squares[j].setAttribute('style','background-color: #ffc107 ');
}
async function colorChange(i,j)
{
	squares[i].setAttribute('style','background-color: #0dcaf0 ');
	squares[j].setAttribute('style','background-color: #0dcaf0 ');
	
}

async function swap(i,j)
{
	let tmp=squares[i].innerHTML;
	squares[i].innerHTML=squares[j].innerHTML;
	squares[j].innerHTML=tmp;

}
async function currentElem(i,j)
{
	squares[i].setAttribute('style','background-color: #d63384 ');
	squares[j].setAttribute('style','background-color: #d63384 ');
	
}


async function BubbleSort()
{
	textEdit("Unsorted Array !!!");
	for(let i=0;i<N-1;i++)
	{
		for(let j=0;j<N-1-i;j++)
		{
			setback("l1",1);
			await sleep(timer/speed);
			setback("l1",0);
			setback("l2",1);
			currentElem(j,j+1);
			await sleep(timer/speed);
			setback("l2",0);
			setback("l3",1);
			await sleep(timer/speed);
			setback("l3",0);
			if(parseInt(squares[j].innerHTML)>parseInt(squares[j+1].innerHTML))
			{setback("l4",1);
				colorChange(j,j+1);
				textEdit("Since element at left is greater than right adjacent element, swap will occur!!!");
				await sleep(3*timer/speed);
				swap(j,j+1);
				textEdit("Elements swapped!!");
				await sleep(2*timer/speed);
				textEdit("Apply Bubble Sort for upcoming elements");
				setback("l4",0);
			}
			colorev(j,j+1);
			await sleep(2*timer/speed);

		}
		squares[N-1-i].setAttribute('style','background-color: #20c997 ');

	}
	squares[0].setAttribute('style','background-color: #20c997 ');
	textEdit("Sorted Array Found!!!");

	for(let i=0;i<N;i++){
		squares[i].setAttribute('style','background-color: #ffc107 ');
	}
}

textEdit(" ");