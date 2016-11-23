#### KetaiNFC

##### `public class KetaiNFC implements CreateNdefMessageCallback,   OnNdefPushCompleteCallback`

The KetaiNFC class provides access the Near Field Communication (NFC) capabilities on supported platforms. This includes access to android Beam (tm) services. 

To access data from NFC services a sketch can define the following methods:<br /><br /> 

void onNFCEvent(String txt) - get text from text formatted NFC tags<br /> void onNFCEvent(byte[] data) - get raw data from NFC tag<br /> void onNFCEvent(URI _uri) - get URI from URI formatted tags<br /><br /> 

void onNFCWrite(boolean success, String message) - get status from a write operation <br /> - message will contain the error if the operation failed

##### `private PApplet parent`

The parent.

##### `private Method onNFCEventMethod_String, onNFCWriteMethod,    onNFCEventMethod_URI, onNFCEventMethod_bArray`

The on nfc event method_b array.

##### `private IntentFilter[] mFilters`

The m filters.

##### `private String[][] mTechLists`

The m tech lists.

##### `private NfcAdapter mAdapter`

The m adapter.

##### `private NdefMessage messageToWrite, messageToBeam`

The message to beam.

##### `private PendingIntent p`

The p.

##### `NdefFormatable tag`

The tag.

##### `Ndef ndefTag`

The ndef tag.

##### `public KetaiNFC(PApplet pParent)`

Instantiates a new ketai nfc.

 * **Parameters:** `pParent` — the calling sketch/Activity

##### `public void resume()`

Resume.

##### `public void start(PendingIntent p)`

Start.

 * **Parameters:** `p` — the pending intent (used by the android platform for management)

##### `public void pause()`

Pause. (used by the android platform for management)

##### `public void handleIntent(Intent intent)`

Handle intent.(used by the android platform for management)

 * **Parameters:** `intent` — the intent

##### `public static NdefRecord newTextRecord(String text, Locale locale,    boolean encodeInUtf8)`

New text record.

 * **Parameters:**
   * `text` — the text
   * `locale` — the locale
   * `encodeInUtf8` — the encode in utf8
 * **Returns:** the ndef record

##### `public void write(URI _url)`

Write a URL to a tag

 * **Parameters:** `_url` — the _url

##### `public void write(String textToWrite)`

Write text to a tag

 * **Parameters:** `textToWrite` — the text to write

##### `public void beam(String textToWrite)`

Beam.

 * **Parameters:** `textToWrite` — the text to beam to device

##### `public void write(byte[] _data)`

Write generic byte array

 * **Parameters:** `_data` — the _data to write

##### `public void cancelWrite()`

Cancel pending write operation

##### `private void writeNFCString(Tag t)`

Write nfc string to a tag

 * **Parameters:** `t` — the tag reference

##### `private void findParentIntentions()`

Find parent intentions.
