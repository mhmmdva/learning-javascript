let totalDoctor = 2, totalPatient = 0, totalNurse = 1;

const CATEGORY_PATIENT = ["A", "B", "C"];
const NUMBER_OF_QUEUE = (totalPatient + 1);
const MINIMUM_AGE = 0;

let patient = function(name, age){
    let name = prompt("Masukkan nama pasien:", "Nama Pasien");
    let age = parseInt(prompt("Masukkan usia pasien:", "Usia Pasien"));

    return {name: name, age: age};
}

let categoryPatient = function(){
    switch(true){
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

  totalPatient++;

  return category + totalPatient;
}

let registerPatient = patient();

// function newFunction() {
//     let condition = function () {
//         if (!registration) {
//             console.log("Pendaftaran dibatalkan");
//             return;
//         } else if (registration === true) {
//             totalPatient++;
//             console.log("Pendaftaran berhasil, total pasien sekarang: " + totalPatient);
//         }
//     };

//     let patientRegister = function () {
//         let registration = confirm("Apakah Anda ingin mendaftar sebagai pasien?");

//         condition();

//         let name = prompt("Masukkan nama Anda:", "Nama Pasien");

//         alert("Terima kasih " + name + " telah mendaftar nomor antrian kamu : " + NUMBEROFLETTER[0] + NUMBEROFQUEUE);
//     };
//     return patientRegister;
// }
