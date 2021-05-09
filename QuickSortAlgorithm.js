var grid = document.querySelector(".rows")
let timeOut = 1000;
let squares = [];
let n = 7;
let speed = 2;
let timer = 1000;
let count = 0;
let isPlaying = false;

for(let i=0;i<=n;i++){
    if(i==n){
        squares[i] = 1000000;
        break;
    }
    let box = document.createElement("div")
    box.setAttribute('id', i);
    box.setAttribute('class', "col-sm");
    box.setAttribute('style', 'background-color: #ffc107');
    // if(i==0){
    //     box.innerHTML = 4;
    // }
    // else if(i==1){
    //     box.innerHTML = 3;
    // }
    // else if(i==2){
    //     box.innerHTML = 2;
    // }
    // else if(i==3){
    //     box.innerHTML = 1;
    // }
    // else if(i==4){
    //     box.innerHTML = 5;
    // }
    box.innerHTML = Math.floor(Math.random() * 11);

    grid.appendChild(box);
    squares.push(box);
}

let s = "[";
for(let i=0;i<n;i++){
    s += squares[i].innerHTML;
    if(i<n-1){
        s += ", "
    }
}
s += "]"

function setTimeDelay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function addSp(){
    if(speed < 10){
        speed++;
        document.querySelector("#speed").innerHTML=speed+"x";
    }
}

function subSp(){
    if(speed > 1){
        speed--;
        document.querySelector("#speed").innerHTML=speed+"x";
    }
}

function start(){
    // alert("Start");
    isPlaying = true;
    QuickSort(squares, n, 0, n);
}

function last(){
    speed = 0;
}

async function textEdit(msg){
    document.querySelector("#floatingTextarea2").innerHTML=/*"Elements at correct place are colored in green!!! \n*/"Unsorted Array: "+s+"\n"+msg;
}

async function lineHgli8(i){
    console.log(document.getElementsByClassName(i));
    var list, index;
    list = document.getElementsByClassName(i);
    for (index = 0; index < list.length; ++index) {
        list[index].setAttribute('style', 'background-color: #20c997');
    }
    //document.getElementsByClassName(i).setAttribute('style', 'background-color: #20c997'); // green
}

async function deHgli8(i){
    console.log(document.getElementsByClassName(i));
    var list, index;
    list = document.getElementsByClassName(i);
    for (index = 0; index < list.length; ++index) {
        list[index].setAttribute('style', 'background-color: greenyellow');
    }
}

async function colorev(i)
{
	squares[i].setAttribute('style','background-color: #ffc107 '); // yellow
}

async function colorChange(i)
{
	squares[i].setAttribute("style","background-color: #0dcaf0 "); // blue	
}

async function swap(i,j)
{
	let tmp=squares[i].innerHTML;
	squares[i].innerHTML=squares[j].innerHTML;
	squares[j].innerHTML=tmp;

}

async function currentElem(i)
{
	squares[i].setAttribute('style','background-color: #d63384 '); // pink	
}

async function partition(D, N, low, high){
    let i;
    let j;
    let pivot;

    i = low;
    j = high;
    pivot = parseInt(D[i].innerHTML);
    lineHgli8('line l1');
    currentElem(low);
    textEdit("Consider pivot");
    await setTimeDelay(3*timer/speed);
    deHgli8('line l1');

    lineHgli8('line l2');
    textEdit("While loop starts");
    await setTimeDelay(3*timer/speed);
    deHgli8('line l2');

    while(i < j){
        currentElem(low);
        await setTimeDelay(3*timer/speed);
        do{
            deHgli8('line l4');
            lineHgli8('line l3');
            textEdit("Move to next element");
			i++;

            if(i == high || squares[i].style.backgroundColor == '#20c997'){
                await setTimeDelay(3*timer/speed);
                deHgli8('line l3');
                break;
            }
            currentElem(i);
            //textEdit("Compare pivot with current element");
            await setTimeDelay(3*timer/speed);
            deHgli8('line l3');
 
            lineHgli8('line l4'); 
            textEdit("Check if it is greater than pivot");
            await setTimeDelay(3*timer/speed);   
            if(parseInt(D[i].innerHTML)<=pivot){
                colorev(i);
                await setTimeDelay(3*timer/speed);
            }
		}
		while(parseInt(D[i].innerHTML)<=pivot & i<=N-1);

        await setTimeDelay(3*timer/speed);
        deHgli8('line l4');

        currentElem(i);
        textEdit("Current element is greater than pivot so forward operator stops");
        await setTimeDelay(3*timer/speed);

        do{
            deHgli8('line l6');
            lineHgli8('line l5');
            textEdit("Move to before element");
			j--;
            if(j==i || squares[j].style.backgroundColor == '#20c997'){
                continue;
            }
            currentElem(j);
            await setTimeDelay(3*timer/speed);
            deHgli8('line l5');
            
            lineHgli8('line l6'); 
            textEdit("Check if it is lesser than pivot");
            await setTimeDelay(2*timer/speed); 
            if(parseInt(D[j].innerHTML)>pivot){
                colorev(j);
                await setTimeDelay(3*timer/speed);
            } 
		}
		while(j>=0 & parseInt(D[j].innerHTML)>pivot);

        await setTimeDelay(3*timer/speed);
        deHgli8('line l6');

        currentElem(j);
        textEdit("Current element is smaller than pivot so backward operator stops");
        await setTimeDelay(3*timer/speed);

        if(i<j){
            lineHgli8('line l7');
            colorChange(i);
            colorChange(j);
            textEdit("Swapping the elements");
            await setTimeDelay(3*timer/speed);
            swap(i, j);
            textEdit("Swapping complete");
            await setTimeDelay(3*timer/speed);
            colorev(i);
            colorev(j);  
            deHgli8('line l7');  
        }
        else{
            await setTimeDelay(3*timer/speed);
            textEdit("Elements at correct position so no need of swapping.");
            colorev(i);  
            await setTimeDelay(3*timer/speed);
        }
    }

    lineHgli8('line l9');
    colorChange(low);
    colorChange(j);
    textEdit("Swapping pivot to its correct position");
    await setTimeDelay(3*timer/speed);
    swap(low, j);
    textEdit("Swapping complete");
    await setTimeDelay(2*timer/speed);
    colorev(low);
    colorev(j);
    deHgli8('line l9');


    squares[j].setAttribute('style','background-color: #20c997 ');
    await setTimeDelay(3*timer/speed);
    squares[j].setAttribute('style','background-color: #ffc107 ');
    //console.log("Partition Finish");
    return j;
}

async function QuickSort(D, N, low, high){
    console.log("Call "+low+" "+high);
    if(low < high){
        let j = await partition(D, N, low, high);
        console.log("j: "+j);
        // if(j==0){
        //     await QuickSort(D, N, j+1, high);
        // }
        // else{
            await QuickSort(D, N, low, j);
            await QuickSort(D, N, j+1, high);
        // }
        
    }
}

textEdit(" ");
// QuickSort(squares, n, 0, n)