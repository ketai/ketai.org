---
title: KetaiGesture
excerpt: Provides gesture recognition services to a processing sketch.
date: 01/02/2015
---
#### KetaiGesture

##### `public class KetaiGesture implements OnGestureListener, OnDoubleTapListener`

Provides gesture recognition services to a processing sketch. To receive gesture events a sketch can define the following methods:<br /><br /> 

void onTap(float x, float y) - x, y location of the tap<br /> void onDoubleTap(float x, float y) - x,y location of double tap<br /> void onFlick(float x, float y, float px, float py, float v) - x,y where flick ended, px,py - where flick began, v - velocity of flick in pixels/sec <br /> void onScroll(int x int y) - not currently used<br /> void onLongPress(float x, float y) - x, y position of long press<br /> void onPinch(float x, float y, float r) - x,y of center, r is the distance change<br /> void onRotate(float x, float y, float a) - x, y of center, a is the angle change in radians<br />

##### `PApplet parent`

The parent.

##### `GestureDetector gestures`

The gestures.

##### `KetaiGesture me`

The me.

##### `Method onDoubleTapMethod, onScrollMethod, onFlickMethod, onTapMethod,    onLongPressMethod, onPinchMethod, onRotateMethod`

The on rotate method.

##### `HashMap<Integer, PVector> cursors = new HashMap<Integer, PVector>()`

The cursors.

##### `HashMap<Integer, PVector> pcursors = new HashMap<Integer, PVector>()`

The pcursors.

##### `public KetaiGesture(PApplet _parent)`

Instantiates a new ketai gesture.

 * **Parameters:** `_parent` — the PApplet/sketch

##### `public void touchEvent(TouchEvent e)`

Touch event.

 * **Parameters:** `e` — the e

##### `public boolean surfaceTouchEvent(MotionEvent event)`

Surface touch event.

 * **Parameters:** `event` — the event
 * **Returns:** true, if successful

##### `private void findParentIntentions()`

Find parent intentions.

##### `private synchronized void analyse()`

Analyse.