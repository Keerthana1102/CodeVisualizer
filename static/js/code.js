function show(v){
    if(v!= "r1"){
        document.getElementById("r1").style.display = "none";
    }
    if(v!="r2"){
        document.getElementById("r2").style.display = "none";
    }
    if(v!="r3"){
        document.getElementById("r3").style.display = "none";
    }
    if(v!="r4"){
        document.getElementById("r4").style.display = "none";
    }
    var el = document.getElementById(v);
    if(el.style.display == "block"){
        el.style.display = "none";
    }
    else{
        el.style.display = "block";
    }
}