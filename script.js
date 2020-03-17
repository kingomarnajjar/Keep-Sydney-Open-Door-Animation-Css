for (var i = 1; i < 3; i++) {
  $('#c0').clone().appendTo('.container').attr('id', 'c' + i);
}
$('.doorFrame').click(function(event){
  console.log('click');

  var doorFrame = $(event.currentTarget)
  // open door
  doorFrame.find('.swing').toggleClass('flipped');
  
  /*
  // move the overlay
  $('.popover').css('top', doorFrame.offset().top - 60 + "px").css('left', doorFrame.offset().left - 70 + "px").toggleClass('open');
*/
});