let speed = 2, timer = 1000;

async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function subSp(){
    if(speed >0){
        speed--;
        document.querySelector('#floatingText').innerHTML= speed + "x";
    }
}
async function addSp(){
    if(speed<5){
        speed++;
        document.querySelector('#floatingText').innerHTML = speed+"x";
    }
}
async function huffman(){
    let arr1 = ['o','_','l','w','d','y','e','r'];
    let arr2 = [5,3,2,2,2,1,1,1];
    for(let i=0;i<8;i++){
        addRow(arr2[i],arr1[i],i);
    }
    await sleep(2*timer/speed);
    sortTable();
}
function addRow(u,v,i) {
    var Tab = document.getElementById('mytable');
    var tr = Tab.insertRow(-1);
    var td = document.createElement('td'); // table definition.
    td = tr.insertCell(0);
    var ele = document.createTextNode(u);
    td.appendChild(ele);
    if(i%2)td.style.backgroundColor = '#f2f2f2';
    var td = document.createElement('td'); // table definition.
    td = tr.insertCell(1);
    var ele = document.createTextNode(v);
    td.appendChild(ele);
    if(i%2)td.style.backgroundColor = '#f2f2f2';
}
async function colorreverse(x0,x1,c){
    x0.style.backgroundColor = c;
    x1.style.backgroundColor = c;
}
async function changeColor(a,b,i){
    x0 = a.getElementsByTagName('td')[0];
    y0 = b.getElementsByTagName('td')[0];
    x1= a.getElementsByTagName('td')[1];
    y1 = b.getElementsByTagName('td')[1];
    x0.style.backgroundColor = '#4FC3F7';
    x1.style.backgroundColor = '#4FC3F7';
    y0.style.backgroundColor = '#4FC3F7';
    y1.style.backgroundColor = '#4FC3F7';
    await sleep(2*timer/speed);
    if(i%2){colorreverse(x0,x1,'#f2f2f2');colorreverse(y0,y1,'#ffffff');}
    else {colorreverse(y0,y1,'#f2f2f2');colorreverse(x0,x1,'#ffffff');}
}
async function textEdit(msg){
    document.querySelector("#floatingTextarea2").innerHTML = msg+"\n";
}
async function linehighli(i){
    var x = document.getElementById(i);
    x.style.backgroundColor = "#ffffff";
}
async function dehighli(i){
    var x = document.getElementById(i);
    x.style.backgroundColor = "#DDEEDD";
}
async function sortTable() {
    for(let p = 0;p<7;p++){
    linehighli("l1");
    await sleep(2*timer/speed);
    dehighli("l1");
    linehighli("l2");
    textEdit("Sort the contents in ascending order of the node-value!!\n NOTE: node-values are just the sum of frequencies of underlying nodes!!")
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("mytable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName('td')[0];
        y = rows[i + 1].getElementsByTagName('td')[0];
        if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        await sleep(2*timer/speed);
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        changeColor(rows[i],rows[i+1],i);
      }
    }
    await sleep(2*timer/speed);
    textEdit("ALL the contents have been sorted accordingly!!");
    dehighli("l2");
    linehighli("l3");
    linehighli("l4");
    await sleep(3*timer/speed);
    textEdit("Assign the minimum node to left variable!\nAssign the next minimum node to right variable!");
    dehighli("l3");
    dehighli("l4");
    linehighli("l5");
    linehighli("l6");
    await sleep(2*timer/speed);
    textEdit("Create a new node with node-value = sum of frequencies of 2 minimum nodes obtained i.e, sum of left + right frequencies!");
    dehighli("l5");
    dehighli("l6");
    linehighli("l7");
    linehighli("l8");
    await sleep(2*timer/speed);
    dehighli("l7");
    dehighli("l8");
    linehighli("l9");
    linehighli("l10");
    textEdit("Remove the above 2 nodes with minimum node-value!")
    x = rows[1].getElementsByTagName('td')[0];
    y = rows[2].getElementsByTagName('td')[0];
    let b1 = parseInt(x.innerHTML);
    let b2 = parseInt(y.innerHTML);
    table.deleteRow(1);
    table.deleteRow(1);
    await sleep(3*timer/speed);
    dehighli("l9");
    dehighli("l10");
    linehighli("l11");
    textEdit("Insert the new node to the min-heap!");
    var T = document.getElementById('mytable');
    var r = T.rows;
    var z = b1+b2;
    addRow(z,'Node',r.length);
    await sleep(2*timer/speed);
    dehighli("l11");
    textEdit("Keep on iterating and repeating the steps until 1 element remains in the queue!");
    }
    textEdit("The final tree has been generated!");
    await sleep(2*timer/speed);
    textEdit("Elements on the left of a node are marked 0 and those on the right of a node having greater node-value are marked 1!");
    await sleep(3*timer/speed);
    textEdit("The code can be generated for any character by just compiling the 0s and 1s on the way of traversal from root to the required node!");
}


huffman();