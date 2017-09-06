#### KBluetoothConnection

##### `public class KBluetoothConnection extends Thread`

The Class KBluetoothConnection.

##### `private BluetoothSocket mmSocket`

The mm socket.

##### `private InputStream mmInStream`

The mm in stream.

##### `private OutputStream mmOutStream`

The mm out stream.

##### `private boolean isConnected = false`

The is connected.

##### `private String address = ""`

The address.

##### `private KetaiBluetooth btm`

The btm.

##### `public KBluetoothConnection(KetaiBluetooth _btm, BluetoothSocket socket)`

Instantiates a new bluetooth connection. 

the Bluetooth managing class the socket reference for the connection

 * **Parameters:**
   * `_btm` — 
   * `socket` — 

##### `public String getAddress()`

Gets the hardware address.

 * **Returns:** the address (hardware)

##### `public String getDeviceName()`

Gets the device name.

 * **Returns:** the device name

##### `public boolean isConnected()`

Checks if we are connected.

 * **Returns:** true, if is connected

##### `public void write(byte[] buffer)`

Write data to the connection 

the buffer

 * **Parameters:** `buffer` — 

##### `public void cancel()`

Cancel, close out the resource
