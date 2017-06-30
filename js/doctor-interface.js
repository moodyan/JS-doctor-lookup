var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(foundDoctors) {
  foundDoctors.forEach(function(doctor) {
    $('#show-doctors').append('<li class="doctor-info" npi=' + doctor.npi +'>' + doctor.firstName + ' ' + doctor.lastName + ', ' + doctor.title + '</li>');
  });
  addClick(npi);
};

var displayDoctorInfo = function(firstName, lastName, title, gender, bio, currentPractice, phone, image, npi) {
    $('#show-doctor-info').append('<img src="' + image + '"><br>');
    $('#show-doctor-info').append('<h2>' + firstName + ' ' + lastName + ', ' + title + '</h2><hr>');
    $('#show-doctor-info').append('<h4><strong>' + gender + '</strong></h4>');
    $('#show-doctor-info').append('<h3> Current Practice: </h3><h4>' + currentPractice + '</h4><h3>Phone: </h3><h4>' + phone + '</h4>');
    $('#show-doctor-info').append('<p>' + bio + '</p>');
};

$(document).ready(function() {
  var doctor = new Doctor();
  $('#doctor-search').submit(function(event) {
    event.preventDefault();
    $('#results').show();
    var medicalIssue = $('#medical-issue').val();
    // $('#location').val("");
    $('#show-doctors').empty();
    $('#show-doctor-info').empty();
    doctor.getDoctors(medicalIssue, displayDoctors);
  });
});

var addClick = function(npi) {
  var doctor = new Doctor();
  $('.doctor-info').click(function() {
    // console.log("before: "+npi);
    // npi = $((this)[0].npi);
    // console.log("after: "+npi);
    doctor.getDoctorInfo(npi, displayDoctorInfo);
  });
};
