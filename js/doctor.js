var apiKey = require('./../.env').apiKey;

Doctor = function(firstName, lastName, title, gender, bio, currentPractice, phone, image, npi){
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
  this.gender = gender;
  this.bio = bio;
  this.practice = currentPractice;
  this.phone = phone;
  this.image = image;
  this.npi = npi;
};

Doctor.prototype.getDoctors = function(medicalIssue, displayDoctors) {
  var foundDoctors = [];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
    console.log(response);
    console.log(image=response.data[0].npi);
    //CREATE SECOND FOR LOOP TO ACCESS ALL PRACTICES AND PHONES
    for (var i = 0; i < response.data.length; i++) {
      var newDoctor = new Doctor(firstName=response.data[i].profile.first_name, lastName=response.data[i].profile.last_name, title=response.data[i].profile.title, gender=response.data[i].profile.gender, bio=response.data[i].profile.bio, practice=response.data[i].practices[0].name, phone=response.data[i].practices[0].phones[0].number, image=response.data[i].profile.image_url, npi=response.data[i].npi);
      foundDoctors.push(newDoctor);
    }
    displayDoctors(foundDoctors);
  }).fail(function(error) {
    $('#show-doctors').text("fail");
  });
};

exports.doctorModule = Doctor;
