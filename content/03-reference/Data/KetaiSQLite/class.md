#### KetaiSQLite

##### ` class KetaiSQLite`

The Class KetaiSQLite provides access to the underlying SQLite database that every activity is provided with.

##### ` KetaiSQLite(PApplet p)`

Instantiates a new ketai sqlite object.

 * **Parameters:** `context` — the context/PApplet/Activity using this class

##### ` KetaiSQLite(PApplet p, String dbname)`

Instantiates a new ketai sqlite.

 * **Parameters:**
   * `context` — the context
   * `dbname` — the database name

##### `static  boolean load(PApplet _context, String filename, String dbname)`

Load - loads an external .sql file into the local SQLite database service. Useful for populating data for an activity to use.

 * **Parameters:**
   * `_context` — the _context
   * `filename` — the filename
   * `dbname` — the dbname
 * **Returns:** true, if successful

##### ` String getPath()`

Gets the path of the database

 * **Returns:** the path of the database

##### ` SQLiteDatabase getDb()`

Gets the db from the sqlite service

 * **Returns:** the db reference.

##### ` boolean connect()`

Connect to the database.

 * **Returns:** true, if successful

##### ` void close()`

Close the database.

##### ` void dispose()`

Dispose.

##### ` boolean execute(String _sql)`

Execute an SQL statement

 * **Parameters:** `_sql` — the SQL statement to execute.
 * **Returns:** true, if successful

##### ` boolean query(String _query)`

Query the database.

 * **Parameters:** `_query` — the query string
 * **Returns:** true, if successful

##### ` boolean next()`

Next - move to the next object in our last result set.

 * **Returns:** true, if successful

##### ` double getDouble(int _col)`

Gets the double value from a column in our resultset

 * **Parameters:** `_col` — the column/field index number
 * **Returns:** the double

##### ` double getDouble(String field)`

Gets the double value from a column in our resultset.

 * **Parameters:** `field` — the field name
 * **Returns:** the double

##### ` float getFloat(int _col)`

Gets the float value from a column in our resultset.

 * **Parameters:** `_col` — the column index number
 * **Returns:** the float

##### ` float getFloat(String field)`

Gets the float value from a column in our resultset.

 * **Parameters:** `field` — the field mame
 * **Returns:** the float

##### ` int getInt(int _col)`

Gets the int value from a column index in our resultset.

 * **Parameters:** `_col` — the column index number
 * **Returns:** the int

##### ` int getInt(String field)`

Gets the int value from a column in our resultset.

 * **Parameters:** `field` — the field name
 * **Returns:** the int

##### ` long getLong(int _col)`

Gets the long value from a column in our resultset.

 * **Parameters:** `_col` — the column/field index number
 * **Returns:** the long

##### ` long getLong(String field)`

Gets the long value from a column in our resultset.

 * **Parameters:** `field` — the field/column name
 * **Returns:** the long

##### ` byte[] getBlob(int _col)`

Gets the blob value from a column in our resultset.

 * **Parameters:** `_col` — the column/field index number
 * **Returns:** the blob

##### ` byte[] getBlob(String field)`

Gets the blob value from a column in our resultset.

 * **Parameters:** `field` — the field/column name
 * **Returns:** the blob

##### ` String getString(int _col)`

Gets the string value from a column in our resultset.

 * **Parameters:** `_col` — the column/field index number
 * **Returns:** the string

##### ` String getString(String field)`

Gets the string value from a column in our resultset.

 * **Parameters:** `field` — the field/column name
 * **Returns:** the string

##### ` String[] getTables()`

Gets the table names in our database.

 * **Returns:** the names of the tables in the database

##### ` String[] getFields(String table)`

Gets the field names

 * **Parameters:** `table` — the table name
 * **Returns:** the fields

##### ` String getFieldMin(String table, String field)`

Gets the field min value

 * **Parameters:**
   * `table` — the table name
   * `field` — the field name
 * **Returns:** the field min value

##### ` String getFieldMax(String table, String field)`

Gets the field max value.

 * **Parameters:**
   * `table` — the table name
   * `field` — the field name
 * **Returns:** the field max value

##### ` long getRecordCount(String table)`

Gets the record count for the table.

 * **Parameters:** `table` — the table name
 * **Returns:** the record count

##### ` long getDataCount()`

Gets the data count (records in all tables in the database)

 * **Returns:** the data count

##### ` boolean tableExists(String _table)`

Check to see if the table exists.

 * **Parameters:** `_table` — the table name
 * **Returns:** true, if successful

##### ` void exportData(String _targetDirectory) throws IOException`

Export data to a text file (tab delimited).

 * **Parameters:** `_targetDirectory` — the target directory
 * **Exceptions:** `IOException` — Signals that an I/O exception has occurred.

##### ` void deleteAllData()`

Delete all data in our database. Deletes all tables.

##### `OpenHelper(Context context)`

Instantiates a new open helper.

 * **Parameters:** `context` — the context

##### `OpenHelper(Context context, String dbname)`

Instantiates a new open helper.

 * **Parameters:**
   * `context` — the context
   * `dbname` — the dbname
