var grid1 = document.querySelector(".patternString")
var grid2 = document.querySelector(".patternString2")
var grid3 = document.querySelector(".lpsArray")
var grid4 = document.querySelector(".textString")
let timeOut = 1000;

let squares1 = [];
let squares2 = [];
let squares3 = [];
let squares4 = [];

var patternArray = "abcdabcy".split('');
let patternCopyArray = "abcdabcy".split('');
let textArray = "abcxabcdabcdabcy".split('')//['a','b','c','x','a','b','c','d','a','b','c','d','a','b','c','y'];

let m = 8;
let n = 16;
let speed = 2;
let timer = 1000;
let count = 0;
let isPlaying = false;
let pause=0;

for(let i=0;i<m;i++){
    let box = document.createElement("div")
    box.setAttribute('id', i);
    box.setAttribute('class', "col-sm");
    box.setAttribute('style', 'background-color: #ffc107');
    box.innerHTML = patternArray[i];
    grid1.appendChild(box);
    squares1.push(box);
}

for(let i=0;i<m;i++){
    let box = document.createElement("div")
    box.setAttribute('id', i);
    box.setAttribute('class', "col-sm");
    box.setAttribute('style', 'background-color: #ffc107');
    box.innerHTML = patternCopyArray[i];
    grid2.appendChild(box);
    squares2.push(box);
}

for(let i=0;i<m;i++){
    let box = document.createElement("div")
    box.setAttribute('id', i);
    box.setAttribute('class', "col-sm");
    box.setAttribute('style', 'background-color: #ffc107');
    box.innerHTML = 0;
    grid3.appendChild(box);
    squares3.push(box);
}

for(let i=0;i<n;i++){
    let box = document.createElement("div")
    box.setAttribute('id', i);
    box.setAttribute('class', "col-sm");
    box.setAttribute('style', 'background-color: #ffc107');
    box.innerHTML = textArray[i];
    grid4.appendChild(box);
    squares4.push(box);
}

function setTimeDelay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function addSp(){
    if(speed < 10){
        speed++;
        document.querySelector("#speed").innerHTML=speed+"x";
    }
}

function subSp(){
    if(speed > 1){
        speed--;
        document.querySelector("#speed").innerHTML=speed+"x";
    }
}

async function start(){
    // alert("Start");
    // isPlaying = true;
    if(!pause){ 
        pause=1;
        document.querySelector("#start").innerHTML="Restart";
        lineHgli8('line l13');
        textEdit("Start");
        await setTimeDelay(3*timer/speed);
        deHgli8('line l13');
        KMP(squares1, squares2, squares3, squares4, n, m);
    }
    else{
        location.reload();
    }
}

function last(){
    speed = 0;
}

async function textEdit(msg){
    document.querySelector("#floatingTextarea2").innerHTML= "KMP \n" + msg;
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

async function colorev(A, i){
	A[i].setAttribute('style','background-color: #ffc107 '); // yellow
}

async function colorChange(A, i){
	A[i].setAttribute("style","background-color: #0dcaf0 "); // blue	
}

async function finalElem(A, i){
	A[i].setAttribute("style","background-color: greenyellow "); // green	
}

async function currentElem(A, i){
	A[i].setAttribute('style','background-color: #d63384 '); // pink	
}

async function swap(A, i,j)
{
	let tmp = A[i].innerHTML;
	A[i].innerHTML = A[j].innerHTML;
	A[j].innerHTML = tmp;

}

async function getLPS(squares1, squares2, m, squares3){
    let index = 0;
    // squares3[0].innerHTML = 0;
    for(let i=1;i<m;){
        lineHgli8('line l3');
        textEdit("Iterate the for loop");
        await setTimeDelay(3*timer/speed);
        deHgli8('line l3');
        colorChange(squares1, index);
        colorChange(squares2, i);
        textEdit("Compare the characters of the strings");
        await setTimeDelay(3*timer/speed);
        colorev(squares1, index);
        colorev(squares2, i);

        if(squares2[i].innerHTML === squares1[index].innerHTML){
            lineHgli8('line l4');
            textEdit("As they are equal, it enters the if loop");
            await setTimeDelay(3*timer/speed);
            deHgli8('line l4');
            currentElem(squares3, i);
            lineHgli8('line l5');
            textEdit("Change the LPS[i] to index+1 indicating the position from which we need to start comparison");

            squares3[i].innerHTML = index+1;

            await setTimeDelay(3*timer/speed);
            colorev(squares3, i);
            deHgli8('line l5');
            await setTimeDelay(3*timer/speed);

            lineHgli8('line l6');
            textEdit("Move to next element");
            await setTimeDelay(3*timer/speed);
            deHgli8('line l6');

            i++;
            index++;
        }
        else{
            lineHgli8('line l8');
            textEdit("As they are not equal, it enters the else loop");
            await setTimeDelay(3*timer/speed);
            deHgli8('line l8');

            textEdit("Check if the index is pointing the first element in pattern string");
            if(index != 0){
                lineHgli8('line l9');
                textEdit("As index is not zero, it isn't the first element");
                await setTimeDelay(3*timer/speed);
                textEdit("Hence start comparing with the element at position lps[index-1]");
                currentElem(squares3, index-1);
                await setTimeDelay(3*timer/speed);
                let temp = index;

                index = parseInt(squares3[index-1].innerHTML);

                colorev(squares3, temp-1);
                deHgli8('line l9');
                await setTimeDelay(3*timer/speed);
            }
            else{
                lineHgli8('line l10');
                textEdit("As index is zero, it indicates that it is the starting element");
                await setTimeDelay(3*timer/speed);
                currentElem(squares3, i);
                textEdit("Hence store 0 in the LPS array corresponding to this element.");
                await setTimeDelay(3*timer/speed);

                squares3[i].innerHTML = 0;

                colorev(squares3, i);
                deHgli8('line l10');
                await setTimeDelay(3*timer/speed);
                i++;
            }
        }
    }
}

async function KMP(squares1, squares2, squares3, s, n, m){

    lineHgli8('line l15');
    textEdit("Construct the LPS Array");
    await setTimeDelay(3*timer/speed);
    deHgli8('line l15');
    await getLPS(squares1, squares2, m, squares3);
    //console.log("temp: "+temp);
    // for(let i=0;i<m;i++){
    //     console.log(parseInt(squares3[i].innerHTML)+" ");
    // }

    lineHgli8('line l16');
    textEdit("Initialize loop variables");
    await setTimeDelay(3*timer/speed);
    deHgli8('line l16');

    let i=0;
    let j=0;
    
    while(i<n & j<m){
        lineHgli8('line l17');
        textEdit("Iterating the while loop until we reach the end of the strings");
        await setTimeDelay(3*timer/speed);
        deHgli8('line l17');

        textEdit("Compare the characters of the string");
        currentElem(s, i);
        currentElem(squares1, j);
        await setTimeDelay(3*timer/speed);
        colorev(s, i);
        colorev(squares1, j);
        await setTimeDelay(3*timer/speed);

        if(s[i].innerHTML == squares1[j].innerHTML){
            lineHgli8('line l18');
            textEdit("As they are equal, move to next element");
            await setTimeDelay(3*timer/speed);
            deHgli8('line l18');

            i++;
            j++;

            // await setTimeDelay(3*timer/speed);
        }
        else{
            lineHgli8('line l19');
            textEdit("As they are not equal, enter the else loop");
            await setTimeDelay(3*timer/speed);
            deHgli8('line l19');

            textEdit("Check if it is the first element of the pattern string");
            await setTimeDelay(3*timer/speed);

            if(j!=0){
                lineHgli8('line l20');
                textEdit("As it is not the first character of the pattern string, move to index equal lps[j-1] in the pattern string");
                colorChange(squares3, j-1);
                await setTimeDelay(3*timer/speed);
                colorev(squares3, j-1);
                j = parseInt(squares3[j-1].innerHTML);
                deHgli8('line l20');
                await setTimeDelay(3*timer/speed);
            }
            else{
                lineHgli8('line l21');
                textEdit("As it is the first element of the pattern string, move to next element");
                await setTimeDelay(3*timer/speed);
                i++;
                deHgli8('line l21');
                await setTimeDelay(3*timer/speed);
            }
        }
    }

    if(j==m){
        lineHgli8('line l24');
        textEdit("As we reach the end of the pattern string, we found the pattern string");
        await setTimeDelay(3*timer/speed);
        deHgli8('line l24');
        textEdit("Pattern string found in the text string :)");
    }
    else{
        lineHgli8('line l25');
        textEdit("As we didn't reach the end of the pattern string, we didn't find the pattern string");
        await setTimeDelay(3*timer/speed);
        deHgli8('line l25');
        textEdit("Pattern string not found in the text string :(");
    }
}

textEdit(" ");
// KMP(squares1, squares3, squares4, n, m);
