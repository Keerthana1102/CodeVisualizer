var grid1=document.querySelector(".g1")
var grid2=document.querySelector(".g2")
var grid3=document.querySelector(".g3")
var grid4 = document.querySelector(".g4")
let time=1000;

let squares1 = [];
let squares2 = [];
let squares3 = [];
let squares4 = [];

let N=5;
let k=3;
let speed=2;
let timer=1000;
for(let i=0;i<N;i++)
{
    let sq=document.createElement("div");
    sq.setAttribute('id',i);
    sq.setAttribute('class',"col-sm");
    sq.setAttribute('style','background-color: #ffc107');
    //sq.innerHTML=Math.floor(Math.random()*99) +1;
     
     if(i==0){
        sq.innerHTML = 213;
    }
    else if(i==1){
        sq.innerHTML = 312;
    }
    else if(i==2){
         sq.innerHTML = 231;
    }
    else if(i==3){
        sq.innerHTML = 12;
    }
     else if(i==4){
        sq.innerHTML = 132;
    }
    

    grid1.appendChild(sq);
    squares1.push(sq);
}

for(let i=0;i<N;i++)
{
    let sq=document.createElement("div");
    sq.setAttribute('id',i);
    sq.setAttribute('class',"col-sm");
    sq.setAttribute('style','background-color: #ffc107');
    //sq.innerHTML=Math.floor(Math.random()*99) +1;
    
   
     if(i==0){
        sq.innerHTML = 213;
    }
    else if(i==1){
        sq.innerHTML = 312;
    }
    else if(i==2){
         sq.innerHTML = 231;
    }
    else if(i==3){
        sq.innerHTML = 12;
    }
     else if(i==4){
        sq.innerHTML = 132;
    }


    grid2.appendChild(sq);
    squares2.push(sq);
}
for(let i=0;i<N;i++)
{
    let sq=document.createElement("div");
    sq.setAttribute('id',i);
    sq.setAttribute('class',"col-sm");
    sq.setAttribute('style','background-color: #ffc107');
    //sq.innerHTML=Math.floor(Math.random()*99) +1;
   
     
     if(i==0){
        sq.innerHTML = 213;
    }
    else if(i==1){
        sq.innerHTML = 312;
    }
    else if(i==2){
         sq.innerHTML = 231;
    }
    else if(i==3){
        sq.innerHTML = 12;
    }
     else if(i==4){
        sq.innerHTML = 132;
    }
    


    grid3.appendChild(sq);
    squares3.push(sq);
}
for(let i=0;i<N;i++)
{
    let sq=document.createElement("div");
    sq.setAttribute('id',i);
    sq.setAttribute('class',"col-sm");
    sq.setAttribute('style','background-color: #ffc107');
    //sq.innerHTML=Math.floor(Math.random()*99) +1;
    
    
     if(i==0){
        sq.innerHTML = 213;
    }
    else if(i==1){
        sq.innerHTML = 312;
    }
    else if(i==2){
         sq.innerHTML = 231;
    }
    else if(i==3){
        sq.innerHTML = 12;
    }
     else if(i==4){
        sq.innerHTML = 132;
    }


    grid4.appendChild(sq);
    squares4.push(sq);
}

/*for(let i=0;i<N;i++){
    squares3[i] = [];
    for(let j=0;j<k;j++){
        let box = document.createElement("div")
        box.setAttribute('id', j);
        box.setAttribute('class', "col-sm");
        box.setAttribute('style', 'background-color: #ffc107');
        box.innerHTML = 0;

        grid3.appendChild(box);
        squares3[i].push(box);
        // squares3[i][j] = 0;
    }
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
    if(speed>0){
      speed--;
    document.querySelector("#floatingTextarea").innerHTML=speed+"x";
  }
}





async function colorev(i,j)
{
    squares4[i].setAttribute('style','background-color: #ffc107 ');
    squares4[j].setAttribute('style','background-color: #ffc107 ');
    squares2[i].setAttribute('style','background-color: #ffc107 ');
    squares2[j].setAttribute('style','background-color: #ffc107 ');
    squares3[i].setAttribute('style','background-color: #ffc107 ');
    squares3[j].setAttribute('style','background-color: #ffc107 ');

}
async function colorev1(i,j)
{
    //squares1[i].setAttribute('style','background-color: #ffc107 ');
    //squares1[j].setAttribute('style','background-color: #ffc107 ');
    squares4[i].setAttribute('style','background-color: #ffc107 ');
    squares4[j].setAttribute('style','background-color: #ffc107 ');
    squares3[i].setAttribute('style','background-color: #ffc107 ');
    squares3[j].setAttribute('style','background-color: #ffc107 ');

}
async function colorev2(i,j)
{
    //squares1[i].setAttribute('style','background-color: #ffc107 ');
    //squares1[j].setAttribute('style','background-color: #ffc107 ');
    //squares2[i].setAttribute('style','background-color: #ffc107 ');
    //squares2[j].setAttribute('style','background-color: #ffc107 ');
    squares4[i].setAttribute('style','background-color: #ffc107 ');
    squares4[j].setAttribute('style','background-color: #ffc107 ');

}
async function colorChange(i,j)
{
    squares4[i].setAttribute('style','background-color: #0dcaf0 ');
    squares4[j].setAttribute('style','background-color: #0dcaf0 ');
    squares2[i].setAttribute('style','background-color: #0dcaf0 ');
    squares2[j].setAttribute('style','background-color: #0dcaf0 ');
    squares3[i].setAttribute('style','background-color: #0dcaf0 ');
    squares3[j].setAttribute('style','background-color: #0dcaf0 ');

    
}
async function colorChange1(i,j)
{
   
    squares4[i].setAttribute('style','background-color: #0dcaf0 ');
    squares4[j].setAttribute('style','background-color: #0dcaf0 ');
    squares3[i].setAttribute('style','background-color: #0dcaf0 ');
    squares3[j].setAttribute('style','background-color: #0dcaf0 ');
}
async function colorChange2(i,j)
{
    squares4[i].setAttribute('style','background-color: #0dcaf0 ');
    squares4[j].setAttribute('style','background-color: #0dcaf0 ');

    
}




async function currentElem(i,j)
{
    squares4[i].setAttribute('style','background-color: #d63384 ');
    squares4[j].setAttribute('style','background-color: #d63384 ');
    squares2[i].setAttribute('style','background-color: #d63384 ');
    squares2[j].setAttribute('style','background-color: #d63384 ');
    squares3[i].setAttribute('style','background-color: #d63384 ');
    squares3[j].setAttribute('style','background-color: #d63384 ');
    
}
async function currentElem1(i,j)
{
    
    squares4[i].setAttribute('style','background-color: #d63384 ');
    squares4[j].setAttribute('style','background-color: #d63384 ');
    squares3[i].setAttribute('style','background-color: #d63384 ');
    squares3[j].setAttribute('style','background-color: #d63384 ');
    
}
async function currentElem2(i,j)
{
    squares4[i].setAttribute('style','background-color: #d63384 ');
    squares4[j].setAttribute('style','background-color: #d63384 ');
    
}
async function finalarray(){

 squares4[0].setAttribute('style','background-color: pink');
 squares4[1].setAttribute('style','background-color: pink');
 squares4[2].setAttribute('style','background-color: pink');
 squares4[3].setAttribute('style','background-color: pink');
 squares4[4].setAttribute('style','background-color: pink');
 

}

function start(){

 KSwapMaximum(squares1,N,k);
}

async function textEdit(msg)
{
    document.querySelector(".form-control").innerHTML="Largest Lexicographic array with 3 consective swaps!!! \n"+msg;
}

async function swap(i,j) //j,j-1
{    
   /*let tmp=squares1[i].innerHTML;
    squares1[i].innerHTML=squares1[j].innerHTML;
    squares1[j].innerHTML=tmp;*/
    
    let tmp4=squares2[i].innerHTML;
    squares2[i].innerHTML=squares2[j].innerHTML;
    squares2[j].innerHTML=tmp4;
    //await sleep(2*timer/speed);
    let tmp2=squares3[i].innerHTML;
    squares3[i].innerHTML=squares3[j].innerHTML;
    squares3[j].innerHTML=tmp2;
    //await sleep(2*timer/speed);
    let tmp3=squares4[i].innerHTML;
    squares4[i].innerHTML=squares4[j].innerHTML;
    squares4[j].innerHTML=tmp3;

}
async function swap1(i,j) //j,j-1
{    
   /*let tmp=squares1[i].innerHTML;
    squares1[i].innerHTML=squares1[j].innerHTML;
    squares1[j].innerHTML=tmp;*/
    
    /*let tmp4=squares2[i].innerHTML;
    squares2[i].innerHTML=squares2[j].innerHTML;
    squares2[j].innerHTML=tmp4;*/
   // await sleep(2*timer/speed);
    let tmp2=squares3[i].innerHTML;
    squares3[i].innerHTML=squares3[j].innerHTML;
    squares3[j].innerHTML=tmp2;
    //await sleep(2*timer/speed);
    let tmp3=squares4[i].innerHTML;
    squares4[i].innerHTML=squares4[j].innerHTML;
    squares4[j].innerHTML=tmp3;

}
async function swap2(i,j) //j,j-1
{    
   /*let tmp=squares1[i].innerHTML;
    squares1[i].innerHTML=squares1[j].innerHTML;
    squares1[j].innerHTML=tmp;*/
    
   /* let tmp4=squares2[i].innerHTML;
    squares2[i].innerHTML=squares2[j].innerHTML;
    squares2[j].innerHTML=tmp4;
    await sleep(2*timer/speed);
    let tmp2=squares3[i].innerHTML;
    squares3[i].innerHTML=squares3[j].innerHTML;
    squares3[j].innerHTML=tmp2;
    await sleep(2*timer/speed);*/
    let tmp3=squares4[i].innerHTML;
    squares4[i].innerHTML=squares4[j].innerHTML;
    squares4[j].innerHTML=tmp3;

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



async function KSwapMaximum(arr, n, k){
    
    
    for (let i = 0; i < n - 1 && k > 0; ++i)
        {    let indexPosition = i;
             for (let j = i + 1; j < n; ++j){
                
                 if (k <= j - i){
                    
                    break;}

                  
                    
                 if (parseInt(arr[j].innerHTML) > parseInt(arr[indexPosition].innerHTML)){
                    indexPosition = j;  } 
                                            }
            
           
          /*  for (let j = indexPosition; j > i; --j){
             textEdit("Swap the elements from Maximum indexPosition we found till now to the ith index");   
                //let j = indexPosition;
                swap( j, j - 1);
                  await sleep(5*timer/speed);
                 // let j=j-1;
               swap1( j, j-1);
                 await sleep(5*timer/speed);
                 //let j=j-3;
                swap2( j, j -1);
               
            }*/
                  k -= indexPosition - i;   
          //  await sleep(3*timer/speed);
          //  textEdit("Updates k after swapping indexPosition-i elements");
         }
          textEdit("Entering the loop noting that no. of swaps are non-zero");
            lineHgli8('line l1');
            await sleep(2*timer/speed);
            deHgli8('line l1');
            await sleep(2*timer/speed);
            textEdit("Here, indexPositionition is set where we want to put the current largest integer");
            squares2[0].setAttribute('style','background-color: purple ');
            lineHgli8('line l2');
            await sleep(2*timer/speed);
            squares2[0].setAttribute('style','background-color: #ffc107 ');
            deHgli8('line l2');
             await sleep(2*timer/speed);
            lineHgli8('line l4'); 
            textEdit("If we exceed the Max swaps then break the loop"); 
            await sleep(2*timer/speed);
            deHgli8('line l4');
            
            lineHgli8('line l5');
            lineHgli8('line l6');
            textEdit("Identifying highest element of the array and assigning its index value to indexPosition"); 
            squares2[1].setAttribute('style','background-color: purple ');
            await sleep(2*timer/speed);
            deHgli8('line l5');
            deHgli8('line l6');
            squares2[1].setAttribute('style','background-color:  #ffc107');
            lineHgli8('line l7');
            lineHgli8('line l8');
            textEdit("swaping !!!"); 
            await sleep(2*timer/speed);
            currentElem(0,1);
            await sleep(3*timer/speed);
            swap(0,1);
            colorChange(0,1);
            await sleep(3*timer/speed);
            colorev(0,1);
            await sleep(3*timer/speed);
            deHgli8('line l7');
            deHgli8('line l8');
             lineHgli8('line l9');
            textEdit("calculate no. of remaining swaps!!!");  
            await sleep(3*timer/speed);
            deHgli8('line l9');















            textEdit("Entering the loop noting that no. of swaps are non-zero");
            lineHgli8('line l1');
            await sleep(2*timer/speed);
            deHgli8('line l1');
            await sleep(2*timer/speed);
            textEdit("Here, indexPositionition is set where we want to put the current largest integer");
            squares3[1].setAttribute('style','background-color: purple ');
            lineHgli8('line l2');
            await sleep(2*timer/speed);
            squares3[1].setAttribute('style','background-color: #ffc107 ');
            deHgli8('line l2');
             await sleep(2*timer/speed);
            lineHgli8('line l4'); 
            textEdit("If we exceed the Max swaps then break the loop"); 
            await sleep(2*timer/speed);
            deHgli8('line l4');
            
            lineHgli8('line l5');
            lineHgli8('line l6');
            textEdit("Identifying highest element of the array and assigning its index value to indexPosition"); 
             squares3[2].setAttribute('style','background-color: purple ');
            await sleep(2*timer/speed);
            deHgli8('line l5');
            deHgli8('line l6');
            squares3[2].setAttribute('style','background-color:  #ffc107');
            lineHgli8('line l7');
            lineHgli8('line l8');
            textEdit("swaping !!!"); 
            await sleep(2*timer/speed);
            currentElem1(1,2);
             await sleep(3*timer/speed);
           
            swap1(1,2);
             colorChange1(1,2);
             await sleep(3*timer/speed);
              colorev1(1,2);
            await sleep(3*timer/speed);
            deHgli8('line l7');
            deHgli8('line l8');
             lineHgli8('line l9');
            textEdit("calculate no. of remaining swaps!!!");  
            await sleep(3*timer/speed);
            deHgli8('line l9');




             







             textEdit("Entering the loop noting that no. of swaps are non-zero");
            lineHgli8('line l1');
            await sleep(2*timer/speed);
            deHgli8('line l1');
            await sleep(2*timer/speed);
            textEdit("Here, indexPositionition is set where we want to put the current largest integer");
            squares4[3].setAttribute('style','background-color: purple ');
            lineHgli8('line l2');
            await sleep(2*timer/speed);
            squares4[3].setAttribute('style','background-color: #ffc107 ');
            deHgli8('line l2');
             await sleep(2*timer/speed);
            lineHgli8('line l4'); 
            textEdit("If we exceed the Max swaps then break the loop"); 
            await sleep(2*timer/speed);
            deHgli8('line l4');
            
            lineHgli8('line l5');
            lineHgli8('line l6');
            textEdit("Identifying highest element of the array and assigning its index value to indexPosition"); 
             squares4[4].setAttribute('style','background-color: purple ');
            await sleep(2*timer/speed);
            deHgli8('line l5');
            deHgli8('line l6');
            squares4[4].setAttribute('style','background-color:  #ffc107');
            lineHgli8('line l7');
            lineHgli8('line l8');
            textEdit("swaping !!!"); 
            await sleep(2*timer/speed);

             currentElem2(3,4);
             await sleep(3*timer/speed);
           
            swap2(3,4);
             colorChange2(3,4);
             await sleep(3*timer/speed);
             colorev2(3,4);
            await sleep(3*timer/speed);
            deHgli8('line l7');
            deHgli8('line l8');
             lineHgli8('line l9');
            textEdit("calculate no. of remaining swaps!!!");  
            await sleep(3*timer/speed);
            deHgli8('line l9');


            await sleep(3*timer/speed);
            finalarray();
            textEdit("The array is found!!!");

          
}



 




