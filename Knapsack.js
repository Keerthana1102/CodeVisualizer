var grid1 = document.querySelector(".values")
var grid2 = document.querySelector(".weights")
var grid3 = document.querySelector(".matrix")
let timeOut = 1000;
let squares1 = [];
let squares2 = [];
let squares3 = [];
let w = 7;
let n = 4;
let speed = 2;
let timer = 1000;
let count = 0;
let isPlaying = false;

for(let i=0;i<n;i++){
    let box = document.createElement("div")
    box.setAttribute('id', i);
    box.setAttribute('class', "col-sm");
    box.setAttribute('style', 'background-color: #ffc107');
    if(i==0){
        box.innerHTML = 1;
    }
    else if(i==1){
        box.innerHTML = 4;
    }
    else if(i==2){
        box.innerHTML = 5;
    }
    else if(i==3){
        box.innerHTML = 7;
    }
    //box.innerHTML = Math.floor(Math.random() * 11);

    grid1.appendChild(box);
    squares1.push(box);
}

for(let i=0;i<n;i++){
    let box = document.createElement("div")
    box.setAttribute('id', i);
    box.setAttribute('class', "col-sm");
    box.setAttribute('style', 'background-color: #ffc107');
    if(i==0){
        box.innerHTML = 1;
    }
    else if(i==1){
        box.innerHTML = 3;
    }
    else if(i==2){
        box.innerHTML = 4;
    }
    else if(i==3){
        box.innerHTML = 5;
    }
    //box.innerHTML = Math.floor(Math.random() * 11 ) + 1;

    grid2.appendChild(box);
    squares2.push(box);
}

// squares3(n+1).fill(squares3(w+1))

for(let i=0;i<=n;i++){
    squares3[i] = [];
    for(let j=0;j<=w;j++){
        let box = document.createElement("div")
        box.setAttribute('id', j);
        box.setAttribute('class', "col-sm");
        box.setAttribute('style', 'background-color: #ffc107');
        box.innerHTML = 0;

        grid3.appendChild(box);
        squares3[i].push(box);
        // squares3[i][j] = 0;
    }
}

// let s = "[";
// for(let i=0;i<n;i++){
//     s += squares[i].innerHTML;
//     if(i<n-1){
//         s += ", "
//     }
// }
// s += "]"

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
    Knapsack(squares1, squares2, squares3, n, w);
}

function first(){
    
}

function pause(){
    count++;
    // alert("Stop");
    var pauseBtn = document.getElementById("pause");
    // tl = new TimelineMax();
    // tl.paused(!tl.paused());
    pauseBtn.innerHTML = (count%2==1) ? "Play" : "Pause";
}

function last(){
    speed = 0;
}

async function textEdit(msg){
    document.querySelector("#floatingTextarea2").innerHTML= "Knapsack \n" + msg;
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
    //document.getElementsByClassName(i).setAttribute('style', 'background-color: #20c997');
}

async function colorev(A, i){
	A[i].setAttribute('style','background-color: #ffc107 '); // yellow
	// squares[j].setAttribute('style','background-color: #ffc107 ');
}

async function colorChange(A, i){
	A[i].setAttribute("style","background-color: #0dcaf0 "); // blue
	// squares[j].setAttribute('style','background-color: #0dcaf0 ');
	
}

async function finalElem(A, i){
	A[i].setAttribute("style","background-color: greenyellow "); // green	
}

async function currentElem(A, i){
	A[i].setAttribute('style','background-color: #d63384 '); // pink
	// squares[j].setAttribute('style','background-color: #d63384 ');
	
}

async function swap(A, i,j)
{
	let tmp = A[i].innerHTML;
	A[i].innerHTML = A[j].innerHTML;
	A[j].innerHTML = tmp;

}

async function Knapsack(A, B, C, N, W){
    for(let i=1;i<=N;i++){
        lineHgli8('line l1');
        await setTimeDelay(2*timer/speed);
        deHgli8('line l1');

        for(let j=1;j<=W;j++){
            lineHgli8('line l2');
            await setTimeDelay(2*timer/speed);
            deHgli8('line l2');

            currentElem(B, i-1);
            textEdit("Consider the current weight");
            await setTimeDelay(3*timer/speed);

            textEdit("Check if the current element is greater than its corresponding j");
            await setTimeDelay(3*timer/speed);

            if(parseInt(B[i-1].innerHTML) > j){
                lineHgli8('line l3');
                textEdit("As it is greater than, it enters the if loop");
                currentElem(C[i], j);
                currentElem(C[i-1], j);
                await setTimeDelay(3*timer/speed);

                C[i][j].innerHTML = C[i-1][j].innerHTML;

                deHgli8('line l3');
                colorev(C[i], j);
                colorev(C[i-1], j);
                await setTimeDelay(3*timer/speed);
            }
            else{
                lineHgli8('line l4');
                textEdit("As it is not greater than, it enters the else loop");
                await setTimeDelay(3*timer/speed);
                deHgli8('line l4');

                let x = parseInt(B[i-1].innerHTML);

                currentElem(C[i-1], j);
                colorChange(C[i-1], j-x);
                colorChange(A, i-1);
                finalElem(C[i], j);
                await setTimeDelay(3*timer/speed);

                lineHgli8('line l5');
                textEdit("Check which is maximum, the element above(highlighted purple element) or the sum of highlighted blue elements");
                await setTimeDelay(3*timer/speed);
                C[i][j].innerHTML = Math.max(parseInt(C[i-1][j].innerHTML), parseInt(C[i-1][j-x].innerHTML)+parseInt(A[i-1].innerHTML));
                textEdit("Assign the maximum value");
                await setTimeDelay(3*timer/speed);

                deHgli8('line l5');
                colorev(C[i-1], j);
                colorev(C[i-1], j-x);
                colorev(A, i-1);
                colorev(C[i], j);
                await setTimeDelay(3*timer/speed);
            }
            colorev(B, i-1);
            await setTimeDelay(3*timer/speed);
        }
    }
    lineHgli8('line l9');
    finalElem(C[N], W);
    textEdit("Final required answer: " + C[N][W].innerHTML);
    await setTimeDelay(3*timer/speed);
    deHgli8('line l9');
}

textEdit(" ");