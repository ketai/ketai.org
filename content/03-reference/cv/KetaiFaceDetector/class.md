#### KetaiFaceDetector

##### `public class KetaiFaceDetector`

KetaiFaceDetector wraps the android face detection api. The android face finding relies on eye detection and has limited accuracy but provides basic face detection without any external dependencies.

##### `public static KetaiSimpleFace[] findFaces(PImage _image, int MAX_FACES)`

Find faces. 

image to find faces in the maximum number faces to find

 * **Parameters:**
   * `_image` — 
   * `MAX_FACES` — 
 * **Returns:** the ketai simple face[] - array of faces found

##### `public static KetaiSimpleFace[] findFaces(KetaiCamera _image)`

Find faces (max 5). 

- image to find faces in.

 * **Parameters:** `_image` — 
 * **Returns:** the ketai simple face[]
