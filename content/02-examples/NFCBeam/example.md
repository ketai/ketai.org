---
title: NFC Beam
excerpt: This example illustrates the use of NFC Beam
date: 02/01/2015
---
#### NFC Beam
This example illustrates the use of NFC Beam

---
<div class="link">[<i class="fa fa-download fa-lg"></i> NFCBeam.pde](NFCBeam.pde)</div>

    import android.content.Intent;
    import android.os.Bundle;

    import ketai.net.nfc.*;

    KetaiNFC ketaiNFC;
    String tag="";

    void setup()
    {
      orientation(PORTRAIT);
      textAlign(CENTER);
      textSize(28);
      String d = month()+"/"+day()+"/"+year()+" "+hour()+":"+minute()+":"+second();
      ketaiNFC.beam(d);
    }

    void draw()
    {
      background(128);
      text("Android Beam Example\nTouch two NFC-enabled devices and beam!\nLast Message Read:" + tag, width/2, height/2);
      
      //update beam string everys second'ish...
      if (frameCount % (int)frameRate == 0)
      {
        String d = month()+"/"+day()+"/"+year()+" "+hour()+":"+minute()+":"+second();
        ketaiNFC.beam(d);
      }
    }


    void onNFCEvent(String s) 
    {
      tag = s;
      println("read message: " + s);
    }

    void mousePressed()
    {
      tag = "";
    }
---

<div class="link">[<i class="fa fa-download fa-lg"></i> ActivityCode.pde](ActivityCode.pde)</div>

    public void onCreate(Bundle savedInstanceState) { 
      super.onCreate(savedInstanceState);
      ketaiNFC = new KetaiNFC(this);
    }

    public void onNewIntent(Intent intent) { 
      if (ketaiNFC != null)
        ketaiNFC.handleIntent(intent);
    }


<!-- * **Screenshot** -->
 