#### KBluetoothListener

##### ` class KBluetoothListener extends Thread`

The listener interface for receiving KBluetooth events. The class that is interested in processing a KBluetooth event implements this interface, and the object created with that class is registered with a component using the component's <code>addKBluetoothListener<code> method. When the KBluetooth event occurs, that object's appropriate method is invoked.

 * **See also:** KBluetoothEvent

##### ` KBluetoothListener(KetaiBluetooth btm, boolean secure)`

Instantiates a new k bluetooth listener.

 * **Parameters:**
   * `btm` — the Bluetooth Managing class
   * `secure` — secure setting

##### ` void cancel()`

Cancel-close out resources
