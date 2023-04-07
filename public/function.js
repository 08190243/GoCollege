// 开关音频
const audioPlay = (audio, audioName, flag) => {
    audio.attr("src", "../public/studio/" + audioName + ".mp3");
    setTimeout(function () {
        flag == true ? audio[0].play() : audio[0].pause();

    }, 150)



}