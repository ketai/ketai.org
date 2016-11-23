#### KetaiSensor

##### `public class KetaiSensor implements SensorEventListener`

The KetaiSensor class provides access to android sensors. To receive sensor data the following methods can be defined in your sketch:<br /> <br /> 

void onSensorEvent(SensorEvent e) - raw android sensor event <br /> void onAccelerometerEvent(float x, float y, float z, long a, int b): x,y,z force in m/s^2, a=timestamp(nanos), b=accuracy<br /> void onAccelerometerEvent(float x, float y, float z): x,y,z force in m/s2<br /> void onOrientationEvent(float x, float y, flaot z, long a, int b): x,y,z rotation in degrees, a=timestamp(nanos), b=accuracy<br /> void onOrientationEvent(float x, float y, float z) : x,y,z rotation in degrees<br /> void onMagneticFieldEvent(float x, float y, float z, long a, int b) : x,y,z geomag field in uT, a=timestamp(nanos), b=accuracy<br /> void onMagneticFieldEvent(float x, float y, float z): x,y,z geomagnetic field in uT<br /> void onGyroscopeEvent(float x, float y, float z, long a, int b):x,y,z rotation in rads/sec, a=timestamp(nanos), b=accuracy<br /> void onGyroscopeEvent(float x, float y, float z): x,y,z rotation in rads/sec<br /> void onGravityEvent(float x, float y, float z, long a, int b): x,y,z force of gravity in m/s^2, a=timestamp(nanos), b=accuracy<br /> void onGravityEvent(float x, float y, float z): x,y,z rotation in m/s^s<br /> void onProximityEvent(float d, long a, int b): d distance from sensor (typically 0,1), a=timestamp(nanos), b=accuracy<br /> void onProximityEvent(float d): d distance from sensor (typically 0,1)<br /> void onLightEvent(float d, long a, int b): d illumination from sensor in lx<br /> void onLightEvent(float d): d illumination from sensor in lx<br /> void onPressureEvent(float p, long a, int b): p ambient pressure in hPa or mbar, a=timestamp(nanos), b=accuracy<br /> void onPressureEvent(float p): p ambient pressure in hPa or mbar<br /> void onTemperatureEvent(float t, long a, int b): t temperature in degrees in degrees Celsius, a=timestamp(nanos), a=timestamp(nanos), b=accuracy<br /> void onTemperatureEvent(float t): t temperature in degrees in degrees Celsius<br /> void onLinearAccelerationEvent(float x, float y, float z, long a, int b): x,y,z acceleration force in m/s^2, minus gravity, a=timestamp(nanos), b=accuracy<br /> void onLinearAccelerationEvent(float x, float y, float z): x,y,z acceleration force in m/s^2, minus gravity<br /> void onRotationVectorEvent(float x, float y, float z, long a, int b): x,y,z rotation vector values, a=timestamp(nanos), b=accuracy<br /> void onRotationVectorEvent(float x, float y, float z):x,y,z rotation vector values<br /> void onAmibentTemperatureEvent(float t): same as temp above (newer API)<br /> void onRelativeHumidityEvent(float h): h ambient humidity in percentage<br />

##### `private SensorManager sensorManager = null`

The sensor manager.

##### `private boolean isRegistered = false`

The is registered.

##### `private PApplet parent`

The parent.

##### `private Method onSensorEventMethod`

The on sensor event method.

##### `float[] accelerometerData, magnetometerData`

The magnetometer data.

##### `private Method onAccelerometerEventMethod,    onAccelerometerEventMethodSimple, onOrientationSensorEventMethod,    onOrientationSensorEventMethodSimple, onGyroscopeSensorEventMethod,    onGyroscopeSensorEventMethodSimple,    onMagneticFieldSensorEventMethod,    onMagneticFieldSensorEventMethodSimple, onLightSensorEventMethod,    onLightSensorEventMethodSimple, onProximitySensorEventMethod,    onProximitySensorEventMethodSimple, onPressureSensorEventMethod,    onPressureSensorEventMethodSimple, onTemperatureSensorEventMethod,    onTemperatureSensorEventMethodSimple,    onRotationVectorSensorEventMethod,    onRotationVectorSensorEventMethodSimple,    onGravitySensorEventMethod, onGravitySensorEventMethodSimple,    onLinearAccelerationSensorEventMethod,    onLinearAccelerationSensorEventMethodSimple,    onAmbientTemperatureEventMethod, onRelativeHumidityEventMethod,    onGameRotationEventMethod, onGeomagneticRotationVectorEventMethod,    onHeartRateEventMethod, onSignificantMotionEventMethod,    onStepCounterEventMethod, onStepDetectorEventMethod`

The on relative humidity event method.

##### `private boolean accelerometerSensorEnabled, magneticFieldSensorEnabled,    orientationSensorEnabled, proximitySensorEnabled, useSimulator,    lightSensorEnabled, pressureSensorEnabled,    temperatureSensorEnabled, gyroscopeSensorEnabled,    rotationVectorSensorEnabled, linearAccelerationSensorEnabled,    gravitySensorEnabled, ambientTemperatureSensorEnabled,    relativeHumiditySensorEnabled, gameRotationSensorEnabled,    geomagneticRotationVectorSensorEnabled, heartRateSensorEnabled,    significantMotionSensorEnabled, stepCounterSensorEnabled,    stepDetectorSensorEnabled`

The relative humidity sensor enabled.

##### `private long delayInterval, timeOfLastUpdate`

The time of last update.

##### `final static String SERVICE_DESCRIPTION = "Android Sensors."`

The Constant SERVICE_DESCRIPTION.

##### `public KetaiSensor(PApplet pParent)`

Instantiates a new ketai sensor. 

PApplet/sketch instance

 * **Parameters:** `pParent` — 

##### `public void useSimulator(boolean flag)`

Use simulator. 

the flag

 * **Parameters:** `flag` — 

##### `public boolean usingSimulator()`

Using simulator.

 * **Returns:** true, if successful

##### `public void setDelayInterval(long pDelayInterval)`

Sets the delay interval. 

the new delay interval

 * **Parameters:** `pDelayInterval` — 

##### `public void enableAccelerometer()`

Enable accelerometer.

##### `public void enableRotationVector()`

Enable rotation vector.

##### `public void enableLinearAcceleration()`

Enable linear acceleration.

##### `public void disableAccelerometer()`

Disable accelerometer.

##### `public void enableMagenticField()`

Enable magentic field.

##### `public void disableMagneticField()`

Disable magnetic field.

##### `public void enableOrientation()`

Enable orientation.

##### `public void disableOrientation()`

Disable orientation.

##### `public void enableProximity()`

Enable proximity.

##### `public void disableProximity()`

Disable proximity.

##### `public void disablelinearAcceleration()`

Disable linear acceleration.

##### `public void disableRotationVector()`

Disable rotation vector.

##### `public void enableLight()`

Enable light.

##### `public void disableLight()`

Disable light.

##### `public void enablePressure()`

Enable pressure.

##### `public void disablePressure()`

Disable pressure.

##### `public void enableTemperature()`

Enable temperature.

##### `public void disableTemperature()`

Disable temperature.

##### `public void enableGyroscope()`

Enable gyroscope.

##### `public void disableGyroscope()`

Disable gyroscope.

##### `public void disableAmibentTemperature()`

Disable ambient temperature.

##### `public void disableRelativeHumiditySensor()`

Disable relative humidity sensor.

##### `public void enableAmibentTemperature()`

Enable ambient temperature.

##### `public void enableRelativeHumiditySensor()`

Enable relative humidity sensor.

##### `public void enableStepDetectorSensor()`

Enable Step counter sensor.

##### `public void disableStepDetectorSensor()`

Disable Step counter sensor.

##### `public void enableStepCounterSensor()`

Enable Step counter sensor.

##### `public void disableStepCounterSensor()`

Disable Step counter sensor.

##### `public void enableSignificantMotionSensor()`

Enable Significant Motion sensor.

##### `public void disableSignificantMotionSensor()`

Disable Significant Motion sensor.

##### `public void enableHeartRateSensor()`

Enable heart rate sensor.

##### `public void disableHeartRateSensor()`

Disable heart rate sensor.

##### `public void enableGeomagneticRotationVectorSensor()`

Enable geomagnetic rotation sensor.

##### `public void disableGeomagneticRotationVectorSensor()`

Disable geomagnetic rotation sensor.

##### `public void enableGameRotationSensor()`

Enable ambient game rotation sensor.

##### `public void disableGameRotationSensor()`

Disable game rotation sensor.

##### `public void enableAllSensors()`

Enable all sensors.

##### `public boolean isAccelerometerAvailable()`

Checks if is accelerometer available.

 * **Returns:** true, if is accelerometer available

##### `public boolean isLinearAccelerationAvailable()`

Checks if is linear acceleration available.

 * **Returns:** true, if is linear acceleration available

##### `public boolean isRotationVectorAvailable()`

Checks if is rotation vector available.

 * **Returns:** true, if is rotation vector available

##### `public boolean isMagenticFieldAvailable()`

Checks if is magentic field available.

 * **Returns:** true, if is magentic field available

##### `public boolean isOrientationAvailable()`

Checks if is orientation available.

 * **Returns:** true, if is orientation available

##### `public boolean isProximityAvailable()`

Checks if is proximity available.

 * **Returns:** true, if is proximity available

##### `public boolean isLightAvailable()`

Checks if is light available.

 * **Returns:** true, if is light available

##### `public boolean isPressureAvailable()`

Checks if is pressure available.

 * **Returns:** true, if is pressure available

##### `public boolean isTemperatureAvailable()`

Checks if is temperature available.

 * **Returns:** true, if is temperature available

##### `public boolean isGyroscopeAvailable()`

Checks if is gyroscope available.

 * **Returns:** true, if is gyroscope available

##### `public boolean isAmbientTemperatureAvailable()`

Checks if is ambient temperature available.

 * **Returns:** true, if is ambient temperature available

##### `public boolean isRelativeHumidityAvailable()`

Checks if is relative humidity available.

 * **Returns:** true, if is relative humidity available

##### `public boolean isStepDetectorAvailable()`

Checks if is step detector sensor is available.

 * **Returns:** true, if heart rate sensor is available

##### `public boolean isStepCounterAvailable()`

Checks if is step counter sensor is available.

 * **Returns:** true, if step counter sensor is available

##### `public boolean isSignificantMotionAvailable()`

Checks if is significant motion sensor is available.

 * **Returns:** true, if significant motion sensor is available

##### `public boolean isGeomagneticRotationVectorAvailable()`

Checks if is geomagnetic rotation vector sensor is available.

 * **Returns:** true, if geomagnetic rotation vector sensor is available

##### `public boolean isGameRotationAvailable()`

Checks if is game rotation sensor is available.

 * **Returns:** true, if game rotation sensor is available

##### `public Collection<? extends String> list()`

List.

 * **Returns:** the collection<? extends string>

##### `public boolean isStarted()`

Checks if is started.

 * **Returns:** true, if is started

##### `public void start()`

Start services.

##### `public void stop()`

Stop services.

##### `private boolean isSensorSupported(int type)`

Checks if is sensor supported. 

the type

 * **Parameters:** `type` — 
 * **Returns:** true, if is sensor supported

##### `private void findParentIntentions()`

Find parent intentions.

##### `public void startService()`

Start service.

##### `public int getStatus()`

Gets the status.

 * **Returns:** the status (not used)

##### `public void stopService()`

Stop service.

##### `public String getServiceDescription()`

Gets the service description.

 * **Returns:** the service description

##### `public static void getRotationMatrixFromVector(float[] R,    float[] rotationVector)`

Gets the rotation matrix from vector. 

the r the rotation vector

 * **Parameters:**
   * `R` — 
   * `rotationVector` — 
 * **Returns:** the rotation matrix from vector

##### `public void getQuaternionFromVector(float[] Q, float[] rv)`

Gets the quaternion from vector. 

the q the rv

 * **Parameters:**
   * `Q` — 
   * `rv` — 
 * **Returns:** the quaternion from vector

##### `public float[] getOrientation()`

Gets the orientation.

 * **Returns:** the orientation
