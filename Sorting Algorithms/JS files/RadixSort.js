let buckets = [...Array(10)].map(() => []);
let timer=100;
let speed = 1;
function addSp(){
    if(speed < 10){
        speed++;
        document.querySelector("#spd").innerHTML=speed+"x";
    }
}

function subSp(){
    if(speed > 1){
        speed--;
        document.querySelector("#spd").innerHTML=speed+"x";
    }
}
async function radixSort(arr) {

   lineHgli8('line l0');
   textEdit("Starting off");
   await setTimeDelay(3*timer/speed);
   deHgli8('line l0')


   lineHgli8('line l1');
   textEdit("finding maximum number in array");
   const maxNum = Math.max(...arr) * 10;
   await setTimeDelay(3*timer/speed);
   deHgli8('line l1');


   lineHgli8('line l2');
   let divisor = 10;
   deHgli8('line l2');


   
   while (divisor < maxNum*10) { 
    textEdit("Working on "+divisor/10+"'s place");
    lineHgli8('line l3');
    await setTimeDelay(3*timer/speed);
    deHgli8('line l3');

    
      for(let i=0;i<10;i++){
        textbucket[i]=" ";
      }

      lineHgli8('line l6');
      buckets = [...Array(10)].map(() => []);

      deHgli8('line l6');


        
        for (let num of arr) {
            lineHgli8('line l7');
            await setTimeDelay(3*timer/speed);
            deHgli8('line l7');

            lineHgli8('line l8');
            buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
            await setTimeDelay(3*timer/speed);
            deHgli8('line l8');

            textEdit("Working on "+divisor/10+"'s place"+"\n"+num +"  goes to bucket["+Math.floor((num % divisor) / (divisor / 10))+" ]");

            bucketdisp(Math.floor((num % divisor) / (divisor / 10)),num);

       }

       lineHgli8('line l9');
       arr = [].concat.apply([], buckets);
       await setTimeDelay(3*timer/speed);
       deHgli8('line l9');


       lineHgli8('line l10');
       divisor *= 10;
       await setTimeDelay(3*timer/speed);
       deHgli8('line l10');

   }
   textEdit("All numbers came into one bucket !!!");
   await setTimeDelay(3*timer/speed);
   textEdit("Sorting Done!"+"\n"+"Final Array : [3,5,23,65,88,234,235,4632]");
   lineHgli8('line l11');
   await setTimeDelay(3*timer/speed);
   deHgli8('line l11');

   return arr;
} 

function setTimeDelay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
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
        list[index].setAttribute('style', 'background-color: greenyellow');
    }
    //document.getElementsByClassName(i).setAttribute('style', 'background-color: #20c997');
}
let textbucket=[" "];
for(let i=0;i<10;i++){
    textbucket[i]=" ";
}

async function updatetext(){
document.querySelector("#floatingTextarea10").innerHTML = textbucket[0];
document.querySelector("#floatingTextarea11").innerHTML = textbucket[1];
document.querySelector("#floatingTextarea12").innerHTML = textbucket[2];
document.querySelector("#floatingTextarea13").innerHTML = textbucket[3];
document.querySelector("#floatingTextarea14").innerHTML = textbucket[4];
document.querySelector("#floatingTextarea15").innerHTML = textbucket[5];
document.querySelector("#floatingTextarea16").innerHTML = textbucket[6];
document.querySelector("#floatingTextarea17").innerHTML = textbucket[7];
document.querySelector("#floatingTextarea18").innerHTML = textbucket[8];
document.querySelector("#floatingTextarea19").innerHTML = textbucket[9];
}

async function bucketdisp(i,num){

    console.log(buckets[i]);

   if(buckets[i].length>1) textbucket[i]=textbucket[i]+"\n,"+num;
   else{
    textbucket[i]= textbucket[i]+"\n"+num;
   }
    updatetext();
 
}
async function textEdit(msg){
    document.querySelector("#floatingTextarea2").innerHTML="Initial Array : [5,3,88,235,65,23,4632,234] "+"\n"+msg;
}

async function start(){
    textbucket=[" "];
    const button = document.querySelector('#start');
    button.disabled = true;
    speed=1;
    document.querySelector("#spd").innerHTML=speed+"x";
    for(let i=0;i<10;i++){
        textbucket[i]=" ";
    }
    updatetext();
    finalarr = await radixSort([5,3,88,235,65,23,4632,234]) ;
    button.disabled = false;
}