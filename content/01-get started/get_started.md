---
title: Get Started
---

#### What You Need
To use ketai, make sure you have the following (or newer) software installed: <br>
<!-- <h4> -->
<div class="sidelist">
<ul>
<li>
- [ Processing 3.0 ](https://processing.org/download/ "Download Processing (current pre-release is 3.0a5)")
</li>
<li>
- [ Java](http://java.com/en/download/ "Download Java 1.7")
</li>
<li>
- [ Android ](http://developer.android.com/sdk/index.html#Other "Android 4.0 Ice Cream Sandwich")
</li>
</ul>
</div>



<hr>
#### Steps
1. Install Android SDK. Follow the steps outlined in Processing Android Wiki at **[http://wiki.processing.org/w/Android#Instructions](http://wiki.processing.org/w/Android#Instructions)**

2. Check your device's Android Version. Accordingly, determine the ke:tai library version you need to use. (ke:tai version for Ice Cream Sandwich 4.0 or Jelly Bean 4.1, vs. ke:tai for Gingerbread 2.33 or Honeycomb 3.0)

3. If you have Android versions 4.0 or higher, you can install the library release from within Processing IDE. Go to Sketch <i class="fa fa-long-arrow-right"></i>Add Library <i class="fa fa-long-arrow-right"></i>Import Library and search for "Ketai". Select the library and click on install.

4. In Processing IDE, choose "Add mode" from the menu to install Android mode.

5. Android OS might sometimes have dependecies specific to your system setup. To install the Windows USB Driver, **[click here](http://developer.android.com/tools/extras/oem-usb.html)**. To setup your device for Linux, follow the instructions **[here](http://developer.android.com/tools/device.html#setting-up).**

<hr>
####  Write your first sketch
1. Launch Processing application. Once it launches an empty sketch window, switch to Android Mode

2. Type the following code in the editor
	
		void setup()
		{
		}
		void draw() {
		        ellipse(mouseX, mouseY, mouseX-pmouseX, mouseY-pmouseY);
		}

3. Put your Android device in "USB Debugging" mode via "Developer options"

4. Plug your device into your computer and run the sketch from Processing. Your sketch should run on the Android Device.

<hr>
####  Look over the RAD example code
1. Go to the **[repository](https://github.com/ketai/rapid-android-development)**.

2. Clone or download a zip of the examples.

3. Open up the enclosed .pde files from within Processing.

4. Make sure you are in "Android Mode" and sucessfully completed all the steps above.

5. Run the program as you would a normal sketch.