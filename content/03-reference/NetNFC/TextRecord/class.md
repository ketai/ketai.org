---
title: TextRecord
excerpt: The Class TextRecord.
date: 01/02/2015
---
#### TextRecord

##### `public class TextRecord implements ParsedNdefRecord`

An NFC Text Record.

##### `private final String mLanguageCode`

ISO/IANA language code.

##### `private final String mText`

The m text.

##### `private TextRecord(String languageCode, String text)`

Instantiates a new text record.

 * **Parameters:**
   * `languageCode` — the language code
   * `text` — the text

##### `public String getText()`

Gets the text.

 * **Returns:** the text

##### `public String getLanguageCode()`

Returns the ISO/IANA language code associated with this text element.

 * **Returns:** the language code

##### `public static TextRecord parse(NdefRecord record)`

Parses the.

 * **Parameters:** `record` — the record
 * **Returns:** the text record

##### `public static boolean isText(NdefRecord record)`

Checks if is text.

 * **Parameters:** `record` — the record
 * **Returns:** true, if is text