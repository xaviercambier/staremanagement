$('#myModal').on('show', function () {
  $('div.modal-body').html('<iframe src="http://www.youtube.com/v/itTskyFLSS8&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;autoplay=1" width="500" height="281" frameborder="0" allowfullscreen=""></iframe>');  
});
$('#myModal').on('hide', function () {
  $('div.modal-body').html('');  
});