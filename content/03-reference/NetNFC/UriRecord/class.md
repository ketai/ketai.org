---
title: UriRecord
excerpt: A parsed record containing a Uri.
date: 01/02/2015
---
#### UriRecord

##### `public class UriRecord implements ParsedNdefRecord`

A parsed record containing a Uri.

##### `public static final String RECORD_TYPE = "UriRecord"`

The Constant RECORD_TYPE.

##### `@SuppressWarnings("serial")  private static final HashMap<Byte, String> URI_PREFIX_MAP = new HashMap<Byte, String>()`

NFC Forum "URI Record Type Definition" 

This is a mapping of "URI Identifier Codes" to URI string prefixes, per section 3.2.2 of the NFC Forum URI Record Type Definition document.

##### `private final Uri mUri`

The m uri.

##### `private UriRecord(Uri uri)`

Instantiates a new uri record.

 * **Parameters:** `uri` — the uri

##### `public Uri getUri()`

Gets the uri.

 * **Returns:** the uri

##### `public static UriRecord parse(NdefRecord record)`

Convert {@link android.nfc.NdefRecord} into a {@link android.net.Uri}. This will handle both TNF_WELL_KNOWN / RTD_URI and TNF_ABSOLUTE_URI.

 * **Parameters:** `record` — the record
 * **Returns:** the uri record

##### `private static UriRecord parseAbsolute(NdefRecord record)`

Parse and absolute URI record.

 * **Parameters:** `record` — the record
 * **Returns:** the uri record

##### `private static UriRecord parseWellKnown(NdefRecord record)`

Parse an well known URI record.

 * **Parameters:** `record` — the record
 * **Returns:** the uri record

##### `public static boolean isUri(NdefRecord record)`

Checks if is uri.

 * **Parameters:** `record` — the record
 * **Returns:** true, if is uri