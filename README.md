# ke:tai Website Source
The source of the ketai.org reference website built in [Woods]("https://github.com/studiomoniker/woods"), a Node.js file based CMS

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
Then point your browser to: 
[http://localhost:3000/](http://localhost:3000/)


The directory to locate the files for Woods in OSX : /usr/local/lib/node_modules/woods

By default the content is located in the example subfolder.

To export the static HTML Pages : 

		woods -e /specify/the/path/of/your/folder
