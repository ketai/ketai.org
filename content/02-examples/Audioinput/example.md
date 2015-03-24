---
title: Audio Input
excerpt: This example illustrates how to use Audio Input
date: 02/01/2015
---
#### Audio Input

This example illustrates how to use Audio Input

---
<div class="link">[<i class="fa fa-download fa-lg"></i> AudioInput. pde](AudioInput.pde)</div>

    import ketai.sensors.*;
    KetaiAudioInput mic;
    short[] data;

    void setup()
    {
      orientation(LANDSCAPE);
      mic = new KetaiAudioInput(this);
      fill(255,0,0);
      textSize(48);
    }


    void draw()
    {
      background(128);
      if (data != null)
      {  
        for (int i = 0; i < data.length; i++)
        {
          if(i != data.length-1)
            line(i, map(data[i], -32768, 32767,height,0), i+1, map(data[i+1], -32768, 32767,height,0));
        }
      }
      
      if(mic.isActive())
        text("READING MIC", width/2, height/2);
      else
        text("NOT READING MIC", width/2, height/2);
      
    }


    void onAudioEvent(short[] _data)
    {
      data= _data;
    }

    void mousePressed()
    {
      if (mic.isActive())
        mic.stop(); 
      else
        mic.start();
    }

 <!-- * **Screenshot** -->
 