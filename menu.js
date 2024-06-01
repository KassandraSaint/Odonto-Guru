document.addEventListener('DOMContentLoaded', function() {
  var menuItem = document.querySelector('.has_sub_menu');
  var subMenuOpen = false;
  menuItem.addEventListener('touch', function(event) {
    if(!subMenuOpen){
      event.preventDefault();
      subMenuOpen = true;
    };
  });
}, false);
