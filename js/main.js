var options = document.getElementsByTagName('option');
for(var i =0;i <options.length;i++)
{
    options[i].style.fontFamily=options[i].innerHTML;
}


$("#bold").click(function()
{   if($("p").css("fontWeight")!=="700")
    $("p").css("fontWeight","bold");
    //console.log( $("p").css("fontWeight"));
    else
    $("p").css("fontWeight","normal");

})
function Italic() 
{
    var a = document.querySelector("p");
    if(a.style.fontStyle!="italic")
    a.style.fontStyle="italic";
    else
    a.style.fontStyle="normal";
}
$("#italic").click(function()

{   
    console.log( $("p").css("fontStyle"));
    if($("p").css("fontStyle")!="italic")
    $("p").css("fontStyle","italic");
   // console.log( $("p").css("fontStyle"));
    else
    $("p").css("fontStyle","normal");

})

function Underline() 
{
    var a = document.querySelector("p");
    if(a.style.textDecoration!="underline")
    a.style.textDecoration="underline";
    else
    a.style.textDecoration="none";}
    
    $("#underline").click(function()
{   
    console.log( $("p").css("text-decoration"));
    if($("p").css("text-decoration")!=="underline solid rgb(0, 0, 0)")
    $("p").css("text-decoration","underline ");
   // console.log( $("p").css("fontStyle"));
    else {
    console.log("hello");
    $("p").css("text-decoration","none ");
    }

})


 /*   function Underline() 
{
    document.querySelector("p").classList.toggle("bold");

}*/
function amani()
{
    var options = document.getElementsByTagName('option');
    for(var i =0;i <options.length;i++)
    {
        options[i].style.fontFamily=options[i].innerHTML;
    }

}
function apply()
{
    var a = document.querySelector("p");
    a.style.fontFamily= document.querySelector("select").value;
    var b =document.querySelector("#amani").value;
    var n = b.toString();
    n=n+"px";
    console.log(n)
    a.style.fontSize=n;
}
$("#apply").click(function()
{   
    var a=$("select").val();
    var b=$("input").val()+"px";
    $("p").css("font-family",a);
    $("p").css("font-size",b);

   // console.log( $("p").css("fontStyle"));
  

})