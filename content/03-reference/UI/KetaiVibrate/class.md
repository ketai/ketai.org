#### KetaiVibrate

##### ` class KetaiVibrate`

The KetaiVibrate Class allows access to the vibration motor service.

##### ` KetaiVibrate(PApplet _parent)`

Instantiates a new ketai vibrate.

 * **Parameters:** `_parent` — the PApplet/sketch

##### ` boolean hasVibrator()`

Checks for vibrator.

 * **Returns:** true, if successful

##### ` void vibrate()`

Vibrate.

##### ` void vibrate(long _duration)`

Vibrate.

 * **Parameters:** `_duration` — the _duration in millis

##### ` void vibrate(long[] pattern, int repeat)`

Vibrate.

 * **Parameters:**
   * `pattern` — the pattern, off/on values in an array, in millis
   * `repeat` — the repeat

##### ` void stop()`

Stop.
