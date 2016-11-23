#### KetaiWiFiDirect

##### `public class KetaiWiFiDirect extends BroadcastReceiver implements   ChannelListener, ConnectionInfoListener, ActionListener,   PeerListListener`

The KetaiWiFiDirect class is an experimental class that provides a wifi direct access to a sketch. WifiDirect provides peer-to-peer networking between devices. No wireless infrastructure is needed.

##### `PApplet parent`

The parent.

##### `private WifiP2pManager manager`

The manager.

##### `private boolean isWifiP2pEnabled = false`

The is wifi p2p enabled.

##### `private boolean retryChannel = false`

The retry channel.

##### `private List<WifiP2pDevice> peers = new ArrayList<WifiP2pDevice>()`

The peers.

##### `private final IntentFilter intentFilter = new IntentFilter()`

The intent filter.

##### `private Channel channel`

The channel.

##### `private String ip = ""`

The ip.

##### `public KetaiWiFiDirect(PApplet _parent)`

Instantiates a new ketai wi fi direct object

 * **Parameters:** `_parent` — the calling sketch/Activity/PApplet

##### `public void setIsWifiP2pEnabled(boolean isWifiP2pEnabled)`

Sets the checks if wifi p2p enabled.

 * **Parameters:** `isWifiP2pEnabled` — the new checks if is wifi p2p enabled

##### `public void resume()`

Resume. (used by android activity administration)

##### `public void pause()`

Pause.(used by android activity administration)

##### `private void connectToConfig(WifiP2pConfig config)`

Connect using a specified configuration

 * **Parameters:** `config` — the config

##### `public void disconnect()`

Disconnect. clean out resources

##### `public void cancelDisconnect()`

Cancel disconnect.

##### `public void getConnectionInfo()`

Gets the connection information.

 * **Returns:** the connection info

##### `public String getIPAddress()`

Gets the iP address used by the connection.

 * **Returns:** the iP address

##### `public void discover()`

Discover.

##### `public String getHardwareAddress()`

Gets the hardware address of the wifi interface

 * **Returns:** the hardware address

##### `public void reset()`

Reset.

##### `public ArrayList<String> getPeerNameList()`

Gets the peer name list.

 * **Returns:** the peer name list

##### `public void connect(String deviceName)`

Connect to a device by name.

 * **Parameters:** `deviceName` — the device name
