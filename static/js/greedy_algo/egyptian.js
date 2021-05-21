let speed = 2, timer = 1000;
let nr=Math.floor(Math.random() * 67 + 1);
let dr=Math.floor(Math.random() * 83 + 1);

var x = 0;
var array = Array();

function add(i)
{
 array[x] = i;
 //alert("Element: " + array[x] + " Added at index " + x);
 x++;
 //document.getElementById("text1").value = "";
}
document.querySelector("#floatingTextareaz").innerHTML= "The fraction that we are going to find is "+ nr + " / "+dr +"\n" ;
//textEdit1();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
  }
  function addSp()
  {
    if(speed<10){speed++;
      //textEdit1(speed+"x");
  document.querySelector("#speed").innerHTML=speed+"x";
  }
  }
  function subSp()
  {
    if(speed>0){speed--; 
      //textEdit1(speed+"x");
    document.querySelector("#speed").innerHTML=speed+"x";
  }
  }
function last(){
    speed = 100;
}
  async function textEdit1(msg)
{
  document.querySelector(".form-control").innerHTML="\n"+  msg;
}

  async function textEdit(msg)
{
  document.querySelector(".form-control-1").innerHTML="Let's find the egyptian fractions!!! \n"+msg;
}
function start(){

 printEgyptian(nr, dr);
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
        list[index].setAttribute('style', 'background-color: #CBEABA');
    }
  }

async function printEgyptian(nr, dr)
    {
        lineHgli8('line l1');
        if (dr == 0 || nr == 0){
           textEdit("numerator or denominator is equal to 0. Therefore not a fraction");
           return;
        }
        textEdit("Numerator or Denominator is not equal to 0. Therefore it is a fraction");
        await sleep(3*timer/speed);
        deHgli8('line l1');
        await sleep(3*timer/speed);
         document.querySelector(".form-control-2").innerHTML="The egyptian fractions are!!!\n "+ array;

        lineHgli8('line l2');
        
        
        textEdit("If numerator divides denominator then simple division  makes the fraction in 1/n form");
        //await sleep(3*timer/speed);
        
        if (dr % nr == 0)
        {   lineHgli8('line l3');
            await sleep(2*timer/speed);
            deHgli8('line l3');
            deHgli8('line l2');
            document.querySelector(".form-control-2").innerHTML="The egyptian fractions are: \n" + "1/" + parseInt(dr / nr, 10);
            add("1/"+parseInt(dr/nr,10));
           // textEdit2("1/" + parseInt(dr / nr, 10));
            document.querySelector(".form-control-2").innerHTML="The egyptian fractions are!!!\n "+ array;

            return;
        }
         await sleep(3*timer/speed);
         deHgli8('line l2');
         

         await sleep(3*timer/speed);
        lineHgli8('line l4');
       
        textEdit("  If denominator divides numerator,then the given number is not fraction");
         if (nr % dr == 0)
        {   lineHgli8('line l5');
           await sleep(2*timer/speed);
              deHgli8('line l5');
              deHgli8('line l4');
           document.querySelector(".form-control-2").innerHTML="The egyptian fractions are:\n "+ parseInt(nr / dr, 10) ;
            add(parseInt(nr/dr,10));
           //textEdit2(parseInt(nr / dr, 10));
            document.querySelector(".form-control-2").innerHTML="The egyptian fractions are!!!\n "+ array;

            return;
        } 
          
            deHgli8('line l4');
       
        await sleep(3*timer/speed);
        textEdit(" If numerator is more than denominator");
         lineHgli8('line l6');
       
        if (nr > dr)
        {    lineHgli8('line l7');
            await sleep(2*timer/speed);
             deHgli8('line l7');
             deHgli8('line l6');
           document.querySelector(".form-control-2").innerHTML="The egyptian fractions are: \n"+ parseInt(nr / dr, 10) ;
            add(parseInt(nr / dr, 10));
             document.querySelector(".form-control-2").innerHTML="The egyptian fractions are!!!\n "+ array;

           //textEdit2(parseInt(nr / dr, 10) + " + ");
            printEgyptian(nr % dr, dr);
            return;
        }
            deHgli8('line l6');
           await sleep(2*timer/speed);
            
          
        lineHgli8('line l8');
        lineHgli8('line l9');
        textEdit(" We reach here dr > nr and dr%nr is non-zero and see ceiling of dr/nr and print it as first fraction");
       
        let n = parseInt(dr / nr, 10) + 1;
        document.querySelector(".form-control-2").innerHTML="The egyptian fractions are: \n"+ "1/" + n  ;
        add("1/" + n );
         await sleep(3*timer/speed);
          deHgli8('line l8');
        deHgli8('line l9');
        await sleep(3*timer/speed);
        textEdit( "Recur for remaining part");
       lineHgli8('line l10');
        printEgyptian(nr * n - dr, dr * n);
        await sleep(2*timer/speed);
         deHgli8('line l10');
        document.querySelector(".form-control-2").innerHTML="The egyptian fractions are!!! "+ array;

    }
