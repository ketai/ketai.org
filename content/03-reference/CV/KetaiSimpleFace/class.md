---
title: Simple Face
excerpt: KetaiSimpleFace provide a utility class for faces found by the android face finding service.
date: 02/01/2015
---
#### Simple Face

##### `public class KetaiSimpleFace`

KetaiSimpleFace provide a utility class for faces found by the android face finding service.

##### `public PVector location`

The location.

##### `public float distance`

The distance.

##### `public float confidence`

The confidence.

##### `public KetaiSimpleFace(Face f)`

Instantiates a new ketai simple face.

 * **Parameters:** `f` — the Face found.

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

