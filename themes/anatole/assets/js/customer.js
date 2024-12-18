

var isShowDesc =false;
var compressedText ="Click here for compressed view";
var expandedText ="Click here for expanded view";
function onHide ()
{
 
    // 修改文案
   if (isShowDesc){

    var descc = document.getElementById('descript-title-new')
    console.log(1,descc)
    descc.innerHTML=compressedText
    isShowDesc = !isShowDesc;
     var t = document.getElementsByClassName('desc-publication');
    t[0].hidden=false; 
    for (var i = 0; i < t.length; i++) {
        t[i].hidden=false;
      }
  
   }else{
    isShowDesc = !isShowDesc;
    var desc = document.getElementById('descript-title-new')
    console.log(2,desc)
    desc.innerHTML=expandedText

    var t = document.getElementsByClassName('desc-publication');
    // t.style.display = "none"
    for (var i = 0; i < t.length; i++) {
        t[i].hidden=true;
      }
          

   
   }
}