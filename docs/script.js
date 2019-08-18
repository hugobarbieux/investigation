$(document).ready(function(){
  function scrollDown() {
    $('#scroll-d').effect('bounce', {times:3}, 2000, scrollDown);
  }
  scrollDown();
});
