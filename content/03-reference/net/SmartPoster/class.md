#### SmartPoster

##### ` class SmartPoster implements ParsedNdefRecord`

A representation of an NFC Forum "Smart Poster".

##### ` UriRecord getUriRecord()`

Gets the uri record.

 * **Returns:** the uri record

##### ` TextRecord getTitle()`

Returns the title of the smart poster. This may be {@code null}.

 * **Returns:** the title

##### ` static SmartPoster parse(NdefRecord record)`

Parses the.

 * **Parameters:** `record` — the record
 * **Returns:** the smart poster

##### ` static SmartPoster parse(NdefRecord[] recordsRaw)`

Parses the.

 * **Parameters:** `recordsRaw` — the records raw
 * **Returns:** the smart poster

##### ` static boolean isPoster(NdefRecord record)`

Checks if is poster.

 * **Parameters:** `record` — the record
 * **Returns:** true, if is poster

##### `UNKNOWN((byte) -1),`

The unknown.

##### `DO_ACTION((byte) 0),`

The do action.

##### `SAVE_FOR_LATER((byte) 1),`

The save for later.

##### `OPEN_FOR_EDITING(     (byte) 2)`

The open for editing.
