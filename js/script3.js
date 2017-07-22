$(".class_btn").click(function() {
   // Hides all class infos.
    $(".class_info_wrapper").addClass(" not_visible").removeClass("visible");
    $(".class_btn").removeClass("class_btn2");

   // Shows appropriate one.
   var info = $(this).data("clas"); // Fetches the value of the data-clas attribute.
   $(".class_info_wrapper[data-clas="+info+"]").addClass(" visible").removeClass("not_visible");
   $(".class_info[data-clas="+info+"]").addClass(" fadeInLeft");
   $(".class_info_img[data-clas="+info+"]").addClass(" fadeInRight");
   $(".class_btn[data-clas="+info+"]").addClass(" class_btn2"); 
});