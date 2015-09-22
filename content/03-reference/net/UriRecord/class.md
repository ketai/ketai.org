#### UriRecord

##### ` class UriRecord implements ParsedNdefRecord`

A parsed record containing a Uri.

##### ` static final String RECORD_TYPE = "UriRecord"`

The Constant RECORD_TYPE.

##### ` Uri getUri()`

Gets the uri.

 * **Returns:** the uri

##### ` static UriRecord parse(NdefRecord record)`

Convert {@link android.nfc.NdefRecord} into a {@link android.net.Uri}. This will handle both TNF_WELL_KNOWN / RTD_URI and TNF_ABSOLUTE_URI.

 * **Parameters:** `record` — the record
 * **Returns:** the uri record

##### ` static boolean isUri(NdefRecord record)`

Checks if is uri.

 * **Parameters:** `record` — the record
 * **Returns:** true, if is uri
