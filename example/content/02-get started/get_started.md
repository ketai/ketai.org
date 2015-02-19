---
title: Get Started
---
####What You Need
To use the library for Processing, make sure your setup meets the following minimum requirements:- <br>
• <a href="https://processing.org/download/" >Processing 2.06 <a><br>
• Java 1.6 <br>
• Android 4.0 Ice Cream Sandwich <br>
The newer versions of the requirements will be fine. 

####Steps
1. Install Android SDK. Follow the steps outlined in Processing Android Wiki at <a href="http://wiki.processing.org/w/Android#Instructions" target="_blank">http://wiki.processing.org/w/Android#Instructions</a> 

2. Check your device's Android Version. Accordingly, determine the Ketai library version you need to use. (Ketai version for Ice Cream Sandwich 4.0 or Jelly Bean 4.1, vs. Ketai for Gingerbread 2.33 or Honeycomb 3.0)

3. If you have Android versions 4.0 or higher, you can install the library release from within Processing IDE. Go to Sketch-> Add Library -> Import Library and search for "Ketai". Select the library and click on install.

4. Android OS might sometimes have dependecies specific to your system setup. To install Windows USB Driver, click <a href="http://developer.android.com/tools/extras/oem-usb.html" target="_blank">here </a>. To setup your device for Linux, follow the instructions <a href="http://developer.android.com/tools/device.html#setting-up" target="_blank">here.</a>


Follow the steps outlined in the Processing Android Wiki at <a href="http://wiki.processing.org/w/Android#Instructions" target="_blank">http://wiki.processing.org/w/Android#Instructions</a> to install the Android SDK for your operating system

Check the Android version you've installed on your device (under Settings/About Phone/Android Version). Use this information to determine which Ketai library version you should use (Ketai version for Ice Cream Sandwich 4.0 or Jelly Bean 4.1, vs. Ketai for Gingerbread 2.33 or Honeycomb 3.0)

If you are running 4.0 or higher, you can always get the latest stable library release from within the Processing IDE, selecting Sketch/Add Library.../Import Library) and search for "Ketai". Click "Install" on the right to complete the process.

Android may have dependencies that are specific to your operating system, such as additional device drivers. If you are developing on Windows, follow the USB driver installation instructions available at <a href="http://developer.android.com/tools/extras/oem-usb.html" target="_blank">http://developer.android.com/tools/extras/oem-usb.html</a>. If you are developing on Linux, follow the instructions for setting up your device for development at <a href="http://developer.android.com/tools/device.html#setting-up" target="_blank">http://developer.android.com/tools/device.html#setting-up</a>

#### Write your first sketch
Go ahead and launch Processing from the applications directory. The Process- ing IDE launches, opening an empty sketch window, as shown in Figure 2, The Processing IDE, on page 7.
Since you’ve launched the application for the first time, Processing has just created a sketchbook folder for you, which is located in Documents on the hard drive, independent of the OS you are developing on. I recommend you save all your sketches to this location. Then Processing can list them for you
9. http://processing.org/learning/gettingstarted/
10. http://developer.android.com/sdk/installing.html
11. http://docs.oracle.com/javase/7/docs/webnotes/install/
Chapter 1. Getting Started • 6
￼￼￼￼￼￼￼￼￼￼￼￼Prepared exclusively for Daniel Sauter
report erratum • discuss
Write Your First Android Sketch • 7
￼￼Figure 2—The Processing IDE. We edit Processing code directly within the Processing IDE sketch window, as shown here.
within the IDE (click the “Open...” toolbar button). Also, when you update to future versions of Processing, the sketchbook loads up exactly the same way as before.
Explore the Processing IDE
The toolbar on top of the sketch window contains the key features of the IDE, with a Run button to launch and a Stop button to stop your apps. Next to those are the New, Save, Open, and Export buttons, which explain themselves pretty well. You can find a more detailed description of the sketchbook and the IDE in the Processing Development Environment tutorial on the Processing website.12
12. http://processing.org/reference/environment/
￼￼￼￼Prepared exclusively for Daniel Sauter
report erratum • discuss
When you start Processing for the first time, it defaults to Java mode, as indicated on the right side of the toolbar. This area also functions as a drop- down menu, allowing us to switch between the different modes the Processing IDE provides. Besides the default Java mode, the drop-down menu in Process- ing 2.0b8 is already preloaded with the Android and JavaScript mode. In the final release of Processing 2.0, this drop-down will be slightly different. You’ll need to add the Android mode, choosing “Add mode...” from the menu. Depending on which mode you’ve selected, the Run and Export buttons on the toolbar produce different results, which are listed next.
Java mode “Run” displays a program window to view the sketch running on the desktop computer. “Export” produces a standalone application for Mac OS, Windows, and Linux independent of the operating system you are developing on.
Android mode “Run” launches the app on the Android device. “Export” creates a Android package for Google Play, a feature currently under development.
JavaScript mode13 “Run” launches a web page in the default browser, with a Processing JavaScript canvas showing the sketch. “Export” creates a web package, including all dependent files for uploading to a web server.
A tab below the toolbar shows the current sketch name, which defaults to one containing the current date if the sketch has not been saved yet. Process- ing prompts us to provide another filename as soon as we save the sketch. The right-arrow button to the right of the tab allows us to add more tabs if we’d like to split the code into separate sections. As sketches grow in scope and complexity, the use of tabs can be a great way to reduce clutter by sepa- rating classes and methods for different purposes into distinct tabs. Each tab is saved as a separate Processing source file, or .pde, in the sketch folder.
The text editor, shown in white below the tab on page 7, is the actual area where we write and edit code. The line number of our current cursor location within the code is shown at the very bottom of the sketch window.
The message area and console below the text editor provide us with valuable feedback as we develop and debug.
You can always find more information on the key IDE features discussed here, as well as a summary of the installation, on the Learning page of the Processing website.14

####Documentation
Library Examples and JavaDocs are included in the library zip folder. The following book includes a comprehensive introduction to the Ketai library with more than 40 projects.

The book comes with project source code, and is available at the The Pragmatic Bookshelf

![Rapid Android Development](image.jpg)