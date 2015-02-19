---
title: Test class
excerpt: This is the excerpt from the project.
date: 01/01/2012
---
#### Heading ()

##### `function myFunc(int one, String two, Object... three)`

This is an exemplary description and there should be no line break before this line. 

But in front of this line, there should be a line break because we interpret the double newline in the source as one. 



Wrapping in p-tags with closing tag should be possible, too, and make no difference to the single p-tag ... 

Except for this text which will have a line break before, of course.

 * **Parameters:**
   * `one` — the first parameter (type is always inferred)
   * `two` — the second parameter (type is always inferred)
   * `three` — the third parameter (type is always inferred)
 * **Returns:** some arbitrary return value (with inferred type)
 * **Author:**
   * John Doe (john.doe@example.org)
   * Jane Doe (@jane)
 * **License:** GPL
 * **Since:** 1.0
 * **See also:** otherFunc

##### `public class MyClass`

You can document classes as well (and docs may have wrong indentation)

##### `private static Object boringFunc()`

The description may even be single-line and followed by a blank line

<textarea id="code" class="codesnippet">
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

 