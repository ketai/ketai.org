---
title: Face Detector
excerpt: The Class KetaiFace wrap the internal android Face class.
date: 02/01/2015
---
#### Face Detector

##### `public class KetaiFaceDetector`

KetaiFaceDetector wraps the android face detection api. The android face finding relies on eye detection and has limited accuracy but provides basic face detection without any external dependencies.

##### `public static KetaiSimpleFace[] findFaces(PImage _image, int MAX_FACES)`

Find faces.

 * **Parameters:**
   * `_image` — image to find faces in
   * `MAX_FACES` — the maximum number faces to find
 * **Returns:** the ketai simple face[] - array of faces found

##### `public static KetaiSimpleFace[] findFaces(PImage _image)`

Find faces (max 5).

 * **Parameters:** `_image` — - image to find faces in.
 * **Returns:** the ketai simple face[]

<textarea id="code" class="codesnippet">
	This is in class folder

	import ketai.sensors.*;

	KetaiSensor sensor;
	float accelerometerX, accelerometerY, accelerometerZ;

	void setup()
	{
	  sensor = new KetaiSensor(this);
	  sensor.start();
	  orientation(LANDSCAPE);
	  textAlign(CENTER, CENTER);
	  textSize(36);
	}

	void draw()
	{
	  background(78, 93, 75);
	  text("Accelerometer: \n" + 
	    "x: " + nfp(accelerometerX, 1, 3) + "\n" +
	    "y: " + nfp(accelerometerY, 1, 3) + "\n" +
	    "z: " + nfp(accelerometerZ, 1, 3), 0, 0, width, height);
	}

	void onAccelerometerEvent(float x, float y, float z)
	{
	  accelerometerX = x;
	  accelerometerY = y;
	  accelerometerZ = z;
	}
	This is in class folder

	import ketai.sensors.*;

	KetaiSensor sensor;
	float accelerometerX, accelerometerY, accelerometerZ;

	void setup()
	{
	  sensor = new KetaiSensor(this);
	  sensor.start();
	  orientation(LANDSCAPE);
	  textAlign(CENTER, CENTER);
	  textSize(36);
	}

	void draw()
	{
	  background(78, 93, 75);
	  text("Accelerometer: \n" + 
	    "x: " + nfp(accelerometerX, 1, 3) + "\n" +
	    "y: " + nfp(accelerometerY, 1, 3) + "\n" +
	    "z: " + nfp(accelerometerZ, 1, 3), 0, 0, width, height);
	}

	void onAccelerometerEvent(float x, float y, float z)
	{
	  accelerometerX = x;
	  accelerometerY = y;
	  accelerometerZ = z;
	}
	This is in class folder

	import ketai.sensors.*;

	KetaiSensor sensor;
	float accelerometerX, accelerometerY, accelerometerZ;

	void setup()
	{
	  sensor = new KetaiSensor(this);
	  sensor.start();
	  orientation(LANDSCAPE);
	  textAlign(CENTER, CENTER);
	  textSize(36);
	}

	void draw()
	{
	  background(78, 93, 75);
	  text("Accelerometer: \n" + 
	    "x: " + nfp(accelerometerX, 1, 3) + "\n" +
	    "y: " + nfp(accelerometerY, 1, 3) + "\n" +
	    "z: " + nfp(accelerometerZ, 1, 3), 0, 0, width, height);
	}

	void onAccelerometerEvent(float x, float y, float z)
	{
	  accelerometerX = x;
	  accelerometerY = y;
	  accelerometerZ = z;
	}
	This is in class folder

	import ketai.sensors.*;

	KetaiSensor sensor;
	float accelerometerX, accelerometerY, accelerometerZ;

	void setup()
	{
	  sensor = new KetaiSensor(this);
	  sensor.start();
	  orientation(LANDSCAPE);
	  textAlign(CENTER, CENTER);
	  textSize(36);
	}

	void draw()
	{
	  background(78, 93, 75);
	  text("Accelerometer: \n" + 
	    "x: " + nfp(accelerometerX, 1, 3) + "\n" +
	    "y: " + nfp(accelerometerY, 1, 3) + "\n" +
	    "z: " + nfp(accelerometerZ, 1, 3), 0, 0, width, height);
	}

	void onAccelerometerEvent(float x, float y, float z)
	{
	  accelerometerX = x;
	  accelerometerY = y;
	  accelerometerZ = z;
	}
	This is in class folder

	import ketai.sensors.*;

	KetaiSensor sensor;
	float accelerometerX, accelerometerY, accelerometerZ;

	void setup()
	{
	  sensor = new KetaiSensor(this);
	  sensor.start();
	  orientation(LANDSCAPE);
	  textAlign(CENTER, CENTER);
	  textSize(36);
	}

	void draw()
	{
	  background(78, 93, 75);
	  text("Accelerometer: \n" + 
	    "x: " + nfp(accelerometerX, 1, 3) + "\n" +
	    "y: " + nfp(accelerometerY, 1, 3) + "\n" +
	    "z: " + nfp(accelerometerZ, 1, 3), 0, 0, width, height);
	}

	void onAccelerometerEvent(float x, float y, float z)
	{
	  accelerometerX = x;
	  accelerometerY = y;
	  accelerometerZ = z;
	}
	This is in class folder

	import ketai.sensors.*;

	KetaiSensor sensor;
	float accelerometerX, accelerometerY, accelerometerZ;

	void setup()
	{
	  sensor = new KetaiSensor(this);
	  sensor.start();
	  orientation(LANDSCAPE);
	  textAlign(CENTER, CENTER);
	  textSize(36);
	}

	void draw()
	{
	  background(78, 93, 75);
	  text("Accelerometer: \n" + 
	    "x: " + nfp(accelerometerX, 1, 3) + "\n" +
	    "y: " + nfp(accelerometerY, 1, 3) + "\n" +
	    "z: " + nfp(accelerometerZ, 1, 3), 0, 0, width, height);
	}

	void onAccelerometerEvent(float x, float y, float z)
	{
	  accelerometerX = x;
	  accelerometerY = y;
	  accelerometerZ = z;
	}
	This is in class folder

	import ketai.sensors.*;

	KetaiSensor sensor;
	float accelerometerX, accelerometerY, accelerometerZ;

	void setup()
	{
	  sensor = new KetaiSensor(this);
	  sensor.start();
	  orientation(LANDSCAPE);
	  textAlign(CENTER, CENTER);
	  textSize(36);
	}

	void draw()
	{
	  background(78, 93, 75);
	  text("Accelerometer: \n" + 
	    "x: " + nfp(accelerometerX, 1, 3) + "\n" +
	    "y: " + nfp(accelerometerY, 1, 3) + "\n" +
	    "z: " + nfp(accelerometerZ, 1, 3), 0, 0, width, height);
	}

	void onAccelerometerEvent(float x, float y, float z)
	{
	  accelerometerX = x;
	  accelerometerY = y;
	  accelerometerZ = z;
	}
</textarea>
 * **Parameters:** `arg0` — 

