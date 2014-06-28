Demo: (Tested in Firefox (latest) and Chrome )
1. http://github.nootan.com.np/pulse-detect-webrtc/webcam.html
2. http://github.nootan.com.np/pulse-detect-webrtc/webcam_debug.html (Displays debug code)

----------------------------------

Pulse Detector using WebRTCs
==================

Inspired by https://github.com/thearn/webcam-pulse-detector and current advancements in WebRTCs, I am set out to create an completely javascript based pulse detector. 

This uses https://github.com/mtschirs/js-objectdetect to correctly detect the face, seperate the forehead, and then do calculations. 

**Currently showing errorenous output! (Might be because of noise, or maybe some implementation error)**

Calculation
=======

Calculation is done using dsp.js ( https://github.com/corbanbrook/dsp.js ), which is a javascript signal processing library. First, forehead area is seperated and then optical average intensity in green channel is calculated. (Optical Average Intensity = Average Green Values over forehead Area). The data is collected for some seconds, and then Fast Fourier Transform is applied to the discrete data. From the result, the peak in 0.8-3Hz range is considered to be the heartbeat.

There are many things that can be improved in the current version of this application. Please file issues, and send pull requests! 


Rough Algorithm
====

Here I'll desribe step-by-step how this software runs under the hood.

1. User is asked to allow Video Streaming (FF Does this)
2. Around 15 seconds is waited to allow user to fix his/her position and to get the camera's white balance
3. 16 images are stored in 16 pre-defined canvases per 100 millisecond.
4. Face is detected on all these 16 images, and forehead area is detected.
5. The average pixel value of the area is counted
6. Those 16 data are sent to FFT algorithm (DSP.js) 
7. The result is filtered (0.8 - 3 Hz range)
8. The maximum Value is displayed to the user.





Thank you!
