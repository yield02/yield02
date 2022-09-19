setTimeout(function () {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const playBtn = $("#control-play");
  const showAudio = $("#showAudio");
  const repeatBtn = $("#control-repeat");
  const currentTime = $("#currentTime");
  const endTime = $("#endTime");
  const procesBar = $('#processbar');
  const rightBtn = $('#control-right')
  const leftBtn = $('#control-left')
  var timeOutActive = true;

  const playTimeOut = function (deplay) {
    return setTimeout(function () {
      showAudio.pause();
    }, deplay);
  };
  const pauseTimeOut = function (deplay) {
    return setTimeout(function () {
      showAudio.play();
    }, deplay);
  };

  const handleOnChangeAudio = function (e) {
    const audio = e.target.files[0];

    $("#title").innerHTML = audio.name;

    var reader = new FileReader();
    reader.readAsDataURL(audio);
    reader.onloadend = function () {
      showAudio.src = this.result;
    };
    
    setTimeout(() => {
        endTime.innerHTML = timeFormat(showAudio.duration);
    }, 500);

  };


  const handlePlayBtn = function () {
    if (showAudio.paused) {
      handlePlay();
      showAudio.play();
      timeOutActive = true;
    } else {
      handlePause();
      showAudio.pause();
      timeOutActive = false;
      clearTimeout(pauseTimeOut);
      clearTimeout(playTimeOut);
    }
  };

  const handleRepeatBtn = function () {
    repeatBtn.classList.toggle("active");
    if(!showAudio.paused) {
        showAudio.pause();
        showAudio.play();
    }
  };

  const handleRepeat = function (deplay = 5000) {
    if (repeatBtn.classList.contains("active")) {
      if (showAudio.paused) {
        pauseTimeOut(deplay);
      } else {
        playTimeOut(deplay);
      }
    } else {
      if (pauseTimeOut) {
        clearTimeout(pauseTimeOut);
      }
      if (playTimeOut) {
        clearTimeout(playTimeOut);
      }
    }
  };

  const timeFormat = (seconds) => {
    const date = new Date(null)
    date.setSeconds(seconds)
    return date.toISOString().slice(14, 19)
}

  const handleTimeUpdate = function() {

    const aCurrentTime = showAudio.currentTime;
    currentTime.innerHTML = timeFormat(aCurrentTime);
    procesBar.value = aCurrentTime*100/showAudio.duration;
}

  const audioOnPause = function () {
    let timeStop = $("#timeStop").value * 1000;
    handlePause();
    timeOutActive && handleRepeat(timeStop);
    console.log('Pause');
  };

  const audioOnPlay = function () {
    let timeWait = $("#timewait").value * 1000;
    
    console.log('Play');
    
    
    handlePlay();
    timeOutActive && handleRepeat(timeWait);

  };

  const handlePause = function () {
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    
  };

  const handlePlay = function () {
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  };

  const handleProcessInput = function () {
    showAudio.currentTime = procesBar.value * showAudio.duration / 100;
  }

  const handleForward = () => {
    showAudio.currentTime = showAudio.currentTime + 10;
  }

  const handleBack = () => {
    showAudio.currentTime = showAudio.currentTime - 10;
}

  //Onplay
  showAudio.onplay = audioOnPlay;

  //   onpause
  showAudio.onpause = audioOnPause;

  showAudio.ontimeupdate = handleTimeUpdate;

  procesBar.oninput = handleProcessInput;

  //Hande 
  playBtn.onclick = handlePlayBtn;

  rightBtn.onclick = handleForward;

  leftBtn.onclick = handleBack;


  repeatBtn.onclick = handleRepeatBtn;

  $("#audio").onchange = handleOnChangeAudio;

}, 2000);
