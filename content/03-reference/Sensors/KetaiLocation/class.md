#### KetaiLocation

##### ` class KetaiLocation implements LocationListener`

The KetaiLocation class provides android location services data to a sketch. 

To receive location data a sketch can define the following method:<br /> <br /> 

void onLocationEvent(Location l) : l is the raw android Location class<br /> void onLocationEvent(double lat, double lon) : lat, lon are the latitude & longitude in degrees<br /> void onLocationEvent(double lat, double lon, double alt) : lat, lon are the latitude & longitude in degrees, alt is altitude in meters<br /> void onLocationEvent(double lat, double lon, double alt. float acc) : lat, lon are the latitude & longitude in degrees, alt is altitude in meters, acc is the accuracy in meters<br />

##### `KetaiLocation me`

The me.

##### `final static String SERVICE_DESCRIPTION = "Android Location."`

The Constant SERVICE_DESCRIPTION.

##### ` KetaiLocation(PApplet pParent)`

Instantiates a new ketai location. 

the calling sketch/Activity/PApplet

 * **Parameters:** `pParent` — 

##### ` Location getLocation()`

Gets the last location.

 * **Returns:** the location

##### ` boolean isStarted()`

Checks if started.

 * **Returns:** true, if started

##### ` void start()`

Start services.

##### ` void stop()`

Stop. - clean resources

##### ` String getProvider()`

Gets the location provider.

 * **Returns:** the provider

##### ` Collection<? extends String> list()`

Returns a list of Location providers

 * **Returns:** the collection<? extends string>

##### ` void setUpdateRate(int millis, int meters)`

Sets the update update rate based on time or distance traveled. 

the millis the meters

 * **Parameters:**
   * `millis` — 
   * `meters` — 
