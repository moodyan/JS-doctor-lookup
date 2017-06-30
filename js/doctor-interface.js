var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(foundDoctors) {
  foundDoctors.forEach(function(doctor) {
    $('#show-doctors').append('<li>' + doctor.firstName + ' ' + doctor.lastName + ', ' + doctor.title + '</li>');
  });
};

$(document).ready(function() {
  // var foundDoctors = [];
  var doctor = new Doctor();
  $('#doctor-search').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#medical-issue').val();
    // $('#location').val("");
    doctor.getDoctors(medicalIssue, displayDoctors);
  });
});
