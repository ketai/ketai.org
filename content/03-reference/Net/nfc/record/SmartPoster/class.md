####SmartPoster

##### `public class SmartPoster implements ParsedNdefRecord`

A representation of an NFC Forum "Smart Poster".

##### `private final TextRecord mTitleRecord`

NFC Forum Smart Poster Record Type Definition section 3.2.1. 

"The Title record for the service (there can be many of these in different languages, but a language MUST NOT be repeated). This record is optional."

##### `private final UriRecord mUriRecord`

NFC Forum Smart Poster Record Type Definition section 3.2.1. 

"The URI record. This is the core of the Smart Poster, and all other records are just metadata about this record. There MUST be one URI record and there MUST NOT be more than one."

##### `public UriRecord getUriRecord()`

Gets the uri record.

 * **Returns:** the uri record

##### `public TextRecord getTitle()`

Returns the title of the smart poster. This may be {@code null}.

 * **Returns:** the title

##### `public static SmartPoster parse(NdefRecord record)`

Parses the.

 * **Parameters:** `record` — the record
 * **Returns:** the smart poster

##### `public static SmartPoster parse(NdefRecord[] recordsRaw)`

Parses the.

 * **Parameters:** `recordsRaw` — the records raw
 * **Returns:** the smart poster

##### `public static boolean isPoster(NdefRecord record)`

Checks if is poster.

 * **Parameters:** `record` — the record
 * **Returns:** true, if is poster

##### `private static <T> T getFirstIfExists(Iterable<?> elements, Class<T> type)`

Returns the first element of {@code elements} which is an instance of. 

{@code type}, or {@code null} if no such element exists.

 * **Parameters:**
   * `<T>` — the generic type
   * `elements` — the elements
   * `type` — the type
 * **Returns:** the first if exists

##### `private enum RecommendedAction`

The Enum RecommendedAction.

##### `UNKNOWN((byte) -1),`

The unknown.

##### `DO_ACTION((byte) 0),`

The do action.

##### `SAVE_FOR_LATER((byte) 1),`

The save for later.

##### `OPEN_FOR_EDITING(     (byte) 2)`

The open for editing.

##### `private final byte mAction`

The m action.

##### `private RecommendedAction(byte val)`

Instantiates a new recommended action.

 * **Parameters:** `val` — the val

##### `private byte getByte()`

Gets the byte.

 * **Returns:** the byte

##### `private static NdefRecord getByType(byte[] type, NdefRecord[] records)`

Gets the by type.

 * **Parameters:**
   * `type` — the type
   * `records` — the records
 * **Returns:** the by type

##### `private static final byte[] ACTION_RECORD_TYPE = new byte[]`

The Constant ACTION_RECORD_TYPE.

##### `private static RecommendedAction parseRecommendedAction(NdefRecord[] records)`

Parses the recommended action.

 * **Parameters:** `records` — the records
 * **Returns:** the recommended action

##### `private static final byte[] TYPE_TYPE = new byte[]`

The Constant TYPE_TYPE.

##### `private static String parseType(NdefRecord[] records)`

Parses the type.

 * **Parameters:** `records` — the records
 * **Returns:** the string
