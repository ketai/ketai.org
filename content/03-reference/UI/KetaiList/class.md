#### KetaiList

##### ` class KetaiList extends ListView`

The KetaiList class provides an android UI scroll list. To receive the selection data a sketch should define the following method:<br /><br /> 

void onKetaiListSelection(String selection) - selection is the string selected from the list<br />

##### `String name = "KetaiList"`

The name.

##### `String selection = ""`

The selection.

##### `ListView self`

The self.

##### `RelativeLayout layout`

The layout.

##### `String title = ""`

The title.

##### ` KetaiList(PApplet _parent, ArrayList<String> data)`

Instantiates a new ketai list.

 * **Parameters:**
   * `_parent` — the _parent
   * `data` — the data

##### ` KetaiList(PApplet _parent, String[] data)`

Instantiates a new ketai list.

 * **Parameters:**
   * `_parent` — the _parent
   * `data` — the data

##### ` KetaiList(PApplet _parent, String _title, String[] data)`

Instantiates a new ketai list.

 * **Parameters:**
   * `_parent` — the _parent
   * `_title` — the _title
   * `data` — the data

##### ` KetaiList(PApplet _parent, String _title, ArrayList<String> data)`

Instantiates a new ketai list.

 * **Parameters:**
   * `_parent` — the _parent
   * `_title` — the _title
   * `data` — the data

##### ` void refresh()`

Refresh.

##### ` String getSelection()`

Gets the selection.

 * **Returns:** the selection
