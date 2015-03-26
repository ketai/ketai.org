---
title: NFC Read
excerpt: This example illustrates the use of NFC Read
date: 02/01/2015
---
#### NFC Read
This example illustrates the use of NFC Read


---
<div class="link">[<i class="fa fa-download fa-lg"></i> NFCRead.pde](NFCRead.pde)</div>

    import android.content.Intent;
    import android.os.Bundle;

     
    import ketai.net.nfc.*;

    String textRead = "";
    KetaiNFC ketaiNFC;

    void setup()
    {   
      orientation(LANDSCAPE);
      textAlign(CENTER, CENTER);
      textSize(36);
    }

    void draw()
    {
      background(78, 93, 75);
      text("Last tag read:\n"+ textRead, width/2, height/2);
      text("<Touch tag to read>", width/2, height-35);
    }

    void onNFCEvent(String txt)
    {
      textRead = txt;
    }


    //set our write string....
    void mousePressed()
    {
      ketaiNFC.write("" + millis());
    }


    //Press any key to cancel write
    void keyPressed()
    {
      ketaiNFC.cancelWrite();
    }
---
<div class="link">[<i class="fa fa-download fa-lg"></i> ActivityCode.pde](ActivityCode.pde)</div>

    /*
      The following code allows the sketch to handle all NFC events
     when it is running.  Eventually we would like to handle this
     in a more elegant manner for now cut'n'paste will suffice.  
     */
    //====================================================================
    public void onCreate(Bundle savedInstanceState) { 
      super.onCreate(savedInstanceState);
      ketaiNFC = new KetaiNFC(this);
    }

    public void onNewIntent(Intent intent) { 
      if (ketaiNFC != null)
        ketaiNFC.handleIntent(intent);
    }

    //====================================================================

<!-- * **Screenshot** -->
 