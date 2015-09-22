#### KetaiSensor

##### ` class KetaiSensor implements SensorEventListener`

The KetaiSensor class provides access to android sensors. To receive sensor data the following methods can be defined in your sketch:<br /> <br /> 

void onSensorEvent(SensorEvent e) - raw android sensor event <br /> void onAccelerometerEvent(float x, float y, float z, long a, int b): x,y,z force in m/s^2, a=timestamp(nanos), b=accuracy<br /> void onAccelerometerEvent(float x, float y, float z): x,y,z force in m/s2<br /> void onOrientationEvent(float x, float y, flaot z, long a, int b): x,y,z rotation in degrees, a=timestamp(nanos), b=accuracy<br /> void onOrientationEvent(float x, float y, float z) : x,y,z rotation in degrees<br /> void onMagneticFieldEvent(float x, float y, float z, long a, int b) : x,y,z geomag field in uT, a=timestamp(nanos), b=accuracy<br /> void onMagneticFieldEvent(float x, float y, float z): x,y,z geomagnetic field in uT<br /> void onGyroscopeEvent(float x, float y, float z, long a, int b):x,y,z rotation in rads/sec, a=timestamp(nanos), b=accuracy<br /> void onGyroscopeEvent(float x, float y, float z): x,y,z rotation in rads/sec<br /> void onGravityEvent(float x, float y, float z, long a, int b): x,y,z force of gravity in m/s^2, a=timestamp(nanos), b=accuracy<br /> void onGravityEvent(float x, float y, float z): x,y,z rotation in m/s^s<br /> void onProximityEvent(float d, long a, int b): d distance from sensor (typically 0,1), a=timestamp(nanos), b=accuracy<br /> void onProximityEvent(float d): d distance from sensor (typically 0,1)<br /> void onLightEvent(float d, long a, int b): d illumination from sensor in lx<br /> void onLightEvent(float d): d illumination from sensor in lx<br /> void onPressureEvent(float p, long a, int b): p ambient pressure in hPa or mbar, a=timestamp(nanos), b=accuracy<br /> void onPressureEvent(float p): p ambient pressure in hPa or mbar<br /> void onTemperatureEvent(float t, long a, int b): t temperature in degrees in degrees Celsius, a=timestamp(nanos), a=timestamp(nanos), b=accuracy<br /> void onTemperatureEvent(float t): t temperature in degrees in degrees Celsius<br /> void onLinearAccelerationEvent(float x, float y, float z, long a, int b): x,y,z acceleration force in m/s^2, minus gravity, a=timestamp(nanos), b=accuracy<br /> void onLinearAccelerationEvent(float x, float y, float z): x,y,z acceleration force in m/s^2, minus gravity<br /> void onRotationVectorEvent(float x, float y, float z, long a, int b): x,y,z rotation vector values, a=timestamp(nanos), b=accuracy<br /> void onRotationVectorEvent(float x, float y, float z):x,y,z rotation vector values<br /> void onAmibentTemperatureEvent(float t): same as temp above (newer API)<br /> void onRelativeHumidityEvent(float h): h ambient humidity in percentage<br />

##### `float[] accelerometerData, magnetometerData`

The magnetometer data.

##### `final static String SERVICE_DESCRIPTION = "Android Sensors."`

The Constant SERVICE_DESCRIPTION.

##### ` KetaiSensor(PApplet pParent)`

Instantiates a new ketai sensor. 

PApplet/sketch instance

 * **Parameters:** `pParent` — 

##### ` void useSimulator(boolean flag)`

Use simulator. 

the flag

 * **Parameters:** `flag` — 

##### ` boolean usingSimulator()`

Using simulator.

 * **Returns:** true, if successful

##### ` void setDelayInterval(long pDelayInterval)`

Sets the delay interval. 

the new delay interval

 * **Parameters:** `pDelayInterval` — 

##### ` void enableAccelerometer()`

Enable accelerometer.

##### ` void enableRotationVector()`

Enable rotation vector.

##### ` void enableLinearAcceleration()`

Enable linear acceleration.

##### ` void disableAccelerometer()`

Disable accelerometer.

##### ` void enableMagenticField()`

Enable magentic field.

##### ` void disableMagneticField()`

Disable magnetic field.

##### ` void enableOrientation()`

Enable orientation.

##### ` void disableOrientation()`

Disable orientation.

##### ` void enableProximity()`

Enable proximity.

##### ` void disableProximity()`

Disable proximity.

##### ` void disablelinearAcceleration()`

Disable linear acceleration.

##### ` void disableRotationVector()`

Disable rotation vector.

##### ` void enableLight()`

Enable light.

##### ` void disableLight()`

Disable light.

##### ` void enablePressure()`

Enable pressure.

##### ` void disablePressure()`

Disable pressure.

##### ` void enableTemperature()`

Enable temperature.

##### ` void disableTemperature()`

Disable temperature.

##### ` void enableGyroscope()`

Enable gyroscope.

##### ` void disableGyroscope()`

Disable gyroscope.

##### ` void disableAmibentTemperature()`

Disable ambient temperature.

##### ` void disableRelativeHumiditySensor()`

Disable relative humidity sensor.

##### ` void enableAmibentTemperature()`

Enable ambient temperature.

##### ` void enableRelativeHumiditySensor()`

Enable relative humidity sensor.

##### ` void enableStepDetectorSensor()`

Enable Step counter sensor.

##### ` void disableStepDetectorSensor()`

Disable Step counter sensor.

##### ` void enableStepCounterSensor()`

Enable Step counter sensor.

##### ` void disableStepCounterSensor()`

Disable Step counter sensor.

##### ` void enableSignificantMotionSensor()`

Enable Significant Motion sensor.

##### ` void disableSignificantMotionSensor()`

Disable Significant Motion sensor.

##### ` void enableHeartRateSensor()`

Enable heart rate sensor.

##### ` void disableHeartRateSensor()`

Disable heart rate sensor.

##### ` void enableGeomagneticRotationVectorSensor()`

Enable geomagnetic rotation sensor.

##### ` void disableGeomagneticRotationVectorSensor()`

Disable geomagnetic rotation sensor.

##### ` void enableGameRotationSensor()`

Enable ambient game rotation sensor.

##### ` void disableGameRotationSensor()`

Disable game rotation sensor.

##### ` void enableAllSensors()`

Enable all sensors.

##### ` boolean isAccelerometerAvailable()`

Checks if is accelerometer available.

 * **Returns:** true, if is accelerometer available

##### ` boolean isLinearAccelerationAvailable()`

Checks if is linear acceleration available.

 * **Returns:** true, if is linear acceleration available

##### ` boolean isRotationVectorAvailable()`

Checks if is rotation vector available.

 * **Returns:** true, if is rotation vector available

##### ` boolean isMagenticFieldAvailable()`

Checks if is magentic field available.

 * **Returns:** true, if is magentic field available

##### ` boolean isOrientationAvailable()`

Checks if is orientation available.

 * **Returns:** true, if is orientation available

##### ` boolean isProximityAvailable()`

Checks if is proximity available.

 * **Returns:** true, if is proximity available

##### ` boolean isLightAvailable()`

Checks if is light available.

 * **Returns:** true, if is light available

##### ` boolean isPressureAvailable()`

Checks if is pressure available.

 * **Returns:** true, if is pressure available

##### ` boolean isTemperatureAvailable()`

Checks if is temperature available.

 * **Returns:** true, if is temperature available

##### ` boolean isGyroscopeAvailable()`

Checks if is gyroscope available.

 * **Returns:** true, if is gyroscope available

##### ` boolean isAmbientTemperatureAvailable()`

Checks if is ambient temperature available.

 * **Returns:** true, if is ambient temperature available

##### ` boolean isRelativeHumidityAvailable()`

Checks if is relative humidity available.

 * **Returns:** true, if is relative humidity available

##### ` boolean isStepDetectorAvailable()`

Checks if is step detector sensor is available.

 * **Returns:** true, if heart rate sensor is available

##### ` boolean isStepCounterAvailable()`

Checks if is step counter sensor is available.

 * **Returns:** true, if step counter sensor is available

##### ` boolean isSignificantMotionAvailable()`

Checks if is significant motion sensor is available.

 * **Returns:** true, if significant motion sensor is available

##### ` boolean isGeomagneticRotationVectorAvailable()`

Checks if is geomagnetic rotation vector sensor is available.

 * **Returns:** true, if geomagnetic rotation vector sensor is available

##### ` boolean isGameRotationAvailable()`

Checks if is game rotation sensor is available.

 * **Returns:** true, if game rotation sensor is available

##### ` Collection<? extends String> list()`

List.

 * **Returns:** the collection<? extends string>

##### ` boolean isStarted()`

Checks if is started.

 * **Returns:** true, if is started

##### ` void start()`

Start services.

##### ` void stop()`

Stop services.

##### ` void startService()`

Start service.

##### ` int getStatus()`

Gets the status.

 * **Returns:** the status (not used)

##### ` void stopService()`

Stop service.

##### ` String getServiceDescription()`

Gets the service description.

 * **Returns:** the service description

##### ` static void getRotationMatrixFromVector(float[] R,    float[] rotationVector)`

Gets the rotation matrix from vector. 

the r the rotation vector

 * **Parameters:**
   * `R` — 
   * `rotationVector` — 
 * **Returns:** the rotation matrix from vector

##### ` void getQuaternionFromVector(float[] Q, float[] rv)`

Gets the quaternion from vector. 

the q the rv

 * **Parameters:**
   * `Q` — 
   * `rv` — 
 * **Returns:** the quaternion from vector

##### ` float[] getOrientation()`

Gets the orientation.

 * **Returns:** the orientation
