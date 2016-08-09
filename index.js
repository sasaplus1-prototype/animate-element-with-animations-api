(function(){

  'use strict';

  var box = document.getElementById('js-box');

  box.animate([
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(360deg)' }
  ], {
    duration: 3000,
    iterations: Infinity
  });

  var circle = document.getElementById('js-circle');

  var play = document.getElementById('js-play'),
      pause = document.getElementById('js-pause'),
      finish = document.getElementById('js-finish'),
      reverse = document.getElementById('js-reverse'),
      cancel = document.getElementById('js-cancel');

  var animation = circle.animate([
    { transform: 'translateX(0px)' },
    { transform: 'translateX(200px)' }
  ], 3000);

  play.addEventListener('click', function() {
    animation.play();
  }, false);
  pause.addEventListener('click', function() {
    animation.pause();
  }, false);
  finish.addEventListener('click', function() {
    animation.finish();
  }, false);
  reverse.addEventListener('click', function() {
    animation.reverse();
  }, false);
  cancel.addEventListener('click', function() {
    animation.cancel();
  }, false);

}());
