$(function() {
  
  // Position buttons in equal height containers
  $(".btn-container-bottom .btn-positioned").addClass("btn-positioned-on");

  // Add visual toggle icons
  $('ol.breadcrumb a').after(' <span class="divider" role="separator">/</span>');
  $('[data-toggle="dropdown"]').append(' <b class="caret"></b>');
  $('[data-toggle="collapse"]').prepend('<b class="caret"></b> ');
  $('nav#nav div.container').prepend('<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">'+
    '<span class="icon-bar"></span>'+
    '<span class="icon-bar"></span>'+
    '<span class="icon-bar"></span>'+
  '</a>');

  // If browser doesn't support autofocus
  // Then focus on input with autofocus attr
  if (!Modernizr.input.autofocus) {
    $('input[autofocus]').focus();
  }

});
