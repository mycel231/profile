// getting the class of the container and id of the musix
const container = document.querySelector('.container');
const music = document.getElementById('music');


// this function when the container is clicked it will play the music
container.addEventListener('mouseenter', function() {
  music.play();
});


// this function makes the music stops when the container is not hovered anymore
container.addEventListener('mouseleave', function() {
  music.pause();
});

// nigagagagagagagagaggaga