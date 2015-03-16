---
title: Geolocation
excerpt: This is the excerpt from the project.
date: 02/01/2015
---
#### Geolocation

Ketai Location Features:<br>
&nbsp;- Uses GPS location data (latitude, longitude, altitude (if available)<br>
&nbsp;- Updates if location changes by 1 meter, or every 10 seconds<br>
&nbsp;- If unavailable, defaults to system provider (cell tower or WiFi network location)<br>


Syntax: <br>
    
    onLocationEvent(latitude, longitude, altitude)
    onLocationEvent(latitude, longitude)
    onLocationEvent(latitude, longitude, altitude)

---
<div class="link">[<i class="fa fa-download fa-lg"></i> Geolocation. pde](Geolocation.pde)</div>

    import ketai.sensors.*; 

    double longitude, latitude, altitude;
    KetaiLocation location;

    void setup() {
      orientation(LANDSCAPE);
      textAlign(CENTER, CENTER);
      textSize(36);
      location = new KetaiLocation(this);
    }

    void draw() {
      background(78, 93, 75);
      if (location.getProvider() == "none")
        text("Location data is unavailable. \n" +
          "Please check your location settings.",  0, 0, width, height);
      else
        text("Latitude: " + latitude + "\n" + 
          "Longitude: " + longitude + "\n" + 
          "Altitude: " + altitude + "\n" + 
          "Provider: " + location.getProvider(),  0, 0, width, height);  
      // getProvider() returns "gps" if GPS is available
      // otherwise "network" (cell network) or "passive" (WiFi MACID)
    }

    void onLocationEvent(double _latitude, double _longitude, double _altitude)
    {
      longitude = _longitude;
      latitude = _latitude;
      altitude = _altitude;
      println("lat/lon/alt: " + latitude + "/" + longitude + "/" + altitude);
    }

 <!-- * **Screenshot** -->
 