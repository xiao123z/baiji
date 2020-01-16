$(function () {
    $("#header").load("../html/head.html");
$.getJSON("../../../server/lubo.json", (data) => {
       let m = new mess(data[0])
       m.init()
   });
$.getJSON("../../../server/qh1.json", (ta) => {
       let c = new me(ta)
       c.init()         
   })


  
    setTimeout(function(){
   $.getJSON("../../../server/louceng.json", (taw) => {
       let z = new messg(taw)
       z.init()         
   })
  
   $.getJSON("../../../server/loc2.json", (taw) => {
       let a = new mea(taw)
       a.init()         
   })  
   $.getJSON("../../../server/loc3.json", (taw) => {
       let q = new mea(taw)
       q.init()         
   })
 
   $.getJSON("../../../server/loc4.json", (taw) => {
       
       let z = new messg(taw)
       z.init()         
   })
    })
   $.getJSON("../../../server/loc5.json", (taw) => {
       console.log(taw);
       let b = new act(taw)
       b.init()         
   })
  $.getJSON("../../../server/dibu.json",(type)=>{
   //    console.log(da);
      let b = new mes(type)
       b.init()  
  })
    $(".footer").load("../html/footer.html")    
})