$(".ingame_menu_tab").click(function() {
   // Hides all ingame menu's.
    $(".ingame_menu").addClass(" not_visible").removeClass("visible");
    $(".ingame_menu_tab").removeClass("active");

   // Shows appropriate one.
   var info = $(this).data("ingamemenu"); // Fetches the value of the data-clas attribute.
   $(".ingame_menu[data-ingamemenu="+info+"]").addClass(" visible").removeClass("not_visible");
    $(".ingame_menu_tab[data-ingamemenu="+info+"]").addClass(" active");
});




$(".inv_tab").click(function() {
   // Hides all inventory tabs.
    $(".inv_wrapper").addClass(" not_visible").removeClass("visible");
    $(".inv_tab").removeClass("active_inv_tab");

   // Shows appropriate one.
   var info = $(this).data("inv"); // Fetches the value of the data-clas attribute.
   $(".inv_wrapper[data-inv="+info+"]").addClass(" visible").removeClass("not_visible");
    $(".inv_tab[data-inv="+info+"]").addClass(" active_inv_tab");
});