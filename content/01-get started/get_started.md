---
title: Get Started
---
####What You Need
To use the library for Processing, make sure your setup meets the following minimum requirements:- <br>
• **[Processing 3.0 (current pre-release is 3.0a5) <i class="fa fa-download"></i>](https://processing.org/download/)<br>**
• **[Java 1.7 (or “Java 7”)  <i class="fa fa-download"></i>](http://java.com/en/download/)<br>**
• **[Android 4.0 Ice Cream Sandwich](http://developer.android.com/sdk/index.html#Other) <br>**
The newer versions of the requirements will be fine. 

####Steps
1. Install Android SDK. Follow the steps outlined in Processing Android Wiki at **[http://wiki.processing.org/w/Android#Instructions](http://wiki.processing.org/w/Android#Instructions)**

2. Check your device's Android Version. Accordingly, determine the Ketai library version you need to use. (Ketai version for Ice Cream Sandwich 4.0 or Jelly Bean 4.1, vs. Ketai for Gingerbread 2.33 or Honeycomb 3.0)

3. If you have Android versions 4.0 or higher, you can install the library release from within Processing IDE. Go to Sketch-> Add Library -> Import Library and search for "Ketai". Select the library and click on install.

4. In Processing IDE, choose "Add mode" from the menu to install Android mode.

5. Android OS might sometimes have dependecies specific to your system setup. To install Windows USB Driver, **[click here](http://developer.android.com/tools/extras/oem-usb.html)**. To setup your device for Linux, follow the instructions **[here](http://developer.android.com/tools/device.html#setting-up).**

#### Write your first sketch
1. Launch Processing application. Once it launches an empty sketch window, switch to Android Mode

2. Type the following code in the editor
	
		void setup()
		{
		}
		void draw() {
		        ellipse(mouseX, mouseY, mouseX-pmouseX, mouseY-pmouseY);
		}

3. Put your Android device in "USB Debugging" via "Developer options"

4. Plug your device into your Desktop and run the sketch from Processing. Your sketch should run on the Android Device.


####Documentation
The following book includes a comprehensive introduction to the Ketai library with more than 40 projects.

The book comes with project source code, and is available at the **[The Pragmatic Bookshelf](https://pragprog.com/book/dsproc/rapid-android-development)**

![Rapid Android Development](image.jpg)