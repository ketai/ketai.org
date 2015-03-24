---
title: Getting Camera Started
excerpt: Getting Started with Camera
date: 02/01/2015
---
#### Getting Camera Started

Getting Started with Camera

---
<div class="link">[<i class="fa fa-download fa-lg"></i> CameraGettingStarted. pde](CameraGettingStarted.pde)</div>

	import ketai.camera.*;

	KetaiCamera cam;

	void setup() {
	  orientation(LANDSCAPE);
	  imageMode(CENTER);
	  cam = new KetaiCamera(this, 320, 240, 24);
	}

	void draw() {
	  image(cam, width/2, height/2);
	}

	void onCameraPreviewEvent()
	{
	  cam.read();
	}

	// start/stop camera preview by tapping the screen
	void mousePressed()
	{
	  if (cam.isStarted())
	  {
	    cam.stop();
	  }
	  else
	    cam.start();
	}
	void keyPressed() {
	  if (key == CODED) {
	    if (keyCode == MENU) {
	      if (cam.isFlashEnabled())
	        cam.disableFlash();
	      else
	        cam.enableFlash();
	    }
	  }
	}

 <!-- * **Screenshot** -->
 