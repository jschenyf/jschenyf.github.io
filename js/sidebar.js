(function () {
    $("a#menu-toggle").on('click', sidebarToggle);
  
    function sidebarToggle(){
      $("body").toggleClass("toggled");
      $('a#menu-toggle').find('i.fa').toggleClass('fa-bars').toggleClass('fa-times');
    }
  
    // auto toggle the sidebar on load
    sidebarToggle();
  
    // blind the anchor jumping on load
    $('#sidebar-wrapper nav a' ).on('click', function(event) {
        event.preventDefault();
        return false;
    });
  
  } ());