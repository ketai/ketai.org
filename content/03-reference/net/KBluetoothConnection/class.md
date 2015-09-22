#### KBluetoothConnection

##### ` class KBluetoothConnection extends Thread`

The Class KBluetoothConnection.

##### ` KBluetoothConnection(KetaiBluetooth _btm, BluetoothSocket socket)`

Instantiates a new bluetooth connection.

 * **Parameters:**
   * `_btm` — the Bluetooth managing class
   * `socket` — the socket reference for the connection

##### ` String getAddress()`

Gets the hardware address.

 * **Returns:** the address (hardware)

##### ` String getDeviceName()`

Gets the device name.

 * **Returns:** the device name

##### ` boolean isConnected()`

Checks if we are connected.

 * **Returns:** true, if is connected

##### ` void write(byte[] buffer)`

Write data to the connection

 * **Parameters:** `buffer` — the buffer

##### ` void cancel()`

Cancel, close out the resource
