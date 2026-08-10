let onlyCar = ["Toyota", "Honda", "Ford", "BMW"];
let onlyMotorcycle = ["Yamaha", "Suzuki", "Kawasaki", "Ducati"];

let dataCar = {
    "Toyota": {
        "Avanza": {
            "G": {
                seats: 7,
                trunk: "450 L",
                transmission: "Manual",
                engine: "1.3L",
                price: 210000000,
                year: 2020
            },
            "Veloz": {
                seats: 7,
                trunk: "450 L",
                transmission: "Automatic",
                engine: "1.5L",
                price: 260000000,
                year: 2021
            },
            "Q": {
                seats: 7,
                trunk: "450 L",
                transmission: "Automatic",
                engine: "1.5L",
                price: 300000000,
                year: 2022
            }
        },
        "Fortuner": {
            "G": {
                seats: 7,
                trunk: "720 L",
                transmission: "Automatic",
                engine: "2.4L Diesel",
                price: 540000000,
                year: 2020
            },
            "VRZ": {
                seats: 7,
                trunk: "720 L",
                transmission: "Automatic",
                engine: "2.7L Petrol",
                price: 620000000,
                year: 2021
            }
        }
    },
    "Honda": {
        "Civic": {
            "E": {
                seats: 5,
                trunk: "430 L",
                transmission: "Automatic",
                engine: "1.5L Turbo",
                price: 530000000,
                year: 2020
            },
            "RS": {
                seats: 5,
                trunk: "430 L",
                transmission: "CVT",
                engine: "1.5L Turbo",
                price: 570000000,
                year: 2021
            }
        },
        "CR-V": {
            "Prestige": {
                seats: 5,
                trunk: "522 L",
                transmission: "CVT",
                engine: "1.5L Turbo",
                price: 620000000,
                year: 2021
            }
        },
        "Accord": {
            "Sport": {
                seats: 5,
                trunk: "473 L",
                transmission: "CVT",
                engine: "2.4L",
                price: 720000000,
                year: 2022
            }
        }
    },
    "Ford": {
        "Mustang": {
            "EcoBoost": {
                seats: 4,
                trunk: "382 L",
                transmission: "Automatic",
                engine: "2.3L Turbo",
                price: 1100000000,
                year: 2021
            },
            "GT": {
                seats: 4,
                trunk: "382 L",
                transmission: "Manual",
                engine: "5.0L V8",
                price: 2200000000,
                year: 2022
            }
        }
    },
    "BMW": {
        "X1": {
            "sDrive18i": {
                seats: 5,
                trunk: "505 L",
                transmission: "Automatic",
                engine: "1.5L Turbo",
                price: 870000000,
                year: 2020
            }
        },
        "M4": {
            "Competition": {
                seats: 4,
                trunk: "440 L",
                transmission: "Automatic",
                engine: "3.0L Twin-Turbo",
                price: 2300000000,
                year: 2022
            }
        }
    }
};

console.log(onlyCar);
console.log(onlyMotorcycle);
console.log(dataCar);
console.log("Data Car:", dataCar["BMW"]["M4"]["Competition"].price, dataCar["BMW"]["M4"]["Competition"].transmission);