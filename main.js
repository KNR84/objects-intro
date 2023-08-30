const food = {
    type: "Hamburger",
    size: "Small",
    temperature: "Medium rare"
}
console.log (food);

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}
/*output each value to the terminal using dot notation 
wardrobe is the variable. Height, manufacturer, contents, depth & width
are the keys (objects). use dot notation to obtain the values inside the object(key).  With contents pull the objects out of the array using square brakets and the arrays value 0-4*/

console.log (`the wardrobe height is ${wardrobe.height}`);
console.log (`the wardrobe manufacturer is ${wardrobe.manufacturer}`);
console.log (`the depth of the wardrobe is ${wardrobe.depth}`);
console.log (`the width of the wardrobe is ${wardrobe.width}`);
console.log(`the contents of the wardrobe include ${wardrobe.contents[0]}, ${wardrobe.contents[1]},${wardrobe.contents[2]},${wardrobe.contents[3]},${wardrobe.contents[4]}`)

wardrobe.material = "Cedar"
console.log (wardrobe)

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

//use dot notation to output the dimensions

console.log (`The Empire State Building is ${empireStateBuilding.stories} stories tall.`);
console.log (`The Empire State Building is ${empireStateBuilding.height} feet tall.`);
console.log (`The Empire State Building is ${empireStateBuilding.squareFeet} square feet.`);
console.log (`The Empire State Building is ${empireStateBuilding.eastWestLength} feet from East to West.`);
console.log (`The Empire State Building is ${empireStateBuilding.northSouthLength} feet from North to South.`);

//create 5 variables with keys (objects) as their values.
//use the newly created variables to look up the values using square bracket notation//

let address = "address"
let addressFromBuilding = empireStateBuilding[address];
console.log(addressFromBuilding);

let cost = "cost"
let costOfBuilding = empireStateBuilding[cost];
console.log(costOfBuilding);

let owner = "owner"
let ownerOfBuilding = empireStateBuilding[owner];
console.log(ownerOfBuilding);

let architect = "architect"
let architectOfBuilding = empireStateBuilding[architect];
console.log(architectOfBuilding);

let constructionDate = "constructionDate"
let dateOfBuilding = empireStateBuilding[constructionDate];
console.log(dateOfBuilding);


const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

console.log(`${nashvilleSoftwareSchool.instructors.partTime[0]} and ${nashvilleSoftwareSchool.instructors.partTime[1]} are part time employees at Nashville Software School.`);
console.log(`${nashvilleSoftwareSchool.instructors.fullTime [0]} and ${nashvilleSoftwareSchool.instructors.fullTime[1]} ${nashvilleSoftwareSchool.instructors.fullTime[2]} ${nashvilleSoftwareSchool.instructors.fullTime[3]} ${nashvilleSoftwareSchool.instructors.fullTime[4]} are full time employees at Nashville Software School.`);