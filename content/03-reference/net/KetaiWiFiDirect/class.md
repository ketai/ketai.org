#### KetaiWiFiDirect

##### ` class KetaiWiFiDirect extends BroadcastReceiver implements   ChannelListener, ConnectionInfoListener, ActionListener,   PeerListListener`

The KetaiWiFiDirect class is an experimental class that provides a wifi direct access to a sketch. WifiDirect provides peer-to-peer networking between devices. No wireless infrastructure is needed.

##### `PApplet parent`

The parent.

##### ` KetaiWiFiDirect(PApplet _parent)`

Instantiates a new ketai wi fi direct object

 * **Parameters:** `_parent` — the calling sketch/Activity/PApplet

##### ` void setIsWifiP2pEnabled(boolean isWifiP2pEnabled)`

Sets the checks if wifi p2p enabled.

 * **Parameters:** `isWifiP2pEnabled` — the new checks if is wifi p2p enabled

##### ` void resume()`

Resume. (used by android activity administration)

##### ` void pause()`

Pause.(used by android activity administration)

##### ` void disconnect()`

Disconnect. clean out resources

##### ` void cancelDisconnect()`

Cancel disconnect.

##### ` void getConnectionInfo()`

Gets the connection information.

 * **Returns:** the connection info

##### ` String getIPAddress()`

Gets the iP address used by the connection.

 * **Returns:** the iP address

##### ` void discover()`

Discover.

##### ` String getHardwareAddress()`

Gets the hardware address of the wifi interface

 * **Returns:** the hardware address

##### ` void reset()`

Reset.

##### ` ArrayList<String> getPeerNameList()`

Gets the peer name list.

 * **Returns:** the peer name list

##### ` void connect(String deviceName)`

Connect to a device by name.

 * **Parameters:** `deviceName` — the device name
