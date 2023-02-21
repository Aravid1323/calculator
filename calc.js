let button_pressed=0;
let button_input=document.querySelectorAll(".btn");
let input=document.getElementById("allclr");
let equal=document.getElementById("res");
let clear=document.getElementById("allclr");
let erase=document.getElementById("clr");

Window.Onload = () => {
    disp.value = "";
    
  };


button_input.forEach((button_class)=>{
    button_class.addEventListener("click",()=>{
        if(button_pressed==1){
            disp.value="";
            button_pressed=0;
        }
        disp.value+=button_class.value;
    });
});


clear.addEventListener("click",()=>{
    disp.value="";
});

erase.addEventListener("click",()=>{
    disp.value=disp.value.substr(0,disp.value.length-1);
});

equal.addEventListener("click",()=>{
    button_pressed=1;
    let inp=disp.value;
    
    try{
        let ans=eval(inp);
        if(Number.isInteger(ans)){
            disp.value=ans;

        }
        else{
            disp.value=ans.toFixed(2);
        }
    }catch(err){
        alert("Invalid Value");

    }

});