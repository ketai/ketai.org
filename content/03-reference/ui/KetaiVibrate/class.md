####KetaiVibrate

##### `public class KetaiVibrate`

The KetaiVibrate Class allows access to the vibration motor service.

##### `private PApplet parent`

The parent.

##### `private Vibrator vibe`

The vibe.

##### `public KetaiVibrate(PApplet _parent)`

Instantiates a new ketai vibrate.

 * **Parameters:** `_parent` — the PApplet/sketch

##### `public boolean hasVibrator()`

Checks for vibrator.

 * **Returns:** true, if successful

##### `public void vibrate()`

Vibrate.

##### `public void vibrate(long _duration)`

Vibrate.

 * **Parameters:** `_duration` — the _duration in millis

##### `public void vibrate(long[] pattern, int repeat)`

Vibrate.

 * **Parameters:**
   * `pattern` — the pattern, off/on values in an array, in millis
   * `repeat` — the repeat

##### `public void stop()`

Stop.
