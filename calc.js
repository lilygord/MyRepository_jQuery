var inp = $("#calc-input");//текстовое поле
var inpOne;
var op = 0;

function addNumber(number) {
    inp.val(inp.val() + number);
   }
  
$("#butt1").bind("click", function () {
    addNumber(1);
   });
$("#butt2").bind("click", function () {
   addNumber(2);
   });
$("#butt3").bind("click", function () {
   addNumber(3);
   });
$("#butt4").bind("click", function () {
   addNumber(4);
   });
$("#butt5").bind("click", function () {
   addNumber(5);
   });
$("#butt6").bind("click", function () {
   addNumber(6);
   });
$("#butt7").bind("click", function () {
   addNumber(7);
   });
$("#butt8").bind("click", function () {
   addNumber(8);
   }); 
$("#butt9").bind("click", function () {
   addNumber(9);
   });
$("#butt0").bind("click", function () {
   addNumber(0);
   });
   
$("#butt-comma").bind("click", function () {              
   if (inp.val().indexOf(".") < 0 && inp.val().length > 0){
   addNumber(".");
   }
});

$("#butt-plusmn").bind("click", function () {               
    inp.val(inp.val() * -1);
   });
   
$("#clear").bind("click", function(){                      
   inp.val("");
   op="";
   inpOne=""; 
});   
   
$("#butt-plus").bind("click", function(){                   
    inpOne = inp.val();
    inp.val("");
    op = "plus";
    });
    
$("#butt-minus").bind("click", function(){                  
    inpOne = inp.val();
     inp.val("");
    op = "minus";
    });
    
$("#butt-mul").bind("click", function(){   
    inpOne = inp.val();
    inp.val("");
    op = "multip";
   });
   
$("#but-divided").bind("click", function(){             
    inpOne = inp.val();
    inp.val("");
    op = "divided";
   });
 
 $("#sign-equally").bind("click", function(){  
    var x = inp.val();
    if (op == "plus") {
       inp.val(+inpOne + +x) ;
       }
    if (op == "minus"){
      inp.val(inpOne - x);
        }       
    if(op == "multip"){
       inp.val(inpOne * x) ;
    }
    if(op == "divided"){
       if(x == 0){ alert("На ноль делить нельзя");
       }else {
       inp.val(inpOne / x);
       }
 }
    op="";
    inpOne="";
});








