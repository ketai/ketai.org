# ke:tai Website Source
The source of the ketai.org reference website built in [Woods]("https://github.com/studiomoniker/woods"), a Node.js file based CMS.

### Showcase your work
1. Go to [Github repo]("https://github.com/ketai/ketai.org/tree/master/content/05-exhibition").

2. Make a pull request. 

3. Add a folder with your project title in content/05-exhibition/(your unique folder name) 

4. Include a .jpg thumbnail of your project in that folder with file named "thumbnail.jpg". The recommended file size is 800x600px

5. Your markdown file should be formatted in following manner (include *---*). 
 
```
---

title: Project Name

link: Link to your project

description: Text goes here

---
```

### Dependencies
1. [Node.js](https://nodejs.org/)
2. [npm](https://www.npmjs.com/) (Node Package Manager : Installed as a part of Node)
3. [Homebrew](http://brew.sh/)
4. [GraphicsMagick](http://www.graphicsmagick.org/)


### Installing Dependencies
1. Install Homebrew : [Instructions](http://brew.sh/)

		ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
		brew update

2. Install Node 

        brew install node

3. Install [GraphicsMagick](http://www.graphicsmagick.org/README.html)

        brew install graphicsmagick

---

### Installing Woods in OSX
Open the terminal in OSX and enter the following command:

    npm install woods -g
    woods
*In case of an error, try adding "sudo" in front of the command to get administrator privileges
Then point your browser to: [http://localhost:3000/](http://localhost:3000/)


The directory to locate the files for Woods in OSX : /usr/local/lib/node_modules/woods

By default the content is located in the example subfolder

To export the static HTML Pages : 

		woods -e /specify/the/path/of/your/folder
