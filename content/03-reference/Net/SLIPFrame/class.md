####SLIPFrame

##### `public class SLIPFrame`

The Class SLIPFrame.

##### `public static byte END = (byte) 0xC0`

The end.

##### `public static byte ESC = (byte) 0xDB`

The esc.

##### `public static byte ESC_END = (byte) 0xDC`

The esc end.

##### `public static byte ESC_ESC = (byte) 0xDD`

The esc esc.

##### `public static byte[] createFrame(byte[] _data)`

Creates a SLIP formatted data frame.

 * **Parameters:** `_data` — the _data
 * **Returns:** the byte[]

##### `public static byte[] parseFrame(byte[] data)`

Parses a SLIP formatted frame and provides the data received.

 * **Parameters:** `data` — the data
 * **Returns:** the byte[]
