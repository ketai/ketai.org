---
title: Gyroscope
excerpt: This example illustrates the use of Gyroscope
date: 02/01/2015
---
#### Gyroscope
This example illustrates the use of Gyroscope


---
<div class="link">[<i class="fa fa-download fa-lg"></i> Gyroscope.pde](Gyroscope.pde)</div>

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

 <!-- * **Screenshot** -->
 