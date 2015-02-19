---
title: Gyroscope
excerpt: This is the excerpt from the project.
date: 01/01/2012
---
#### Gyroscope

Facedetector provides a face detector on android:<br>
&nbsp;- Wraps android face detection<br>
&nbsp;- Makes it available to any PImage<br>


<textarea id="code" class="codesnippet">
import ketai.sensors.*;

KetaiSensor sensor;
float rotationX, rotationY, rotationZ;

void setup()
{
  sensor = new KetaiSensor(this);
  sensor.start();
  orientation(PORTRAIT);
  textAlign(CENTER, CENTER);
  textSize(36);
}

void draw()
{
  background(78, 93, 75);
  text("Gyroscope: \n" + 
    "x: " + nfp(rotationX, 1, 3) + "\n" +
    "y: " + nfp(rotationY, 1, 3) + "\n" +
    "z: " + nfp(rotationZ, 1, 3), 0, 0, width, height);
}

void onGyroscopeEvent(float x, float y, float z)
{
  rotationX = x;
  rotationY = y;
  rotationZ = z;
}
</textarea>
Test
 * **Screenshot**
 