---
title: Face Detector
excerpt: This is the excerpt from the project.
date: 01/01/2012
---
#### Face Detector

Facedetector provides a face detector on android:<br>
&nbsp;- Wraps android face detection<br>
&nbsp;- Makes it available to any PImage<br>


Download and copy to 'data' folder of the sketch : <br>
&nbsp;- <a href="data/faces.jpg">faces.jpg<br>


<textarea id="code" class="codesnippet">
import ketai.cv.facedetector.*;

PImage myImage;
int MAX_FACES = 20;
KetaiSimpleFace[] faces = new KetaiSimpleFace[MAX_FACES];

void setup()
{
  orientation(PORTRAIT);
  stroke(0, 255, 0);
  strokeWeight(2);
  noFill();
  rectMode(CENTER);
  noLoop();
  
  myImage = loadImage("faces.jpg");
}

void draw()
{
  faces = KetaiFaceDetector.findFaces(myImage, MAX_FACES); 

  image(myImage, 0, 0);
  
  for (int i=0; i < faces.length; i++)
  {
    //We only get the distance between the eyes so we base our bounding box off of that 
    rect(faces[i].location.x, faces[i].location.y, 2.5*faces[i].distance, 3*faces[i].distance);
  }
}
</textarea>

Test
 * **Screenshot**
 