#### SLIPFrame

##### ` class SLIPFrame`

The Class SLIPFrame.

##### ` static byte END = (byte) 0xC0`

The end.

##### ` static byte ESC = (byte) 0xDB`

The esc.

##### ` static byte ESC_END = (byte) 0xDC`

The esc end.

##### ` static byte ESC_ESC = (byte) 0xDD`

The esc esc.

##### ` static byte[] createFrame(byte[] _data)`

Creates a SLIP formatted data frame.

 * **Parameters:** `_data` — the _data
 * **Returns:** the byte[]

##### ` static byte[] parseFrame(byte[] data)`

Parses a SLIP formatted frame and provides the data received.

 * **Parameters:** `data` — the data
 * **Returns:** the byte[]
