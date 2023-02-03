






let height =$(".side-menu ul").innerHeight();
let link=$(".side-menu li");
let width=$(".side-menu .left").outerWidth()
$(".side-menu").css("left",-width)
 link.css("top",height)
 $(".close-open").click(function(){
   if($(".side-menu").css("left")=="0px"){
  for(var i=0 ; i<link.length;i++ ){
    link.eq(i).animate({"top":height},300)
    }
    $(".side-menu").animate({"left":-width},400)
 /**  $("#close").addClass("d-none");
   $("#close").removeClass("d-none");
    */
  document.getElementById("close").classList.add("d-none")
    document.getElementById("open").classList.remove("d-none")

  }
  else{
    document.getElementById("open").classList.add("d-none")
    
    document.getElementById("close").classList.remove("d-none")
    $(".side-menu").animate({"left":"0px"},400)
    let ran=0
    for(var i=0 ; i<link.length;i++ ){
    link.eq(i).animate({"top":0},900+ran)
    ran=ran+200;
   
    }
  }
 })

//------validation

let nameEL = document.getElementById("name")
let emailEL = document.getElementById("email")
let phoneEL = document.getElementById("phone")
let ageEL = document.getElementById("age")
let passwordEL = document.getElementById("password")
let repasswordEL = document.getElementById("repassword")
let nameReg;
let emailReg;
let phonelReg;
let ageReg;
let passReg;
let repassReg;


nameEL.addEventListener("keyup",function(){
nameReg=/^[A-Z a-z]{3,9}$/
let id =document.getElementById("nameAl")
 checkValid(nameEL.value,nameReg,id )
checkAL();

})
emailEL.addEventListener("keyup",function(){
  emailReg= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let id =document.getElementById("emailAl")
  checkValid(emailEL.value,emailReg,id )
checkAL();
  
  })
  phoneEL.addEventListener("keyup",function(){
    phonelReg=/^(010|012|011|015)[0-9]{8}$/
    let id=document.getElementById("phoneAL")
     checkValid(phoneEL.value,phonelReg,id)
    checkAL();
    })
    ageEL.addEventListener("keyup",function(){
      ageReg=/^[1-9]{1,2}$/
      let id=document.getElementById("ageAL")
      checkValid( ageEL.value,ageReg,id )
     
      checkAL();
      })
      passwordEL.addEventListener("keyup",function(){
        passReg=/(?=.*[0-9])(?=.*[a-zA-Z])(.{8,})/
      //  passReg=/^([A-Za-z]{1,10}[0-9]{1}|[0-9]{1,10}[A-Za-z]{1})[A-Za-z0-9]{6,20}$/
let id=document.getElementById("passAL")
checkValid(passwordEL.value,passReg,id );

checkAL();

})

repasswordEL.addEventListener("keyup",function(){
  repassReg=passwordEL.value
  let id=document.getElementById("repassAL")
if(repasswordEL.value==repassReg){
  id.classList.add("d-none")

}
else{
  id.classList.remove("d-none")

}
checkAL();
  })
  

 
 function checkValid(inputValue,Re,id){
  if (!Re.test(inputValue)) {
  id.classList.remove("d-none")
    


  }
  else{
    
    id.classList.add("d-none")
  
  }

 }
 function checkAL(){
  if (nameReg.test(nameEL.value)&&emailReg.test(emailEL.value)&& phonelReg.test(phoneEL.value)&&ageReg.test( ageEL.value)&&passReg.test( passwordEL.value)&&(repasswordEL.value==repassReg)) {
document.getElementById("submit").removeAttribute("disabled");
  }
  else{
    document.getElementById("submit").disabled = "true";

  }
 }


  $(".link2").click(function(){
   window.open("./HTML/index.html","_self","",""); 
    })

    $(".link3").click(function(){
     window.open("./SnakeGame/HTML/index.html","_self","","");
      })
     
  $(".link4").click(function(){
    window.open("./flappyBird/flappyBird.html","_self","","");
  })

  $(".link5").click(function(){
    window.open("Menja.html","_self","","");
  })


     
     
      
// function slide(){
//   $("#logoAnimate").fadeToggle("slow");
 
// }
setInterval( slide, 2000)

$("#gameHover1").hover(function(){
  $("#gameHover1").css({"background-color" : "rgba(0, 0, 0, 0.611)","transition" :"1s"});
  $("#gameHover1 .t1").css({"color" : "rgba(250,250,250)" ,"transition" :"2s"});

}
,function(){
  $("#gameHover1").css("background-color" , "rgba(0, 0, 0, 0)");
  $("#gameHover1 .t1").css("color" , "rgba(250,250,250 , 0)");
})
   
$("#gameHover2").hover(function(){
  $("#gameHover2").css({"background-color" : "rgba(0, 0, 0, 0.611)","transition" :"1s"});
  $("#gameHover2 .t2").css({"color" : "rgba(250,250,250)" ,"transition" :"2s"});

}
,function(){
  $("#gameHover2").css("background-color" , "rgba(0, 0, 0, 0)");
  $("#gameHover2 .t2").css("color" , "rgba(250,250,250 , 0)");
})


$("#gameHover3").hover(function(){
  $("#gameHover3").css({"background-color" : "rgba(0, 0, 0, 0.611)","transition" :"1s"});
  $("#gameHover3 .t1").css({"color" : "rgba(250,250,250)" ,"transition" :"2s"});

}
,function(){
  $("#gameHover3").css("background-color" , "rgba(0, 0, 0, 0)");
  $("#gameHover3 .t1").css("color" , "rgba(250,250,250 , 0)");
})

$("#gameHover4").hover(function(){
  $("#gameHover4").css({"background-color" : "rgba(0, 0, 0, 0.611)","transition" :"1s"});
  $("#gameHover4 .t2").css({"color" : "rgba(250,250,250)" ,"transition" :"2s"});

}
,function(){
  $("#gameHover4").css("background-color" , "rgba(0, 0, 0, 0)");
  $("#gameHover4 .t2").css("color" , "rgba(250,250,250 , 0)");
})



