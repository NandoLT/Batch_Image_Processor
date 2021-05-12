# BATCH IMAGE PROCESSOR

Utility to process batches of images. In this first version we implement a single method "generateThumbnails" (in future versions the set of tools will be expanded).

## How to install

```bash
npm i batch_image_processor
```
## Methods

### generateThumbnails
Method with four parameters: {
    A path ro read list of files,
    path to save the thumbnails generated,
    width,
    height
}
```bash
generateTumbnails(pathToRead[String], pathToSave[String])
```

Example of use:

- Without destructuring:
```bash
const imageProcessor = require('batchImageProcessor')
const pathToRead = path.join(__dirname + '/images/')
const pathToSave = path.join(__dirname + '/images/thumbnails/')

generateThumbnails({
    pathToRead, 
    pathToSave, 
    width : 300
    height: 350
})

```
- With destructuring:
```bash
const {generateThumbnails} = require('batchImageProcessor')
const pathToRead = path.join(__dirname + '/images/')
const pathToSave = path.join(__dirname + '/images/thumbnails/')

generateThumbnails({
    pathToRead, 
    pathToSave, 
    width : 300
})

```

In future versions, control of image extensions and other improvements will be added.