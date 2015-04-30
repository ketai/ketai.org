####KetaiLocation

##### `public class KetaiLocation implements LocationListener`

The KetaiLocation class provides android location services data to a sketch. 

To receive location data a sketch can define the following method:<br /> <br /> 

void onLocationEvent(Location l) : l is the raw android Location class<br /> void onLocationEvent(double lat, double lon) : lat, lon are the latitude & longitude in degrees<br /> void onLocationEvent(double lat, double lon, double alt) : lat, lon are the latitude & longitude in degrees, alt is altitude in meters<br /> void onLocationEvent(double lat, double lon, double alt. float acc) : lat, lon are the latitude & longitude in degrees, alt is altitude in meters, acc is the accuracy in meters<br />

##### `private LocationManager locationManager = null`

The location manager.

##### `private PApplet parent`

The parent.

##### `private Method onLocationEventMethod1arg, onLocationEventMethod2arg,    onLocationEventMethod3arg, onLocationEventMethod4arg`

The on location event method4arg.

##### `private String provider`

The provider.

##### `private Location location`

The location.

##### `KetaiLocation me`

The me.

##### `private long minTime = 10000`

The min time.

##### `private float minDistance = 1`

The min distance.

##### `final static String SERVICE_DESCRIPTION = "Android Location."`

The Constant SERVICE_DESCRIPTION.

##### `private Object callbackdelegate`

reference to callback object for updates

##### `public KetaiLocation(PApplet pParent)`

Instantiates a new ketai location. 

the calling sketch/Activity/PApplet

 * **Parameters:** `pParent` — 

##### `public Location getLocation()`

Gets the last location.

 * **Returns:** the location

##### `public boolean isStarted()`

Checks if started.

 * **Returns:** true, if started

##### `public void start()`

Start services.

##### `public void stop()`

Stop. - clean resources

##### `public String getProvider()`

Gets the location provider.

 * **Returns:** the provider

##### `public Collection<? extends String> list()`

Returns a list of Location providers

 * **Returns:** the collection<? extends string>

##### `public void setUpdateRate(int millis, int meters)`

Sets the update update rate based on time or distance traveled. 

the millis the meters

 * **Parameters:**
   * `millis` — 
   * `meters` — 

##### `private boolean determineProvider()`

Determine provider, GPS preferred.

 * **Returns:** true, if successful

##### `private void findObjectIntentions(Object o)`

Find parent callback methods
