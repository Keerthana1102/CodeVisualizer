let speed = 2, timer = 1000;
let s1= [], s2 = [], s3=[], s4=[]
let pause=0;
let grid1 =  document.querySelector('#row1')
let grid2 =  document.querySelector('#row2')
let grid3 =  document.querySelector('#row3')
let grid4 =  document.querySelector('#row4')

let square1 = document.createElement('div')
let square2 = document.createElement('div')
let square3 = document.createElement('div')
let square4 = document.createElement('div')

for(let i = 1;i<=4;i++){
square1 = document.createElement('div')
square1.setAttribute('id', i)
square1.setAttribute('class',"col-sm");
square1.setAttribute('style','background-color: #ffc107');
square1.innerHTML = 0;
grid1.appendChild(square1)
s1.push(square1)

square2 = document.createElement('div')
square2.setAttribute('id',i)
square2.setAttribute('class',"col-sm");
square2.setAttribute('style','background-color: #ffc107');
square2.innerHTML = 0;
grid2.appendChild(square2)
s2.push(square2)

square3 = document.createElement('div')
square3.setAttribute('id',i)
square3.setAttribute('class',"col-sm");
square3.setAttribute('style','background-color: #ffc107');
square3.innerHTML = 0;
grid3.appendChild(square3)
s3.push(square3)

square4 = document.createElement('div')
square4.setAttribute('id',i)
square4.setAttribute('class',"col-sm");
square4.setAttribute('style','background-color: #ffc107');
square4.innerHTML = "W";
grid4.appendChild(square4)
s4.push(square4)
}
s1[0].innerHTML = 280;s2[0].innerHTML = 40; s3[0].innerHTML = 7;
s1[1].innerHTML = 100;s2[1].innerHTML = 10; s3[1].innerHTML = 10;
s1[2].innerHTML = 120;s2[2].innerHTML = 20; s3[2].innerHTML = 6;
s1[3].innerHTML = 120;s2[3].innerHTML = 24; s3[3].innerHTML = 5;

function start(){
    if(pause==0)
    { pause=1;
        document.getElementById("start").innerHTML="Restart";
        fknapsack();}
    else
    {
        location.reload();
    }
}
async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function subSp(){
    if(speed >0){
        speed--;
        document.querySelector('#speed').innerHTML= speed + "x";
    }
}
async function addSp(){
    if(speed<10){
        speed++;
        document.querySelector('#speed').innerHTML = speed+"x";
    }
}
function last(){
    speed = 0;
}
async function textEdit(msg){
    document.querySelector("#floatingTextarea2").innerHTML = "\n"+msg;
}
async function colorev(i,j){
	s1[i].setAttribute('style','background-color: #ffc107 ');
    s2[i].setAttribute('style','background-color: #ffc107 ');
    s3[i].setAttribute('style','background-color: #ffc107 ');
	s1[j].setAttribute('style','background-color: #ffc107 ');
    s2[j].setAttribute('style','background-color: #ffc107 ');
    s3[j].setAttribute('style','background-color: #ffc107 ');
}
async function colorChange(i,j){
	s1[i].setAttribute('style','background-color: #0dcaf0 ');
	s1[j].setAttribute('style','background-color: #0dcaf0 ');
    s2[i].setAttribute('style','background-color: #0dcaf0 ');
	s2[j].setAttribute('style','background-color: #0dcaf0 ');
    s3[i].setAttribute('style','background-color: #0dcaf0 ');
	s3[j].setAttribute('style','background-color: #0dcaf0 ');
	
}

async function swap(i,j){
	let tmp=s1[i].innerHTML;
	s1[i].innerHTML=s1[j].innerHTML;
	s1[j].innerHTML=tmp;
    let tmp2=s2[i].innerHTML;
	s2[i].innerHTML=s2[j].innerHTML;
	s2[j].innerHTML=tmp2;
    let tmp3=s3[i].innerHTML;
	s3[i].innerHTML=s3[j].innerHTML;
	s3[j].innerHTML=tmp3;

}
async function currentElem(i,j){
	s1[i].setAttribute('style','background-color: #d63384 ');
	s1[j].setAttribute('style','background-color: #d63384 ');
    s2[i].setAttribute('style','background-color: #d63384 ');
	s2[j].setAttribute('style','background-color: #d63384 ');
    s3[i].setAttribute('style','background-color: #d63384 ');
	s3[j].setAttribute('style','background-color: #d63384 ');
	
}
async function insertElem(i,j){
    s4[i].innerHTML = j;
    s4[i].setAttribute('style','background-color: #ffff66');
}
async function linehighli(i){
    var x = document.getElementById(i);
    x.style.backgroundColor = "#20c997";
}
async function dehighli(i){
    var x = document.getElementById(i);
    x.style.backgroundColor = "#CBEABA";
}
async function fknapsack(){
    textEdit("Greedy approach to slove the fractional knapsack problem!!");
    await sleep(2*timer/speed);
    linehighli("l1");
    await sleep(3*timer/speed);
    dehighli("l1");
    linehighli("l2");
    textEdit("Sort the values and weights in descending order of the ratio of value and weight! \n Note you can use any sorting algo, for an example bubble sort has been used!");
    for(let i=0; i<3;i++){
        for(let j = 0;j<3;j++){
            currentElem(j,j+1); //pink
			await sleep(3*timer/speed);
			if(parseInt(s3[j].innerHTML)< parseInt(s3[j+1].innerHTML))
			{
				colorChange(j,j+1); //blue
				textEdit("Since ratio at left is greater than right, swap will occur!!!");
				await sleep(3*timer/speed);
				swap(j,j+1);  //blue
				textEdit("Elements swapped!!");
				await sleep(2*timer/speed);
				textEdit("Apply Bubble Sort for upcoming elements");
				
			}
			colorev(j,j+1); //yellow
			await sleep(2*timer/speed);

        }
    }
    await sleep(2*timer/speed);
    dehighli("l2");
    let w = 60;
    for(let i = 0;i<3;i++){
        await sleep(2*timer/speed);
        linehighli("l4");
        textEdit("Iterate over the elements of iVal array!");
        let j = s2[i].innerHTML;
        await sleep(2*timer/speed);
        dehighli("l4");
        linehighli("l5");
        linehighli("l6");
        await sleep(2*timer/speed);
        dehighli("l5");
        dehighli("l6");
        linehighli("l7");
        await sleep(2*timer/speed);
        dehighli("l7");
        if(w>=j){
            linehighli("l8");
            linehighli("l9");
            textEdit("As, the given weight is less than w, so Put the weight in final ans!");
            insertElem(i,s1[i].innerHTML);
            w = w-j;
            await sleep(2*timer/speed);
            dehighli("l8");
            dehighli("l9");
        }
        else{
            linehighli("l10");
            await sleep(2*timer/speed);
            dehighli("l10");
            linehighli("l11");
            linehighli("l12");
            linehighli("l13");
            textEdit("As the given weight is greater than the unfilled capacity, Slice the weight!");
            insertElem(i,s1[i].innerHTML* (w/j));
            w = w- w/j;
            await sleep(2*timer/speed);
            dehighli("l11");
            dehighli("l12");
            dehighli("l13");
            linehighli("l14");
        }
    }
    insertElem(3,0);
    await sleep(2*timer/speed);
    dehighli("l14");
    linehighli("l15");
    textEdit("All the weights have been arranged 'greedily' to get max value!!");
    await sleep(3*timer/speed);
    dehighli("l15")
    textEdit("Final ans = 100 + 280+ 120 * (10/20) = 380 + 60 = 440");
}
