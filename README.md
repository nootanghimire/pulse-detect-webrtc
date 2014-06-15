Pulse Detector using WebRTCs
==================

Inspired by https://github.com/thearn/webcam-pulse-detector and current advancements in WebRTCs, I am set out to create an completely javascript based pulse detector. 

This uses https://github.com/mtschirs/js-objectdetect to correctly detect the face, seperate the forehead, and then do calculations. 

Calculation
=======

Calculation is done using dsp.js ( https://github.com/corbanbrook/dsp.js ), which is a javascript signal processing library. First, forehead area is seperated and then optical average intensity in green channel is calculated. (Optical Average Intensity = Average Green Values over forehead Area). The data is collected for some seconds, and then Fast Fourier Transform is applied to the discrete data. From the result, the peak in 0.8-3Hz range is considered to be the heartbeat.

There are many things that can be improved in the current version of this application. Please file issues, and send pull requests! 



Thank you!
