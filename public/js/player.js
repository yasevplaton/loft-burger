let player;
const initVolume = $('.player__volume-runner')[0].value;
const btnStart = $(".player__start-icon");
const btnPause = $(".player__pause-icon");

function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    height: "405",
    videoId: "zmg_jOwa9Fc",
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  const duration = player.getDuration();
  player.setVolume(initVolume);
  let interval;

  $(".player").removeClass("hidden");

  clearInterval(interval);

  interval = setInterval(() => {
    const completed = player.getCurrentTime();
    const percents = (completed / duration) * 100;

    changePlaybackRange(percents);

  }, 1000);
}

function onPlayerStateChange(event) {

  switch (event.data) {
    case 1:
      $(".player__wrapper").addClass("active");
      btnStart.css('display', 'none');
      btnPause.css('display', 'block');
      break;
    case 2:
      // $(".player__wrapper").removeClass("active");
      btnPause.css('display', 'none');
      btnStart.css('display', 'block');
      break;
  }
}

$(".player__start").on("click", e => {
  const playerStatus = player.getPlayerState(); // 0 - ended, 1 - played, 2 - paused ...

  if (playerStatus !== 1) {
    player.playVideo();
  } else {
    player.pauseVideo();
  }
});


$(".player__playback").on("change", e => {
  const clickedPercents = e.target.value;
  const newPlayerTime = (player.getDuration() / 100) * clickedPercents;

  player.seekTo(newPlayerTime);
});

$('.player__volume-runner').on('change', e => {
  const percents = e.target.value;

  player.setVolume(percents);
});

$(".player__splash").on("click", e => {
  player.playVideo();
});

function changePlaybackRange(percents) {
  $(".player__playback")[0].value = percents;
}

$('.player__volume-btn').on('click', e => {
  muteUnmute($('.player__volume-muted'));
});

function muteUnmute(volumeBtnAfter) {
  if (player.isMuted()) {
    player.unMute();
    volumeBtnAfter.css('opacity', '0');
  } else {
    player.mute();
    volumeBtnAfter.css('opacity', '1');
  }
}


