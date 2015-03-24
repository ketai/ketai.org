---
title: NFC Write
excerpt: This example illustrates the use of NFC Write
date: 02/01/2015
---
#### NFC Write
This example illustrates the use of NFC Write

---
<div class="link">[<i class="fa fa-download fa-lg"></i> NFCWrite.pde](NFCWrite.pde)</div>

    import android.content.Intent;
    import android.os.Bundle;

    import ketai.net.nfc.*;

    String writeStatus = "";
    KetaiNFC ketaiNFC;

    void setup()
    {   
      orientation(LANDSCAPE);
      textAlign(CENTER, CENTER);
      textSize(36);
      String d = "Ketai writing tag at: " + month()+"/"+day()+"/"+year()+" "+hour()+":"+minute()+":"+second();
      ketaiNFC.write(d);
    }

    void draw()
    {
      background(78, 93, 75);
      text("<Touch tag to write message>\nLast Write Status: "    + writeStatus, width/2, height/2);
      //  if (frameCount % (int)frameRate == 0)
      //  {
      //    println("setting write.");
      //    String d = "Ketai writing tag at: " + month()+"/"+day()+"/"+year()+" "+hour()+":"+minute()+":"+second();
      //    ketaiNFC.write(d);
      //  }
    }

    void mousePressed()
    {
      println("setting write.");
      String d = "Ketai writing tag at: " + month()+"/"+day()+"/"+year()+" "+hour()+":"+minute()+":"+second();
      ketaiNFC.write(d);
      writeStatus = "";
    }

    void onNFCWrite(boolean result, String message)
    {
      if (result)
        writeStatus = "SUCCESS writing tag!";
      else
        writeStatus = message;
    }

    //Press any key to cancel write
    void keyPressed()
    {
      ketaiNFC.cancelWrite();
    }
---
<div class="link">[<i class="fa fa-download fa-lg"></i> ActiveCode.pde](ActiveCode.pde)</div>

    /*
      The following code allows the sketch to handle all NFC events
     when it is running.  Eventually we would like to handle this
     in a more elegant manner for now cut'n'paste will suffice.  
     */
    //====================================================================
    public void onCreate(Bundle savedInstanceState) { 
      ketaiNFC = new KetaiNFC(this);
      super.onCreate(savedInstanceState);
    }

    public void onNewIntent(Intent intent) { 
      if (ketaiNFC != null)
        ketaiNFC.handleIntent(intent);
    }

    //====================================================================

<!-- * **Screenshot** -->
 