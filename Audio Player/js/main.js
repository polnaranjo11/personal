// Save our video tag in a variable
var video_tag = document.getElementById('videoshort');


//Function that plays video
function playVideo(){
    video_tag.play();
}
//Function that stops video
function stopVideo(){
    video_tag.pause();
    video_tag.currentTime = 0;
}
//Function that pauses video
function pauseVideo(){
    video_tag.pause();
}

//Event that listen when video updates time
video_tag.addEventListener("timeupdate",function(){
    //2 ways --> this.currentTime || variablename.currentTime
    //console.log(this.currentTime)
    console.log(video_tag.currentTime);
    console.log(video_tag.currentTime);
})

function skip1(){
    video_tag.currentTime += -5;
}     
function skip2(){
    video_tag.currentTime += 5;
}     