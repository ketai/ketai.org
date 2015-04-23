---
title: KBluetoothListner
excerpt: The listener interface for receiving KBluetooth events. The class that is interested in processing a KBluetooth event implements this interface, and the object created with that class is registered with a component using the component's 
```addKBluetoothListener``` method. When the KBluetooth event occurs, that object's appropriate method is invoked.
date: 01/02/2015
---
#### KBluetoothListner

##### `public class KBluetoothListener extends Thread`

The listener interface for receiving KBluetooth events. The class that is interested in processing a KBluetooth event implements this interface, and the object created with that class is registered with a component using the component's *addKBluetoothListener* method. When the KBluetooth event occurs, that object's appropriate method is invoked.

 * **See also:** KBluetoothEvent

##### `private final BluetoothServerSocket mmServerSocket`

The mm server socket.

##### `private String mSocketType`

The m socket type.

##### `private BluetoothAdapter mAdapter`

The m adapter.

##### `private KetaiBluetooth btManager`

The bt manager.

##### `private boolean go = true`

The go.

##### `public KBluetoothListener(KetaiBluetooth btm, boolean secure)`

Instantiates a new k bluetooth listener.

 * **Parameters:**
   * `btm` — the Bluetooth Managing class
   * `secure` — secure setting

##### `public void cancel()`

Cancel-close out resources