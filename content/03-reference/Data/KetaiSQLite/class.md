---
title: Ketai SQLite
excerpt: This is the excerpt from the project.
date: 02/02/2012
---
#### Ketai SQLite

##### `public class KetaiSQLite`

The Class KetaiSQLite provides access to the underlying SQLite database that every activity is provided with.

##### `private String DATABASE_NAME = "data"`

The database name.

##### `private static final int DATABASE_VERSION = 1`

The Constant DATABASE_VERSION.

##### `private String DATA_ROOT_DIRECTORY = "_data"`

The data root directory.

##### `private Context context`

The context.

##### `private SQLiteDatabase db`

The db.

##### `private Cursor cursor`

The cursor.

##### `private SQLiteStatement sqlStatement`

The sql statement.

##### `public KetaiSQLite(Context context)`

Instantiates a new ketai sqlite object.

 * **Parameters:** `context` — the context/PApplet/Activity using this class

##### `public KetaiSQLite(Context context, String dbname)`

Instantiates a new ketai sqlite.

 * **Parameters:**
   * `context` — the context
   * `dbname` — the database name

##### `static public boolean load(Context _context, String filename, String dbname)`

Load - loads an external .sql file into the local SQLite database service. Useful for populating data for an activity to use.

 * **Parameters:**
   * `_context` — the _context
   * `filename` — the filename
   * `dbname` — the dbname
 * **Returns:** true, if successful

##### `public String getPath()`

Gets the path of the database

 * **Returns:** the path of the database

##### `public SQLiteDatabase getDb()`

Gets the db from the sqlite service

 * **Returns:** the db reference.

##### `public boolean connect()`

Connect to the database.

 * **Returns:** true, if successful

##### `public void close()`

Close the database.

##### `public void dispose()`

Dispose.

##### `public boolean execute(String _sql)`

Execute an SQL statement

 * **Parameters:** `_sql` — the SQL statement to execute.
 * **Returns:** true, if successful

##### `public boolean query(String _query)`

Query the database.

 * **Parameters:** `_query` — the query string
 * **Returns:** true, if successful

##### `public boolean next()`

Next - move to the next object in our last result set.

 * **Returns:** true, if successful

##### `public double getDouble(int _col)`

Gets the double value from a column in our resultset

 * **Parameters:** `_col` — the column/field index number
 * **Returns:** the double

##### `public double getDouble(String field)`

Gets the double value from a column in our resultset.

 * **Parameters:** `field` — the field name
 * **Returns:** the double

##### `public float getFloat(int _col)`

Gets the float value from a column in our resultset.

 * **Parameters:** `_col` — the column index number
 * **Returns:** the float

##### `public float getFloat(String field)`

Gets the float value from a column in our resultset.

 * **Parameters:** `field` — the field mame
 * **Returns:** the float

##### `public int getInt(int _col)`

Gets the int value from a column index in our resultset.

 * **Parameters:** `_col` — the column index number
 * **Returns:** the int

##### `public int getInt(String field)`

Gets the int value from a column in our resultset.

 * **Parameters:** `field` — the field name
 * **Returns:** the int

##### `public long getLong(int _col)`

Gets the long value from a column in our resultset.

 * **Parameters:** `_col` — the column/field index number
 * **Returns:** the long

##### `public long getLong(String field)`

Gets the long value from a column in our resultset.

 * **Parameters:** `field` — the field/column name
 * **Returns:** the long

##### `public byte[] getBlob(int _col)`

Gets the blob value from a column in our resultset.

 * **Parameters:** `_col` — the column/field index number
 * **Returns:** the blob

##### `public byte[] getBlob(String field)`

Gets the blob value from a column in our resultset.

 * **Parameters:** `field` — the field/column name
 * **Returns:** the blob

##### `public String getString(int _col)`

Gets the string value from a column in our resultset.

 * **Parameters:** `_col` — the column/field index number
 * **Returns:** the string

##### `public String getString(String field)`

Gets the string value from a column in our resultset.

 * **Parameters:** `field` — the field/column name
 * **Returns:** the string

##### `public String[] getTables()`

Gets the table names in our database.

 * **Returns:** the names of the tables in the database

##### `public String[] getFields(String table)`

Gets the field names

 * **Parameters:** `table` — the table name
 * **Returns:** the fields

##### `public String getFieldMin(String table, String field)`

Gets the field min value

 * **Parameters:**
   * `table` — the table name
   * `field` — the field name
 * **Returns:** the field min value

##### `public String getFieldMax(String table, String field)`

Gets the field max value.

 * **Parameters:**
   * `table` — the table name
   * `field` — the field name
 * **Returns:** the field max value

##### `public long getRecordCount(String table)`

Gets the record count for the table.

 * **Parameters:** `table` — the table name
 * **Returns:** the record count

##### `public long getDataCount()`

Gets the data count (records in all tables in the database)

 * **Returns:** the data count

##### `public boolean tableExists(String _table)`

Check to see if the table exists.

 * **Parameters:** `_table` — the table name
 * **Returns:** true, if successful

##### `public void exportData(String _targetDirectory) throws IOException`

Export data to a text file (tab delimited).

 * **Parameters:** `_targetDirectory` — the target directory
 * **Exceptions:** `IOException` — Signals that an I/O exception has occurred.

##### `public void deleteAllData()`

Delete all data in our database. Deletes all tables.

##### `private void writeToFile(String data, String _dir, String exportFileName)`

Write to file.

 * **Parameters:**
   * `data` — the data
   * `_dir` — the _dir
   * `exportFileName` — the export file name

##### `private class OpenHelper extends SQLiteOpenHelper`

The Class OpenHelper.

##### `OpenHelper(Context context)`

Instantiates a new open helper.

 * **Parameters:** `context` — the context

##### `OpenHelper(Context context, String dbname)`

Instantiates a new open helper.

 * **Parameters:**
   * `context` — the context
   * `dbname` — the dbname