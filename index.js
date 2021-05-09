'use strict'
const Jimp = require('jimp');
const fs = require('fs')

const batchImageProcessor =  {
    generateThumbnails:  (pathToRead='', pathToSave=pathToRead) => {
        console.log(pathToRead, pathToSave)
        if(pathToRead === '' ) {
            console.log('Path To Read void, please verify the path parameter exist.')
        } else {
            fs.readdir(pathToRead, {withFileTypes: true}, async(err, files) => {
                if(err) {
                    console.log('Error in fs.readdir')
                    console.error(err)
                    return
                }

                for(let image of files) {
                    if(image.isFile()){

                        try {
                            const imageToSave =  await Jimp.read(`${pathToRead}/${image.name}`)
                            await imageToSave.contain(100, 100)
                            await imageToSave.background(0xFFFFFFFF)
                            await imageToSave.write(`${pathToSave}thumbnail_${image.name}`)
                        } catch (error) {
                            console.error('JIMP ERROR', error)
                        }

                    }else{
                        console.log('NOT FILE', image)
                    }
                }
            })
            
        }    
    }
};

module.exports = batchImageProcessor
