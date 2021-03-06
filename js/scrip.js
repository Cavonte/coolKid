
$(document).ready(function() {
    $(window).stellar();
    
});

$(document).ready(
  function() { 
    $("html").niceScroll({
        cursorcolor:"rgba(30,30,30,.5)",
        zindex:999,
        scrollspeed:100,
        mousescrollstep:25,
        cursorborder:"0px solid #fff",
    });
  }
);

$(document).ready(function(){
  $("#navGallery").hover(function(){
    $(this).css("font-weight","bold");
    $(this).css("font-size","22px");
    }, function(){
    $(this).css("font-weight","normal");
    $(this).css("font-size","17px");  
  });
  $("#navProjects").hover(function(){
    $(this).css("font-weight","bold");
    $(this).css("font-size","22px");
    }, function(){
    $(this).css("font-weight","normal");
    $(this).css("font-size","17px");    
  });
  $("#navExperience").hover(function(){
    $(this).css("font-weight","bold");
    $(this).css("font-size","22px");
    }, function(){
    $(this).css("font-weight","normal");
    $(this).css("font-size","17px");  
  });
  $("#navSkills").hover(function(){
    $(this).css("font-weight","bold");
    $(this).css("font-size","22px");
    }, function(){
    $(this).css("font-weight","normal");
    $(this).css("font-size","17px");  
  });
  $("#navHome").hover(function(){
    $(this).css("font-weight","bold");
    $(this).css("font-size","22px");
    }, function(){
    $(this).css("font-weight","normal");
    $(this).css("font-size","17px");  
  });
});
 

$(document).ready(
    function() {
    $("button").click(function() {
        $('html,body').animate({
            scrollTop: $(".second").offset().top},
            'slow');
    });
    }
);

//Credit https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click
var smoothScroll = function(elementId) {
  var MIN_PIXELS_PER_STEP = 1;
  var MAX_SCROLL_STEPS = 40;
  var target = document.getElementById(elementId);
  var scrollContainer = target;
  do {
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop === 0);

  var targetY = 0;
  do {
    if (target === scrollContainer) break;
    targetY += target.offsetTop;
  } while (target = target.offsetParent);

  var pixelsPerStep = Math.max(MIN_PIXELS_PER_STEP,
    Math.abs(targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS);

  var isUp = targetY < scrollContainer.scrollTop;

  var stepFunc = function() {
    if (isUp) {
      scrollContainer.scrollTop = Math.max(targetY, scrollContainer.scrollTop - pixelsPerStep);
      if (scrollContainer.scrollTop <= targetY) {
        return;
      }
    } else {
        scrollContainer.scrollTop = Math.min(targetY, scrollContainer.scrollTop + pixelsPerStep);

      if (scrollContainer.scrollTop >= targetY) {
        return;
      }
    }

    window.requestAnimationFrame(stepFunc);
  };

  window.requestAnimationFrame(stepFunc);
};



