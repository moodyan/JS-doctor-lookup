var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(foundDoctors) {
  foundDoctors.forEach(function(doctor) {
    $('#show-doctors').append('<li class="doctor-info" npi=' + doctor.npi +'>' + doctor.firstName + ' ' + doctor.lastName + ', ' + doctor.title + '</li>');
  });
  addClick(npi)
};

var displayDoctorInfo = function(firstName, lastName, title, gender, bio, currentPractice, phone, image) {
    $('#show-doctor-info').append(image + '<br>');
    $('#show-doctor-info').append('<h2>' + firstName + ' ' + lastName + ', ' + title + '</h2><hr>');
    $('#show-doctor-info').append('<h4><strong>' + gender + '</strong></h4>');
    $('#show-doctor-info').append('<h3> Current Practice: ' + currentPractice + '<br>Phone: ' + phone + '</h3>');
    $('#show-doctor-info').append('<h4>' + bio + '</h4>');
};

$(document).ready(function() {
  var doctor = new Doctor();
  $('#doctor-search').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#medical-issue').val();
    // $('#location').val("");
    doctor.getDoctors(medicalIssue, displayDoctors);
    $('#show-doctors').empty();
  });
});
