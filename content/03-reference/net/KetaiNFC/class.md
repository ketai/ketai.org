#### KetaiNFC

##### ` class KetaiNFC implements CreateNdefMessageCallback,   OnNdefPushCompleteCallback`

The KetaiNFC class provides access the Near Field Communication (NFC) capabilities on supported platforms. This includes access to android Beam (tm) services. 

To access data from NFC services a sketch can define the following methods:<br /><br /> 

void onNFCEvent(String txt) - get text from text formatted NFC tags<br /> void onNFCEvent(byte[] data) - get raw data from NFC tag<br /> void onNFCEvent(URI _uri) - get URI from URI formatted tags<br /><br /> 

void onNFCWrite(boolean success, String message) - get status from a write operation <br /> - message will contain the error if the operation failed

##### `NdefFormatable tag`

The tag.

##### `Ndef ndefTag`

The ndef tag.

##### ` KetaiNFC(PApplet pParent)`

Instantiates a new ketai nfc.

 * **Parameters:** `pParent` — the calling sketch/Activity

##### ` void resume()`

Resume.

##### ` void start(PendingIntent p)`

Start.

 * **Parameters:** `p` — the pending intent (used by the android platform for management)

##### ` void pause()`

Pause. (used by the android platform for management)

##### ` void handleIntent(Intent intent)`

Handle intent.(used by the android platform for management)

 * **Parameters:** `intent` — the intent

##### ` static NdefRecord newTextRecord(String text, Locale locale,    boolean encodeInUtf8)`

New text record.

 * **Parameters:**
   * `text` — the text
   * `locale` — the locale
   * `encodeInUtf8` — the encode in utf8
 * **Returns:** the ndef record

##### ` void write(URI _url)`

Write a URL to a tag

 * **Parameters:** `_url` — the _url

##### ` void write(String textToWrite)`

Write text to a tag

 * **Parameters:** `textToWrite` — the text to write

##### ` void beam(String textToWrite)`

Beam.

 * **Parameters:** `textToWrite` — the text to beam to device

##### ` void write(byte[] _data)`

Write generic byte array

 * **Parameters:** `_data` — the _data to write

##### ` void cancelWrite()`

Cancel pending write operation
