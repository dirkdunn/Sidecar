const { readdir, readFile } = require('fs');
const path = require('path');

class System {

    static listCurrentDirectory(){
        return new Promise((resolve, reject) => {
            readdir('.', {
                withFileTypes: true,
            }, (error, currentDirectory) => {
                try {
                    resolve(currentDirectory);
                }
                catch {
                    console.log(`There was an error reading the current directory: ${error.message}`);
                    reject(error);
                }
            });
        });
    }

    static listDirectory(directoryPath){
            return new Promise((resolve, reject) => {
                readdir(directoryPath, {
                    withFileTypes: true,
                }, (error, directory) => {
                    try {
                        resolve(directory);
                    }
                    catch {
                        console.log(`There was an error reading the directory: ${error.message}`);
                        reject(error);
                    }
                });
            });
    }

    static readFile(filePath){
        return new Promise((resolve, reject) => {
            readFile(filePath, (error, file) => {
                try {
                    resolve(file.toString());
                } catch(error) {
                    console.log(`There was an error reading the file: ${error.message}`);
                    reject(error);
                }
            });
        });
    }

    updateFile(){}

    renameFile(){}

    deleteFile(){}
}

module.exports = System;