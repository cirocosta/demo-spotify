// Sliders

var slider = document.getElementById('song-progress');

noUiSlider.create(slider, {
	start: [ 20 ],
	range: {
		'min': [ 0 ],
		'max': [ 100 ]
	}
});

var slider = document.getElementById('song-volume');

noUiSlider.create(slider, {
	start: [ 90 ],
	range: {
		'min': [ 0 ],
		'max': [ 100 ]
	}
});

// Tooltips

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Viewport Heights

$(window).on("resize load", function(){
  var totalHeight = $(window).height();

  var headerHeight = $('.header').outerHeight();
  var footerHeight = $('.current-track').outerHeight();
  var playlistHeight = $('.playlist').outerHeight();
  var nowPlaying = $('.playing').outerHeight();

  var navHeight = totalHeight - (headerHeight + footerHeight + playlistHeight + nowPlaying);
  var artistHeight = totalHeight - (headerHeight + footerHeight);

  console.log(totalHeight);

  $(".navigation").css("height" , navHeight);
  $(".artist").css("height" , artistHeight);
  $(".social").css("height" , artistHeight);
});

// Collapse Toggles

$(".navigation__list__header").on( "click" , function() {
  $(this).toggleClass( "active" );
});


// Media Queries

$(window).on("resize load", function(){
	if ($(window).width() <= 768) {
    $(".collapse").removeClass("in");
    $(".navigation").css("height" , "auto");
    $(".artist").css("height" , "auto");
	}
});

$(window).on("resize load", function(){
	if ($(window).width() > 768){
    $(".collapse").addClass("in");
	}
});

// Tracks

var tracks = [
  {
    artist: "Awolnation",
    song: "Sail",
    url: "musics/sail.mp3"
  },
  {
    artist: "Bastille",
    song: "Pompeii",
    url: "musics/pompeii.mp3"
  },
  {
    artist: "Deadmau5",
    song: "Ghosts n' Stuff",
    url: "musics/ghosts_n_stuff.mp3"
  },
  {
    artist: "Foster The People",
    song: "Pumped Up Kicks",
    url: "musics/pumped_up_kicks.mp3"
  },
  {
    artist: "Ghost Town",
    song: "You're So Creepy",
    url: "musics/youre_so_creepy.mp3"
  },
  {
    artist: "Klaypex",
    song: "Gamefire",
    url: "musics/gamefire.mp3"
  },
  {
    artist: "The Glitch Mob",
    song: "Seven Nation Army",
    url: "musics/seven_nation_army.mp3"
  }
];

// Audio

var isPlaying = false;
var trackIndex = 0;

var audio = document.querySelector('audio');

audio.src = tracks[trackIndex].url;

// Play / Pause

var playBtn = document.querySelector('.play');

playBtn.addEventListener('click', function() {
  if (isPlaying) {
    pause();
  } else {
    play();
  }
});

function pause() {
  audio.pause();
  isPlaying = false;

  playBtn.classList.add('ion-ios-play');
  playBtn.classList.remove('ion-ios-pause');
}

function play() {
  audio.play();
  isPlaying = true;

  playBtn.classList.add('ion-ios-pause');
  playBtn.classList.remove('ion-ios-play');
}

// Skip Tracks

var backward = document.querySelector('.backward');
var forward = document.querySelector('.forward');

backward.addEventListener('click', function() {
  if (trackIndex === 0) {
    trackIndex = tracks.length;
  }

  trackIndex--;

  audio.pause();
  audio.src = tracks[trackIndex].url;

  play();
});

forward.addEventListener('click', function() {
  if (trackIndex === tracks.length -1) {
    trackIndex = 0;
  }

  trackIndex++;

  audio.pause();
  audio.src = tracks[trackIndex].url;

  play();
});