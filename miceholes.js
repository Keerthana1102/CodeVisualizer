let speed = 2, timer = 1000;
let s1= [], s2 = []
var maxTime;

let grid1 =  document.querySelector('.g1')
let grid2 =  document.querySelector('.g2')
//let grid3 =  document.querySelector('.g3')
//let grid4 =  document.querySelector('.g4')


let square1 = document.createElement('div')
let square2 = document.createElement('div')
//let square3 = document.createElement('div')
//let square4 = document.createElement('div')

square1.setAttribute('id', 0)
square1.setAttribute('class',"col-sm");
square1.setAttribute('style','background-color: #ffc107');
square1.innerHTML ="Mices";
grid1.append(square1)

square2.setAttribute('id',0)
square2.setAttribute('class',"col-sm");
square2.setAttribute('style','background-color: #ffc107');
square2.innerHTML = "Holes";
grid2.append(square2)


/*square4.setAttribute('id',0)
square4.setAttribute('class','col-sm');
square4.setAttribute('style','background-color: #ffff66');
square4.innerHTML = "sorted array";
grid4.append(square4) */




for(let i = 1;i<=6;i++){
square1 = document.createElement('div')
square1.setAttribute('id', i)
square1.setAttribute('class',"col-sm");
square1.setAttribute('style','background-color: #ffc107');
square1.innerHTML = 67*(i%3 + 1) - 9*i;
grid1.append(square1)
s1.push(square1)

square2 = document.createElement('div')
square2.setAttribute('id',i)
square2.setAttribute('class',"col-sm");
square2.setAttribute('style','background-color: #ffc107');
square2.innerHTML =  53*(i%3 + 1) - 21*i;
grid2.append(square2)
s2.push(square2)


}
/*for(let i=0;i<1;i++){
square4 = document.createElement('div')
square4.setAttribute('id',i)
square4.setAttribute('class',"col-sm");
square4.setAttribute('style','background-color: #ffc107');
square4.innerHTML = 10-i;
grid4.append(square4)
s4.push(square4)
}*/




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

async function colorev1(i,j)
{
  s1[i].setAttribute('style','background-color: pink ');
    
  s1[j].setAttribute('style','background-color: pink ');
}
async function colorev2(i,j){
  s2[i].setAttribute('style','background-color: pink');
    s2[j].setAttribute('style','background-color: pink');
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

async function currentElem1(i,j)
{

  s1[i].setAttribute('style','background-color: #d63384 ');
  s1[j].setAttribute('style','background-color: #d63384 ');
}
async function currentElem2(i,j){  
    s2[i].setAttribute('style','background-color: #d63384 ');
  s2[j].setAttribute('style','background-color: #d63384 ');
}

/*async function insertElem(i,j){ //max,0
    s4[j].innerHTML = i;
    s4[j].setAttribute('style','background-color: #ffff66');
}*/
// async function insertElem(i)
// {
//   document.querySelector(".form-control-1").innerHTML=" The last mouse gets into the hole in time: \n"+i;
// }

async function textEdit(msg)
{
  document.querySelector(".form-control").innerHTML="Elements should be sorted in ascending order of positions!!! \n"+msg;
}

function start(){
  // alert("Start");
  //isPlaying = true;
  Sort(s1, s2);
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

async function Sort(s1, s2){
  textEdit("No. of mouse and holes should be same");
  lineHgli8('line l1');
  await sleep(5*timer/speed);
  deHgli8('line l1');

  textEdit("Sort the positions of mices ");
  lineHgli8('line l2');
  await sleep(3*timer/speed);

  textEdit("Unsorted Positions!!!");
  for(let i=0;i<5;i++)
  {
    for(let j=0;j<5-i;j++)
    {
      
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
    s1[5-i].setAttribute('style','background-color: yellow ');
 }    
  /* for(let i=0;i<3;i++){
    insertElem(i,i);
   }*/
    deHgli8('line l2');
    await sleep(2*timer/speed);
     lineHgli8('line l3');
     textEdit("Sort the positions of holes ");
 textEdit("Unsorted Positions !!!");
  for(let i=0;i<5;i++)
  {
    for(let j=0;j<5-i;j++)
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
    s2[5-i].setAttribute('style','background-color: yellow ');

  }
    textEdit("Positions are sorted!!!");
    deHgli8('line l3');
     await sleep(2*timer/speed);
    lineHgli8('line l4');
    textEdit("Entering the loop");
     await sleep(2*timer/speed);
     deHgli8('line l4');

      lineHgli8('line l5');
       lineHgli8('line l6');
   // textEdit("The max difference between ith mice and hole is");
    //await sleep(2*timer/speed);
     textEdit("The max difference between 1st mice and hole is 86");
      await sleep(5*timer/speed);
      textEdit("The max difference between 2nd mice and hole is 50");
       await sleep(5*timer/speed);
       textEdit("The max difference between 3rd mice and hole is 76");
        await sleep(5*timer/speed);
        textEdit("The max difference between 4th mice and hole is 71");
       await sleep(5*timer/speed);
       textEdit("The max difference between 5th mice and hole is 71");
        await sleep(5*timer/speed);
        textEdit("The max difference between 6th mice and hole is 66");
       await sleep(5*timer/speed);
        deHgli8('line l5');
         deHgli8('line l6');
         lineHgli8('line l7');
           await sleep(2*timer/speed);
           deHgli8('line l7'); 
    //textEdit("The max difference between ith mice and hole");
          










    textEdit("Now the time taken minimum time taken is!!!");
        /*for(let i = 0; i < 4; ++i)
        {     textEdit("Positions are sorted!!!");
              textEdit("lets see minimum time!!!")
              if (maxTime < Math.abs(s1[i] - s2[i]))

              {
                 textEdit("Positions are sorted!!!"); 
              maxTime = Math.abs(s1[i] - s2[i]);
              
            }
                
        }
        //return max;   
        console.log(maxTime); 
        //s4[0].innerHTML = maxTime;*/
         await sleep(2*timer/speed);
        textEdit("lets see minimum time!!!");
        maxTime=86;
        document.querySelector(".form-control-1").innerHTML=" The last mouse gets into the hole in time: \n"+maxTime + "minutes\n";

        
}

//let k = await Sort();
//console.log(k);
//insertElem(k);
