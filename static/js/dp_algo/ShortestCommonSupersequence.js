
var grid1=document.querySelector("#stringMain1");
var grid2=document.querySelector("#stringMain2");
let time=1000;
let squares1=[];
let squares2=[];
let N=7;
let M=5;
let speed=3;
let timer=1000;
let pause=0;

for(let i=0;i<=N;i++)
{
	let sq=document.createElement("div");
	sq.setAttribute('id',i);
	sq.setAttribute('class',"col-sm");
	sq.setAttribute('style','background-color: #ffc107');
	sq.innerHTML=String.fromCharCode(97+Math.floor(Math.random() * 10));//34-i*i;
	grid1.appendChild(sq);
	squares1.push(sq);
}

for(let i=0;i<=M;i++)
{
	let sq=document.createElement("div");
	sq.setAttribute('id',i);
	sq.setAttribute('class',"col-sm");
	sq.setAttribute('style','background-color: #ffc107');
	sq.innerHTML=String.fromCharCode(97+Math.floor(Math.random() * 10));//34-i*i;
	grid2.appendChild(sq);
	squares2.push(sq);
}
//null string
squares1[0].innerHTML="";
squares2[0].innerHTML="";

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }
  function addSp()
  {
	  if(speed<20){speed++;
        document.getElementById("SpeedCount").innerHTML=speed+"x";
	}
  }
  function subSp()
  {
	  if(speed>1){speed--;
		document.getElementById("SpeedCount").innerHTML=speed+"x";
	}
  }
  function star()
  {
      if(!pause)
      {
        pause=1;
	    document.querySelector("#start").innerHTML="Restart";
        ShortestCommonSupers();
       }
      else
      {
        location.reload();
      }     

  }
  function last(){
    speed = 0;
  }
async function textEdit(msg)
{
	document.querySelector("#floatingTextarea2").innerHTML=msg;
}
async function colorev(s,revS,i,j)
{
	revS[j].setAttribute('style','background-color: #ffc107 ');
	s[i].setAttribute('style','background-color: #ffc107 ');
}
async function colorevelement(dp,i,j)
{
	dp[i][j].setAttribute('style','background-color: #ffc107 ');
	
}
async function colorChange(s,revS,i,j)
{
	revS[j].setAttribute('style','background-color: #0dcaf0 ');
	s[i].setAttribute('style','background-color: #0dcaf0 ');
	
}

async function setback(id,chk)
{
if(chk)
document.getElementById(id).setAttribute('style','background-color : #20c997');
else
document.getElementById(id).setAttribute('style','background-color : #CBEABA');
}
async function currentElem(s,revS,i,j)
{
	revS[j].setAttribute('style','background-color: #d63384 ');
	s[i].setAttribute('style','background-color: #d63384 ');
	
}

async function changeMatColor(i,j,dp)
{
    dp[i][j].setAttribute('style','background-color: cyan');
}
async function setColorelem(i,j,dp)
{
    dp[i][j].setAttribute('style','background-color: pink ')
}
async function ShortestCommonSupers()
{
	textEdit("Two strings as input find the length of shortest possible supersequence for the given two.");
    await sleep(3*timer/speed);
    textEdit("Create a 2d array of dimensions ((N+1) X (M+1)), where N,M=length of given strings\n dp[i][j]= length of shortest common supersequence for S1[0..i] and S2[0..j]")
	await sleep(3*timer/speed);
    let dp=[];
    let box=document.querySelector("#cont2");
    
    //Creating dp[][] array
    for(let i=0;i<=N;i++)
	{
        let dpr=[];
        let rw=document.createElement("div");
        rw.setAttribute('id',"stringMain1");
        rw.setAttribute('class',"row");
        for(let j=0;j<=M;j++)
		{
        let sq=document.createElement("div");
	    sq.setAttribute('id',toString(i)+toString(j));
	    sq.setAttribute('class',"col-sm");
	    sq.setAttribute('style','background-color: #ffc107');
	    sq.innerHTML=0;
	    rw.appendChild(sq);
	    dpr.push(sq);
			
        }
        box.appendChild(rw);
        dp.push(dpr);
    
      
    }
    
    await sleep(2*timer/speed);

    //main algo
    for(let i=0;i<=N;i++)
    {
        for(let j=0;j<=M;j++)
        {
            setback("l1",1);
            currentElem(squares1,squares2,i,j);
            await sleep(timer/speed);
            setback("l1",0);
            setback("l2",1);
           setColorelem(i,j,dp);
           await sleep(timer/speed);
           setback("l2",0);
           if(i==0)
           {
            setback("l3",1);
                textEdit("Empty String and some other string shortest supersequence will be other string. Hence minimu length will = length(other string)")
                await sleep(2*timer/speed);
                dp[i][j].innerHTML=j;
                setback("l3",0);

           }
           else if(j==0)
           {
            setback("l4",1);
            textEdit("Empty String and some other string shortest supersequence will be other string. Hence minimu length will = length(other string)")
            await sleep(2*timer/speed);
            dp[i][j].innerHTML=i;
            setback("l4",0);
           }
           else if(squares1[i].innerHTML==squares2[j].innerHTML)
            {
                setback("l5",1);
                textEdit("Since highlighted characters of the strings are same, add 1 to the previous length");
                colorChange(squares1,squares2,i,j);
                await sleep(timer/speed);
                 setColorelem(i-1,j-1,dp);
                await sleep(2*timer/speed);
                    dp[i][j].innerHTML=dp[i-1][j-1].innerHTML+"+ 1";
                    await sleep(2*timer/speed);
                   dp[i][j].innerHTML= parseInt(dp[i-1][j-1].innerHTML) +1;
                   await sleep(2*timer/speed);
                   colorevelement(dp,i-1,j-1);
                   setback("l5",0);
            }
            else
            {setback("l6",1);
                   setColorelem(i,j-1,dp);
                    setColorelem(i-1,j,dp);
                    textEdit("Since highlighted characters of the strings are not same, add 1 to the minimum of previous lengths");
                    await sleep(2*timer/speed);
                    dp[i][j].innerHTML="min("+dp[i][j-1].innerHTML+","+dp[i-1][j].innerHTML+") + 1";
                    await sleep(2*timer/speed);
                    dp[i][j].innerHTML= Math.min(parseInt(dp[i-1][j].innerHTML),parseInt(dp[i][j-1].innerHTML))+1;
                    await sleep(2*timer/speed);
                    colorevelement(dp,i,j-1);
                    colorevelement(dp,i-1,j);
                    setback("l6",0);
               
            }
            setback("l7",1);
            await sleep(3*timer/speed);
            colorev(squares1,squares2,i,j);
            colorevelement(dp,i,j);
            textEdit("");
            setback("l7",0);
        }
    }
    dp[N][M].setAttribute('style','background-color:red');
    dp[N][M].setAttribute('style','color:white');
    textEdit("Final answer is: "+dp[N][M].innerHTML)
}



