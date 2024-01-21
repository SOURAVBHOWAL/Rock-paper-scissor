let chosen=document.querySelectorAll(".op");
let score=document.querySelectorAll(".sc");
let footer=document.querySelector(".foot");
const f=document.getElementsByClassName("foot");
let you=0;
let comp=0;
let arr=["Rock","Paper","Scissor"];
chosen[0].onclick = () =>{
    let x=Math.floor(Math.random()*3);
    if(x===2){
        you+=1;
        score[0].innerText =you;
        footer.style.backgroundColor="green";
        footer.innerText=`Rock beats ${arr[x]}`;
    }
    else if(x===0){
        footer.style.backgroundColor="#1a0241";
        footer.innerText=`Tie`;

    }
    else{
        comp+=1
        score[1].innerText =comp;
        footer.style.backgroundColor="red";
        footer.innerText=`${arr[x]} beats Rock`;
        
    }
}
chosen[1].onclick = () =>{
    let x=Math.floor(Math.random()*3);
    if(x===0){
        you+=1;
        score[0].innerText =you;

        footer.style.backgroundColor="green";
        footer.innerText=`Paper beats ${arr[x]}`;
    }
    else if(x===1){
        footer.style.backgroundColor="#1a0241";
        footer.innerText=`Tie`;
    }
    else{
        comp+=1
        score[1].innerText =comp;
        footer.style.backgroundColor="red";
        footer.innerText=`${arr[x]} beats Paper`;
    }
    
}
chosen[2].onclick = () =>{
    let x=Math.floor(Math.random()*3);
    if(x===1){
        you+=1;
        score[0].innerText =you;
        footer.style.backgroundColor="green";
        footer.innerText=`Scissor beats ${arr[x]}`;
    }
    else if(x===2){
        footer.style.backgroundColor="#1a0241";
        footer.innerText=`Tie`;
    }
    else{
        comp+=1
        score[1].innerText =comp;
        footer.style.backgroundColor="red";
        footer.innerText=`${arr[x]} beats Scissor`;
    }
}
