#### KetaiBluetooth

##### `public class KetaiBluetooth`

The Class KetaiBluetooth manages the bluetooth connections and service on the android device. This class has been tested and can manage multiple simultaneous bluetooth connections. The maximum number of connections varied by device limitations but 3 simultaneous connections were typical. 

To receive data from bluetooth connections a sketch should define the following method:<br> 

void onBluetoothDataEvent(String who, byte[] data)<br> 

who - the name of the device sending the data<br> data - byte array of the data received<br>

##### `protected PApplet parent`

The parent.

##### `protected BluetoothAdapter bluetoothAdapter`

The bluetooth adapter.

##### `private HashMap<String, String> pairedDevices`

The paired devices.

##### `private HashMap<String, String> discoveredDevices`

The discovered devices.

##### `private HashMap<String, KBluetoothConnection> currentConnections`

The current connections.

##### `private KBluetoothListener btListener`

The bt listener.

##### `private ConnectThread mConnectThread`

The m connect thread.

##### `private boolean isStarted = false`

The is started.

##### `protected Method onBluetoothDataEventMethod`

The on bluetooth data event method.

##### `protected UUID MY_UUID_SECURE = UUID.fromString("00001101-0000-1000-8000-00805F9B34FB")`

The my uuid secure.

##### `protected UUID MY_UUID_INSECURE = UUID.fromString("00001101-0000-1000-8000-00805F9B34FB")`

The my uuid insecure.

##### `protected String NAME_SECURE = "BluetoothSecure"`

The name secure.

##### `protected String NAME_INSECURE = "BluetoothInsecure"`

The name insecure.

##### `final static int BLUETOOTH_ENABLE_REQUEST = 1`

The Constant BLUETOOTH_ENABLE_REQUEST.

##### `public KetaiBluetooth(PApplet _parent)`

Instantiates a new ketai bluetooth instance 

the calling sketch/activity

 * **Parameters:** `_parent` — 

##### `public void setSLIPMode(boolean _flag)`

Sets the sLIP mode(experimental). 

the new sLIP mode

 * **Parameters:** `_flag` — 

##### `public boolean isStarted()`

Checks if we've started.

 * **Returns:** true, if is started

##### `public BluetoothAdapter getBluetoothAdapater()`

Gets the bluetooth adapater.

 * **Returns:** the bluetooth adapater

##### `public boolean isDiscovering()`

Checks if we are discovering devices.

 * **Returns:** true, if we're discovering

##### `public void onActivityResult(int requestCode, int resultCode, Intent data)`

On activity result. 

the request code the result code the data from the activty result

 * **Parameters:**
   * `requestCode` — 
   * `resultCode` — 
   * `data` — 

##### `public boolean isDiscoverable()`

Checks if we're discoverable.

 * **Returns:** true, if we're discoverable

##### `public boolean start()`

Start the service

 * **Returns:** true, if successful

##### `public String getAddress()`

Gets our hardware address.

 * **Returns:** the address

##### `public ArrayList<String> getDiscoveredDeviceNames()`

Gets the discovered device names.

 * **Returns:** discovered device names

##### `public ArrayList<String> getPairedDeviceNames()`

Gets the paired device names.

 * **Returns:** paired device names

##### `public ArrayList<String> getConnectedDeviceNames()`

Gets the connected device names.

 * **Returns:** the connected device names

##### `public ArrayList<String> getConnectedDeviceLabel()`

Gets the connected device composite label.

 * **Returns:** the connected device names

##### `public ArrayList<String> getConnectedDeviceAddresses()`

Gets the connected hardware addresses.

 * **Returns:** the connected device addresses

##### `public boolean disconnectDevice(String device)`

Disconnects device.

 * **Returns:** True if connection was found and closed

##### `public boolean connectToDeviceByName(String _name)`

Connect to device by name. 

the _name

 * **Parameters:** `_name` — 
 * **Returns:** true, if successful

##### `public boolean connectDevice(String _hwAddress)`

Connect device by hardware address (more reliable since HW addresses are supposed to be unique. 

the _hw address

 * **Parameters:** `_hwAddress` — 
 * **Returns:** true, if successful

##### `public boolean connectDeviceUsingSLIP(String _hwAddress)`

Connect device using slip. 

the _hw address

 * **Parameters:** `_hwAddress` — 
 * **Returns:** true, if successful

##### `public boolean connectDevice(BluetoothSocket _socket)`

Connect device. 

the _socket

 * **Parameters:** `_socket` — 
 * **Returns:** true, if successful

##### `public void discoverDevices()`

Discover devices.

##### `public String lookupAddressByName(String _name)`

Lookup address by name. 

the _name

 * **Parameters:** `_name` — 
 * **Returns:** the string

##### `public void writeToDeviceName(String _name, byte[] data)`

Write to device name. 

the _name of the device/connection the data

 * **Parameters:**
   * `_name` — 
   * `data` — 

##### `public void write(String _deviceAddress, byte[] data)`

Write data to a device through their hardware address 

the _device hardware address the data

 * **Parameters:**
   * `_deviceAddress` — 
   * `data` — 

##### `public void broadcast(byte[] data)`

Send data to all connected devices. 

the data

 * **Parameters:** `data` — 

##### `protected void removeConnection(KBluetoothConnection c)`

Removes the connection. 

the connection reference

 * **Parameters:** `c` — 

##### `public void makeDiscoverable()`

Make discoverable.

##### `private final BroadcastReceiver mReceiver = new BroadcastReceiver()`

The m receiver.

##### `private void findParentIntention()`

Find parent callback methods.

##### `public void stop()`

Stop.

##### `private class ConnectThread extends Thread`

The Class ConnectThread.

##### `private final BluetoothSocket mmSocket`

The mm socket.

##### `protected final BluetoothDevice mmDevice`

The mm device.

##### `private String mSocketType`

The m socket type.

##### `public ConnectThread(BluetoothDevice device, boolean secure)`

Instantiates a new connect thread. 

the device the secure

 * **Parameters:**
   * `device` — 
   * `secure` — 

##### `public void cancel()`

Cancel.
