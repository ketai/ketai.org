---
title: WiFi Direct - Remote Cursor
excerpt: This is the excerpt from the project.
date: 01/01/2012
---
#### WiFi Direct - Remote Cursor

WiFiDirect.pde
<textarea id="code" class="codesnippet">
import android.os.Bundle;
 
import ketai.net.wifidirect.*;

import ketai.net.*;
import ketai.ui.*;
import oscP5.*;
import netP5.*;

KetaiWiFiDirect net;

String info = "";
ArrayList<String> devices = new ArrayList();
boolean isConfiguring = true;
String UIText;
OscP5 oscP5;
String clientip = "";
KetaiList connectionList;
PVector remoteCursor = new PVector();

void setup()
{   
  orientation(PORTRAIT);
  background(78, 93, 75);
  stroke(255);
  textSize(24);

  UIText =  "d - discover devices\n" +
    "c - connect to device\n     from peer list.\n" +
    "i - show net information\n" +
    "o - start OSC Server\n" + 
    "p - list paired devices\n" + 
    "r - reset all connections\n" ;

  //register for key events(keyPressed currently Broken)
  //registerMethod("keyEvent", this);
}

void draw()
{
  background(78, 93, 75);
  if (isConfiguring)
  {
    info="";
    //based on last key pressed lets display
    //  appropriately
    if (key == 'i')
      info = getNetInformation();
    if (key == 'd')
    {
      info = "Discovered Devices:\n";
      devices = net.getPeerNameList();
      for (int i=0; i < devices.size(); i++)
      {
        info += "["+i+"] "+devices.get(i).toString() + "\t\t"+devices.size()+"\n";
      }
    }
    else if (key == 'p')
    {
      info += "Peers: \n";
      for (String s:net.getPeerNameList())
        info+= "\t" + s + "\n";
    }
    text(UIText + "\n\n" + info, 5, 90);
  }
  else
  {
    pushStyle();
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 20, 20);
    fill(255, 0, 0);
    ellipse(remoteCursor.x, remoteCursor.y, 20, 20);
    popStyle();
  }
  drawUI();
}

void mousePressed()
{
  //keyboard button -- toggle virtual keyboard
  if (mouseY <= 50 && mouseX > 0 && mouseX < width/3)
    KetaiKeyboard.toggle(this);
  else if (mouseY <= 50 && mouseX > width/3 && mouseX < 2*(width/3)) //config button
  {
    isConfiguring=true;
  }
  else if (mouseY <= 50 && mouseX >  2*(width/3) && mouseX < width) // draw button
  {
    if (isConfiguring)
    {
      isConfiguring=false;
    }
  }
}

void mouseDragged()
{
  if (isConfiguring)
    return;

  OscMessage m = new OscMessage("/remoteCursor/");
  m.add(pmouseX);
  m.add(pmouseY);

  if (oscP5 != null)
  {
    NetAddress myRemoteLocation = null;

    if (clientip != "")
      myRemoteLocation = new NetAddress(clientip, 12000);
    else if (net.getIPAddress() != KetaiNet.getIP())
      myRemoteLocation = new NetAddress(net.getIPAddress(), 12000);

    if (myRemoteLocation != null)
      oscP5.send(m, myRemoteLocation);
  }
}

String getNetInformation()
{
  String Info = "Server Running: ";

  Info += "\n my IP: " + KetaiNet.getIP();
  Info += "\n initiator's IP:  " + net.getIPAddress();

  return Info;
}

void oscEvent(OscMessage m) {

  //lets send stuff back to whoever we got a message from
  if (net.getIPAddress() != m.netAddress().address())
    clientip = m.netAddress().address();

  if (m.checkAddrPattern("/remoteCursor/"))
  {
    if (m.checkTypetag("ii"))
    {
      remoteCursor.x = m.get(0).intValue();
      remoteCursor.y = m.get(1).intValue();
    }
  }
}
</textarea>

<br>
UI.pde
<textarea id="inline1" class="codesnippet">
void drawUI()
{
  //Draw top shelf UI buttons

  pushStyle();
  fill(0);
  stroke(255);
  rect(0, 0, width/3, 50);

  if (isConfiguring)
  {
    noStroke();
    fill(78, 93, 75);
  }
  else
    fill(0);

  rect(width/3, 0, width/3, 50);

  if (!isConfiguring)
  {  
    noStroke();
    fill(78, 93, 75);
  }
  else
  {
    fill(0);
    stroke(255);
  }
  rect((width/3)*2, 0, width/3, 50);

  fill(255);
  text("Keyboard", 5, 30); 
  text("WiFi Direct", width/3+5, 30); 
  text("Interact", width/3*2+5, 30); 

  popStyle();
}

void keyPressed() {
  if (key == 'c')
  {
    if (devices.size() > 0)
      connectionList = new KetaiList(this, devices);
  }
  else if (key == 'd')
  {
    net.discover();
    println("device list contains "  + devices.size() + " elements");
  }
  else if (key == 'i')
    net.getConnectionInfo();
  else if (key == 'o')
  {
    if (net.getIPAddress().length() > 0)
      oscP5 = new OscP5(this, 12000);
  }
  else if (key == 'r')
  {
    if (oscP5 != null)
    {
      oscP5.stop();
      oscP5 = null;
    }
    net.reset();
    clientip = "";
  }
}

void onKetaiListSelection(KetaiList klist)
{
  String selection = klist.getSelection();
  println("CONNECTING FROM LIST TO: " + selection);
  net.connect(selection);
  //dispose of list for now  
  connectionList = null;
}
</textarea>
<br>
ActivityLifecycle.pde
<textarea id="inline2" class="codesnippet">
void onCreate(Bundle savedInstanceState)
{
  super.onCreate(savedInstanceState);

  if(net == null)
    net = new KetaiWiFiDirect(this);    
}
</textarea>



 * **Screenshot**
 