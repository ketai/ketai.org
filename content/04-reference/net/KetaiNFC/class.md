#### KetaiNFC

##### `public class KetaiNFC implements CreateNdefMessageCallback, OnNdefPushCompleteCallback`

The KetaiNFC class provides access the Near Field Communication (NFC) capabilities on supported platforms. This includes access to android Beam (tm) services. 

To access data from NFC services a sketch can define the following methods: <br /> <br /> 

void onNFCEvent(String txt) - get text from text formatted NFC tags<br /> void onNFCEvent(byte[] data) - get raw data from NFC tag<br /> void onNFCEvent(URI _uri) - get URI from URI formatted tags<br /> <br /> 

void onNFCWrite(boolean success, String message) - get status from a write operation <br /> - message will contain the error if the operation failed

##### `private PApplet parent`

The parent.

##### `private Method onNFCEventMethod_String, onNFCWriteMethod, onNFCEventMethod_URI, onNFCEventMethod_bArray`

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

the calling sketch/Activity

 * **Parameters:** `pParent` — 

##### `public void resume()`

Resume.

##### `public void pause()`

Pause. (used by the android platform for management)

##### `public void onNewIntent(Intent intent)`

Called with a new intent event is triggered. 

the intent

 * **Parameters:** `intent` — 

##### `public void handleIntent(Intent intent)`

Handle intent.(used by the android platform for management) 

the intent

 * **Parameters:** `intent` — 

##### `public static NdefRecord newTextRecord(String text, Locale locale, boolean encodeInUtf8)`

New text record. 

the text the locale the encode in utf8

 * **Parameters:**
   * `text` — 
   * `locale` — 
   * `encodeInUtf8` — 
 * **Returns:** the ndef record

##### `public void write(URI _url)`

Write a URL to a tag 

the _url

 * **Parameters:** `_url` — 

##### `public void write(String textToWrite)`

Write text to a tag 

the text to write

 * **Parameters:** `textToWrite` — 

##### `public void beam(String textToWrite)`

Beam. 

the text to beam to device

 * **Parameters:** `textToWrite` — 

##### `public void write(byte[] _data)`

Write generic byte array 

the _data to write

 * **Parameters:** `_data` — 

##### `public void cancelWrite()`

Cancel pending write operation

##### `private void writeNFCString(Tag t)`

Write nfc string to a tag 

the tag reference

 * **Parameters:** `t` — 

##### `private void initAdapter()`

Init the NFC adapter and the p.

##### `private void findParentIntentions()`

Find parent intentions.
