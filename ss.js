let grid = document.querySelector('.g1')
let squares = []
let speed=2;
let timer=1000;

for(let i=0; i<9;i++){
    let square = document.createElement('div')
    square.setAttribute('id', i)
    square.setAttribute('class',"col-sm");
	square.setAttribute('style','background-color: #ffc107');
    square.innerHTML = 110 %(i+3) - 15% (i+1);
    grid.append(square)
    squares.push(square)
}
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }
function addSp(){
	  if(speed<5){speed++;
	document.querySelector("#floatingTextarea").innerHTML=speed+"x";
	}
}
function subSp(){
	  if(speed>0){speed--;
		document.querySelector("#floatingTextarea").innerHTML=speed+"x";
	}
}
async function textEdit(msg)
{
	document.querySelector("#floatingTextarea2").innerHTML="Elements at correct place are colored in green!!! \n"+msg;
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
async function colorChange2(i,j)
{
	squares[i].setAttribute('style','background-color: chocolate solid ');
	squares[j].setAttribute('style','background-color: chocolate solid ');
	
}

async function swap(i,j)
{
	let tmp=squares[i].innerHTML;
	squares[i].innerHTML=squares[j].innerHTML;
	squares[j].innerHTML=tmp;

}
async function minElem(i)
{
	squares[i].setAttribute('style','background-color: brown ');
	
}
async function currentElem(i,j)
{
	squares[i].setAttribute('style','background-color: #d63384 ');
	
}
async function itrElem(i,j)
{
	squares[i].setAttribute('style','background-color: darkgoldenrod ');
	
}

async function linehighli(i){
    console.log(document.getElementById(i));
    var x = document.getElementById(i);
    x.style.backgroundColor = "#ffffff";
}
async function dehighli(i){
    var x = document.getElementById(i);
    x.style.backgroundColor = "#DDEEDD";
}
async function selection_sort()
{
	textEdit("Unsorted Array !!!");
	for(let i=0;i<squares.length-1;i++){
        await sleep(2*timer/speed);
        linehighli("l1");
        textEdit("Iterate over the array elements!!");
        await sleep(2*timer/speed);
        dehighli("l1");
        let k = i+1;
        textEdit("Pink colored element represents the current ith element!");
        currentElem(i); //set i to pink
        dehighli("l1");
        linehighli("l2");
		for(let j=i+1;j<squares.length;j++){
            await sleep(2*timer/speed);
            dehighli("l2");
            linehighli("l3");
            textEdit("Iterate over all the succeeding elements and find the minimum of them!");
            itrElem(j); //set j to somecolor
            textEdit("The light brown shaded element represents the current jth element being iterated in given pass!!");
			await sleep(3*timer/speed);
            
            dehighli("l3");
            minElem(k);
            textEdit("The dark brown colored element represents min element found so far!!");
            await sleep(2*timer/speed);
            linehighli("l4");
            await sleep(2*timer/speed);
            dehighli("l4");
			if(parseInt(squares[k].innerHTML)>parseInt(squares[j].innerHTML)){
				colorChange2(j,k);
                await sleep(2*timer/speed);
                textEdit("Since current element is less than the minimum found by now, the index for minimum element changes!!The Green swap represents it!!!");
                colorev(j,k);
                k=j;
                await sleep(2*timer/speed);
                minElem(k);
                textEdit("The dark brown colored element represents min element found so far!!");
				linehighli("l5");
				await sleep(2*timer/speed);	
                dehighli("l5");			
			}
            colorev(j,j);
            await sleep(2*timer/speed);			
		}
        if(parseInt(squares[i].innerHTML)>parseInt(squares[k].innerHTML)){
        textEdit("Swap the current ith element and the minimum element found from remaining array!!");
        colorChange(i,k);
        await sleep(2*timer/speed);
        linehighli("l6");
        swap(i,k);
        textEdit("The two respective elements are swapped!!Blue swap represents this!!");
        await sleep(2*timer/speed);
        dehighli("l6");
        }
        colorev(i,k);
        await sleep(2*timer/speed);
        textEdit("Apply Selection Sort for upcoming elements!\nGreen colored element represents the sorted portion of the array!");
		squares[i].setAttribute('style','background-color: #20c997 ');

	}
	textEdit("Sorted Array Found!!!");
}

selection_sort();