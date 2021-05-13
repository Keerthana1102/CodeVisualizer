
//var grid1=document.querySelector("#stringMain1");
//var grid2=document.querySelector("#stringMain2");
//let time=1000;
//let squares1=[];
//let squares2=[];
let N=Math.floor(Math.random() * 10)+1;
let M=Math.max(Math.floor(Math.random() * 10),N+1);
let speed=3;
let timer=1000;
let pause=0;
document.getElementById("largestNumber").innerHTML = document.getElementById("largestNumber").innerHTML+N;
document.getElementById("sum").innerHTML = document.getElementById("sum").innerHTML+M;

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
     
      if(!pause)
        { pause=1;
            document.getElementById("begin").innerHTML="Restart";
      IntegerPartition();}
      else
      {location.reload();
      }
      
 

  }
async function textEdit(msg)
{
	document.querySelector("#floatingTextarea2").innerHTML="we create a table where each column represents the larger number we have available, and each row represents a possible sum we want to reach\n"+msg;
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
async function setback(id,chk)
{
if(chk)
document.getElementById(id).setAttribute('style','background-color : hotpink');
else
document.getElementById(id).setAttribute('style','background-color : greenyellow');
}
async function IntegerPartition()
{
	textEdit("The partition of an integer is a way of writing it as a sum of positive integers with all integers<= largest number.");
    await sleep(3*timer/speed);
    textEdit("Create a 2d array of dimensions ((sum+1) X (largestNumber+1)), \n dp[i][j]= integer partitions of i when largest number possible is j")
	await sleep(3*timer/speed);
    let dp=[];
    let box=document.querySelector("#cont2");
    
    //Creating dp[][] array
    for(let i=0;i<=M;i++)
	{
        let dpr=[];
        let rw=document.createElement("div");
        rw.setAttribute('id',"stringMain1");
        rw.setAttribute('class',"row");
        for(let j=0;j<=N;j++)
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
    textEdit("mark a 0 on the column that represents the largest number being 0, and a 1 on the first row, which represents the sum being equal to 0");
    for(let i=1;i<=N;i++)
    {
        setback("l1",1);
        await sleep(2*timer/speed);
        setback("l1",0);
        setback("l2",1);
        setColorelem(0,i,dp);
        dp[0][i].innerHTML=1;
        await sleep(2*timer/speed);
        colorevelement(dp,0,i);
        setback("l2",0);
    }
    
    for(let i=1;i<=M;i++)
    {
        for(let j=1;j<=N;j++)
        {
            setback("l3",1);
             await sleep(timer/speed);
             setback("l3",0);
             setback("l4",1);
             await sleep(timer/speed);
           setColorelem(i,j,dp);
           await sleep(timer/speed);
           setback("l4",0);
           if(i<j)
           {
                setback("l5",1);
                textEdit("Since Sum is less than Maximum Number, MaxNumber can't participate in sum partition\n possible number of partitions= number of partitions when sum="+i+" and maxNumber="+j-1)
                await sleep(2*timer/speed);
                setback("l5",0);
                setback("l6",1);
                setColorelem(i,j-1,dp);
                await sleep(2*timer/speed);
                dp[i][j].innerHTML=dp[i][j-1].innerHTML;
                await sleep(2*timer/speed);
                colorevelement(dp,i,j-1);
                setback("l6",0);
                setback("l7",1);
                await sleep(0.1*timer/speed);
                setback("l7",0);

           }
          
            else
            {
                   setback("l9",1);
                    textEdit("To count all possible integer partitions we can break main case into two subcases\n Case-1 Partition includes LargestNumber \n Case-2 Partition does not include Largest Number\n IntegerPartitions(Sum, LargestNumber) = IntegerPartitions(Sum,LargestNumber-1) + IntegerPartitions(Sum-LargestNumber, LargestNumber) ");
                    await sleep(4*timer/speed);
                    setColorelem(i,j-1,dp);
                    setColorelem(i-j,j,dp);
                    await sleep(4*timer/speed);
                    dp[i][j].innerHTML=dp[i][j-1].innerHTML+" + "+dp[i-j][j].innerHTML;
                    changeMatColor(i,j-1,dp);
                    changeMatColor(i-j,j,dp);
                    await sleep(2*timer/speed);
                    dp[i][j].innerHTML= parseInt(dp[i-j][j].innerHTML)+parseInt(dp[i][j-1].innerHTML);
                    await sleep(2*timer/speed);
                    colorevelement(dp,i,j-1);
                    colorevelement(dp,i-j,j);
                setback("l9",0);
               
            }
            
            await sleep(3*timer/speed);
           
            colorevelement(dp,i,j);
            textEdit("");
        }
    }
    dp[M][N].setAttribute('style','background-color:cyan');
    dp[M][N].setAttribute('style','color:white');
    textEdit("Final answer is: "+dp[M][N].innerHTML)
}



