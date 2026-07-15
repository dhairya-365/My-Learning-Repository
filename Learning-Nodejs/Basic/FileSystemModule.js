const { readFile, writeFile } = require('fs');

readFile("Learning-Nodejs/Docs/first.txt", "utf-8", (err, results) => {
    if (err) {
        console.log(err);
        return;
    }
    const first_content = results;

    // once we are done reading first.txt its time to read second.txt 

    readFile("Learning-Nodejs/Docs/second.txt", "utf-8", (err, results) => {
        if (err) {
            console.log(err);
            return
        }
        const sec_content = results;

        // once we are reading both files it time to store the results in our main files.

        writeFile("Learning-Nodejs/Docs/test.txt", `The results : ${first_content}, ${sec_content}`, (err, results) => {
            if (err) {
                console.log(err);
                return
            }
            console.log(results);
        })
    })
})

// promised based api 

const { open } = require("fs/promises")
async function main() {
    const file_content = await open("Learning-Nodejs/Docs/first.txt", "r");
    try {
        const content = await file_content.readFile("utf-8");
        console.log(content);
    }
    finally {
        await file_content.close()
    }
}

main()

// using then 

const File = open("Learning-Nodejs/Docs/first.txt", "r");
File.then(
    (value) => {
        //readFile also return a promise.
        value.readFile("utf-8").then(
            (results) => {
                console.log(results);
            }
        )
    }
);

