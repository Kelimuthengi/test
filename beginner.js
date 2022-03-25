

var accessData = [];
// console.log(accessData);
var storeData = () => {
    
    var myName = "KELI";
    var secondname = "Muthengi";
    var school = "Ubunifu College";

    accessData.push(myName, secondname, school);

    // console.log(accessData);
}

storeData();

// console.log(school);

var newData = [...accessData];

console.log(newData);





