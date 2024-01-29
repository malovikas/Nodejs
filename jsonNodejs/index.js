const fs = require('fs');
const bioData = {
    name: 'Malovika',
    age: 24,
    tech: 'React js',
};
console.log(bioData.age);

//to show the data into object->JSON
const jsonData = JSON.stringify(bioData);// stringify use for json 
console.log(jsonData)
//JSON->object
const obj_Data = JSON.parse(jsonData);
console.log(obj_Data.age)

// json file use in another file
fs.writeFile("jsonfile.json", jsonData, (err) => {
    console.log('Complete')
});

//how to read the file
fs.readFile("jsonfile.json", "utf-8", (err, data) => {
    const orgData = JSON.parse(data)//convert into object
    console.log(data)
    console.log(orgData)
})