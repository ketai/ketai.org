#### KetaiList

##### `public class KetaiList extends ListView`

The KetaiList class provides an android UI scroll list. To receive the selection data a sketch should define the following method:<br /> <br /> 

void onKetaiListSelection(String selection) - selection is the string selected from the list<br />

##### `private PApplet parent`

The parent.

##### `private ArrayAdapter<String> adapter`

The adapter.

##### `String name = "KetaiList"`

The name.

##### `String selection = ""`

The selection.

##### `ListView self`

The self.

##### `RelativeLayout layout`

The layout.

##### `private Method parentCallback`

The parent callback.

##### `String title = ""`

The title.

##### `public KetaiList(PApplet _parent, ArrayList<String> data)`

Instantiates a new ketai list. 

the _parent the data

 * **Parameters:**
   * `_parent` — 
   * `data` — 

##### `public KetaiList(PApplet _parent, String[] data)`

Instantiates a new ketai list. 

the _parent the data

 * **Parameters:**
   * `_parent` — 
   * `data` — 

##### `public KetaiList(PApplet _parent, String _title, String[] data)`

Instantiates a new ketai list. 

the _parent the _title the data

 * **Parameters:**
   * `_parent` — 
   * `_title` — 
   * `data` — 

##### `public KetaiList(PApplet _parent, String _title, ArrayList<String> data)`

Instantiates a new ketai list. 

the _parent the _title the data

 * **Parameters:**
   * `_parent` — 
   * `_title` — 
   * `data` — 

##### `public void refresh()`

Refresh.

##### `public String getSelection()`

Gets the selection.

 * **Returns:** the selection

##### `private void init()`

Inits the.
