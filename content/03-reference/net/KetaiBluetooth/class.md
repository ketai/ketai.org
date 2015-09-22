#### KetaiBluetooth

##### ` class KetaiBluetooth`

The Class KetaiBluetooth manages the bluetooth connections and service on the android device. This class has been tested and can manage multiple simultaneous bluetooth connections. The maximum number of connections varied by device limitations but 3 simultaneous connections were typical. 

To receive data from bluetooth connections a sketch should define the following method:<br /> 

void onBluetoothDataEvent(String who, byte[] data)<br /> 

who - the name of the device sending the data<br /> data - byte array of the data received<br />

##### `final static int BLUETOOTH_ENABLE_REQUEST = 1`

The Constant BLUETOOTH_ENABLE_REQUEST.

##### ` KetaiBluetooth(PApplet _parent)`

Instantiates a new ketai bluetooth instance

 * **Parameters:** `_parent` — the calling sketch/activity

##### ` void setSLIPMode(boolean _flag)`

Sets the sLIP mode(experimental).

 * **Parameters:** `_flag` — the new sLIP mode

##### ` boolean isStarted()`

Checks if we've started.

 * **Returns:** true, if is started

##### ` BluetoothAdapter getBluetoothAdapater()`

Gets the bluetooth adapater.

 * **Returns:** the bluetooth adapater

##### ` boolean isDiscovering()`

Checks if we are discovering devices.

 * **Returns:** true, if we're discovering

##### ` void onActivityResult(int requestCode, int resultCode, Intent data)`

On activity result.

 * **Parameters:**
   * `requestCode` — the request code
   * `resultCode` — the result code
   * `data` — the data from the activty result

##### ` boolean isDiscoverable()`

Checks if we're discoverable.

 * **Returns:** true, if we're discoverable

##### ` boolean start()`

Start the service

 * **Returns:** true, if successful

##### ` String getAddress()`

Gets our hardware address.

 * **Returns:** the address

##### ` ArrayList<String> getDiscoveredDeviceNames()`

Gets the discovered device names.

 * **Returns:** discovered device names

##### ` ArrayList<String> getPairedDeviceNames()`

Gets the paired device names.

 * **Returns:** paired device names

##### ` ArrayList<String> getConnectedDeviceNames()`

Gets the connected device names.

 * **Returns:** the connected device names

##### ` boolean connectToDeviceByName(String _name)`

Connect to device by name.

 * **Parameters:** `_name` — the _name
 * **Returns:** true, if successful

##### ` boolean connectDevice(String _hwAddress)`

Connect device by hardware address (more reliable since HW addresses are supposed to be unique.

 * **Parameters:** `_hwAddress` — the _hw address
 * **Returns:** true, if successful

##### ` boolean connectDeviceUsingSLIP(String _hwAddress)`

Connect device using slip.

 * **Parameters:** `_hwAddress` — the _hw address
 * **Returns:** true, if successful

##### ` boolean connectDevice(BluetoothSocket _socket)`

Connect device.

 * **Parameters:** `_socket` — the _socket
 * **Returns:** true, if successful

##### ` void discoverDevices()`

Discover devices.

##### ` String lookupAddressByName(String _name)`

Lookup address by name.

 * **Parameters:** `_name` — the _name
 * **Returns:** the string

##### ` void writeToDeviceName(String _name, byte[] data)`

Write to device name.

 * **Parameters:**
   * `_name` — the _name of the device/connection
   * `data` — the data

##### ` void write(String _deviceAddress, byte[] data)`

Write data to a device through their hardware address

 * **Parameters:**
   * `_deviceAddress` — the _device hardware address
   * `data` — the data

##### ` void broadcast(byte[] data)`

Send data to all conencted devices.

 * **Parameters:** `data` — the data

##### ` void makeDiscoverable()`

Make discoverable.

##### ` void stop()`

Stop.

##### ` ConnectThread(BluetoothDevice device, boolean secure)`

Instantiates a new connect thread.

 * **Parameters:**
   * `device` — the device
   * `secure` — the secure

##### ` void cancel()`

Cancel.
