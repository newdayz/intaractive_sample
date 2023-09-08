'use strict';

const videoElements = document.querySelectorAll("#videos video");

const VideoAElement = videoElements[0];
const VideoBElement = videoElements[1];
const VideoCElement = videoElements[2];
const VideoDElement = videoElements[3];
const VideoEElement = videoElements[4];
const VideoFElement = videoElements[5];
const VideoGElement = videoElements[6];
const VideoHElement = videoElements[7];
const VideoIElement = videoElements[8];
const VideoJElement = videoElements[9];
const VideoKElement = videoElements[10];
const VideoLElement = videoElements[11];
const VideoMElement = videoElements[12];
const VideoNElement = videoElements[13];
const VideoOElement = videoElements[14];
const VideoPElement = videoElements[15];

videoElements.forEach(videoElement => {
  const src = videoElement.getAttribute('src');
  const type = videoElement.getAttribute('type');
  console.log("Source:", src);
  console.log("Type:", type);
  console.log("Media is ready for playback!");
});

const ClassA = document.querySelector(".vi_A");
const ClassB = document.querySelector(".vi_B");
const ClassC = document.querySelector(".vi_C");
const ClassD = document.querySelector(".vi_D");
const ClassE = document.querySelector(".vi_E");
const ClassF = document.querySelector(".vi_F");
const ClassG = document.querySelector(".vi_G");
const ClassH = document.querySelector(".vi_H");
const ClassI = document.querySelector(".vi_I");
const ClassJ = document.querySelector(".vi_J");
const ClassK = document.querySelector(".vi_K");
const ClassL = document.querySelector(".vi_L");
const ClassM = document.querySelector(".vi_M");
const ClassN = document.querySelector(".vi_N");
const ClassO = document.querySelector(".vi_O");
const ClassP = document.querySelector(".vi_P");

const btn_pause = document.getElementById('pause');
const btn_play = document.getElementById('play');

const Container = document.querySelector(".container");
const ProgressBar = document.getElementById("progress_bar");

const ProgressP_A = document.getElementById("progress_p_a");
const play_position = document.getElementById('play_position');
const progress_bar = document.getElementById('progress');
const end_position = document.getElementById('end_position');

const btn_mute = document.getElementById('mute');
const btn_unmute = document.getElementById('unmute');

const buttonB = document.getElementById('button_b');
const buttonC = document.getElementById('button_c');
const buttonD = document.getElementById('button_d');
const buttonE = document.getElementById('button_e');

const buttonF = document.getElementById('button_f');
const buttonG = document.getElementById('button_g');
const back_B_A = document.getElementById('back_b_a');

const buttonH = document.getElementById('button_h');
const buttonI = document.getElementById('button_i');
const back_C_A = document.getElementById('button_c_a');

const buttonJ = document.getElementById('button_j');
const buttonK = document.getElementById('button_k');
const buttonL = document.getElementById('button_l');
const back_D_A = document.getElementById('button_d_a');

const buttonE_Info = document.getElementById('button_e_info');
const back_E_A = document.getElementById('button_e_a');

const buttonF_Info = document.getElementById('button_f_info');
const opening_F_A = document.getElementById('button_f_a');
const back_F_B = document.getElementById('button_f_b');

const buttonG_Info = document.getElementById('button_g_info');
const opening_G_A = document.getElementById('button_g_a');
const back_G_B = document.getElementById('button_g_b');

const buttonM = document.getElementById('button_h_m');
const buttonN = document.getElementById('button_h_n');
const back_H_C = document.getElementById('button_h_c');

const buttonO = document.getElementById('button_i_o');
const buttonP = document.getElementById('button_i_p');
const back_I_C = document.getElementById('button_i_c');

const buttonJ_Info = document.getElementById('button_j_info');
const opening_J_A = document.getElementById('button_j_a');
const back_J_D = document.getElementById('button_j_d');

const buttonK_Info = document.getElementById('button_k_info');
const opening_K_A = document.getElementById('button_k_a');
const back_K_D = document.getElementById('button_k_d');

const buttonL_Info = document.getElementById('button_l_info');
const opening_L_A = document.getElementById('button_l_a');
const back_L_D = document.getElementById('button_l_d');

const buttonM_Info = document.getElementById('button_m_info');
const opening_M_A = document.getElementById('button_m_a');
const back_M_H = document.getElementById('button_m_h');

const buttonN_Info = document.getElementById('button_n_info');
const opening_N_A = document.getElementById('button_n_a');
const back_N_H = document.getElementById('button_n_h');

const buttonO_Info = document.getElementById('button_o_info');
const opening_O_A = document.getElementById('button_o_a');
const back_O_I = document.getElementById('button_o_i');

const buttonP_Info = document.getElementById('button_p_info');
const opening_P_A = document.getElementById('button_p_a');
const back_P_I = document.getElementById('button_p_i');


VideoAElement.muted = true;
VideoAElement.play();


const convertTime = (time_position) => {
  time_position = Math.floor(time_position);
  let res = null;
  if (60 <= time_position) {
    res = Math.floor(time_position / 60);
    res += ':' + Math.floor(time_position % 60).toString().padStart(2, '0');
  } else {
    res = '0:' + Math.floor(time_position % 60).toString().padStart(2, '0');
  }
  return res;
};


let isVideoABox = true;

if (isVideoABox) {
  VideoAElement.addEventListener('loadeddata', () => {
    const maxDuration = VideoAElement.duration;

    const formattedDuration = convertTime(maxDuration);
    end_position.textContent = `${formattedDuration}`;

    let playtimer = null;

    const startTimer = () => {
      playtimer = setInterval(() => {
        play_position.textContent = convertTime(VideoAElement.currentTime);
        progress_bar.value = Math.floor((VideoAElement.currentTime / VideoAElement.duration) * VideoAElement.duration);
      }, 100);
      console.log('startTimerを読み取りました');
    };

    btn_pause.addEventListener('click', () => {
      VideoAElement.pause();
      stopTimer();
      btn_pause.style.display = 'none';
      btn_play.style.display = 'block';
      console.log('A一時停止をクリックしました');
    });


    btn_play.addEventListener('click', () => {
      startTimer();
      VideoAElement.play();
      btn_play.style.display = 'none';
      btn_pause.style.display = 'block';
      console.log('A再生アイコンをクリックしました');
    });

    btn_mute.addEventListener('click', () => {
      if (VideoAElement.muted) {
        VideoAElement.muted = false;
        btn_mute.style.display = 'none';
        btn_unmute.style.display = 'block';

        console.log('Aミュートを解除しました');
      }
    });

    btn_unmute.addEventListener('click', () => {
      if (!VideoAElement.muted) {
        VideoAElement.muted = true;
        btn_unmute.style.display = 'none';
        btn_mute.style.display = 'block';
        console.log('Aミュートをクリックしました');
      }
    });

    const stopTimer = () => {
      clearInterval(playtimer);
      console.log('stopTimer一時停止');
    };

    progress_bar.addEventListener('change', () => {
      startTimer();
      console.log('Aプログレスバーの操作が完了しました');
    });

    const calculateSeekTime = (progressValue) => {
      return (progressValue / 100) * VideoAElement.duration;
    };

    progress_bar.addEventListener('input', () => {
      stopTimer();
      const seekTime = calculateSeekTime(progress_bar.value);
      if (!isNaN(seekTime) && isFinite(seekTime) && seekTime >= 0 && seekTime <= VideoAElement.duration) {
        VideoAElement.currentTime = seekTime;
        console.log('Aプログレスバーを操作しました');
      }
    });




    VideoAElement.addEventListener('timeupdate', () => {
      const currentTimeA = VideoAElement.currentTime;

      play_position.textContent = convertTime(currentTimeA);
      end_position.textContent = convertTime(VideoAElement.duration);


      const isVideoVisible = true;

      if (currentTimeA >= 88) {
        buttonB.style.display = 'block';
        buttonB.addEventListener("click", () => {
          if (isVideoVisible) {
            ClassA.style.zIndex = "29";
            VideoAElement.currentTime = 0;
            VideoAElement.pause();
            ProgressBar.style.zIndex = "-29";

            VideoBElement.play();
            ClassB.style.zIndex = "290";
            ProgressBarB.style.zIndex = "1";
            ProgressBarB.style.display = "block";

            console.log('button1をクリックしました');
          }
        });
      } else {
        buttonB.style.display = 'none';
      }

      if (ClassA.style.zIndex === "29") {
        if (isVideoABox) {
          isVideoABox = false;

          console.log("VideoABox非表示");
        }
      }

      if (currentTimeA >= 93) {
        buttonC.style.display = 'block';
        buttonC.addEventListener("click", () => {
          if (isVideoVisible) {
            ClassA.style.zIndex = "29";
            VideoAElement.currentTime = 0;
            VideoAElement.pause();
            ProgressBar.style.zIndex = "-29";

            VideoCElement.play();
            ClassC.style.zIndex = "290";
            ProgressBarC.style.zIndex = "1";
            ProgressBarC.style.display = "block";

            console.log('button2をクリックしました');
          }
        });
      } else {
        buttonC.style.display = 'none';
      }

      if (ClassA.style.zIndex === "29") {
        if (isVideoABox) {
          isVideoABox = false;

          console.log("VideoABox非表示");
        }
      }

      if (currentTimeA >= 99) {
        buttonD.style.display = 'block';
        buttonD.addEventListener("click", () => {
          if (isVideoVisible) {
            ClassA.style.zIndex = "29";
            VideoAElement.currentTime = 0;
            VideoAElement.pause();
            ProgressBar.style.zIndex = "-29";

            VideoDElement.play();
            ClassD.style.zIndex = "290";
            ProgressBarD.style.zIndex = "1";
            ProgressBarD.style.display = "block";

            console.log('button3をクリックしました');
          }
        });
      } else {
        buttonD.style.display = 'none';

        if (ClassA.style.zIndex === "29") {
          if (isVideoABox) {
            isVideoABox = false;

            console.log("VideoABox非表示");
          }
        }


      } if (currentTimeA >= 103) {
        buttonE.style.display = 'block';
        buttonE.addEventListener("click", () => {
          if (isVideoVisible) {
            ClassA.style.zIndex = "29";
            VideoAElement.currentTime = 0;
            VideoAElement.pause();
            ProgressBar.style.zIndex = "-29";


            VideoEElement.play();
            ClassE.style.zIndex = "290";
            ProgressBarE.style.zIndex = "1";
            ProgressBarE.style.display = "block";

            console.log('button4をクリックしました');
          }
        });
      } else {
        buttonE.style.display = 'none';
      }

      if (ClassA.style.zIndex === "29") {
        if (isVideoABox) {
          isVideoABox = false;

          console.log("VideoABox非表示");
        }
      }

      if (currentTimeA >= 132) {
        VideoAElement.pause();
      }

      console.log('TimeUpDateA');
    });

    console.log('loadeddataA');
  });
}

// クローンB
let ProgressBarB = ProgressBar.cloneNode(true);
ProgressBarB.id = "progress_bar_b";
Container.appendChild(ProgressBarB);
ProgressBarB.style.zIndex = "-1";
ProgressBarB.style.display = "none";

const BackGroundBarB = ProgressBarB.querySelector("#background_bar");
BackGroundBarB.id = "background_bar_b";

const ControlsButtonB = ProgressBarB.querySelector("#controls_button");
ControlsButtonB.id = "controls_button_b";

let PauseBtnB = ControlsButtonB.querySelector("#pause");
PauseBtnB.id = "pause_b";
let PlayBtnB = ControlsButtonB.querySelector("#play");
PlayBtnB.id = "play_b";
ControlsButtonB.appendChild(PauseBtnB);
ControlsButtonB.appendChild(PlayBtnB);

const ProgressP_B = ProgressBarB.querySelector("#progress_p_a");
ProgressP_B.id = "progress_p_b";

let PlayTimeB = ProgressP_B.querySelector("#play_position");
let ProgressB = ProgressP_B.querySelector("#progress");
let EndTimeB = ProgressP_B.querySelector("#end_position");
PlayTimeB.id = "playtime_b";
ProgressB.id = "progress_b";
EndTimeB.id = "endtime_b";

const ContorolsSoundB = ProgressBarB.querySelector("#controls_sound");
ContorolsSoundB.id = "controls_sound_b";

let MuteBtnB = ContorolsSoundB.querySelector("#mute");
let UnmuteBtnB = ContorolsSoundB.querySelector("#unmute");
MuteBtnB.id = "mute_b";
UnmuteBtnB.id = "unmute_b";


let playtimerB = null;

const startTimerB = () => {
  playtimerB = setInterval(() => {
    PlayTimeB.textContent = convertTime(VideoBElement.currentTime);
    ProgressB.value = Math.floor((VideoBElement.currentTime / VideoBElement.duration) * VideoBElement.duration);
  }, 100);
  console.log('startTimerBが呼び出されました');
};

let isVideoBBox = true;

if (isVideoBBox) {
  VideoBElement.addEventListener('loadeddata', () => {
    const maxDurationB = VideoBElement.duration;

    const formattedDurationB = convertTime(maxDurationB);
    EndTimeB.textContent = `${formattedDurationB}`;

    if (ClassA.style.zIndex = "29") {
      startTimerB();
    }

    if (PauseBtnB) {
      PauseBtnB.addEventListener('click', () => {
        VideoBElement.pause();
        stopTimerB();
        PauseBtnB.style.display = 'none';
        PlayBtnB.style.display = 'block';
        console.log('B一時停止をクリックしました');
      });
    }

    if (PlayBtnB) {
      PlayBtnB.addEventListener('click', () => {
        startTimerB();
        VideoBElement.play();
        PlayBtnB.style.display = 'none';
        PauseBtnB.style.display = 'block';
        console.log('再生Bアイコンをクリックしました');
      });

    }

    MuteBtnB.addEventListener('click', () => {
      if (VideoBElement.muted) {
        VideoBElement.muted = false;
        MuteBtnB.style.display = 'none';
        UnmuteBtnB.style.display = 'block';
        console.log('Bミュートを解除しました');
      }
    });

    UnmuteBtnB.addEventListener('click', () => {
      if (!VideoBElement.muted) {
        VideoBElement.muted = true;
        UnmuteBtnB.style.display = 'none';
        MuteBtnB.style.display = 'block';
        console.log('Bミュートをクリックしました');
      }
    });

    const stopTimerB = () => {
      VideoBElement.addEventListener("pause", () => {
        clearInterval(playtimerB);
        console.log('stopTimerB一時停止');
      });
    };

    ProgressB.addEventListener('input', () => {
      stopTimerB();
      const seekTimeB = calculateSeekTimeB(ProgressB.value);
      if (!isNaN(seekTimeB) && isFinite(seekTimeB) && seekTimeB >= 0 && seekTimeB <= VideoBElement.duration) {
        VideoBElement.currentTime = seekTimeB;
        console.log('Bプログレスバーを操作しました');
      }
    });

    ProgressB.addEventListener('change', () => {
      startTimerB();
      console.log('Bプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeB = (progressValue) => {
      return (progressValue / 100) * VideoBElement.duration;
    };

    const isVideoVisibleB = true;

    VideoBElement.addEventListener('timeupdate', () => {
      const currentTimeB = VideoBElement.currentTime;

      PlayTimeB.textContent = convertTime(VideoBElement.currentTime);
      EndTimeB.textContent = convertTime(VideoBElement.duration);


      if (currentTimeB >= 150) {
        buttonF.style.display = 'block';
        buttonF.addEventListener("click", () => {
          if (isVideoVisibleB) {
            ClassB.style.zIndex = "28";
            VideoBElement.currentTime = 0;
            VideoBElement.pause();
            ProgressBarB.style.zIndex = "-28";


            VideoFElement.play();
            ClassF.style.zIndex = "290";
            ProgressBarF.style.zIndex = "1";
            ProgressBarF.style.display = "block";

            console.log('button01Bをクリックしました');
          }
        });
      } else {
        buttonF.style.display = 'none';
      }

      if (currentTimeB >= 154) {
        buttonG.style.display = 'block';
        buttonG.addEventListener("click", () => {
          if (isVideoVisibleB) {
            ClassB.style.zIndex = "28";
            VideoBElement.currentTime = 0;
            VideoBElement.pause();
            ProgressBarB.style.zIndex = "-28";

            VideoGElement.play();
            ClassG.style.zIndex = "290";
            ProgressBarG.style.zIndex = "1";
            ProgressBarG.style.display = "block";

            console.log('button02をクリックしました');
          }
        });
      } else {
        buttonG.style.display = 'none';
      }

      if (currentTimeB >= 164) {
        back_B_A.style.display = 'block';
        back_B_A.addEventListener("click", () => {
          if (isVideoVisibleB) {
            ClassB.style.zIndex = "28";
            VideoBElement.currentTime = 0;
            VideoBElement.pause();
            ProgressBarB.style.zIndex = "-28";

            VideoAElement.muted = false;
            VideoAElement.play();
            btn_unmute.style.display = "block";
            btn_mute.style.display = "none";
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "1";
            ProgressBar.style.display = "block";

            console.log('button03をクリックしました');
          }
        });
      } else {
        back_B_A.style.display = 'none';
      }
      if (currentTimeB >= 182) {
        VideoBElement.pause();
      }

      console.log('TimeUpDateBが発生しました');
    });

    console.log('LoadeddataB');
  });
}

//  Video C Element

let ProgressBarC = ProgressBar.cloneNode(true);
ProgressBarC.id = "progress_bar_c";
Container.appendChild(ProgressBarC);
ProgressBarC.style.zIndex = "-2";
ProgressBarC.style.display = "none";

const BackGroundBarC = ProgressBarC.querySelector("#background_bar");
BackGroundBarC.id = "background_bar_c";

const ControlsButtonC = ProgressBarC.querySelector("#controls_button");
ControlsButtonC.id = "controls_button_c";

let PauseBtnC = ControlsButtonC.querySelector("#pause");
PauseBtnC.id = "pause_c";
let PlayBtnC = ControlsButtonC.querySelector("#play");
PlayBtnC.id = "play_c";
ControlsButtonC.appendChild(PauseBtnC);
ControlsButtonC.appendChild(PlayBtnC);

const ProgressP_C = ProgressBarC.querySelector("#progress_p_a");
ProgressP_C.id = "progress_p_c";

let PlayTimeC = ProgressP_C.querySelector("#play_position");
let ProgressC = ProgressP_C.querySelector("#progress");
let EndTimeC = ProgressP_C.querySelector("#end_position");
PlayTimeC.id = "playtime_c";
ProgressC.id = "progress_c";
EndTimeC.id = "endtime_c";

const ContorolsSoundC = ProgressBarC.querySelector("#controls_sound");
ContorolsSoundC.id = "controls_sound_c";

let MuteBtnC = ContorolsSoundC.querySelector("#mute");
let UnmuteBtnC = ContorolsSoundC.querySelector("#unmute");
MuteBtnC.id = "mute_c";
UnmuteBtnC.id = "unmute_c";


let playtimerC = null;


const startTimerC = () => {
  playtimerC = setInterval(() => {
    PlayTimeC.textContent = convertTime(VideoCElement.currentTime);
    ProgressC.value = Math.floor((VideoCElement.currentTime / VideoCElement.duration) * VideoCElement.duration);
  }, 100);
  console.log('startTimerC');
};


VideoCElement.addEventListener('loadeddata', () => {
  const maxDurationC = VideoCElement.duration;
  const formattedDurationC = convertTime(maxDurationC);
  EndTimeC.textContent = `${formattedDurationC}`;

  if (ClassA.style.zIndex = "29") {
    startTimerC();
  }

  PauseBtnC.addEventListener('click', () => {
    VideoCElement.pause();
    stopTimerC();
    PauseBtnC.style.display = 'none';
    PlayBtnC.style.display = 'block';
    console.log('C一時停止をクリックしました');
  });

  PlayBtnC.addEventListener('click', () => {
    startTimerC();
    VideoCElement.play();
    PlayBtnC.style.display = 'none';
    PauseBtnC.style.display = 'block';
    console.log('C再生をクリック');
  });

  MuteBtnC.addEventListener('click', () => {
    if (VideoCElement.muted) {
      VideoCElement.muted = false;
      MuteBtnC.style.display = 'none';
      UnmuteBtnC.style.display = 'block';
      console.log('Cミュートを解除しました');
    }
  });

  UnmuteBtnC.addEventListener('click', () => {
    if (!VideoCElement.muted) {
      VideoCElement.muted = true;
      UnmuteBtnC.style.display = 'none';
      MuteBtnC.style.display = 'block';
      console.log('Cミュートをクリックしました');
    }
  });

  const stopTimerC = () => {
    VideoCElement.addEventListener("pause", () => {
      clearInterval(playtimerC);
      console.log('stopTimerC一時停止');
    });
  };

  ProgressC.addEventListener('input', () => {
    stopTimerC();
    const seekTimeC = calculateSeekTimeC(ProgressC.value);
    if (!isNaN(seekTimeC) && isFinite(seekTimeC) && seekTimeC >= 0 && seekTimeC <= VideoCElement.duration) {
      VideoCElement.currentTime = seekTimeC;
      console.log('Cプログレスバーを操作しました');
    }
  });

  ProgressC.addEventListener('change', () => {
    startTimerC();
    console.log('Cプログレスバーの操作が完了しました');
  });

  const calculateSeekTimeC = (progressValue) => {
    return (progressValue / 100) * VideoCElement.duration;
  };

  const isVideoVisibleC = true;

  VideoCElement.addEventListener('timeupdate', () => {
    const currentTimeC = VideoCElement.currentTime;

    PlayTimeC.textContent = convertTime(VideoCElement.currentTime);
    EndTimeC.textContent = convertTime(VideoCElement.duration);


    if (currentTimeC >= 72) {
      buttonH.style.display = 'block';
      buttonH.addEventListener("click", () => {
        if (isVideoVisibleC) {
          ClassC.style.zIndex = "27";
          VideoCElement.currentTime = 0;
          VideoCElement.pause();
          ProgressBarC.style.zIndex = "-27";

          VideoHElement.play();
          ClassH.style.zIndex = "290";
          ProgressBarH.style.zIndex = "1";
          ProgressBarH.style.display = "block";

          console.log('button01Cをクリックしました');
        }
      });
    } else {
      buttonH.style.display = 'none';
    }

    if (currentTimeC >= 78) {
      buttonI.style.display = 'block';
      buttonI.addEventListener("click", () => {
        if (isVideoVisibleC) {
          ClassC.style.zIndex = "27";
          VideoCElement.currentTime = 0;
          VideoCElement.pause();
          ProgressBarC.style.zIndex = "-27";

          VideoIElement.play();
          ClassI.style.zIndex = "290";
          ProgressBarI.style.zIndex = "1";
          ProgressBarI.style.display = "block";

          console.log('button02Cをクリックしました');
        }
      });
    } else {
      buttonI.style.display = 'none';
    }

    if (currentTimeC >= 89) {
      back_C_A.style.display = 'block';
      back_C_A.addEventListener("click", () => {
        if (isVideoVisibleC) {
          ClassC.style.zIndex = "27";
          VideoCElement.currentTime = 0;
          VideoCElement.pause();
          ProgressBarC.style.zIndex = "-27";

          btn_mute.style.display = "none";
          btn_unmute.style.display = "block";
          VideoAElement.muted = false;
          VideoAElement.play();
          ClassA.style.zIndex = "290";
          ProgressBar.style.zIndex = "1";
          ProgressBar.style.display = "block";

          console.log('button03Cをクリックしました');
        }
      });
    } else {
      back_C_A.style.display = 'none';
    }

    if (currentTimeC >= 106) {
      VideoCElement.pause();
    }

    console.log('timeupdateC');
  });

  console.log('loadeddataC');
});


let ProgressBarD = ProgressBar.cloneNode(true);
ProgressBarD.id = "progress_bar_d";
Container.appendChild(ProgressBarD);
ProgressBarD.style.zIndex = "-3";
ProgressBarD.style.display = "none";

const BackGroundBarD = ProgressBarD.querySelector("#background_bar");
BackGroundBarD.id = "background_bar_d";

const ControlsButtonD = ProgressBarD.querySelector("#controls_button");
ControlsButtonD.id = "controls_button_d";

let PauseBtnD = ControlsButtonD.querySelector("#pause");
PauseBtnD.id = "pause_d";
let PlayBtnD = ControlsButtonD.querySelector("#play");
PlayBtnD.id = "play_d";
ControlsButtonD.appendChild(PauseBtnD);
ControlsButtonD.appendChild(PlayBtnD);

const ProgressP_D = ProgressBarD.querySelector("#progress_p_a");
ProgressP_D.id = "progress_p_d";

let PlayTimeD = ProgressP_D.querySelector("#play_position");
let ProgressD = ProgressP_D.querySelector("#progress");
let EndTimeD = ProgressP_D.querySelector("#end_position");
PlayTimeD.id = "playtime_d";
ProgressD.id = "progress_d";
EndTimeD.id = "endtime_d";

const ContorolsSoundD = ProgressBarD.querySelector("#controls_sound");
ContorolsSoundD.id = "controls_sound_d";

let MuteBtnD = ContorolsSoundD.querySelector("#mute");
let UnmuteBtnD = ContorolsSoundD.querySelector("#unmute");
MuteBtnD.id = "mute_d";
UnmuteBtnD.id = "unmute_d";

// // Video D Element

let playtimerD = null;

const startTimerD = () => {
  playtimerD = setInterval(() => {
    PlayTimeD.textContent = convertTime(VideoDElement.currentTime);
    ProgressD.value = Math.floor((VideoDElement.currentTime / VideoDElement.duration) * VideoDElement.duration);
  }, 100);
  console.log('startTimerD');
};

VideoDElement.addEventListener('loadeddata', () => {
  const maxDurationD = VideoDElement.duration;
  const formattedDurationD = convertTime(maxDurationD);
  EndTimeD.textContent = `${formattedDurationD}`;

  PauseBtnD.addEventListener('click', () => {
    VideoDElement.pause();
    stopTimerD();
    PauseBtnD.style.display = 'none';
    PlayBtnD.style.display = 'block';
    console.log('D一時停止をクリックしました');
  });

  PlayBtnD.addEventListener('click', () => {
    startTimerD();
    VideoDElement.play();
    PlayBtnD.style.display = 'none';
    PauseBtnD.style.display = 'block';
    console.log('D再生をクリックしました');
  });

  MuteBtnD.addEventListener('click', () => {
    if (VideoDElement.muted) {
      VideoDElement.muted = false;
      MuteBtnD.style.display = 'none';
      UnmuteBtnD.style.display = 'block';
      console.log('Dミュートを解除しました');
    }
  });

  UnmuteBtnD.addEventListener('click', () => {
    if (!VideoDElement.muted) {
      VideoDElement.muted = true;
      UnmuteBtnD.style.display = 'none';
      MuteBtnD.style.display = 'block';
      console.log('Dミュートをクリックしました');
    }
  });

  const stopTimerD = () => {
    VideoDElement.addEventListener("pause", () => {
      clearInterval(playtimerD);
      console.log('stopTimerD');
    });
  };

  ProgressD.addEventListener('input', () => {
    stopTimerD();
    const seekTimeD = calculateSeekTimeD(ProgressD.value);
    if (!isNaN(seekTimeD) && isFinite(seekTimeD) && seekTimeD >= 0 && seekTimeD <= VideoDElement.duration) {
      VideoDElement.currentTime = seekTimeD;
      console.log('Dプログレスバーを操作しました');
    }
  });

  ProgressD.addEventListener('change', () => {
    startTimerD();
    console.log('プログレスバーDの操作が完了しました');
  });

  const calculateSeekTimeD = (progressValue) => {
    return (progressValue / 100) * VideoDElement.duration;
  };

  const isVideoVisibleD = true;

  VideoDElement.addEventListener('timeupdate', () => {
    const currentTimeD = VideoDElement.currentTime;

    PlayBtnD.textContent = convertTime(VideoDElement.currentTime);
    EndTimeD.textContent = convertTime(VideoDElement.duration);

    if (currentTimeD >= 70) {
      buttonJ.style.display = 'block';
      buttonJ.addEventListener("click", () => {
        if (isVideoVisibleD) {
          ClassD.style.zIndex = "26";
          VideoDElement.currentTime = 0;
          VideoDElement.pause();
          ProgressBarD.style.zIndex = "-26";

          VideoJElement.play();
          ClassJ.style.zIndex = "290";
          ProgressBarJ.style.zIndex = "1";
          ProgressBarJ.style.display = "block";

          console.log('button1Dをクリックしました');
        }
      });
    } else {
      buttonJ.style.display = 'none';
    }

    if (currentTimeD >= 75) {
      buttonK.style.display = 'block';
      buttonK.addEventListener("click", () => {
        if (isVideoVisibleD) {
          ClassD.style.zIndex = "26";
          VideoDElement.currentTime = 0;
          VideoDElement.pause();
          ProgressBarD.style.zIndex = "-26";

          VideoKElement.play();
          ClassK.style.zIndex = "290";
          ProgressBarK.style.zIndex = "1";
          ProgressBarK.style.display = "block";

          console.log('button2Dをクリックしました');
        }
      });
    } else {
      buttonK.style.display = 'none';
    }

    if (currentTimeD >= 81) {
      buttonL.style.display = 'block';
      buttonL.addEventListener("click", () => {
        if (isVideoVisibleD) {
          ClassD.style.zIndex = "26";
          VideoDElement.currentTime = 0;
          VideoDElement.pause();
          ProgressBarD.style.zIndex = "-26";

          VideoLElement.play();
          ClassL.style.zIndex = "290";
          ProgressBarL.style.zIndex = "1";
          ProgressBarL.style.display = "block";

          console.log('button3Dをクリックしました');
        }
      });
    } else {
      buttonL.style.display = 'none';
    }

    if (currentTimeD >= 92) {
      back_D_A.style.display = 'block';
      back_D_A.addEventListener("click", () => {
        if (isVideoVisibleD) {
          ClassD.style.zIndex = "26";
          VideoDElement.currentTime = 0;
          VideoDElement.pause();
          ProgressBarD.style.zIndex = "-26";

          btn_mute.style.display = "none";
          btn_unmute.style.display = "block";
          VideoAElement.muted = false;
          VideoAElement.play();
          ClassA.style.zIndex = "290";
          ProgressBar.style.zIndex = "1";
          ProgressBar.style.display = "block";

          console.log('button4Dをクリックしました');
        }
      });
    } else {
      back_D_A.style.display = 'none';
    }

    if (currentTimeD >= 109) {
      VideoDElement.pause();
    }

    console.log('DtimeupdateD');
  });
  console.log('loadeddataDが発生しました');
});


// // Video E Element

let ProgressBarE = ProgressBar.cloneNode(true);
ProgressBarE.id = "progress_bar_e";
Container.appendChild(ProgressBarE);
ProgressBarE.style.zIndex = "-4";
ProgressBarE.style.display = "none";

const BackGroundBarE = ProgressBarE.querySelector("#background_bar");
BackGroundBarE.id = "background_bar_e";

const ControlsButtonE = ProgressBarE.querySelector("#controls_button");
ControlsButtonE.id = "controls_button_e";

let PauseBtnE = ControlsButtonE.querySelector("#pause");
PauseBtnE.id = "pause_b";
let PlayBtnE = ControlsButtonE.querySelector("#play");
PlayBtnE.id = "play_b";
ControlsButtonE.appendChild(PauseBtnE);
ControlsButtonE.appendChild(PlayBtnE);

const ProgressP_E = ProgressBarE.querySelector("#progress_p_a");
ProgressP_E.id = "progress_p_e";

let PlayTimeE = ProgressP_E.querySelector("#play_position");
let ProgressE = ProgressP_E.querySelector("#progress");
let EndTimeE = ProgressP_E.querySelector("#end_position");
PlayTimeE.id = "playtime_e";
ProgressE.id = "progress_e";
EndTimeE.id = "endtime_e";

const ContorolsSoundE = ProgressBarE.querySelector("#controls_sound");
ContorolsSoundE.id = "controls_sound_e";

let MuteBtnE = ContorolsSoundE.querySelector("#mute");
let UnmuteBtnE = ContorolsSoundE.querySelector("#unmute");
MuteBtnE.id = "mute_e";
UnmuteBtnE.id = "unmute_e";

let playtimerE = null;

const startTimerE = () => {
  playtimerE = setInterval(() => {
    PlayTimeE.textContent = convertTime(VideoEElement.currentTime);
    ProgressE.value = Math.floor((VideoEElement.currentTime / VideoEElement.duration) * VideoEElement.duration);
  }, 100);
  console.log('startTimerE');
};

let isVideoBoxE = true;

if (isVideoBoxE) {
  VideoEElement.addEventListener('loadeddata', () => {
    const maxDurationE = VideoEElement.duration;

    const formattedDurationE = convertTime(maxDurationE);
    EndTimeE.textContent = `${formattedDurationE}`;

    if (ClassA.style.zIndex = "29") {
      startTimerE();
    }

    PauseBtnE.addEventListener('click', () => {
      VideoEElement.pause();
      stopTimerE();
      PauseBtnE.style.display = 'none';
      PlayBtnE.style.display = 'block';
      console.log('E一時停止をクリックしました');
    });

    PlayBtnE.addEventListener('click', () => {
      startTimerE();
      VideoEElement.play();
      PlayBtnE.style.display = 'none';
      PauseBtnE.style.display = 'block';
      console.log('再生Eアイコンをクリックしました');
    });


    MuteBtnE.addEventListener('click', () => {
      if (VideoEElement.muted) {
        VideoEElement.muted = false;
        MuteBtnE.style.display = 'none';
        UnmuteBtnE.style.display = 'block';
        console.log('Bミュートを解除しました');
      }
    });

    UnmuteBtnE.addEventListener('click', () => {
      if (!VideoEElement.muted) {
        VideoEElement.muted = true;
        UnmuteBtnE.style.display = 'none';
        MuteBtnE.style.display = 'block';
        console.log('Eミュートをクリックしました');
      }
    });

    const stopTimerE = () => {
      VideoEElement.addEventListener("pause", () => {
        clearInterval(playtimerE);
        console.log('stopTimerE');
      });
    };

    ProgressE.addEventListener('input', () => {
      stopTimerE();
      const seekTimeE = calculateSeekTimeE(ProgressE.value);
      if (!isNaN(seekTimeE) && isFinite(seekTimeE) && seekTimeE >= 0 && seekTimeE <= VideoEElement.duration) {
        VideoEElement.currentTime = seekTimeE;
        console.log('Eプログレスバーを操作しました');
      }
    });

    ProgressE.addEventListener('change', () => {
      startTimerE();
      console.log('Eプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeE = (progressValue) => {
      return (progressValue / 100) * VideoEElement.duration;
    };

    const isVideoVisibleE = true;

    VideoEElement.addEventListener('timeupdate', () => {
      const currentTimeE = VideoEElement.currentTime;

      PlayTimeE.textContent = convertTime(VideoEElement.currentTime);
      EndTimeE.textContent = convertTime(VideoEElement.duration);


      if (currentTimeE >= 256) {
        buttonE_Info.style.display = 'block';
        buttonE_Info.addEventListener("click", () => {
          if (isVideoVisibleE) {

            VideoEElement.pause();
            PauseBtnE.style.display = "none";
            PlayBtnE.style.display = "block";
            console.log('buttonE_Infoをクリックしました');
          }
        });
      } else {
        buttonE_Info.style.display = 'none';
      }

      if (currentTimeE >= 256) {
        back_E_A.style.display = 'block';
        back_E_A.addEventListener("click", () => {
          if (isVideoVisibleE) {
            ClassE.style.zIndex = "25";
            VideoEElement.currentTime = 0;
            VideoEElement.pause();
            ProgressBarE.style.zIndex = "-25";

            VideoAElement.muted = false;
            VideoAElement.play();
            btn_unmute.style.display = "block";
            btn_mute.style.display = "none";
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "1";
            ProgressBar.style.display = "block";

            console.log('back_E_Aをクリックしました');
          }
        });
      } else {
        back_E_A.style.display = 'none';
      }

      if (currentTimeE >= 272) {
        VideoEElement.pause();
      }

      console.log('TimeUpDateE');
    });

    console.log('LoadeddataE');
  });
}

// Insurance E

let ProgressBarF = ProgressBar.cloneNode(true);
ProgressBarF.id = "progress_bar_e";
Container.appendChild(ProgressBarF);
ProgressBarF.style.zIndex = "-5";
ProgressBarF.style.display = "none";

const BackGroundBarF = ProgressBarF.querySelector("#background_bar");
BackGroundBarF.id = "background_bar_f";

const ControlsButtonF = ProgressBarF.querySelector("#controls_button");
ControlsButtonF.id = "controls_button_f";

let PauseBtnF = ControlsButtonF.querySelector("#pause");
PauseBtnF.id = "pause_f";
let PlayBtnF = ControlsButtonF.querySelector("#play");
PlayBtnF.id = "play_f";
ControlsButtonF.appendChild(PauseBtnF);
ControlsButtonF.appendChild(PlayBtnF);

const ProgressP_F = ProgressBarF.querySelector("#progress_p_a");
ProgressP_F.id = "progress_p_f";

let PlayTimeF = ProgressP_F.querySelector("#play_position");
let ProgressF = ProgressP_F.querySelector("#progress");
let EndTimeF = ProgressP_F.querySelector("#end_position");
PlayTimeF.id = "playtime_f";
ProgressF.id = "progress_f";
EndTimeF.id = "endtime_f";

const ContorolsSoundF = ProgressBarF.querySelector("#controls_sound");
ContorolsSoundF.id = "controls_sound_f";

let MuteBtnF = ContorolsSoundF.querySelector("#mute");
let UnmuteBtnF = ContorolsSoundF.querySelector("#unmute");
MuteBtnF.id = "mute_f";
UnmuteBtnF.id = "unmute_f";


let playtimerF = null;

const startTimerF = () => {
  playtimerF = setInterval(() => {
    PlayTimeF.textContent = convertTime(VideoFElement.currentTime);
    ProgressF.value = Math.floor((VideoFElement.currentTime / VideoFElement.duration) * VideoFElement.duration);
  }, 100);
  console.log('startTimerF');
};

let isVideoBoxF = true;

if (isVideoBoxF) {
  VideoFElement.addEventListener('loadeddata', () => {
    const maxDurationF = VideoFElement.duration;

    const formattedDurationF = convertTime(maxDurationF);
    EndTimeF.textContent = `${formattedDurationF}`;

    if (ClassB.style.zIndex = "28") {
      startTimerF();
    }

    PauseBtnF.addEventListener('click', () => {
      VideoFElement.pause();
      stopTimerF();
      PauseBtnF.style.display = 'none';
      PlayBtnF.style.display = 'block';
      console.log('F一時停止をクリックしました');
    });


    PlayBtnF.addEventListener('click', () => {
      startTimerF();
      VideoFElement.play();
      PlayBtnF.style.display = 'none';
      PauseBtnF.style.display = 'block';
      console.log('再生Fアイコンをクリックしました');
    });


    MuteBtnF.addEventListener('click', () => {
      if (VideoFElement.muted) {
        VideoFElement.muted = false;
        MuteBtnF.style.display = 'none';
        UnmuteBtnF.style.display = 'block';
        console.log('Fミュートを解除しました');
      }
    });

    UnmuteBtnF.addEventListener('click', () => {
      if (!VideoFElement.muted) {
        VideoFElement.muted = true;
        UnmuteBtnF.style.display = 'none';
        MuteBtnF.style.display = 'block';
        console.log('Fミュートをクリックしました');
      }
    });

    const stopTimerF = () => {
      VideoFElement.addEventListener("pause", () => {
        clearInterval(playtimerF);
        console.log('stopTimerF一時停止');
      });
    };

    ProgressF.addEventListener('input', () => {
      stopTimerF();
      const seekTimeF = calculateSeekTimeF(ProgressF.value);
      if (!isNaN(seekTimeF) && isFinite(seekTimeF) && seekTimeF >= 0 && seekTimeF <= VideoFElement.duration) {
        VideoFElement.currentTime = seekTimeF;
        console.log('Fプログレスバーを操作しました');
      }
    });

    ProgressF.addEventListener('change', () => {
      startTimerF();
      console.log('Fプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeF = (progressValue) => {
      return (progressValue / 100) * VideoFElement.duration;
    };

    const isVideoVisibleF = true;

    VideoFElement.addEventListener('timeupdate', () => {
      const currentTimeF = VideoFElement.currentTime;

      PlayTimeF.textContent = convertTime(VideoFElement.currentTime);
      EndTimeF.textContent = convertTime(VideoFElement.duration);


      if (currentTimeF >= 338) {
        buttonF_Info.style.display = 'block';
        buttonF_Info.addEventListener("click", () => {
          if (isVideoVisibleF) {

            VideoFElement.pause();

            console.log('buttonF_Infoをクリックしました');
          }
        });
      } else {
        buttonF_Info.style.display = 'none';
      }

      if (currentTimeF >= 338) {
        opening_F_A.style.display = 'block';
        opening_F_A.addEventListener("click", () => {
          if (isVideoVisibleF) {
            ClassF.style.zIndex = "24";
            VideoFElement.currentTime = 0;
            VideoFElement.pause();
            ProgressBarF.style.zIndex = "-24";

            btn_mute.style.display = "none";
            btn_unmute.style.display = "block";
            VideoAElement.muted = false;
            VideoAElement.play();
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "1";
            ProgressBar.style.display = "block";

            console.log('opening_F_Aをクリックしました');
          }
        });
      } else {
        opening_F_A.style.display = 'none';
      }

      if (currentTimeF >= 338) {
        back_F_B.style.display = 'block';
        back_F_B.addEventListener("click", () => {
          if (isVideoVisibleF) {
            ClassF.style.zIndex = "24";
            VideoFElement.currentTime = 0;
            VideoFElement.pause();
            ProgressBarF.style.zIndex = "-24";

            VideoBElement.muted = false;
            VideoBElement.play();
            UnmuteBtnB.style.display = "block";
            MuteBtnB.style.display = "none";
            ClassB.style.zIndex = "290";
            ProgressBarB.style.zIndex = "1";
            ProgressBarB.style.display = "block";

            console.log('back_F_Bをクリックしました');
          }
        });
      } else {
        back_F_B.style.display = 'none';
      }
      if (currentTimeF >= 355) {
        VideoBElement.pause();
      }

      console.log('TimeUpDateF');
    });

    console.log('LoadeddataF');
  });
}

// Insurance G

let ProgressBarG = ProgressBar.cloneNode(true);
ProgressBarG.id = "progress_bar_g";
Container.appendChild(ProgressBarG);
ProgressBarG.style.zIndex = "-6";
ProgressBarG.style.display = "none";

const BackGroundBarG = ProgressBarG.querySelector("#background_bar");
BackGroundBarG.id = "background_bar_g";

const ControlsButtonG = ProgressBarG.querySelector("#controls_button");
ControlsButtonG.id = "controls_button_g";

let PauseBtnG = ControlsButtonG.querySelector("#pause");
PauseBtnG.id = "pause_g";
let PlayBtnG = ControlsButtonG.querySelector("#play");
PlayBtnG.id = "play_g";
ControlsButtonG.appendChild(PauseBtnG);
ControlsButtonG.appendChild(PlayBtnG);

const ProgressP_G = ProgressBarG.querySelector("#progress_p_a");
ProgressP_G.id = "progress_p_g";

let PlayTimeG = ProgressP_G.querySelector("#play_position");
let ProgressG = ProgressP_G.querySelector("#progress");
let EndTimeG = ProgressP_G.querySelector("#end_position");
PlayTimeG.id = "playtime_g";
ProgressG.id = "progress_g";
EndTimeG.id = "endtime_g";

const ContorolsSoundG = ProgressBarG.querySelector("#controls_sound");
ContorolsSoundG.id = "controls_sound_g";

let MuteBtnG = ContorolsSoundG.querySelector("#mute");
let UnmuteBtnG = ContorolsSoundG.querySelector("#unmute");
MuteBtnG.id = "mute_g";
UnmuteBtnG.id = "unmute_g";


let playtimerG = null;

const startTimerG = () => {
  playtimerG = setInterval(() => {
    PlayTimeG.textContent = convertTime(VideoGElement.currentTime);
    ProgressG.value = Math.floor((VideoGElement.currentTime / VideoGElement.duration) * VideoGElement.duration);
  }, 100);
  console.log('startTimerG');
};

let isVideoBoxG = true;

if (isVideoBoxG) {
  VideoGElement.addEventListener('loadeddata', () => {
    const maxDurationG = VideoGElement.duration;

    const formattedDurationG = convertTime(maxDurationG);
    EndTimeG.textContent = `${formattedDurationG}`;

    if (ClassB.style.zIndex = "28") {
      startTimerG();
    }

    PauseBtnG.addEventListener('click', () => {
      VideoGElement.pause();
      stopTimerG();
      PauseBtnG.style.display = 'none';
      PlayBtnG.style.display = 'block';
      console.log('G一時停止をクリックしました');
    });


    PlayBtnG.addEventListener('click', () => {
      startTimerG();
      VideoGElement.play();
      PlayBtnG.style.display = 'none';
      PauseBtnG.style.display = 'block';
      console.log('再生Gアイコンをクリックしました');
    });

    MuteBtnG.addEventListener('click', () => {
      if (VideoGElement.muted) {
        VideoGElement.muted = false;
        MuteBtnG.style.display = 'none';
        UnmuteBtnG.style.display = 'block';
        console.log('Gミュートを解除しました');
      }
    });

    UnmuteBtnG.addEventListener('click', () => {
      if (!VideoGElement.muted) {
        VideoGElement.muted = true;
        UnmuteBtnG.style.display = 'none';
        MuteBtnG.style.display = 'block';
        console.log('Gミュートをクリックしました');
      }
    });

    const stopTimerG = () => {
      VideoGElement.addEventListener("pause", () => {
        clearInterval(playtimerG);
        console.log('stopTimerG一時停止');
      });
    };

    ProgressG.addEventListener('input', () => {
      stopTimerG();
      const seekTimeG = calculateSeekTimeG(ProgressG.value);
      if (!isNaN(seekTimeG) && isFinite(seekTimeG) && seekTimeG >= 0 && seekTimeG <= VideoGElement.duration) {
        VideoGElement.currentTime = seekTimeG;
        console.log('Gプログレスバーを操作しました');
      }
    });

    ProgressG.addEventListener('change', () => {
      startTimerG();
      console.log('Gプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeG = (progressValue) => {
      return (progressValue / 100) * VideoGElement.duration;
    };

    const isVideoVisibleG = true;

    VideoGElement.addEventListener('timeupdate', () => {
      const currentTimeG = VideoGElement.currentTime;

      PlayTimeG.textContent = convertTime(VideoGElement.currentTime);
      EndTimeG.textContent = convertTime(VideoGElement.duration);


      if (currentTimeG >= 183) {
        buttonG_Info.style.display = 'block';
        buttonG_Info.addEventListener("click", () => {
          if (isVideoVisibleG) {

            VideoGElement.pause();

            console.log('buttonG_Infoをクリックしました');
          }
        });
      } else {
        buttonG_Info.style.display = 'none';
      }

      if (currentTimeG >= 183) {
        opening_G_A.style.display = 'block';
        opening_G_A.addEventListener("click", () => {
          if (isVideoVisibleG) {
            ClassG.style.zIndex = "23";
            VideoGElement.currentTime = 0;
            VideoGElement.pause();
            ProgressBarG.style.zIndex = "-23";

            btn_mute.style.display = "none";
            btn_unmute.style.display = "block";
            VideoAElement.muted = false;
            VideoAElement.play();
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "1";
            ProgressBar.style.display = "block";

            console.log('opening_G_Aをクリックしました');
          }
        });
      } else {
        opening_G_A.style.display = 'none';
      }

      if (currentTimeG >= 183) {
        back_G_B.style.display = 'block';
        back_G_B.addEventListener("click", () => {
          if (isVideoVisibleG) {
            ClassG.style.zIndex = "23";
            VideoGElement.currentTime = 0;
            VideoGElement.pause();
            ProgressBarG.style.zIndex = "-23";

            VideoBElement.muted = false;
            VideoBElement.play();
            UnmuteBtnB.style.display = "block";
            MuteBtnB.style.display = "none";
            ClassB.style.zIndex = "290";
            ProgressBarB.style.zIndex = "1";
            ProgressBarB.style.display = "block";

            console.log('back_G_Bをクリックしました');
          }
        });
      } else {
        back_G_B.style.display = 'none';
      }
      if (currentTimeG >= 200) {
        VideoBElement.pause();
      }

      console.log('TimeUpDateG');
    });

    console.log('LoadeddataG');
  });
}

// Insurance H
let ProgressBarH = ProgressBar.cloneNode(true);
ProgressBarH.id = "progress_bar_h";
Container.appendChild(ProgressBarH);
ProgressBarH.style.zIndex = "-7";
ProgressBarH.style.display = "none";

const BackGroundBarH = ProgressBarH.querySelector("#background_bar");
BackGroundBarH.id = "background_bar_h";

const ControlsButtonH = ProgressBarH.querySelector("#controls_button");
ControlsButtonH.id = "controls_button_h";

let PauseBtnH = ControlsButtonH.querySelector("#pause");
PauseBtnH.id = "pause_h";
let PlayBtnH = ControlsButtonH.querySelector("#play");
PlayBtnH.id = "play_h";
ControlsButtonH.appendChild(PauseBtnH);
ControlsButtonH.appendChild(PlayBtnH);

const ProgressP_H = ProgressBarH.querySelector("#progress_p_a");
ProgressP_H.id = "progress_p_h";

let PlayTimeH = ProgressP_H.querySelector("#play_position");
let ProgressH = ProgressP_H.querySelector("#progress");
let EndTimeH = ProgressP_H.querySelector("#end_position");
PlayTimeH.id = "playtime_h";
ProgressH.id = "progress_h";
EndTimeH.id = "endtime_h";

const ContorolsSoundH = ProgressBarH.querySelector("#controls_sound");
ContorolsSoundH.id = "controls_sound_h";

let MuteBtnH = ContorolsSoundH.querySelector("#mute");
let UnmuteBtnH = ContorolsSoundH.querySelector("#unmute");
MuteBtnH.id = "mute_h";
UnmuteBtnH.id = "unmute_h";


let playtimerH = null;

const startTimerH = () => {
  playtimerH = setInterval(() => {
    PlayTimeH.textContent = convertTime(VideoHElement.currentTime);
    ProgressH.value = Math.floor((VideoHElement.currentTime / VideoHElement.duration) * VideoHElement.duration);
  }, 100);
  console.log('startTimerHが呼び出されました');
};

let isVideoBoxH = true;

if (isVideoBoxH) {
  VideoHElement.addEventListener('loadeddata', () => {
    const maxDurationH = VideoHElement.duration;

    const formattedDurationH = convertTime(maxDurationH);
    EndTimeH.textContent = `${formattedDurationH}`;

    if (ClassC.style.zIndex = "27") {
      startTimerH();
    }

    PauseBtnH.addEventListener('click', () => {
      VideoHElement.pause();
      stopTimerH();
      PauseBtnH.style.display = 'none';
      PlayBtnH.style.display = 'block';
      console.log('H一時停止をクリックしました');
    });

    PlayBtnH.addEventListener('click', () => {
      startTimerH();
      VideoHElement.play();
      PlayBtnH.style.display = 'none';
      PauseBtnH.style.display = 'block';
      console.log('再生Hアイコンをクリックしました');
    });

    MuteBtnH.addEventListener('click', () => {
      if (VideoHElement.muted) {
        VideoHElement.muted = false;
        MuteBtnH.style.display = 'none';
        UnmuteBtnH.style.display = 'block';
        console.log('Hミュートを解除しました');
      }
    });

    UnmuteBtnH.addEventListener('click', () => {
      if (!VideoHElement.muted) {
        VideoHElement.muted = true;
        UnmuteBtnH.style.display = 'none';
        MuteBtnH.style.display = 'block';
        console.log('Hミュートをクリックしました');
      }
    });

    const stopTimerH = () => {
      VideoHElement.addEventListener("pause", () => {
        clearInterval(playtimerH);
        console.log('stopTimerH一時停止');
      });
    };

    ProgressH.addEventListener('input', () => {
      stopTimerH();
      const seekTimeH = calculateSeekTimeH(ProgressH.value);
      if (!isNaN(seekTimeH) && isFinite(seekTimeH) && seekTimeH >= 0 && seekTimeH <= VideoHElement.duration) {
        VideoHElement.currentTime = seekTimeH;
        console.log('Hプログレスバーを操作しました');
      }
    });

    ProgressH.addEventListener('change', () => {
      startTimerH();
      console.log('Hプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeH = (progressValue) => {
      return (progressValue / 100) * VideoHElement.duration;
    };

    const isVideoVisibleH = true;

    VideoHElement.addEventListener('timeupdate', () => {
      const currentTimeH = VideoHElement.currentTime;

      PlayTimeH.textContent = convertTime(VideoHElement.currentTime);
      EndTimeH.textContent = convertTime(VideoHElement.duration);


      if (currentTimeH >= 21) {
        buttonM.style.display = 'block';
        buttonM.addEventListener("click", () => {
          if (isVideoVisibleH) {
            ClassH.style.zIndex = "22";
            VideoHElement.currentTime = 0;
            VideoHElement.pause();
            ProgressBarH.style.zIndex = "-22";


            VideoMElement.play();
            ClassM.style.zIndex = "290";
            ProgressBarM.style.zIndex = "1";
            ProgressBarM.style.display = "block";

            console.log('buttonMをクリックしました');
          }
        });
      } else {
        buttonM.style.display = 'none';
      }

      if (currentTimeH >= 24) {
        buttonN.style.display = 'block';
        buttonN.addEventListener("click", () => {
          if (isVideoVisibleH) {
            ClassH.style.zIndex = "22";
            VideoHElement.currentTime = 0;
            VideoHElement.pause();
            ProgressBarH.style.zIndex = "-22";

            VideoNElement.play();
            ClassN.style.zIndex = "290";
            ProgressBarN.style.zIndex = "1";
            ProgressBarN.style.display = "block";

            console.log('buttonNをクリックしました');
          }
        });
      } else {
        buttonN.style.display = 'none';
      }

      if (currentTimeH >= 33) {
        back_H_C.style.display = 'block';
        back_H_C.addEventListener("click", () => {
          if (isVideoVisibleH) {
            ClassH.style.zIndex = "22";
            VideoHElement.currentTime = 0;
            VideoHElement.pause();
            ProgressBarH.style.zIndex = "-22";

            VideoCElement.play();
            UnmuteBtnC.style.display = "block";
            MuteBtnC.style.display = "none";
            ClassC.style.zIndex = "290";
            ProgressBarC.style.zIndex = "1";
            ProgressBarC.style.display = "block";

            console.log('buttonHをクリックしました');
          }
        });
      } else {
        back_H_C.style.display = 'none';
      }
      if (currentTimeH >= 51) {
        VideoHElement.pause();
      }

      console.log('TimeUpDateH');
    });

    console.log('LoadeddataH');
  });
}

// Insurance I

let ProgressBarI = ProgressBar.cloneNode(true);
ProgressBarI.id = "progress_bar_i";
Container.appendChild(ProgressBarI);
ProgressBarI.style.zIndex = "-8";
ProgressBarI.style.display = "none";

const BackGroundBarI = ProgressBarI.querySelector("#background_bar");
BackGroundBarI.id = "background_bar_i";

const ControlsButtonI = ProgressBarI.querySelector("#controls_button");
ControlsButtonI.id = "controls_button_i";

let PauseBtnI = ControlsButtonI.querySelector("#pause");
PauseBtnI.id = "pause_b";
let PlayBtnI = ControlsButtonI.querySelector("#play");
PlayBtnI.id = "play_b";
ControlsButtonI.appendChild(PauseBtnI);
ControlsButtonI.appendChild(PlayBtnI);

const ProgressP_I = ProgressBarI.querySelector("#progress_p_a");
ProgressP_I.id = "progress_p_i";

let PlayTimeI = ProgressP_I.querySelector("#play_position");
let ProgressI = ProgressP_I.querySelector("#progress");
let EndTimeI = ProgressP_I.querySelector("#end_position");
PlayTimeI.id = "playtime_i";
ProgressI.id = "progress_i";
EndTimeI.id = "endtime_i";

const ContorolsSoundI = ProgressBarI.querySelector("#controls_sound");
ContorolsSoundI.id = "controls_sound_i";

let MuteBtnI = ContorolsSoundI.querySelector("#mute");
let UnmuteBtnI = ContorolsSoundI.querySelector("#unmute");
MuteBtnI.id = "mute_i";
UnmuteBtnI.id = "unmute_i";

let playtimerI = null;

const startTimerI = () => {
  playtimerI = setInterval(() => {
    PlayTimeI.textContent = convertTime(VideoIElement.currentTime);
    ProgressI.value = Math.floor((VideoIElement.currentTime / VideoIElement.duration) * VideoIElement.duration);
  }, 100);
  console.log('startTimerI');
};

let isVideoBoxI = true;

if (isVideoBoxI) {
  VideoIElement.addEventListener('loadeddata', () => {
    const maxDurationI = VideoIElement.duration;

    const formattedDurationI = convertTime(maxDurationI);
    EndTimeI.textContent = `${formattedDurationI}`;

    if (ClassC.style.zIndex = "27") {
      startTimerI();
    }

    PauseBtnI.addEventListener('click', () => {
      VideoIElement.pause();
      stopTimerI();
      PauseBtnI.style.display = 'none';
      PlayBtnI.style.display = 'block';
      console.log('I一時停止をクリックしました');
    });

    PlayBtnI.addEventListener('click', () => {
      startTimerI();
      VideoIElement.play();
      PlayBtnI.style.display = 'none';
      PauseBtnI.style.display = 'block';
      console.log('再生Iアイコンをクリックしました');
    });

    MuteBtnI.addEventListener('click', () => {
      if (VideoIElement.muted) {
        VideoIElement.muted = false;
        MuteBtnI.style.display = 'none';
        UnmuteBtnI.style.display = 'block';
        console.log('Iミュートを解除しました');
      }
    });

    UnmuteBtnI.addEventListener('click', () => {
      if (!VideoIElement.muted) {
        VideoIElement.muted = true;
        UnmuteBtnI.style.display = 'none';
        MuteBtnI.style.display = 'block';
        console.log('Iミュートをクリックしました');
      }
    });

    const stopTimerI = () => {
      VideoIElement.addEventListener("pause", () => {
        clearInterval(playtimerI);
        console.log('stopTimerI');
      });
    };

    ProgressI.addEventListener('input', () => {
      stopTimerI();
      const seekTimeI = calculateSeekTimeI(ProgressI.value);
      if (!isNaN(seekTimeI) && isFinite(seekTimeI) && seekTimeI >= 0 && seekTimeI <= VideoIElement.duration) {
        VideoIElement.currentTime = seekTimeI;
        console.log('Iプログレスバーを操作しました');
      }
    });

    ProgressI.addEventListener('change', () => {
      startTimerI();
      console.log('Iプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeI = (progressValue) => {
      return (progressValue / 100) * VideoIElement.duration;
    };

    const isVideoVisibleI = true;

    VideoIElement.addEventListener('timeupdate', () => {
      const currentTimeI = VideoIElement.currentTime;

      PlayTimeI.textContent = convertTime(VideoIElement.currentTime);
      EndTimeI.textContent = convertTime(VideoIElement.duration);


      if (currentTimeI >= 68) {
        buttonO.style.display = 'block';
        buttonO.addEventListener("click", () => {
          if (isVideoVisibleI) {
            ClassI.style.zIndex = "21";
            VideoIElement.currentTime = 0;
            VideoIElement.pause();
            ProgressBarI.style.zIndex = "-21";

            VideoOElement.play();
            ClassO.style.zIndex = "290";
            ProgressBarO.style.zIndex = "1";
            ProgressBarO.style.display = "block";

            console.log('buttonOをクリックしました');
          }
        });
      } else {
        buttonO.style.display = 'none';
      }

      if (currentTimeI >= 68) {
        buttonP.style.display = 'block';
        buttonP.addEventListener("click", () => {
          if (isVideoVisibleI) {
            ClassI.style.zIndex = "21";
            VideoIElement.currentTime = 0;
            VideoIElement.pause();
            ProgressBarI.style.zIndex = "-21";

            VideoPElement.play();
            ClassP.style.zIndex = "290";
            ProgressBarP.style.zIndex = "1";
            ProgressBarP.style.display = "block";

            console.log('buttonPをクリックしました');
          }
        });
      } else {
        buttonP.style.display = 'none';
      }

      if (currentTimeI >= 68) {
        back_I_C.style.display = 'block';
        back_I_C.addEventListener("click", () => {
          if (isVideoVisibleI) {
            ClassI.style.zIndex = "21";
            VideoIElement.currentTime = 0;
            VideoIElement.pause();
            ProgressBarI.style.zIndex = "-21";

            VideoCElement.play();
            UnmuteBtnC.style.display = "block";
            MuteBtnC.style.display = "none";
            ClassC.style.zIndex = "290";
            ProgressBarC.style.zIndex = "1";
            ProgressBarC.style.display = "block";

            console.log('button03をクリックしました');
          }
        });
      } else {
        back_I_C.style.display = 'none';
      }
      if (currentTimeI >= 82) {
        VideoIElement.pause();
      }

      console.log('TimeUpDateI');
    });

    console.log('LoadeddataI');
  });
}

// Insurance J

let ProgressBarJ = ProgressBar.cloneNode(true);
ProgressBarJ.id = "progress_bar_j";
Container.appendChild(ProgressBarJ);
ProgressBarJ.style.zIndex = "-9";
ProgressBarJ.style.display = "none";

const BackGroundBarJ = ProgressBarJ.querySelector("#background_bar");
BackGroundBarJ.id = "background_bar_j";

const ControlsButtonJ = ProgressBarJ.querySelector("#controls_button");
ControlsButtonJ.id = "controls_button_j";

let PauseBtnJ = ControlsButtonJ.querySelector("#pause");
PauseBtnJ.id = "pause_j";
let PlayBtnJ = ControlsButtonJ.querySelector("#play");
PlayBtnJ.id = "play_j";
ControlsButtonJ.appendChild(PauseBtnJ);
ControlsButtonJ.appendChild(PlayBtnJ);

const ProgressP_J = ProgressBarJ.querySelector("#progress_p_a");
ProgressP_J.id = "progress_p_e";

let PlayTimeJ = ProgressP_J.querySelector("#play_position");
let ProgressJ = ProgressP_J.querySelector("#progress");
let EndTimeJ = ProgressP_J.querySelector("#end_position");
PlayTimeJ.id = "playtime_j";
ProgressJ.id = "progress_j";
EndTimeJ.id = "endtime_j";

const ContorolsSoundJ = ProgressBarJ.querySelector("#controls_sound");
ContorolsSoundJ.id = "controls_sound_j";

let MuteBtnJ = ContorolsSoundJ.querySelector("#mute");
let UnmuteBtnJ = ContorolsSoundJ.querySelector("#unmute");
MuteBtnJ.id = "mute_j";
UnmuteBtnJ.id = "unmute_j";

let playtimerJ = null;

const startTimerJ = () => {
  playtimerJ = setInterval(() => {
    PlayTimeJ.textContent = convertTime(VideoJElement.currentTime);
    ProgressJ.value = Math.floor((VideoJElement.currentTime / VideoJElement.duration) * VideoJElement.duration);
  }, 100);
  console.log('startTimerE');
};

let isVideoBoxJ = true;

if (isVideoBoxJ) {
  VideoJElement.addEventListener('loadeddata', () => {
    const maxDurationJ = VideoJElement.duration;

    const formattedDurationJ = convertTime(maxDurationJ);
    EndTimeJ.textContent = `${formattedDurationJ}`;

    if (ClassD.style.zIndex = "26") {
      startTimerJ();
    }

    PauseBtnJ.addEventListener('click', () => {
      VideoJElement.pause();
      stopTimerJ();
      PauseBtnJ.style.display = 'none';
      PlayBtnJ.style.display = 'block';
      console.log('J一時停止をクリックしました');
    });

    PlayBtnJ.addEventListener('click', () => {
      startTimerJ();
      VideoJElement.play();
      PlayBtnJ.style.display = 'none';
      PauseBtnJ.style.display = 'block';
      console.log('再生Jアイコンをクリックしました');
    });


    MuteBtnJ.addEventListener('click', () => {
      if (VideoJElement.muted) {
        VideoJElement.muted = false;
        MuteBtnJ.style.display = 'none';
        UnmuteBtnJ.style.display = 'block';
        console.log('Jミュートを解除しました');
      }
    });

    UnmuteBtnJ.addEventListener('click', () => {
      if (!VideoJElement.muted) {
        VideoJElement.muted = true;
        UnmuteBtnJ.style.display = 'none';
        MuteBtnJ.style.display = 'block';
        console.log('Jミュートをクリックしました');
      }
    });

    const stopTimerJ = () => {
      VideoJElement.addEventListener("pause", () => {
        clearInterval(playtimerJ);
        console.log('stopTimerJ');
      });
    };

    ProgressJ.addEventListener('input', () => {
      stopTimerJ();
      const seekTimeJ = calculateSeekTimeJ(ProgressJ.value);
      if (!isNaN(seekTimeJ) && isFinite(seekTimeJ) && seekTimeJ >= 0 && seekTimeJ <= VideoJElement.duration) {
        VideoJElement.currentTime = seekTimeJ;
        console.log('Jプログレスバーを操作しました');
      }
    });

    ProgressJ.addEventListener('change', () => {
      startTimerJ();
      console.log('Jプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeJ = (progressValue) => {
      return (progressValue / 100) * VideoJElement.duration;
    };

    const isVideoVisibleJ = true;

    VideoJElement.addEventListener('timeupdate', () => {
      const currentTimeJ = VideoJElement.currentTime;

      PlayTimeJ.textContent = convertTime(VideoJElement.currentTime);
      EndTimeJ.textContent = convertTime(VideoJElement.duration);


      if (currentTimeJ >= 186) {
        buttonJ_Info.style.display = 'block';
        buttonJ_Info.addEventListener("click", () => {
          if (isVideoVisibleJ) {

            VideoJElement.pause();
            PauseBtnJ.style.display = "none";
            PlayBtnJ.style.display = "block";
            console.log('buttonJ_Info');
          }
        });
      } else {
        buttonJ_Info.style.display = 'none';
      }

      if (currentTimeJ >= 186) {
        opening_J_A.style.display = 'block';
        opening_J_A.addEventListener("click", () => {
          if (isVideoVisibleJ) {
            ClassJ.style.zIndex = "20";
            VideoJElement.currentTime = 0;
            VideoJElement.pause();
            ProgressBarJ.style.zIndex = "-20";

            VideoAElement.muted = false;
            VideoAElement.play();
            btn_unmute.style.display = "block";
            btn_mute.style.display = "none";
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "1";
            ProgressBar.style.display = "block";

            console.log('opening_J_A');
          }
        });
      } else {
        opening_J_A.style.display = 'none';
      }

      if (currentTimeJ >= 186) {
        back_J_D.style.display = 'block';
        back_J_D.addEventListener("click", () => {
          if (isVideoVisibleJ) {
            ClassJ.style.zIndex = "20";
            VideoJElement.currentTime = 0;
            VideoJElement.pause();
            ProgressBarJ.style.zIndex = "-20";

            VideoDElement.play();
            ClassD.style.zIndex = "290";
            ProgressBarD.style.zIndex = "1";
            ProgressBarD.style.display = "block";

            console.log('back_J_D');
          }
        });
      } else {
        back_J_D.style.display = 'none';
      }

      if (currentTimeJ >= 202) {
        VideoJElement.pause();
      }

      console.log('TimeUpDateJ');
    });

    console.log('LoadeddataJ');
  });
}

// Insurance K

let ProgressBarK = ProgressBar.cloneNode(true);
ProgressBarK.id = "progress_bar_k";
Container.appendChild(ProgressBarK);
ProgressBarK.style.zIndex = "-10";
ProgressBarK.style.display = "none";

const BackGroundBarK = ProgressBarK.querySelector("#background_bar");
BackGroundBarK.id = "background_bar_k";

const ControlsButtonK = ProgressBarK.querySelector("#controls_button");
ControlsButtonK.id = "controls_button_k";

let PauseBtnK = ControlsButtonK.querySelector("#pause");
PauseBtnK.id = "pause_k";
let PlayBtnK = ControlsButtonK.querySelector("#play");
PlayBtnK.id = "play_k";
ControlsButtonK.appendChild(PauseBtnK);
ControlsButtonK.appendChild(PlayBtnK);

const ProgressP_K = ProgressBarK.querySelector("#progress_p_a");
ProgressP_K.id = "progress_p_k";

let PlayTimeK = ProgressP_K.querySelector("#play_position");
let ProgressK = ProgressP_K.querySelector("#progress");
let EndTimeK = ProgressP_K.querySelector("#end_position");
PlayTimeK.id = "playtime_k";
ProgressK.id = "progress_k";
EndTimeK.id = "endtime_k";

const ContorolsSoundK = ProgressBarK.querySelector("#controls_sound");
ContorolsSoundK.id = "controls_sound_k";

let MuteBtnK = ContorolsSoundK.querySelector("#mute");
let UnmuteBtnK = ContorolsSoundK.querySelector("#unmute");
MuteBtnK.id = "mute_k";
UnmuteBtnK.id = "unmute_k";

let playtimerK = null;

const startTimerK = () => {
  playtimerK = setInterval(() => {
    PlayTimeK.textContent = convertTime(VideoKElement.currentTime);
    ProgressK.value = Math.floor((VideoKElement.currentTime / VideoKElement.duration) * VideoKElement.duration);
  }, 100);
  console.log('startTimerK');
};

let isVideoBoxK = true;

if (isVideoBoxK) {
  VideoKElement.addEventListener('loadeddata', () => {
    const maxDurationK = VideoKElement.duration;

    const formattedDurationK = convertTime(maxDurationK);
    EndTimeK.textContent = `${formattedDurationK}`;

    if (ClassD.style.zIndex = "26") {
      startTimerK();
    }

    PauseBtnK.addEventListener('click', () => {
      VideoKElement.pause();
      stopTimerK();
      PauseBtnK.style.display = 'none';
      PlayBtnK.style.display = 'block';
      console.log('K一時停止をクリックしました');
    });

    PlayBtnK.addEventListener('click', () => {
      startTimerK();
      VideoKElement.play();
      PlayBtnK.style.display = 'none';
      PauseBtnK.style.display = 'block';
      console.log('再生Kアイコンをクリックしました');
    });


    MuteBtnK.addEventListener('click', () => {
      if (VideoKElement.muted) {
        VideoKElement.muted = false;
        MuteBtnK.style.display = 'none';
        UnmuteBtnK.style.display = 'block';
        console.log('Kミュートを解除しました');
      }
    });

    UnmuteBtnK.addEventListener('click', () => {
      if (!VideoKElement.muted) {
        VideoKElement.muted = true;
        UnmuteBtnK.style.display = 'none';
        MuteBtnK.style.display = 'block';
        console.log('Kミュートをクリックしました');
      }
    });

    const stopTimerK = () => {
      VideoKElement.addEventListener("pause", () => {
        clearInterval(playtimerK);
        console.log('stopTimerK');
      });
    };

    ProgressK.addEventListener('input', () => {
      stopTimerK();
      const seekTimeK = calculateSeekTimeK(ProgressK.value);
      if (!isNaN(seekTimeK) && isFinite(seekTimeK) && seekTimeK >= 0 && seekTimeK <= VideoKElement.duration) {
        VideoKElement.currentTime = seekTimeK;
        console.log('Kプログレスバーを操作しました');
      }
    });

    ProgressK.addEventListener('change', () => {
      startTimerK();
      console.log('Kプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeK = (progressValue) => {
      return (progressValue / 100) * VideoKElement.duration;
    };

    const isVideoVisibleK = true;

    VideoKElement.addEventListener('timeupdate', () => {
      const currentTimeK = VideoKElement.currentTime;

      PlayTimeK.textContent = convertTime(VideoKElement.currentTime);
      EndTimeK.textContent = convertTime(VideoKElement.duration);


      if (currentTimeK >= 152) {
        buttonK_Info.style.display = 'block';
        buttonK_Info.addEventListener("click", () => {
          if (isVideoVisibleK) {

            VideoKElement.pause();
            PauseBtnK.style.display = "none";
            PlayBtnK.style.display = "block";
            console.log('buttonK_Info');
          }
        });
      } else {
        buttonK_Info.style.display = 'none';
      }

      if (currentTimeK >= 152) {
        opening_K_A.style.display = 'block';
        opening_K_A.addEventListener("click", () => {
          if (isVideoVisibleK) {
            ClassK.style.zIndex = "19";
            VideoKElement.currentTime = 0;
            VideoKElement.pause();
            ProgressBarK.style.zIndex = "-19";

            VideoAElement.muted = false;
            VideoAElement.play();
            btn_unmute.style.display = "block";
            btn_mute.style.display = "none";
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "1";
            ProgressBar.style.display = "block";

            console.log('opening_K_A');
          }
        });
      } else {
        opening_K_A.style.display = 'none';
      }

      if (currentTimeK >= 152) {
        back_K_D.style.display = 'block';
        back_K_D.addEventListener("click", () => {
          if (isVideoVisibleK) {
            ClassK.style.zIndex = "19";
            VideoKElement.currentTime = 0;
            VideoKElement.pause();
            ProgressBarK.style.zIndex = "-19";

            VideoDElement.play();
            ClassD.style.zIndex = "290";
            ProgressBarD.style.zIndex = "1";
            ProgressBarD.style.display = "block";

            console.log('back_K_D');
          }
        });
      } else {
        back_K_D.style.display = 'none';
      }

      if (currentTimeK >= 168) {
        VideoKElement.pause();
      }

      console.log('TimeUpDateK');
    });

    console.log('LoadeddataK');
  });
}

// Insurance L

let ProgressBarL = ProgressBar.cloneNode(true);
ProgressBarL.id = "progress_bar_l";
Container.appendChild(ProgressBarL);
ProgressBarL.style.zIndex = "-11";
ProgressBarL.style.display = "none";

const BackGroundBarL = ProgressBarL.querySelector("#background_bar");
BackGroundBarL.id = "background_bar_l";

const ControlsButtonL = ProgressBarL.querySelector("#controls_button");
ControlsButtonL.id = "controls_button_l";

let PauseBtnL = ControlsButtonL.querySelector("#pause");
PauseBtnL.id = "pause_l";
let PlayBtnL = ControlsButtonL.querySelector("#play");
PlayBtnL.id = "play_l";
ControlsButtonL.appendChild(PauseBtnL);
ControlsButtonL.appendChild(PlayBtnL);

const ProgressP_L = ProgressBarL.querySelector("#progress_p_a");
ProgressP_L.id = "progress_p_l";

let PlayTimeL = ProgressP_L.querySelector("#play_position");
let ProgressL = ProgressP_L.querySelector("#progress");
let EndTimeL = ProgressP_L.querySelector("#end_position");
PlayTimeL.id = "playtime_l";
ProgressL.id = "progress_l";
EndTimeL.id = "endtime_l";

const ContorolsSoundL = ProgressBarL.querySelector("#controls_sound");
ContorolsSoundL.id = "controls_sound_l";

let MuteBtnL = ContorolsSoundL.querySelector("#mute");
let UnmuteBtnL = ContorolsSoundL.querySelector("#unmute");
MuteBtnL.id = "mute_l";
UnmuteBtnL.id = "unmute_l";

let playtimerL = null;

const startTimerL = () => {
  playtimerL = setInterval(() => {
    PlayTimeL.textContent = convertTime(VideoLElement.currentTime);
    ProgressL.value = Math.floor((VideoLElement.currentTime / VideoLElement.duration) * VideoLElement.duration);
  }, 100);
  console.log('startTimerL');
};

let isVideoBoxL = true;

if (isVideoBoxL) {
  VideoLElement.addEventListener('loadeddata', () => {
    const maxDurationL = VideoLElement.duration;

    const formattedDurationL = convertTime(maxDurationL);
    EndTimeL.textContent = `${formattedDurationL}`;

    if (ClassD.style.zIndex = "26") {
      startTimerL();
    }

    PauseBtnL.addEventListener('click', () => {
      VideoLElement.pause();
      stopTimerL();
      PauseBtnL.style.display = 'none';
      PlayBtnL.style.display = 'block';
      console.log('L一時停止をクリックしました');
    });

    PlayBtnL.addEventListener('click', () => {
      startTimerL();
      VideoLElement.play();
      PlayBtnL.style.display = 'none';
      PauseBtnL.style.display = 'block';
      console.log('再生Lアイコンをクリックしました');
    });


    MuteBtnL.addEventListener('click', () => {
      if (VideoLElement.muted) {
        VideoLElement.muted = false;
        MuteBtnL.style.display = 'none';
        UnmuteBtnL.style.display = 'block';
        console.log('Lミュートを解除しました');
      }
    });

    UnmuteBtnL.addEventListener('click', () => {
      if (!VideoLElement.muted) {
        VideoLElement.muted = true;
        UnmuteBtnL.style.display = 'none';
        MuteBtnL.style.display = 'block';
        console.log('Lミュートをクリックしました');
      }
    });

    const stopTimerL = () => {
      VideoLElement.addEventListener("pause", () => {
        clearInterval(playtimerL);
        console.log('stopTimerL');
      });
    };

    ProgressL.addEventListener('input', () => {
      stopTimerL();
      const seekTimeL = calculateSeekTimeL(ProgressL.value);
      if (!isNaN(seekTimeL) && isFinite(seekTimeL) && seekTimeL >= 0 && seekTimeL <= VideoLElement.duration) {
        VideoLElement.currentTime = seekTimeL;
        console.log('Lプログレスバーを操作しました');
      }
    });

    ProgressL.addEventListener('change', () => {
      startTimerL();
      console.log('Lプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeL = (progressValue) => {
      return (progressValue / 100) * VideoLElement.duration;
    };

    const isVideoVisibleL = true;

    VideoLElement.addEventListener('timeupdate', () => {
      const currentTimeL = VideoLElement.currentTime;

      PlayTimeL.textContent = convertTime(VideoLElement.currentTime);
      EndTimeL.textContent = convertTime(VideoLElement.duration);


      if (currentTimeL >= 172) {
        buttonL_Info.style.display = 'block';
        buttonL_Info.addEventListener("click", () => {
          if (isVideoVisibleL) {

            VideoLElement.pause();
            PauseBtnL.style.display = "none";
            PlayBtnL.style.display = "block";
            console.log('buttonL_Info');
          }
        });
      } else {
        buttonL_Info.style.display = 'none';
      }

      if (currentTimeL >= 172) {
        opening_L_A.style.display = 'block';
        opening_L_A.addEventListener("click", () => {
          if (isVideoVisibleL) {
            ClassL.style.zIndex = "18";
            VideoLElement.currentTime = 0;
            VideoLElement.pause();
            ProgressBarL.style.zIndex = "-18";

            VideoAElement.muted = false;
            VideoAElement.play();
            btn_unmute.style.display = "block";
            btn_mute.style.display = "none";
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "1";
            ProgressBar.style.display = "block";

            console.log('opening_L_A');
          }
        });
      } else {
        opening_L_A.style.display = 'none';
      }

      if (currentTimeL >= 172) {
        back_L_D.style.display = 'block';
        back_L_D.addEventListener("click", () => {
          if (isVideoVisibleL) {
            ClassL.style.zIndex = "18";
            VideoLElement.currentTime = 0;
            VideoLElement.pause();
            ProgressBarL.style.zIndex = "-18";

            VideoDElement.play();
            ClassD.style.zIndex = "290";
            ProgressBarD.style.zIndex = "1";
            ProgressBarD.style.display = "block";

            console.log('back_L_D');
          }
        });
      } else {
        back_L_D.style.display = 'none';
      }

      if (currentTimeL >= 188) {
        VideoLElement.pause();
      }

      console.log('TimeUpDateL');
    });

    console.log('LoadeddataL');
  });
}

// Insurance M

let ProgressBarM = ProgressBar.cloneNode(true);
ProgressBarM.id = "progress_bar_m";
Container.appendChild(ProgressBarM);
ProgressBarM.style.zIndex = "-12";
ProgressBarM.style.display = "none";

const BackGroundBarM = ProgressBarM.querySelector("#background_bar");
BackGroundBarM.id = "background_bar_m";

const ControlsButtonM = ProgressBarM.querySelector("#controls_button");
ControlsButtonM.id = "controls_button_m";

let PauseBtnM = ControlsButtonM.querySelector("#pause");
PauseBtnM.id = "pause_m";
let PlayBtnM = ControlsButtonM.querySelector("#play");
PlayBtnM.id = "play_m";
ControlsButtonM.appendChild(PauseBtnM);
ControlsButtonM.appendChild(PlayBtnM);

const ProgressP_M = ProgressBarM.querySelector("#progress_p_a");
ProgressP_M.id = "progress_p_m";

let PlayTimeM = ProgressP_M.querySelector("#play_position");
let ProgressM = ProgressP_M.querySelector("#progress");
let EndTimeM = ProgressP_M.querySelector("#end_position");
PlayTimeM.id = "playtime_m";
ProgressM.id = "progress_m";
EndTimeM.id = "endtime_m";

const ContorolsSoundM = ProgressBarM.querySelector("#controls_sound");
ContorolsSoundM.id = "controls_sound_m";

let MuteBtnM = ContorolsSoundM.querySelector("#mute");
let UnmuteBtnM = ContorolsSoundM.querySelector("#unmute");
MuteBtnM.id = "mute_m";
UnmuteBtnM.id = "unmute_m";

let playtimerM = null;

const startTimerM = () => {
  playtimerM = setInterval(() => {
    PlayTimeM.textContent = convertTime(VideoMElement.currentTime);
    ProgressM.value = Math.floor((VideoMElement.currentTime / VideoMElement.duration) * VideoMElement.duration);
  }, 100);
  console.log('startTimerM');
};

let isVideoBoxM = true;

if (isVideoBoxM) {
  VideoMElement.addEventListener('loadeddata', () => {
    const maxDurationM = VideoMElement.duration;

    const formattedDurationM = convertTime(maxDurationM);
    EndTimeM.textContent = `${formattedDurationM}`;

    if (ClassH.style.zIndex = "22") {
      startTimerM();
    }

    PauseBtnM.addEventListener('click', () => {
      VideoMElement.pause();
      stopTimerM();
      PauseBtnM.style.display = 'none';
      PlayBtnM.style.display = 'block';
      console.log('M一時停止をクリックしました');
    });

    PlayBtnM.addEventListener('click', () => {
      startTimerM();
      VideoMElement.play();
      PlayBtnM.style.display = 'none';
      PauseBtnM.style.display = 'block';
      console.log('再生Mアイコンをクリックしました');
    });


    MuteBtnM.addEventListener('click', () => {
      if (VideoMElement.muted) {
        VideoMElement.muted = false;
        MuteBtnM.style.display = 'none';
        UnmuteBtnM.style.display = 'block';
        console.log('Mミュートを解除しました');
      }
    });

    UnmuteBtnM.addEventListener('click', () => {
      if (!VideoMElement.muted) {
        VideoMElement.muted = true;
        UnmuteBtnM.style.display = 'none';
        MuteBtnM.style.display = 'block';
        console.log('Mミュートをクリックしました');
      }
    });

    const stopTimerM = () => {
      VideoMElement.addEventListener("pause", () => {
        clearInterval(playtimerM);
        console.log('stopTimerM');
      });
    };

    ProgressM.addEventListener('input', () => {
      stopTimerM();
      const seekTimeM = calculateSeekTimeM(ProgressM.value);
      if (!isNaN(seekTimeM) && isFinite(seekTimeM) && seekTimeM >= 0 && seekTimeM <= VideoMElement.duration) {
        VideoMElement.currentTime = seekTimeM;
        console.log('Mプログレスバーを操作しました');
      }
    });

    ProgressM.addEventListener('change', () => {
      startTimerM();
      console.log('Mプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeM = (progressValue) => {
      return (progressValue / 100) * VideoMElement.duration;
    };

    const isVideoVisibleM = true;

    VideoMElement.addEventListener('timeupdate', () => {
      const currentTimeM = VideoMElement.currentTime;

      PlayTimeM.textContent = convertTime(VideoMElement.currentTime);
      EndTimeM.textContent = convertTime(VideoMElement.duration);


      if (currentTimeM >= 267) {
        buttonM_Info.style.display = 'block';
        buttonM_Info.addEventListener("click", () => {
          if (isVideoVisibleM) {

            VideoMElement.pause();
            PauseBtnM.style.display = "none";
            PlayBtnM.style.display = "block";
            console.log('buttonM_Info');
          }
        });
      } else {
        buttonM_Info.style.display = 'none';
      }

      if (currentTimeM >= 267) {
        opening_M_A.style.display = 'block';
        opening_M_A.addEventListener("click", () => {
          if (isVideoVisibleM) {
            ClassM.style.zIndex = "17";
            VideoMElement.currentTime = 0;
            VideoMElement.pause();
            ProgressBarM.style.zIndex = "-17";

            VideoAElement.muted = false;
            VideoAElement.play();
            btn_unmute.style.display = "block";
            btn_mute.style.display = "none";
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "1";
            ProgressBar.style.display = "block";

            console.log('opening_M_A');
          }
        });
      } else {
        opening_M_A.style.display = 'none';
      }

      if (currentTimeM >= 267) {
        back_M_H.style.display = 'block';
        back_M_H.addEventListener("click", () => {
          if (isVideoVisibleM) {
            ClassM.style.zIndex = "17";
            VideoMElement.currentTime = 0;
            VideoMElement.pause();
            ProgressBarM.style.zIndex = "-17";

            VideoHElement.play();
            ClassH.style.zIndex = "290";
            ProgressBarH.style.zIndex = "1";
            ProgressBarH.style.display = "block";

            console.log('back_M_H');
          }
        });
      } else {
        back_M_H.style.display = 'none';
      }

      if (currentTimeM >= 283) {
        VideoMElement.pause();
      }

      console.log('TimeUpDateM');
    });

    console.log('LoadeddataM');
  });
}

// Insurance N

let ProgressBarN = ProgressBar.cloneNode(true);
ProgressBarN.id = "progress_bar_n";
Container.appendChild(ProgressBarN);
ProgressBarN.style.zIndex = "-13";
ProgressBarN.style.display = "none";

const BackGroundBarN = ProgressBarN.querySelector("#background_bar");
BackGroundBarN.id = "background_bar_n";

const ControlsButtonN = ProgressBarN.querySelector("#controls_button");
ControlsButtonN.id = "controls_button_n";

let PauseBtnN = ControlsButtonN.querySelector("#pause");
PauseBtnN.id = "pause_n";
let PlayBtnN = ControlsButtonN.querySelector("#play");
PlayBtnN.id = "play_n";
ControlsButtonN.appendChild(PauseBtnN);
ControlsButtonN.appendChild(PlayBtnN);

const ProgressP_N = ProgressBarN.querySelector("#progress_p_a");
ProgressP_N.id = "progress_p_n";

let PlayTimeN = ProgressP_N.querySelector("#play_position");
let ProgressN = ProgressP_N.querySelector("#progress");
let EndTimeN = ProgressP_N.querySelector("#end_position");
PlayTimeN.id = "playtime_n";
ProgressN.id = "progress_n";
EndTimeN.id = "endtime_n";

const ContorolsSoundN = ProgressBarN.querySelector("#controls_sound");
ContorolsSoundN.id = "controls_sound_n";

let MuteBtnN = ContorolsSoundN.querySelector("#mute");
let UnmuteBtnN = ContorolsSoundN.querySelector("#unmute");
MuteBtnN.id = "mute_n";
UnmuteBtnN.id = "unmute_n";

let playtimerN = null;

const startTimerN = () => {
  playtimerN = setInterval(() => {
    PlayTimeN.textContent = convertTime(VideoNElement.currentTime);
    ProgressN.value = Math.floor((VideoNElement.currentTime / VideoNElement.duration) * VideoNElement.duration);
  }, 100);
  console.log('startTimerN');
};

let isVideoBoxN = true;

if (isVideoBoxN) {
  VideoNElement.addEventListener('loadeddata', () => {
    const maxDurationN = VideoNElement.duration;

    const formattedDurationN = convertTime(maxDurationN);
    EndTimeN.textContent = `${formattedDurationN}`;

    if (ClassH.style.zIndex = "22") {
      startTimerN();
    }

    PauseBtnN.addEventListener('click', () => {
      VideoNElement.pause();
      stopTimerN();
      PauseBtnN.style.display = 'none';
      PlayBtnN.style.display = 'block';
      console.log('N一時停止をクリックしました');
    });

    PlayBtnN.addEventListener('click', () => {
      startTimerN();
      VideoNElement.play();
      PlayBtnN.style.display = 'none';
      PauseBtnN.style.display = 'block';
      console.log('再生Nアイコンをクリックしました');
    });


    MuteBtnN.addEventListener('click', () => {
      if (VideoNElement.muted) {
        VideoNElement.muted = false;
        MuteBtnN.style.display = 'none';
        UnmuteBtnN.style.display = 'block';
        console.log('Nミュートを解除しました');
      }
    });

    UnmuteBtnN.addEventListener('click', () => {
      if (!VideoNElement.muted) {
        VideoNElement.muted = true;
        UnmuteBtnN.style.display = 'none';
        MuteBtnN.style.display = 'block';
        console.log('Nミュートをクリックしました');
      }
    });

    const stopTimerN = () => {
      VideoNElement.addEventListener("pause", () => {
        clearInterval(playtimerN);
        console.log('stopTimerN');
      });
    };

    ProgressN.addEventListener('input', () => {
      stopTimerN();
      const seekTimeN = calculateSeekTimeN(ProgressN.value);
      if (!isNaN(seekTimeN) && isFinite(seekTimeN) && seekTimeN >= 0 && seekTimeN <= VideoNElement.duration) {
        VideoNElement.currentTime = seekTimeN;
        console.log('Nプログレスバーを操作しました');
      }
    });

    ProgressN.addEventListener('change', () => {
      startTimerN();
      console.log('Nプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeN = (progressValue) => {
      return (progressValue / 100) * VideoNElement.duration;
    };

    const isVideoVisibleN = true;

    VideoNElement.addEventListener('timeupdate', () => {
      const currentTimeN = VideoNElement.currentTime;

      PlayTimeN.textContent = convertTime(VideoNElement.currentTime);
      EndTimeN.textContent = convertTime(VideoNElement.duration);


      if (currentTimeN >= 278) {
        buttonN_Info.style.display = 'block';
        buttonN_Info.addEventListener("click", () => {
          if (isVideoVisibleN) {

            VideoNElement.pause();
            PauseBtnN.style.display = "none";
            PlayBtnN.style.display = "block";
            console.log('buttonN_Info');
          }
        });
      } else {
        buttonN_Info.style.display = 'none';
      }

      if (currentTimeN >= 278) {
        opening_N_A.style.display = 'block';
        opening_N_A.addEventListener("click", () => {
          if (isVideoVisibleN) {
            ClassN.style.zIndex = "16";
            VideoNElement.currentTime = 0;
            VideoNElement.pause();
            ProgressBarN.style.zIndex = "-16";

            VideoAElement.muted = false;
            VideoAElement.play();
            btn_unmute.style.display = "block";
            btn_mute.style.display = "none";
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "1";
            ProgressBar.style.display = "block";

            console.log('opening_N_A');
          }
        });
      } else {
        opening_N_A.style.display = 'none';
      }

      if (currentTimeN >= 278) {
        back_N_H.style.display = 'block';
        back_N_H.addEventListener("click", () => {
          if (isVideoVisibleN) {
            ClassN.style.zIndex = "16";
            VideoNElement.currentTime = 0;
            VideoNElement.pause();
            ProgressBarN.style.zIndex = "-16";

            VideoHElement.play();
            ClassH.style.zIndex = "290";
            ProgressBarH.style.zIndex = "1";
            ProgressBarH.style.display = "block";

            console.log('back_N_H');
          }
        });
      } else {
        back_N_H.style.display = 'none';
      }

      if (currentTimeN >= 294) {
        VideoNElement.pause();
      }

      console.log('TimeUpDateN');
    });

    console.log('LoadeddataN');
  });
}

// Insurance O

let ProgressBarO = ProgressBar.cloneNode(true);
ProgressBarO.id = "progress_bar_o";
Container.appendChild(ProgressBarO);
ProgressBarO.style.zIndex = "-14";
ProgressBarO.style.display = "none";

const BackGroundBarO = ProgressBarO.querySelector("#background_bar");
BackGroundBarO.id = "background_bar_o";

const ControlsButtonO = ProgressBarO.querySelector("#controls_button");
ControlsButtonO.id = "controls_button_o";

let PauseBtnO = ControlsButtonO.querySelector("#pause");
PauseBtnO.id = "pause_o";
let PlayBtnO = ControlsButtonO.querySelector("#play");
PlayBtnO.id = "play_o";
ControlsButtonO.appendChild(PauseBtnO);
ControlsButtonO.appendChild(PlayBtnO);

const ProgressP_O = ProgressBarO.querySelector("#progress_p_a");
ProgressP_O.id = "progress_p_o";

let PlayTimeO = ProgressP_O.querySelector("#play_position");
let ProgressO = ProgressP_O.querySelector("#progress");
let EndTimeO = ProgressP_O.querySelector("#end_position");
PlayTimeO.id = "playtime_o";
ProgressO.id = "progress_o";
EndTimeO.id = "endtime_o";

const ContorolsSoundO = ProgressBarO.querySelector("#controls_sound");
ContorolsSoundO.id = "controls_sound_o";

let MuteBtnO = ContorolsSoundO.querySelector("#mute");
let UnmuteBtnO = ContorolsSoundO.querySelector("#unmute");
MuteBtnO.id = "mute_o";
UnmuteBtnO.id = "unmute_o";

let playtimerO = null;

const startTimerO = () => {
  playtimerO = setInterval(() => {
    PlayTimeO.textContent = convertTime(VideoOElement.currentTime);
    ProgressO.value = Math.floor((VideoOElement.currentTime / VideoOElement.duration) * VideoOElement.duration);
  }, 100);
  console.log('startTimerO');
};

let isVideoBoxO = true;

if (isVideoBoxO) {
  VideoOElement.addEventListener('loadeddata', () => {
    const maxDurationO = VideoOElement.duration;

    const formattedDurationO = convertTime(maxDurationO);
    EndTimeO.textContent = `${formattedDurationO}`;

    if (ClassI.style.zIndex = "21") {
      startTimerO();
    }

    PauseBtnO.addEventListener('click', () => {
      VideoOElement.pause();
      stopTimerO();
      PauseBtnO.style.display = 'none';
      PlayBtnO.style.display = 'block';
      console.log('O一時停止をクリックしました');
    });

    PlayBtnO.addEventListener('click', () => {
      startTimerO();
      VideoOElement.play();
      PlayBtnO.style.display = 'none';
      PauseBtnO.style.display = 'block';
      console.log('再生Oアイコンをクリックしました');
    });


    MuteBtnO.addEventListener('click', () => {
      if (VideoOElement.muted) {
        VideoOElement.muted = false;
        MuteBtnO.style.display = 'none';
        UnmuteBtnO.style.display = 'block';
        console.log('Oミュートを解除しました');
      }
    });

    UnmuteBtnO.addEventListener('click', () => {
      if (!VideoOElement.muted) {
        VideoOElement.muted = true;
        UnmuteBtnO.style.display = 'none';
        MuteBtnO.style.display = 'block';
        console.log('Oミュートをクリックしました');
      }
    });

    const stopTimerO = () => {
      VideoOElement.addEventListener("pause", () => {
        clearInterval(playtimerO);
        console.log('stopTimerO');
      });
    };

    ProgressO.addEventListener('input', () => {
      stopTimerO();
      const seekTimeO = calculateSeekTimeO(ProgressO.value);
      if (!isNaN(seekTimeO) && isFinite(seekTimeO) && seekTimeO >= 0 && seekTimeO <= VideoOElement.duration) {
        VideoOElement.currentTime = seekTimeO;
        console.log('Oプログレスバーを操作しました');
      }
    });

    ProgressO.addEventListener('change', () => {
      startTimerO();
      console.log('Oプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeO = (progressValue) => {
      return (progressValue / 100) * VideoOElement.duration;
    };

    const isVideoVisibleO = true;

    VideoOElement.addEventListener('timeupdate', () => {
      const currentTimeO = VideoOElement.currentTime;

      PlayTimeO.textContent = convertTime(VideoOElement.currentTime);
      EndTimeO.textContent = convertTime(VideoOElement.duration);


      if (currentTimeO >= 146) {
        buttonO_Info.style.display = 'block';
        buttonO_Info.addEventListener("click", () => {
          if (isVideoVisibleO) {

            VideoOElement.pause();
            PauseBtnO.style.display = "none";
            PlayBtnO.style.display = "block";
            console.log('buttonO_Info');
          }
        });
      } else {
        buttonO_Info.style.display = 'none';
      }

      if (currentTimeO >= 146) {
        opening_O_A.style.display = 'block';
        opening_O_A.addEventListener("click", () => {
          if (isVideoVisibleO) {
            ClassO.style.zIndex = "15";
            VideoOElement.currentTime = 0;
            VideoOElement.pause();
            ProgressBarO.style.zIndex = "-15";

            VideoAElement.muted = false;
            VideoAElement.play();
            btn_unmute.style.display = "block";
            btn_mute.style.display = "none";
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "1";
            ProgressBar.style.display = "block";

            console.log('opening_O_A');
          }
        });
      } else {
        opening_O_A.style.display = 'none';
      }

      if (currentTimeO >= 146) {
        back_O_I.style.display = 'block';
        back_O_I.addEventListener("click", () => {
          if (isVideoVisibleO) {
            ClassO.style.zIndex = "15";
            VideoOElement.currentTime = 0;
            VideoOElement.pause();
            ProgressBarO.style.zIndex = "-15";

            VideoIElement.play();
            ClassI.style.zIndex = "290";
            ProgressBarI.style.zIndex = "1";
            ProgressBarI.style.display = "block";

            console.log('back_O_I');
          }
        });
      } else {
        back_O_I.style.display = 'none';
      }

      if (currentTimeO >= 162) {
        VideoOElement.pause();
      }

      console.log('TimeUpDateO');
    });

    console.log('LoadeddataO');
  });
}

// Insurance P

let ProgressBarP = ProgressBar.cloneNode(true);
ProgressBarP.id = "progress_bar_p";
Container.appendChild(ProgressBarP);
ProgressBarP.style.zIndex = "-15";
ProgressBarP.style.display = "none";

const BackGroundBarP = ProgressBarP.querySelector("#background_bar");
BackGroundBarP.id = "background_bar_p";

const ControlsButtonP = ProgressBarP.querySelector("#controls_button");
ControlsButtonP.id = "controls_button_p";

let PauseBtnP = ControlsButtonP.querySelector("#pause");
PauseBtnP.id = "pause_p";
let PlayBtnP = ControlsButtonP.querySelector("#play");
PlayBtnP.id = "play_p";
ControlsButtonP.appendChild(PauseBtnP);
ControlsButtonP.appendChild(PlayBtnP);

const ProgressP_P = ProgressBarP.querySelector("#progress_p_a");
ProgressP_P.id = "progress_p_p";

let PlayTimeP = ProgressP_P.querySelector("#play_position");
let ProgressP = ProgressP_P.querySelector("#progress");
let EndTimeP = ProgressP_P.querySelector("#end_position");
PlayTimeP.id = "playtime_p";
ProgressP.id = "progress_p";
EndTimeP.id = "endtime_p";

const ContorolsSoundP = ProgressBarP.querySelector("#controls_sound");
ContorolsSoundP.id = "controls_sound_p";

let MuteBtnP = ContorolsSoundP.querySelector("#mute");
let UnmuteBtnP = ContorolsSoundP.querySelector("#unmute");
MuteBtnP.id = "mute_p";
UnmuteBtnP.id = "unmute_p";

let playtimerP = null;

const startTimerP = () => {
  playtimerP = setInterval(() => {
    PlayTimeP.textContent = convertTime(VideoPElement.currentTime);
    ProgressP.value = Math.floor((VideoPElement.currentTime / VideoPElement.duration) * VideoPElement.duration);
  }, 100);
  console.log('startTimerP');
};

let isVideoBoxP = true;

if (isVideoBoxP) {
  VideoPElement.addEventListener('loadeddata', () => {
    const maxDurationP = VideoPElement.duration;

    const formattedDurationP = convertTime(maxDurationP);
    EndTimeP.textContent = `${formattedDurationP}`;

    if (ClassI.style.zIndex = "21") {
      startTimerP();
    }

    PauseBtnP.addEventListener('click', () => {
      VideoPElement.pause();
      stopTimerP();
      PauseBtnP.style.display = 'none';
      PlayBtnP.style.display = 'block';
      console.log('P一時停止をクリックしました');
    });

    PlayBtnP.addEventListener('click', () => {
      startTimerP();
      VideoPElement.play();
      PlayBtnP.style.display = 'none';
      PauseBtnP.style.display = 'block';
      console.log('再生Pアイコンをクリックしました');
    });


    MuteBtnP.addEventListener('click', () => {
      if (VideoPElement.muted) {
        VideoPElement.muted = false;
        MuteBtnP.style.display = 'none';
        UnmuteBtnP.style.display = 'block';
        console.log('Pミュートを解除しました');
      }
    });

    UnmuteBtnP.addEventListener('click', () => {
      if (!VideoPElement.muted) {
        VideoPElement.muted = true;
        UnmuteBtnP.style.display = 'none';
        MuteBtnP.style.display = 'block';
        console.log('Pミュートをクリックしました');
      }
    });

    const stopTimerP = () => {
      VideoPElement.addEventListener("pause", () => {
        clearInterval(playtimerP);
        console.log('stopTimerP');
      });
    };

    ProgressP.addEventListener('input', () => {
      stopTimerP();
      const seekTimeP = calculateSeekTimeP(ProgressP.value);
      if (!isNaN(seekTimeP) && isFinite(seekTimeP) && seekTimeP >= 0 && seekTimeP <= VideoPElement.duration) {
        VideoPElement.currentTime = seekTimeP;
        console.log('Pプログレスバーを操作しました');
      }
    });

    ProgressP.addEventListener('change', () => {
      startTimerP();
      console.log('Pプログレスバーの操作が完了しました');
    });

    const calculateSeekTimeP = (progressValue) => {
      return (progressValue / 100) * VideoPElement.duration;
    };

    const isVideoVisibleP = true;

    VideoPElement.addEventListener('timeupdate', () => {
      const currentTimeP = VideoPElement.currentTime;

      PlayTimeP.textContent = convertTime(VideoPElement.currentTime);
      EndTimeP.textContent = convertTime(VideoPElement.duration);


      if (currentTimeP >= 240) {
        buttonP_Info.style.display = 'block';
        buttonP_Info.addEventListener("click", () => {
          if (isVideoVisibleP) {

            VideoPElement.pause();
            PauseBtnP.style.display = "none";
            PlayBtnP.style.display = "block";
            console.log('buttonP_Info');
          }
        });
      } else {
        buttonP_Info.style.display = 'none';
      }

      if (currentTimeP >= 240) {
        opening_P_A.style.display = 'block';
        opening_P_A.addEventListener("click", () => {
          if (isVideoVisibleP) {
            ClassP.style.zIndex = "14";
            VideoPElement.currentTime = 0;
            VideoPElement.pause();
            ProgressBarP.style.zIndex = "-14";

            VideoAElement.muted = false;
            VideoAElement.play();
            btn_unmute.style.display = "block";
            btn_mute.style.display = "none";
            ClassA.style.zIndex = "290";
            ProgressBar.style.zIndex = "1";
            ProgressBar.style.display = "block";

            console.log('opening_P_A');
          }
        });
      } else {
        opening_P_A.style.display = 'none';
      }

      if (currentTimeP >= 240) {
        back_P_I.style.display = 'block';
        back_P_I.addEventListener("click", () => {
          if (isVideoVisibleP) {
            ClassP.style.zIndex = "14";
            VideoPElement.currentTime = 0;
            VideoPElement.pause();
            ProgressBarP.style.zIndex = "-14";

            VideoIElement.play();
            ClassI.style.zIndex = "290";
            ProgressBarI.style.zIndex = "1";
            ProgressBarI.style.display = "block";

            console.log('back_P_I');
          }
        });
      } else {
        back_P_I.style.display = 'none';
      }

      if (currentTimeP >= 255) {
        VideoPElement.pause();
      }

      console.log('TimeUpDateP');
    });

    console.log('LoadeddataP');
  });
}