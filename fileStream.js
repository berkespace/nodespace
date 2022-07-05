var fs = require('fs')

fs.readFile('data.txt', 'utf8', function (error, data) {
    if (error) {
        throw error;
    }
    console.log(data);
});

// fs.writeFile('data2.txt', 'Java', function (error) {
//     if (error) {
//         throw error;
//     }
//     console.log("Inserted.");
// });

// fs.appendFile('data2.txt', 'C++', function (error) {
//     if (error) {
//         throw error;
//     }
//     console.log("Inserted.");
// });

fs.unlink('data2.txt',function (error) {
    if (error) {
        throw error;
    }
    console.log("Deleted.");
});