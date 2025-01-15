// import cars from "./src/dataItems.js";


// console.log(cars);

// let idWeb = 4 

// let result = cars.find(el => {
//     return el.id === idWeb
// })

// console.log(result);


let nameUser = "Febri"

switch (nameUser) {
    case "Fattah":
        console.log("Ini Pak Fattah");
        break;

    case "Amjad":
        console.log("Ini Pak Amjad");
        break

    default:
        console.log("Ga ada satu orang pun yang bener");
        
        break;
}

if (nameUser === "Fattah") {
    console.log("Ini Pak Fattah");
}else if (nameUser === "Amjad") {
    console.log("Ini Pak Amjad");
}else {
    console.log("Ga ada satu orang pun yang bener");
}
