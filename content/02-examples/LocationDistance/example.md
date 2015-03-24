---
title: Location Distance
excerpt: This example illustrates the use of KetaiLocation
date: 02/01/2015
---
#### Location Distance

KetaiLocation Features<br>
&nbsp;- Uses GPS location data (latitude, longitude, altitude (if available)<br>
&nbsp;- Updates if location changes by 1 meter, or every 10 seconds<br>
&nbsp;- If unavailable, defaults to system provider (cell tower or WiFi network location)

---
<div class="link">[<i class="fa fa-download fa-lg"></i> LocationDistance.pde](LocationDistance.pde)</div>

    import ketai.sensors.*; 

    double longitude, latitude, altitude, accuracy;
    KetaiLocation location;
    Location uic;

    void setup() {
      //creates a location object that refers to UIC
      uic = new Location("uic"); // Example location: the University of Illinois at Chicago
      uic.setLatitude(41.874698);
      uic.setLongitude(-87.658777);
      orientation(LANDSCAPE);
      textAlign(CENTER, CENTER);
      textSize(36);
    }

    void draw() {
      background(78, 93, 75);
      if (location.getProvider() == "none")
        text("Location data is unavailable. \n" +
          "Please check your location settings.", 0, 0, width, height);
      else
        text("Location data:\n" + 
          "Latitude: " + latitude + "\n" + 
          "Longitude: " + longitude + "\n" + 
          "Altitude: " + altitude + "\n" +
          "Accuracy: " + accuracy + "\n" +
          "Distance to UIC: "+ location.getLocation().distanceTo(uic) + " m\n" + 
          "Provider: " + location.getProvider(), 20, 0, width, height);
    }

    void onResume()
    {
      location = new KetaiLocation(this);
      super.onResume();
    }

    void onLocationEvent(Location _location)
    {
      //print out the location object
      println("onLocation event: " + _location.toString());
      longitude = _location.getLongitude();
      latitude = _location.getLatitude();
      altitude = _location.getAltitude();
      accuracy = _location.getAccuracy();
    }
 <!-- * **Screenshot** -->
 