---
title: Multiple Sensors
excerpt: This is the excerpt from the project.
date: 01/01/2012
---
#### Multiple Sensors

Available sensors/methods 
  
    void onSensorEvent(SensorEvent e) - raw android sensor event 

    void onAccelerometerEvent(float x, float y, float z, long a, int b): x,y,z force in m/s^2, a=timestamp(nanos), b=accuracy

    void onAccelerometerEvent(float x, float y, float z):  x,y,z force in m/s2

    void onOrientationEvent(float x, float y, flaot z, long a, int b):  x,y,z rotation in degrees, a=timestamp(nanos), b=accuracy

    void onOrientationEvent(float x, float y, float z) : x,y,z rotation in degrees

    void onMagneticFieldEvent(float x, float y, float z, long a, int b) : x,y,z geomag field in uT, a=timestamp(nanos), b=accuracy

    void onMagneticFieldEvent(float x, float y, float z): x,y,z geomagnetic field in uT

    void onGyroscopeEvent(float x, float y, float z, long a, int b):x,y,z rotation in rads/sec, a=timestamp(nanos), b=accuracy

    void onGyroscopeEvent(float x, float y, float z): x,y,z rotation in rads/sec

    void onGravityEvent(float x, float y, float z, long a, int b): x,y,z force of gravity in m/s^2, a=timestamp(nanos), b=accuracy

    void onGravityEvent(float x, float y, float z): x,y,z rotation in m/s^s

    void onProximityEvent(float d, long a, int b): d distance from sensor (typically 0,1), a=timestamp(nanos), b=accuracy

    void onProximityEvent(float d): d distance from sensor (typically 0,1)

    void onLightEvent(float d, long a, int b): d illumination from sensor in lx

    void onLightEvent(float d): d illumination from sensor in lx

    void onPressureEvent(float p, long a, int b): p ambient pressure in hPa or mbar, a=timestamp(nanos), b=accuracy

    void onPressureEvent(float p): p ambient pressure in hPa or mbar

    void onTemperatureEvent(float t, long a, int b): t temperature in degrees in degrees Celsius, a=timestamp(nanos), a=timestamp(nanos), b=accuracy

    void onTemperatureEvent(float t): t temperature in degrees in degrees Celsius void onLinearAccelerationEvent(float x, float y, float z, long a, int b): x,y,z acceleration force in m/s^2, minus gravity, a=timestamp(nanos), b=accuracy

    void onLinearAccelerationEvent(float x, float y, float z): x,y,z acceleration force in m/s^2, minus gravity

    void onRotationVectorEvent(float x, float y, float z, long a, int b): x,y,z rotation vector values, a=timestamp(nanos), b=accuracy

    void onRotationVectorEvent(float x, float y, float z):x,y,z rotation vector values

    void onAmibentTemperatureEvent(float t): same as temp above (newer API)

    void onRelativeHumidityEvent(float h): h ambient humidity in percentage
 

<textarea id="code" class="codesnippet">
import ketai.sensors.*;

KetaiSensor sensor;
PVector magneticField, accelerometer;
float light, proximity;

void setup()
{
  sensor = new KetaiSensor(this);
  sensor.start();
  sensor.list();
  accelerometer = new PVector();
  magneticField = new PVector();
  orientation(LANDSCAPE);
  textAlign(CENTER, CENTER);
  textSize(28);
}

void draw()
{
  background(78, 93, 75);
  text("Accelerometer :" + "\n" 
    + "x: " + nfp(accelerometer.x, 1, 2) + "\n" 
    + "y: " + nfp(accelerometer.y, 1, 2) + "\n" 
    + "z: " + nfp(accelerometer.z, 1, 2) + "\n"
    + "MagneticField :" + "\n" 
    + "x: " + nfp(magneticField.x, 1, 2) + "\n"
    + "y: " + nfp(magneticField.y, 1, 2) + "\n" 
    + "z: " + nfp(magneticField.z, 1, 2) + "\n"
    + "Light Sensor : " + light + "\n" 
    + "Proximity Sensor : " + proximity + "\n"
    , 20, 0, width, height);
}

void onAccelerometerEvent(float x, float y, float z, long time, int accuracy)
{
  accelerometer.set(x, y, z);
}

void onMagneticFieldEvent(float x, float y, float z, long time, int accuracy)
{
  magneticField.set(x, y, z);
}

void onLightEvent(float v)
{
  light = v;
}

void onProximityEvent(float v)
{
  proximity = v;
}

public void mousePressed() { 
  if (sensor.isStarted())
    sensor.stop(); 
  else
    sensor.start(); 
  println("KetaiSensor isStarted: " + sensor.isStarted());
}
</textarea>
Test
 * **Screenshot**
 