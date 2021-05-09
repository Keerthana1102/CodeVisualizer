let speed = 2, timer = 1000;
let s1= [], s2 = [], s3=[], s4=[]

let grid1 =  document.querySelector('.g1')
let grid2 =  document.querySelector('.g2')
let grid3 =  document.querySelector('.g3')
let grid4 =  document.querySelector('.g4')

let square1 = document.createElement('div')
let square2 = document.createElement('div')
let square3 = document.createElement('div')
let square4 = document.createElement('div')

for(let i = 1;i<=5;i++){
square1 = document.createElement('div')
square1.setAttribute('id', i)
square1.setAttribute('class',"col-sm");
square1.setAttribute('style','background-color: #ffc107');
square1.innerHTML = String.fromCharCode(96+i);
grid1.append(square1)
s1.push(square1)

square2 = document.createElement('div')
square2.setAttribute('id',i)
square2.setAttribute('class',"col-sm");
square2.setAttribute('style','background-color: #ffc107');
square2.innerHTML = (i<=3)? i : (i%4 +1);
grid2.append(square2)
s2.push(square2)

square3 = document.createElement('div')
square3.setAttribute('id',i)
square3.setAttribute('class',"col-sm");
square3.setAttribute('style','background-color: #ffc107');
square3.innerHTML = 51*(i%3 + 1) - 9*i;
grid3.append(square3)
s3.push(square3)

square4 = document.createElement('div')
square4.setAttribute('id',i)
square4.setAttribute('class',"col-sm");
square4.setAttribute('style','background-color: #ffc107');
square4.innerHTML = i-1 +" - "+ i;
grid4.append(square4)
s4.push(square4)
}

async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function subSp(){
    if(speed >0){
        speed--;
        document.querySelector('#floatingTextarea').innerHTML= speed + "x";
    }
}
async function addSp(){
    if(speed<5){
        speed++;
        document.querySelector('#floatingTextarea').innerHTML = speed+"x";
    }
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
    s4[j].innerHTML = s1[i].innerHTML;
    s4[j].setAttribute('style','background-color: #ffff66');
}
async function linehighli(i){
    var x = document.getElementById(i);
    x.style.backgroundColor = "#ffffff";
}
async function dehighli(i){
    var x = document.getElementById(i);
    x.style.backgroundColor = "#DDEEDD";
}
async function job_scheduling(){
    textEdit("Schedule the jobs to gain max profit!!");
    linehighli("l1");
    await sleep(2*timer/speed);
    dehighli("l1");
    textEdit("Sort the jobs in descending order of the profits!");
    for(let i=0; i<4;i++){
        await sleep(2*timer/speed);
        textEdit("Iterate over the ith element in the array!");
        linehighli("l3");
        for(let j = 0;j<4;j++){
            await sleep(2*timer/speed);
            dehighli("l3");
            linehighli("l4");
            textEdit("Iterate over the jth element in the array!\nPink colored ones represent the same!");
            currentElem(j,j+1); //pink
			await sleep(3*timer/speed);
            dehighli("l4");
            linehighli("l5");
            textEdit("Check if the profit of the jth element is less than (j+1)th element!");
            await sleep(2*timer/speed);
            dehighli("l5");
			if(parseInt(s3[j].innerHTML)< parseInt(s3[j+1].innerHTML))
			{
				colorChange(j,j+1); //blue
				textEdit("Since element at left is greater than right adjacent element, swap will occur!!!");
				await sleep(3*timer/speed);
                linehighli("l6");
				swap(j,j+1);  //blue
				textEdit("Elements swapped!!");
				await sleep(2*timer/speed);
                dehighli("l6");
				textEdit("Apply Bubble Sort for upcoming elements");
				
			}
			colorev(j,j+1); //yellow
			await sleep(2*timer/speed);

        }
    }

    let filled = []
    linehighli("l7");
    textEdit("To keep track of free slots!");
    for(let i=0;i<5;i++)filled.push(-1);
    await sleep(2*timer/speed);
    dehighli("l7");

    linehighli("l8");
    textEdit("To keep track of allotted slots!");
    await sleep(2*timer/speed);
    dehighli("l8");

    for(let i = 0;i<5;i++){
        linehighli("l9");
        await sleep(2*timer/speed);
        textEdit("Iterate through all given jobs!");
        dehighli("l9");
        let j = s2[i].innerHTML -1;
        await sleep(2*timer/speed);
        textEdit("Find a free slot for this job (Note that we start from the last possible slot)");
        
        for(;j>=0 && filled[j]!= -1;j--){
            linehighli("l10");
            await sleep(2*timer/speed);
            dehighli("l10");
            linehighli("l11");
            await sleep(2*timer/speed);
            dehighli("l11");
        }
        if(j>=0){
            await sleep(3*timer/speed);
            linehighli("l12");
            textEdit("Schedule the job at available free time slot!");
            insertElem(i,j);
            filled[j]= 0;
            await sleep(2*timer/speed);
            dehighli("l12");
            linehighli("l13");
            await sleep(2*timer/speed);
            dehighli("l13");
            linehighli("l14");
            await sleep(2*timer/speed);
            dehighli("l14");
        }
        else{
            await sleep(2*timer/speed);
            textEdit("This job can't be scheduled due to non- availability of slot!");
        }
    }
    for(let i=0;i<5;i++){
        if(filled[i]==-1){s4[i].innerHTML = "NA";
        s4[i].setAttribute('style','background-color: #ffff66');}
    }
    await sleep(2*timer/speed);
    textEdit("All the jobs have been scheduled (within given deadlines) 'greedily' to gain max profit!!");
}

job_scheduling();