const fs = require ("fs");


//read contents of inputFile
//write cotent of a converted to uppercase to outputfile
// let the calling function know when its done using a callback.
// use error first arguments

function readFromAWriteToB(inputFile, OUTPUTfILE, cb) {
    fs.readFile(inputFile, "utf-8", (err, data) => {
        if (err) {
            cb("Error while reading first file");
        } else {
            fs.writeFile(outputFile, DataTransfer.toUppercase(), (err) => {
                if (err) {
                    cb("Error while writing to file");
                } else {
                    cb(null, " ");
                }
            })
        }
        
    });
}

// readFromAWriteToB("a.txt", "b.txt",(err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('done!!!');
//     }
// })


//2 read the content of a file , then wait for n second, then write the content
// back to the same file after converting to uppe case
// then wait for n second and then finish the asyn function
function readTimer(n,m,path, cb){
    fs.readFile(filePath,"utf-8",(err,data)=>{
        if(err){
            cb("error while redaing the file");
        }else{
            setTimeout(() => {
                fs.writeFILE(inputFile, data.toUpperCase(), (err,data) => {
                    if (err) {
                        cb("error while reading the file");
                    }else{
                        setTimeout(() => {
                            cb(null, " ");
                        },m);
                    }
                })
            }, m);
        }
    })
}

 readTimer(1000, 2000, "a.txt",(err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log("done");
    }
})



/* 3 GIVEN A INPUT (A.TXT) which has a bunch of path and contents of the files 
// write a function create(fileParth) that reads the file and creates new 
//files/folders adn puts the repective contents in trhen based on the input fil*/

/*
	Sample a.txt - 
	[{
		path: "./code/package.json",
		contents: "{name: "code-project"}"
	}, {
		path: "./code/index.js",
		contents: "console.log('hi there')"
	}]

*/

function createCode(filePath, cb) {
	fs.readFile(filePath, "utf-8", (err, data) => {
		const parsedData = JSON.parse(data);
		let arrayLength = parsedData.length;
		let counter = 0;
		
		parsedData.forEach(({path, contents}) => {
			fs.writeFile(path, contents, () => {
				counter++;
				if (counter == arrayLength) {
					cb()
				}
			});
		})
		
	})
}

createCode("a.txt", (err, data) => {
	console.log("all data has been written")
    function asyncAWAIT(){

    }
})  