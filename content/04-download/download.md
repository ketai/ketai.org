---
title: Download
---
To download and install the latest version for the library, follow the instructions below.
<hr>

#### Install from Processing IDE
1. Go to Sketch in the Menu bar

2. Add Library 

3. Import Library and search for "Ketai". 

4. Select the library and click on install.

<hr>

#### [<i class="fa fa-download"></i> Manually Install v12 ](http://ketailibrary.org/ketai.zip)
1. Navigate to the Processing sketchbook folder.

2. Go to libraries

3. Download the ketai library [zip file](http://ketailibrary.org/ketai.zip). 

4. Extract the contents of the zip file into your libraries folder.

<div class="hover_img">
	<a href="http://ketailibrary.org/ketai.zip">
		<img src="ketai_bw.png" class="top">
		<img src="ketai_color.png" class="bottom">
	</a>
</div>

<div style="position: absolute; margin-top: 230px;">

<!-- <hr> -->

<div class="link" style=" color: #FFF;">[<i class="fa fa-download fa-lg"></i> Archive](https://github.com/ketai/ketai/tree/master/downloads)</div>

<hr>

## Revisions

#### v12 updates
------------
Test Platforms: Android 4.4.2, Android 5.1.1
Test Hardware: Nexus 7, Galaxy 3s, Nexus 6
- updated for version 3 of processing
- NOTE: Currently NFC feature does not function due to a changes in PApplet(extending Fragment instead of Activity)


#### v11 updates
------------
Test Platforms: Android 4.4.2, Android 5.1,
Test Hardware: Nexus 6, Nexus 7(1st gen tablet), galaxy 3s)
- added new sensors(game rotation, step, step counter, significant motion...)
- update for camera aware face detection (still a work-in-progress, front-facing camera)


#### v10 updates
------------
Test platforms : Android 4.1, 4.1.2, 4.0.2, 4.2, 4.3
Test Hardware: Nexus 7, Galaxy 3s, Nexus S, Transformer Prime

- updated jdocs
- added Audio Input class
- added audio input example
- bluetooth fixes


#### v9 updates
------------
Test platforms : Android 4.1, 4.1.2, 4.0.2
Test Hardware: Nexus 7, Galaxy 3s, Nexus S, Transformer Prime

- added method to change location update paramters
- formatted code & JDoc generated for all code
- added method to see if bluetooth is currently in discovery mode
- fixed Camera issue when constructing PImage superclass


#### v8 updates
------------
Test platforms : Android 4.1, 4.1.2, 4.0.2
Test Hardware: Nexus 7, Galaxy 3s, Nexus S, Transformer Prime

- added support for loading external sqlite files
- added registration for resume/pause (updated examples)
- cleaned up debugging prints for camera
- removed sensor disabling due to exceptions(they happen sometimes)
- added ability for camera to remember if it was started through pauses
- forked gingerbread version (tested against 2.3.7 HTC Evo)


#### v7 updates
-------------
Test platforms : Android 4.1, 4.0.2
Test Hardware: Nexus 7, Galaxy 3s, Nexus S, Transformer Prime

- minimum requirement maintained at ICS (also tested with Jellybean)
- added multi-touch UI support (flick/(un-)pinch/tap/double-tap/rotate)
- camera fixes for > 4.0
- removed data capture framework
- virtual keyboard show/hide support
- refactored NFC to better support Beam(tm)
- sqlite support reworked
- vibration motor support
- HW address available from net classes (bt/p2p)
- jdocs updated
- resolved issue 10 https://code.google.com/p/ketai/issues/detail?id=10


#### v6 updates
-------------
- moved to android Ice Cream Sandwich (4.0)
- updated for news Sensors (ambient temp, relative humidity)
- moved android face detection to separate package(cv)
- camera now uses a preview texture(allowed in ICS) to allow proper initialization
- added example for using bluetooth class
- added wifi direct example
- created new OSC message class to allow OSC parsing over serial connections(bluetooth)
- added ui package to allow alert dialogs and lists to be used from sketch
- renamed some packages/classes for consistency


</div>
</div>




<!-- ![Ketai_v10](ketai_v10.png) -->

<!-- <div class="downloadLink"> -->

