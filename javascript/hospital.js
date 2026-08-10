let totalDoctor = 4, totalPatient = 0, totalNurse = 1;

const CATEGORY_PATIENT = ["A", "B", "C"];
const QUEUE_NUMBER = { A: 0, B: 0, C: 0 };
const NUMBER_OF_QUEUE = (totalPatient + 1);

const MINIMUM_AGE = 0;

let patient = function (name, age) {
    name = ["Indra", "Budi", "Citra", "Dewi", "Eka",];
    age = [17, 12, 40, 90, 80, 65, 75];

    return { name: name, age: age };
}

let categoryPatient = function (age) {
    switch (true) {
        case age < 18:
            return CATEGORY_PATIENT[0];
        case age >= 18 && age <= 60:
            return CATEGORY_PATIENT[1];
        default:
            return CATEGORY_PATIENT[2];
    }
}


let categoryNumberQueuePatient = function (age) {
    let category = categoryPatient(age);

    QUEUE_NUMBER[category]++;
    totalPatient++;

    return category + QUEUE_NUMBER[category];
}

let registerPatient = patient();

console.log("Total pasien yang mendaftar: " + patient().name.length);
console.log("Total dokter yang siap melayani: " + totalDoctor);
console.log("Total perawat yang siap membantu: " + totalNurse);
console.log("\nSELAMAT DATANG DI RUMAH SAKIT\n\n");

for (let i = 0; i < registerPatient.name.length; i++) {
    let patientName = registerPatient.name[i];
    let patientAge = registerPatient.age[i];

    let queueNumber = categoryNumberQueuePatient(patientAge);

    let doctorNumber = (i % totalDoctor) + 1;

    console.log(patientName + " dengan nomor antrean " + queueNumber +
        " silakan masuk ke ruang dokter ke-" + doctorNumber
    );
}

const title = document.getElementById('title');
title.style.color = "#CBA347";
const subTitle = document.getElementById('sub-title');
subTitle.style.color = "#CBA347";
console.log(subTitle)