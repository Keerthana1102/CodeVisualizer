let speed = 2, timer = 1000;
let s1= [], s2 = [], s3=[]
let squares4 = [];

let grid1 =  document.querySelector('.g1')
let grid2 =  document.querySelector('.g2')
let grid3 =  document.querySelector('.g3')
var grid4 = document.querySelector(".g4")
//let grid4 =  document.querySelector('.g4')
//let grid5 =  document.querySelector('.g5')


let square1 = document.createElement('div')
let square2 = document.createElement('div')
let square3 = document.createElement('div')

//let square4 = document.createElement('div')
//let square5 = document.createElement('div')

square1.setAttribute('id', 0)
square1.setAttribute('class',"col-sm");
square1.setAttribute('style','background-color: #ffc107');
square1.innerHTML = 'B1';
grid1.append(square1)

square2.setAttribute('id',0)
square2.setAttribute('class',"col-sm");
square2.setAttribute('style','background-color: #ffc107');
square2.innerHTML = "B2";
grid2.append(square2)

square3.setAttribute('id',0)
square3.setAttribute('class','col-sm');
square3.setAttribute('style','background-color: #ffc107');
square3.innerHTML = "B3";
grid3.append(square3)

/*square4.setAttribute('id',0)
square4.setAttribute('class','col-sm');
square4.setAttribute('style','background-color: #ffff66');
square4.innerHTML = "B4";
grid4.append(square4) 


square5.setAttribute('id',i);
square5.setAttribute('class',"col-sm");
square5.setAttribute('style','background-color: #ffc107');
square5.innerHTML="B5";
grid5.append(square5)*/
async function finalarray1(){  
for(let i=0;i<10;i++)
{
    let sq=document.createElement("div");
    sq.setAttribute('id',i);
    sq.setAttribute('class',"col-sm");
    sq.setAttribute('style','background-color: #ffc107');
    //sq.innerHTML=Math.floor(Math.random()*99) +1;
    
    
     if(i==0){
        sq.innerHTML = 1;
    }
    else if(i==1){
        sq.innerHTML = 8;
    }
    else if(i==2){
         sq.innerHTML = 9;
    }
    else if(i==3){
        sq.innerHTML =11 ;
    }
     else if(i==4){
        sq.innerHTML = 12;
    }
    else if(i==5){
        sq.innerHTML = 13;
    }
    else if(i==6){
         sq.innerHTML = 17;
    }
    else if(i==7){
        sq.innerHTML =19 ;
    }
     else if(i==8){
        sq.innerHTML = 21;
    }
     else if(i==9){
        sq.innerHTML = 24;
    }



    grid4.appendChild(sq);
    squares4.push(sq);
}
}

for(let i = 0;i<2;i++){
square1 = document.createElement('div')
square1.setAttribute('id', i)
square1.setAttribute('class',"col-sm");
square1.setAttribute('style','background-color: #ffc107');
//square1.innerHTML = i+1;
if(i==0){
        square1.innerHTML = 8;
    }
    else if(i==1){
        square1.innerHTML = 1;
    }
grid1.append(square1)
s1.push(square1)
}
for(let i = 0;i<4;i++){
square2 = document.createElement('div')
square2.setAttribute('id',i)
square2.setAttribute('class',"col-sm");
square2.setAttribute('style','background-color: #ffc107');
//square2.innerHTML = 8-i;
 
     if(i==0){
        square2.innerHTML = 11;
    }
    else if(i==1){
        square2.innerHTML = 9;
    }

     if(i==2){
        square2.innerHTML = 13;
    }
    else if(i==3){
        square2.innerHTML = 12;
    }
    

grid2.append(square2)
s2.push(square2)
}
for(let i = 0;i<4;i++){
square3 = document.createElement('div')
square3.setAttribute('id',i)
square3.setAttribute('class',"col-sm");
square3.setAttribute('style','background-color: #ffc107');
//square3.innerHTML = 10-i;
if(i==0){
        square3.innerHTML = 21;
    }
    else if(i==1){
        square3.innerHTML = 17;
    }
     else if(i==2){
        square3.innerHTML = 19;
    }
     else if(i==3){
        square3.innerHTML = 24;
    }


grid3.append(square3)
s3.push(square3)

}/*
for(let i=0;i<2;i++){
square4 = document.createElement('div')
square4.setAttribute('id',i)
square4.setAttribute('class',"col-sm");
square4.setAttribute('style','background-color: #ffc107');
//square4.innerHTML = i*1;
if(i==0){
        square4.innerHTML = 17;
    }
    else if(i==1){
        square4.innerHTML = 19;
    }
grid4.append(square4)
s4.push(square4)
}
for(let i=0;i<2;i++){
square5 = document.createElement('div')
square5.setAttribute('id',i)
square5.setAttribute('class',"col-sm");
square5.setAttribute('style','background-color: #ffc107');
//square5.innerHTML = i*1;
if(i==0){
        square5.innerHTML = 21;
    }
    else if(i==1){
        square5.innerHTML = 24;
    }
grid5.append(square5)
s5.push(square5)
}
*/

function start(){
Sort();
 
}




function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
  }
  function addSp()
  {
    if(speed<10){speed++;
  document.querySelector("#floatingTextarea").innerHTML=speed+"x";
  }
  }
  function subSp()
  {
    if(speed>0){speed--;
    document.querySelector("#floatingTextarea").innerHTML=speed+"x";
  }
  }
async function textEdit(msg)
{
  document.querySelector(".form-control").innerHTML="Sorting of elements using bucket Sort Algorithm!!! \n"+msg;
}
async function colorev1(i,j)
{
  s1[i].setAttribute('style','background-color: pink ');
    
  s1[j].setAttribute('style','background-color: pink ');
}
async function colorev2(i,j){
  s2[i].setAttribute('style','background-color: pink');
    s2[j].setAttribute('style','background-color: pink');
  }
async function colorev3(i,j){  
    s3[i].setAttribute('style','background-color: pink ');
    s3[j].setAttribute('style','background-color: pink');
}

async function colorChange1(i,j)
{
 s1[i].setAttribute('style','background-color: #0dcaf0 ');
  s1[j].setAttribute('style','background-color: #0dcaf0 ');
    
}
async function colorChange2(i,j)
{
s2[i].setAttribute('style','background-color: #0dcaf0 ');
  s2[j].setAttribute('style','background-color: #0dcaf0 ');
}
async function colorChange3(i,j)
{  
    s3[i].setAttribute('style','background-color: #0dcaf0 ');
  s3[j].setAttribute('style','background-color: #0dcaf0 ');

}
async function swap1(i,j)
{
  let tmp=s1[i].innerHTML;
  s1[i].innerHTML=s1[j].innerHTML;
  s1[j].innerHTML=tmp;}
async function swap2(i,j){  
  let tmp2=s2[i].innerHTML;
  s2[i].innerHTML=s2[j].innerHTML;
  s2[j].innerHTML=tmp2;
}
async function swap3(i,j){    
  let tmp3=s3[i].innerHTML;
  s3[i].innerHTML=s3[j].innerHTML;
  s3[j].innerHTML=tmp3;

}
async function currentElem1(i,j)
{

  s1[i].setAttribute('style','background-color: #d63384 ');
  s1[j].setAttribute('style','background-color: #d63384 ');
}
async function currentElem2(i,j){  
    s2[i].setAttribute('style','background-color: #d63384 ');
  s2[j].setAttribute('style','background-color: #d63384 ');
}
async function currentElem3(i,j){  
    s3[i].setAttribute('style','background-color: #d63384 ');
  s3[j].setAttribute('style','background-color: #d63384 ');
  
}

/*async function insertElem(i,j){
    s4[j].innerHTML = s1[i].innerHTML;
    s4[j].setAttribute('style','background-color: #ffff66');
}
*/
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

async function Sort()
{
  //textEdit("Unsorted Array !!!");
  for(let i=0;i<1;i++)
  {
    for(let j=0;j<1-i;j++)
    {
      lineHgli8('line l1');
      await sleep(1*timer/speed);
      lineHgli8('line l2');
      lineHgli8('line l3');
      textEdit("Elements of the array are distributed in a set of buckets");
      await sleep(4*timer/speed);
      deHgli8('line l1');
      deHgli8('line l2');
      deHgli8('line l3');
      lineHgli8('line l4');
       lineHgli8('line l5');
      textEdit("Elements in the buckets are sorted using bubble sort");
      await sleep(4*timer/speed);
      deHgli8('line l4');
       textEdit("Unsorted Bucket-1!!!");
        await sleep(2*timer/speed);
      currentElem1(j,j+1);
       //currentElem2(j,j+1);
       // currentElem3(j,j+1);

      await sleep(3*timer/speed);
      if(parseInt(s1[j].innerHTML)>parseInt(s1[j+1].innerHTML))
      {
        colorChange1(j,j+1);
        textEdit(" swaping of the elements!!!");
        await sleep(3*timer/speed);
        swap1(j,j+1);
        textEdit("Elements swapped!!");
        await sleep(2*timer/speed);
        textEdit("sorting is applied for next elements");
        
      }
      colorev1(j,j+1);
      await sleep(2*timer/speed);

    }
    s1[1-i].setAttribute('style','background-color: yellow ');
     deHgli8('line l5');
      textEdit("Bucket-1 sorted!!!");
       await sleep(2*timer/speed);
       //await sleep(2*timer/speed);
 }    
  /* for(let i=0;i<3;i++){
    insertElem(i,i);
   }*/
  textEdit("Sorting of next bucket !!!");
    await sleep(3*timer/speed);
 textEdit("Unsorted Bucket-2 !!!");
  lineHgli8('line l4');
  await sleep(2*timer/speed);
       lineHgli8('line l5');
        deHgli8('line l4');
  for(let i=0;i<3;i++)
  {
    for(let j=0;j<3-i;j++)
    {
      
      currentElem2(j,j+1);
       //currentElem2(j,j+1);
       // currentElem3(j,j+1);

      await sleep(3*timer/speed);
      if(parseInt(s2[j].innerHTML)>parseInt(s2[j+1].innerHTML))
      {
        colorChange2(j,j+1);
        textEdit("swaping of the elements!!!");
        await sleep(3*timer/speed);
        swap2(j,j+1);
        textEdit("Elements swapped!!");
        await sleep(2*timer/speed);
        textEdit("sorting is applied for next elements");
        
      }
      colorev2(j,j+1);
      await sleep(2*timer/speed);

    }
    s2[3-i].setAttribute('style','background-color: yellow ');

  }
  textEdit("Bucket-2 sorted!!!");
  deHgli8('line l5');
   await sleep(3*timer/speed);
   textEdit("Lets sort Bucket-3!!!"); 
     lineHgli8('line l4');
     await sleep(2*timer/speed);
     lineHgli8('line l5');
     deHgli8('line l4');
  textEdit("Unsorted Bucket-3 !!!");
  for(let i=0;i<3;i++)
  {
    for(let j=0;j<3-i;j++)
    {
      
      currentElem3(j,j+1);
      

      await sleep(3*timer/speed);
      if(parseInt(s3[j].innerHTML)>parseInt(s3[j+1].innerHTML))
      {
        colorChange3(j,j+1);
        textEdit("swaping of the elements!!!");
        await sleep(3*timer/speed);
        swap3(j,j+1);
        textEdit("Elements swapped!!");
        await sleep(2*timer/speed);
        textEdit("sorting is applied for next elements");
        
      }
      colorev3(j,j+1);
      await sleep(2*timer/speed);

    }
    s3[3-i].setAttribute('style','background-color: yellow ');

  }
   
    deHgli8('line l5');
     deHgli8('line l5');
    
  textEdit("Buckets are sorted!!!");
   await sleep(2*timer/speed);
   lineHgli8('line l7');
   lineHgli8('line l8');
 textEdit("Concatenation of elements ib buckets to get sorted array!!!");
 await sleep(5*timer/speed);
textEdit(" Array is Sorted!!!")
 deHgli8('line l7');
  deHgli8('line l8');

finalarray1();
}



//var res = s1.concat(s2, s3);




