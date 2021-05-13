
var grid=document.querySelector("#stringMain")
let time=1000;
let squares=[];
let N=7;
let speed=3;
let timer=1000;
let pause=0;

for(let i=0;i<N;i++)
{
	let sq=document.createElement("div");
	sq.setAttribute('id',i);
	sq.setAttribute('class',"col-sm");
	sq.setAttribute('style','background-color: #ffc107');
	sq.innerHTML=String.fromCharCode(97+Math.floor(Math.random() * 10));//34-i*i;
	grid.appendChild(sq);
	squares.push(sq);
}

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
  function begin()
  {
      //document.getElementById("#begin").disabled="True";
      if(!pause)
        { pause=1;
	 document.getElementById("begin").innerHTML="Restart";
      LongestPalindromeSubs();}
      else
      {location.reload();
      }
      
    //  document.getElementById("#begin").disabled="True";

  }
async function setback(id,chk)
{
if(chk)
document.getElementById(id).setAttribute('style','background-color : hotpink');
else
document.getElementById(id).setAttribute('style','background-color : greenyellow');
}
async function textEdit(msg)
{
	document.querySelector("#floatingTextarea2").innerHTML=msg;
}
async function colorev(s,revS,i,j)
{
	revS[i].setAttribute('style','background-color: #ffc107 ');
	s[j].setAttribute('style','background-color: #ffc107 ');
}
async function colorevelement(dp,i,j)
{
	dp[i][j].setAttribute('style','background-color: #ffc107 ');
	
}
async function colorChange(s,revS,i,j)
{
	revS[i].setAttribute('style','background-color: #0dcaf0 ');
	s[j].setAttribute('style','background-color: #0dcaf0 ');
	
}


async function currentElem(s,revS,i,j)
{
	revS[i].setAttribute('style','background-color: #d63384 ');
	s[j].setAttribute('style','background-color: #d63384 ');
	
}

async function setColorelem(i,j,dp)
{
    dp[i][j].setAttribute('style','background-color: pink ')
}
async function LongestPalindromeSubs()
{
	textEdit("String given = S");
    await sleep(3*timer/speed);
    textEdit("Create a 2d array of dimensions (N X N ) named dp[N][N], where N=length of given string S \n dp[i][j]= length of longest common subsequence in S[0..i-1] and S[N..N-(i-1)-1] \n S[N...0] represent reversed string S ")
	await sleep(3*timer/speed);
    var grid1 =document.querySelector("#cont2");
    let dp=[];
    let revS=[];
    let s=[];
    //Creating dp[][] array
    for(let i=0;i<=N;i++)
	{
        let rw=document.createElement("div");
        rw.setAttribute('id',"stringMain");
        rw.setAttribute('class',"row");
        let dpr=[];
        if(i!=0)
       { let sq1=document.createElement("div");
	    
	    sq1.setAttribute('class',"col-sm");
	    sq1.setAttribute('style','background-color: #ffc107');
	    sq1.innerHTML=squares[N-i].innerHTML;
	    rw.appendChild(sq1);
        revS.push(sq1);
        
		for(let j=0;j<N;j++)
		{
            let sq=document.createElement("div");
	    sq.setAttribute('id',toString(i)+toString(j));
	    sq.setAttribute('class',"col-sm");
	    sq.setAttribute('style','background-color: #ffc107');
	    sq.innerHTML=0;
	   rw.appendChild(sq);
	    dpr.push(sq);
			
        }
        grid1.appendChild(rw);
        dp.push(dpr);
    }
    else
    {
        for(let j=0;j<=N;j++)
		{
            let sq=document.createElement("div");
	    
	    sq.setAttribute('class',"col-sm");
	    sq.setAttribute('style','background-color: #ffc107');
	  if(j) { sq.innerHTML=squares[j-1].innerHTML; s.push(sq);}
      else sq.innerHTML="";
	   rw.appendChild(sq);
	  
			
        }
        grid1.appendChild(rw);
      
    }
    }
    await sleep(2*timer/speed);

    //main algo
    for(let i=0;i<N;i++)
    {
        for(let j=0;j<N;j++)
        {
            setback("l1",1);
            currentElem(s,revS,i,j);
            await sleep(timer/speed);
            setback("l1",0);
            setback("l2",1);
           setColorelem(i,j,dp);
           await sleep(timer/speed);
            setback("l2",0);
            if(squares[j].innerHTML==revS[i].innerHTML)
            {setback("l3",1);
                await sleep(timer/speed);
                colorChange(s,revS,i,j);
                await sleep(timer/speed);
                setback("l3",0);
                if(i>0 && j>0)
               {    setback("l4",1);
                    setColorelem(i-1,j-1,dp);
                await sleep(2*timer/speed);
                    dp[i][j].innerHTML=dp[i-1][j-1].innerHTML+"+ 1";
                    await sleep(2*timer/speed);
                   dp[i][j].innerHTML= parseInt(dp[i-1][j-1].innerHTML) +1;
                   await sleep(2*timer/speed);
                   colorevelement(dp,i-1,j-1);
                   setback("l4",0);
                }
                else 
                {setback("l5",1);
                await sleep(timer/speed);
                    dp[i][j].innerHTML=1;
                    setback("l5",0);
                }
            }
            else
            {
                await sleep(timer/speed);
                if(i>0 && j>0)
                {   setback("l6",1); 
                    setColorelem(i,j-1,dp);
                    setColorelem(i-1,j,dp);
                    await sleep(2*timer/speed);
                    dp[i][j].innerHTML="max("+dp[i][j-1].innerHTML+","+dp[i-1][j].innerHTML+")";
                    await sleep(2*timer/speed);
                    dp[i][j].innerHTML= Math.max(parseInt(dp[i-1][j].innerHTML),parseInt(dp[i][j-1].innerHTML));
                    await sleep(2*timer/speed);
                    colorevelement(dp,i,j-1);
                    colorevelement(dp,i-1,j);
                    setback("l6",0);
                }
                else if(i>0)
               { setback("l7",1);
                   setColorelem(i-1,j,dp);
                await sleep(2*timer/speed);
                   dp[i][j].innerHTML=parseInt(dp[i-1][j].innerHTML);
                   await sleep(2*timer/speed);
                   colorevelement(dp,i-1,j);
                   setback("l7",0);
                }
                else if(j>0)
                {   setback("l8",1); 
                    setColorelem(i,j-1,dp);
                    await sleep(2*timer/speed);
                    dp[i][j].innerHTML=parseInt(dp[i][j-1].innerHTML);
                    await sleep(2*timer/speed);
                    colorevelement(dp,i,j-1);
                    setback("l8",0);
                }


            }
            await sleep(3*timer/speed);
            colorev(s,revS,i,j);
            colorevelement(dp,i,j);
        }
    }
    dp[N-1][N-1].setAttribute('style','background-color:#dc3545');
    dp[N-1][N-1].setAttribute('style','color:white');
    textEdit("Final answer is: "+dp[N-1][N-1].innerHTML)
}



