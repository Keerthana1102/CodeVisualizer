var grid1 = document.querySelector("#cont1")
var grid2 = document.querySelector("#cont2")
let timeOut = 1000;

let p = [];
let dp = [];

let m = 4;
let n = 5;
let speed = 2;
let timer = 1000;
let count = 0;
let isPlaying = false;
let pause = 0;

for(let i=0;i<n;i++){
    let rw = document.createElement("div");
    rw.setAttribute('id',"row1");
    rw.setAttribute('class',"row");
    let dpr=[];

    for(let j=0;j<m;j++){
        let sq = document.createElement("div");
        sq.setAttribute('id',toString(i)+toString(j));
        sq.setAttribute('class',"col-sm");
        sq.setAttribute('style','background-color: #ffc107');
        sq.innerHTML = Math.floor(Math.random() * 10);
        rw.appendChild(sq);
        dpr.push(sq);   
    }
    grid1.appendChild(rw);
    p.push(dpr);
}

for(let i=0;i<n;i++){
    let rw = document.createElement("div");
    rw.setAttribute('id',"row1");
    rw.setAttribute('class',"row");
    let dpr=[];

    for(let j=0;j<m;j++){
        let sq = document.createElement("div");
        sq.setAttribute('id',toString(i)+toString(j));
        sq.setAttribute('class',"col-sm");
        sq.setAttribute('style','background-color: #ffc107');
        sq.innerHTML =0;
        rw.appendChild(sq);
        dpr.push(sq);   
    }
    grid2.appendChild(rw);
    dp.push(dpr);
}

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

async function start(){
    if(!pause){ 
        pause=1;
        document.querySelector("#start").innerHTML="Restart";
        lineHgli8('line l1');
        textEdit("Start");
        await setTimeDelay(3*timer/speed);
        deHgli8('line l1');
        maxSumPath(p, dp);
    }
    else{
        location.reload();
    }
}

function last(){
    speed = 0;
}

async function textEdit(msg){
    document.querySelector("#floatingTextarea2").innerHTML= "Max Sum Path \n" + msg;
}

async function lineHgli8(i){
    console.log(document.getElementsByClassName(i));
    var list, index;
    list = document.getElementsByClassName(i);
    for (index = 0; index < list.length; ++index) {
        list[index].setAttribute('style', 'background-color: #20c997');
    }
}

async function deHgli8(i){
    console.log(document.getElementsByClassName(i));
    var list, index;
    list = document.getElementsByClassName(i);
    for (index = 0; index < list.length; ++index) {
        list[index].setAttribute('style', 'background-color: #CBEABA');
    }
}

async function colorev(A, i){
	A[i].setAttribute('style','background-color: #ffc107 '); // yellow
}

async function colorChange(A, i){
	A[i].setAttribute("style","background-color: #0dcaf0 "); // blue	
}

async function finalElem(A, i){
	A[i].setAttribute("style","background-color: greenyellow "); // green	
}

async function currentElem(A, i){
	A[i].setAttribute('style','background-color: #d63384 '); // pink	
}

async function maxSumPath(table1, table2){
    // Creating DP Table
    for(let i=0;i<n;i++){
        lineHgli8('line l3');
        textEdit("Iterating through rows");
        await setTimeDelay(3*timer/speed);
        deHgli8('line l3');

        for(let j=0;j<m;j++){
            lineHgli8('line l4');
            textEdit("Iterating through each column of the row");
            await setTimeDelay(3*timer/speed);
            deHgli8('line l4');

            if(i===0 && j==0){
                lineHgli8('line l5');
                textEdit("If it is the first element of the matrix");
                colorChange(table1[i], j);
                await setTimeDelay(3*timer/speed);
                currentElem(table2[i], j);
                textEdit("Then simply the cost will be directly the profit of that position");

                table2[i][j].innerHTML = table1[i][j].innerHTML;

                await setTimeDelay(3*timer/speed);
                colorev(table1[i], j);
                colorev(table2[i], j);
                await setTimeDelay(3*timer/speed);
                deHgli8('line l5');
            }
            else if(i===0){
                lineHgli8('line l6');
                textEdit("If it belongs to the first row of the matrix");
                colorChange(table1[i], j);
                colorChange(table2[i], j-1);
                await setTimeDelay(3*timer/speed);
                currentElem(table2[i], j);
                textEdit("Then simply the cost will be the sum of the profit of that position and the cost of the position to the left of it");

                table2[i][j].innerHTML = parseInt(table1[i][j].innerHTML) + parseInt(table2[i][j-1].innerHTML);

                await setTimeDelay(3*timer/speed);
                colorev(table1[i], j);
                colorev(table2[i], j-1);
                colorev(table2[i], j);
                await setTimeDelay(3*timer/speed);
                deHgli8('line l6');
            }
            else if(j===0){
                lineHgli8('line l7');
                textEdit("If it belongs to the column row of the matrix");
                colorChange(table1[i], j);
                colorChange(table2[i-1], j);
                await setTimeDelay(3*timer/speed);
                currentElem(table2[i], j);
                textEdit("Then simply the cost will be the sum of the profit of that position and the cost of the position to the top of it");

                table2[i][j].innerHTML = parseInt(table1[i][j].innerHTML) + parseInt(table2[i-1][j].innerHTML);

                await setTimeDelay(3*timer/speed);
                colorev(table1[i], j);
                colorev(table2[i-1], j);
                colorev(table2[i], j);
                await setTimeDelay(3*timer/speed);
                deHgli8('line l7');
            }
            else{
                lineHgli8('line l8');
                textEdit("If it belongs to the middle part of the matrix");
                colorChange(table1[i], j);
                colorChange(table2[i-1], j);
                colorChange(table2[i], j-1);
                await setTimeDelay(3*timer/speed);
                currentElem(table2[i], j);
                textEdit("Then the cost will be the sum of the profit of that position and the maximum of cost of the position to the top of it and left of it");

                table2[i][j].innerHTML = Math.max(parseInt(table2[i][j-1].innerHTML), parseInt(table2[i-1][j].innerHTML)) + parseInt(table1[i][j].innerHTML);

                await setTimeDelay(3*timer/speed);
                colorev(table1[i], j);
                colorev(table2[i-1], j);
                colorev(table2[i], j-1);
                colorev(table2[i], j);
                await setTimeDelay(3*timer/speed);
                deHgli8('line l8');
            }
        }
    }
    lineHgli8('line l11');
    textEdit("The last element of the matrix is the required answer");
    finalElem(table2[n-1], m-1);
    await setTimeDelay(3*timer/speed);
    deHgli8('line l11');
}

textEdit(" ");
