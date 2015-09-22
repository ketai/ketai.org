#### TextRecord

##### ` class TextRecord implements ParsedNdefRecord`

An NFC Text Record.

##### ` String getText()`

Gets the text.

 * **Returns:** the text

##### ` String getLanguageCode()`

Returns the ISO/IANA language code associated with this text element.

 * **Returns:** the language code

##### ` static TextRecord parse(NdefRecord record)`

Parses the.

 * **Parameters:** `record` — the record
 * **Returns:** the text record

##### ` static boolean isText(NdefRecord record)`

Checks if is text.

 * **Parameters:** `record` — the record
 * **Returns:** true, if is text
