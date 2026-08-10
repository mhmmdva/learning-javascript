function Patient() {
    this.patient = [];

    this.registerPatient = function (name,age,address,height,gender) {
        let newPatient = {
            name: name,
            age: age,
            address: address,
            height: height,
            gender: gender,
        };

    this.patient.push(newPatient);

    return newPatient;
  };
};

function Doctor(){
    this.doctor = [];

    this.doctorHospital = function (name, specialist, work){
        let dataDoctor = {
            name: name,
            specialist: specialist,
            work: work
        };
        
        this.doctor.push(dataDoctor);
        return dataDoctor;
    }   
};

let patientList = new Patient();
let doctorList = new Doctor();
