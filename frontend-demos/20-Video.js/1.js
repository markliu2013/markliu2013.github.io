let video = document.getElementById("my-video");
let audio = document.getElementById("my-audio");

if (video) {
  let videoPlay = video.play();
  videoPlay.then(()=>{
    console.log('可以自动播放');
  }).catch((err)=>{
    console.log(err);
    console.log("不允许自动播放");

    //视频元素可以选择静音后再播放,提示用户打开声音
    video.muted=true;
    video.play();

    //也可以在用户交互后调用.play()
    // ...
  });
}

if (audio) {
  let audioPlay = audio.play();
  audioPlay.then(()=>{
    console.log('可以自动播放');
  }).catch((err)=>{
    console.log(err);
    console.log("不允许自动播放");

    //音频元素只在用户交互后调用.play(),
    // ...
  });
}