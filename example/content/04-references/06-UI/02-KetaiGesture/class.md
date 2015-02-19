---
title: Gesture
tags: tag, another tag
excerpt: This is also an excerpt!
date: 01/01/2012
---
#### Documentation

##### `public class KetaiCamera extends PImage`

The Class KetaiCamera allows the processing sketches to access android cameras through an object modeled after the desktop/java processing Camera class.

##### `private Camera camera`

The camera.

##### `private int[] myPixels`

The my pixels.

##### `protected Method onPreviewEventMethod, onPreviewEventMethodPImage,    onSavePhotoEventMethod, onFaceDetectionEventMethod`

The on face detection event method.

##### `private int frameWidth, frameHeight, cameraFPS, cameraID`

The camera id.

##### `private int photoWidth, photoHeight`

The photo height.

##### `public boolean isStarted, requestedStart, enableFlash,    isRGBPreviewSupported`

The is rgb preview supported.

##### `private String savePhotoPath = ""`

The save photo path.

##### `KetaiCamera self`

The self.

##### `String SAVE_DIR = ""`

The save dir.

##### `boolean available = false`

The available.

##### `boolean supportsFaceDetection = false`

The supports face detection.

##### `SurfaceTexture mTexture`

The m texture.

##### `public KetaiCamera(PApplet pParent, int _width, int _height,    int _framesPerSecond)`

This is an exemplary description and there should be no line break before this line. 

But in front of this line, there should be a line break because we interpret the double newline in the source as one. 

The single p-tag should force this to be preceded by a line break as well. 

Wrapping in p-tags with closing tag should be possible, too, and make no difference to the single p-tag ... 

Except for this text which will have a line break before, of course.

 * **Parameters:**
   * `one` — the first parameter (type is always inferred)
   * `two` — the second parameter (type is always inferred)
   * `three` — the third parameter (type is always inferred)
 * **Returns:** some arbitrary return value (with inferred type)
 * **Author:**
   * John Doe (john.doe@example.org)
   * Jane Doe (@jane)
 * **License:** GPL
 * **Since:** 1.0
 * **See also:** otherFunc

##### `public void manualSettings()`

Manual settings - attempt to disable "auto" adjustments (like focus, white balance, etc).

##### `public void setZoom(int _zoom)`

Sets the zoom. 

the new zoom

 * **Parameters:** `_zoom` — 

##### `public int getZoom()`

Gets the zoom.

 * **Returns:** the zoom

##### `public void autoSettings()`

Auto settings - set camera to use auto adjusting settings

##### `public String dump()`

Dump out camera settings into a single string.

 * **Returns:** the string

##### `public void setSaveDirectory(String _dirname)`

Sets the save directory for image/photo settings 

the new save directory

 * **Parameters:** `_dirname` — 

##### `public int getPhotoWidth()`

Gets the photo width which may be different from the camera preview width since photo quality can be better than preview/camera image.

 * **Returns:** the photo width

##### `public int getPhotoHeight()`

Gets the photo height which may be different from the camera preview width since photo quality can be better than preview/camera image.

 * **Returns:** the photo height

##### `public void setPhotoSize(int width, int height)`

Sets the photo dimensions. Photo dimensions default to camera preview dimensions but can be set for higher quality. Typically camera preview dimensions should be smaller than photo dimensions. 

the width the height

 * **Parameters:**
   * `width` — 
   * `height` — 

##### `public void enableFlash()`

Enable flash.

##### `public void disableFlash()`

Disable flash.

##### `public void setCameraID(int _id)`

Sets the camera id for devices that support multiple cameras. 

the new camera id

 * **Parameters:** `_id` — 

##### `public int getCameraID()`

Gets the camera id.

 * **Returns:** the camera id

##### `public boolean start()`

Start the camera preview. Call this in order to start the camera preview updates. This will deliver pixels from the camera to the parent sketch.

 * **Returns:** true, if successful

##### `public boolean isFlashEnabled()`

Checks if flash is enabled.

 * **Returns:** true, if flash is enabled

##### `public boolean savePhoto()`

Saves photo to the file system using default settings (

 * **Returns:** true, if successful

##### `public boolean savePhoto(String _filename)`

Save photo to the file system using the name provided. 

the _filename

 * **Parameters:** `_filename` — 
 * **Returns:** true, if successful

##### `public void resume()`

Resume.

##### `public synchronized void read()`

Read the pixels from the camera.

##### `public boolean isStarted()`

Checks if the camera has been started.

 * **Returns:** true, if is started

##### `int lastProcessedFrame = 0`

The last processed frame.

##### `PreviewCallback previewcallback = new PreviewCallback()`

The previewcallback.

##### `private AutoFocusCallback autofocusCB = new AutoFocusCallback()`

The autofocus cb.

##### `private PictureCallback jpegCallback = new PictureCallback()`

The jpeg callback.

##### `private OnScanCompletedListener myScannerCallback = new OnScanCompletedListener()`

The my scanner callback.

##### `public void addToMediaLibrary(String _file)`

Adds the file to media library so that other applications can access it. 

the _file

 * **Parameters:** `_file` — 

##### `public void pause()`

Pause the class as since the activity is being paused.

##### `public void stop()`

Stop the camera from receiving updates.

##### `public void dispose()`

Dispose.

##### `public void decodeYUV420SP(byte[] yuv420sp)`

Decode yu v420 sp. 

the yuv420sp

 * **Parameters:** `yuv420sp` — 

##### `public int getNumberOfCameras()`

Gets the number of cameras.

 * **Returns:** the number of cameras

##### `public Collection<? extends String> list()`

List available cameras.

 * **Returns:** the collection<? extends string>

##### `private void determineCameraParameters()`

Determine camera parameters based on requested parameters. Tries to get the closest resolution settings.

##### `public void onFrameAvailable(SurfaceTexture arg0)`

On frame available callback, used by the camera service. 

the arg0

 * **Parameters:** `arg0` — 