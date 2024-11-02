let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let message=document.querySelector("#msg");
let msgContainer=document.querySelector(".message-container");
let msgbtn=document.querySelector("#msg-btn");
let turn="true";
// 2d array
const winPattern=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];
// call enable function here
const resetGame=()=>{
    turn=true;
    enableboxes();
    msgContainer.classList.add('hide');
}
boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if(turn==="true"){
           box.innerText ="X";
           turn="false";
        }
        else{
            box.innerText="O";
            turn="true";
        }
        box.disabled="true";

        checkWinner();
    });

});
// disabling box to stop playing further
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
// enable boxes to restart game
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner = (winner)=>{
    message.innerText=`congratulations winner is 
    "${winner}" `;
    msgContainer.classList.remove("hide");
    disableboxes();
};
// function
const checkWinner=()=>{
    for(let pattern of winPattern){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;

if(pos1val !=""&& pos2val!="" && pos3val !=""){
    if(pos1val===pos2val && pos2val===pos3val){
        console.log("winner",pos1val);
        showWinner(pos1val);
      }
    }
 }
};
msgbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);