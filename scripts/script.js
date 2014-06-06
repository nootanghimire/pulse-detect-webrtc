function html5glasses() {
    // Start the clock
    //var elapsed_time = (new Date()).getTime();
 
    // Draw the video to canvas
    //ctx.drawImage(video, 0, 0, video.width, video.height, 0, 0, canvas.width, canvas.height);
    
    //load the image to canvas. 
 
    // use the face detection library to find the face
    // the variable `cascade` from face.js
    var comp = ccv.detect_objects({ "canvas" : (ccv.pre(canvas)),
                                    "cascade" : cascade,
                                    "interval" : 5,
                                    "min_neighbors" : 1 });
 
    // Stop the clock
    //time_dump.innerHTML = "Process time : " + ((new Date()).getTime() - elapsed_time).toString() + "ms";
 
    // Draw glasses on everyone!
    for (var i = 0; i < comp.length; i++) {
        //comp[i].x
        //comp[i].y
        //comp[i].width
        //comp[i].height
    }
}