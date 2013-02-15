$(function() {
  
  // Add visual toggle icons
  $('[data-toggle="dropdown"]').append(' <b class="caret"></b>');
  $('[data-toggle="collapse"]').append(' <b class="caret"></b>');
  $('nav#nav div.container').prepend('<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">'+
    '<span class="icon-bar"></span>'+
    '<span class="icon-bar"></span>'+
    '<span class="icon-bar"></span>'+
  '</a>');

  function hoverTabOn(e,t) {
    $(e).parent().addClass("active");
    $(".tab-pane").removeClass("active");
    $(t).addClass("active");
  }

  function hoverTabOff(e) {
    $(e).parent().removeClass("active");
    $(".tab-pane").removeClass("active");
    $("div#default").addClass("active");
  }

  // Hover Tabs
  $("li.tab-individual a").hover(function() {
    hoverTabOn(this, "div#individual");
  }, function() {
    hoverTabOff(this);
  });
  $("li.tab-medicare a").hover(function() {
    hoverTabOn(this, "div#medicare");
  }, function() {
    hoverTabOff(this);
  });
  $("li.tab-employer a").hover(function() {
    hoverTabOn(this, "div#employer");
  }, function() {
    hoverTabOff(this);
  });
  $("li.tab-producer a").hover(function() {
    hoverTabOn(this, "div#producer");
  }, function() {
    hoverTabOff(this);
  });
  $("li.tab-provider a").hover(function() {
    hoverTabOn(this, "div#provider");
  }, function() {
    hoverTabOff(this);
  });

  // Anystretch Plugin for Responsive Images
  // This takes a background image and resizes it based on window size
  // * USE background-image: NOT background: *
  $('div.image-responsive').each(function() {
    var $resDiv = $('div.image-responsive');
    var resUrl = $resDiv.css("background-image").replace(/"/g,"").replace(/url\(|\)$/ig, "");
    if ($(this).hasClass('focus-center')) {
      $resDiv.anystretch(resUrl);
    }
    if ($(this).hasClass('focus-left')) {
      $resDiv.anystretch(resUrl, {positionX: 'left'});
    }
    if ($(this).hasClass('focus-right')) {
      $resDiv.anystretch(resUrl, {positionX: 'right'});
    }
  });
  // This takes an inline image and resizes it based on window size
  $('img.image-responsive').each(function() {
    var $resImg = $('img.image-responsive');
    var resSrc = $resImg.hide().attr('src');
    if ($(this).hasClass('focus-center')) {
      $resImg.parent().anystretch(resSrc);
    }
    if ($(this).hasClass('focus-left')) {
      $resImg.parent().anystretch(resSrc, {positionX: 'left'});
    }
    if ($(this).hasClass('focus-right')) {
      $resImg.parent().anystretch(resSrc, {positionX: 'right'});
    }
  });

});
