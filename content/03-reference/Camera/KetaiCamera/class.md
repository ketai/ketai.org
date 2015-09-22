#### KetaiCamera

##### ` class KetaiCamera extends PImage`

The Class KetaiCamera allows the processing sketches to access android cameras through an object modeled after the desktop/java processing Camera class.

##### ` boolean isStarted, requestedStart, enableFlash,    isRGBPreviewSupported`

The is rgb preview supported.

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

##### ` KetaiCamera(PApplet pParent, int _width, int _height,    int _framesPerSecond)`

Instantiates a new ketai camera. 

reference to the main sketch(Activity) width of the camera image height of the camera image the frames per second

 * **Parameters:**
   * `pParent` — 
   * `_width` — 
   * `_height` — 
   * `_framesPerSecond` — 

##### ` void manualSettings()`

Manual settings - attempt to disable "auto" adjustments (like focus, white balance, etc).

##### ` void setZoom(int _zoom)`

Sets the zoom. 

the new zoom

 * **Parameters:** `_zoom` — 

##### ` int getZoom()`

Gets the zoom.

 * **Returns:** the zoom

##### ` void autoSettings()`

Auto settings - set camera to use auto adjusting settings

##### ` String dump()`

Dump out camera settings into a single string.

 * **Returns:** the string

##### ` void setSaveDirectory(String _dirname)`

Sets the save directory for image/photo settings 

the new save directory

 * **Parameters:** `_dirname` — 

##### ` int getPhotoWidth()`

Gets the photo width which may be different from the camera preview width since photo quality can be better than preview/camera image.

 * **Returns:** the photo width

##### ` int getPhotoHeight()`

Gets the photo height which may be different from the camera preview width since photo quality can be better than preview/camera image.

 * **Returns:** the photo height

##### ` void setPhotoSize(int width, int height)`

Sets the photo dimensions. Photo dimensions default to camera preview dimensions but can be set for higher quality. Typically camera preview dimensions should be smaller than photo dimensions. 

the width the height

 * **Parameters:**
   * `width` — 
   * `height` — 

##### ` void enableFlash()`

Enable flash.

##### ` void disableFlash()`

Disable flash.

##### ` void setCameraID(int _id)`

Sets the camera id for devices that support multiple cameras. 

the new camera id

 * **Parameters:** `_id` — 

##### ` int getCameraID()`

Gets the camera id.

 * **Returns:** the camera id

##### ` boolean start()`

Start the camera preview. Call this in order to start the camera preview updates. This will deliver pixels from the camera to the parent sketch.

 * **Returns:** true, if successful

##### ` boolean isFlashEnabled()`

Checks if flash is enabled.

 * **Returns:** true, if flash is enabled

##### ` boolean savePhoto()`

Saves photo to the file system using default settings (

 * **Returns:** true, if successful

##### ` boolean savePhoto(String _filename)`

Save photo to the file system using the name provided. 

the _filename

 * **Parameters:** `_filename` — 
 * **Returns:** true, if successful

##### ` void resume()`

Resume.

##### ` synchronized void read()`

Read the pixels from the camera.

##### ` boolean isStarted()`

Checks if the camera has been started.

 * **Returns:** true, if is started

##### `int lastProcessedFrame = 0`

The last processed frame.

##### `PreviewCallback previewcallback = new PreviewCallback()`

The previewcallback.

##### ` void addToMediaLibrary(String _file)`

Adds the file to media library so that other applications can access it. 

the _file

 * **Parameters:** `_file` — 

##### ` void pause()`

Pause the class as since the activity is being paused.

##### ` void stop()`

Stop the camera from receiving updates.

##### ` void dispose()`

Dispose.

##### ` void decodeYUV420SP(byte[] yuv420sp)`

Decode yuv420 sp. 

the yuv420sp

 * **Parameters:** `yuv420sp` — 

##### ` int getNumberOfCameras()`

Gets the number of cameras.

 * **Returns:** the number of cameras

##### ` Collection<? extends String> list()`

List available cameras.

 * **Returns:** the collection<? extends string>

##### ` void onFrameAvailable(SurfaceTexture arg0)`

On frame available callback, used by the camera service. 

the arg0

 * **Parameters:** `arg0` — 
