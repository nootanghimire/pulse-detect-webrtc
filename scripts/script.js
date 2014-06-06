function html5glasses() {
    // Start the clock
    //var elapsed_time = (new Date()).getTime();
    //alert("YAy1");
      im = new Image();
    im.src="profile.jpg";
    //im.src = "ntn.jpg";
      //alert("YAy2");
      canvas = document.getElementById("input"),
      // Get the canvas 2d Context
      ctx = canvas.getContext("2d");
      //alert("YAy3");
      ctx.drawImage(im, 0,0);
      //alert("YAy4");
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
     imagedt = ctx.getImageData(0,0,canvas.width, canvas.height);
    for (var i = 0; i < comp.length; i++) {
      //comp[i].x
      //comp[i].y
      //comp[i].width
      //comp[i].height
      

      canv = createCanvas(comp[i].height*0.2, comp[i].width*0.2);
      //canv = createCanvas(comp[i].height, comp[i].width);
        canv_c = canv.getContext("2d");

      //imgData = canv_c.getImageData(0,0,canv.width, canv.height);
      //var imageObj = new Image();
      //canv_c.drawImage(im,comp[i].x,comp[i].y,comp[i].width, comp[i].height, 0,0,comp[i].width, comp[i].height);

      //TODO: Find the image resolution generally got from getUserMedia. ()

      canv_c.drawImage(im,comp[i].x+((comp[i].width)*0.35),comp[i].y+((comp[i].height*0.15)),comp[i].width*0.2, comp[i].height*0.2, 0,0,comp[i].width, comp[i].height);

      alert(convToGreenChannel(canv));
    }
}

var canvasCount=0;
function createCanvas(height, width){
  alert("Called with height: "+height+" and width: "+width);
  var cn = document.createElement("canvas");
  cn.setAttribute('id','can'+canvasCount);
  cn.setAttribute('height', height);
  cn.setAttribute('width',width);
  canvasCount++;
  document.body.appendChild(cn);
  return cn;
}

/*function setPixel(imageData, x, y, r, g, b, a) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
}*/

function convToGreenChannel(canvas){
  ctx = canvas.getContext("2d");
  imgData = ctx.getImageData(0,0,canvas.width, canvas.height);
  pos=0;
  sum = 0;
  count =0;
  for(y = 0; y<canvas.height; y++){
    for(x=0; x<canvas.width; x++){
      imgData.data[pos++]=0; // r =0
      sum += imgData.data[pos++]
      count++; ; // g = unchanged
      imgData[pos++]=0; //b = 0
      pos++ ; //a = unchanged
    }
  }
  
  ctx.putImageData(imgData,0,0);
  return sum/count;
}

html5glasses();