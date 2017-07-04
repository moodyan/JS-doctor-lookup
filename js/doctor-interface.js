var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(foundDoctors) {
  if (foundDoctors.length === 0) {
    $('#show-doctors').append("Sorry, there are 0 doctors found in the Portland area with the specialty you are searching for.");
  }
  foundDoctors.forEach(function(doctor) {
    $('#show-doctors').append('<li class="doctor-info" id=' + doctor.id + '>' + doctor.firstName + ' ' + doctor.lastName + ', ' + doctor.title + ' (' + doctor.specialty + ')</li>');
  });
  addClick(id);
};

var displayDoctorInfo = function(firstName, lastName, title, bio, currentPractice, phone, image, specialty, specialtyDescription) {
    $('#show-doctor-info').append('<img src="' + image + '"><br>');
    $('#show-doctor-info').append('<h2>' + firstName + ' ' + lastName + ', ' + title + '</h2>');
    $('#show-doctor-info').append('<h4><strong>Specialty: ' + specialty + '</strong></h4>');
    $('#show-doctor-info').append('<h4>' + specialtyDescription + '</h4><hr>');
    $('#show-doctor-info').append('<h3> Current Practice: </h3><h4>' + currentPractice + '</h4><h3>Phone: </h3><h4>' + phone + '</h4>');
    $('#show-doctor-info').append('<p>' + bio + '</p>');
};

$(document).ready(function() {
  $('#doctor-search').click(function() {
    var doctor = new Doctor();
    $('#results').show();
    $('#show-doctors').show();
    var medicalIssue = $('#medical-issue').val();
    // $('#location').val("");
    $('#show-doctors').empty();
    $('#show-doctor-info').empty();
    $('#show-doctor-info').hide();
    doctor.getDoctors(medicalIssue, displayDoctors);
  });
});

var addClick = function(id) {
  var selectedDoctor = new Doctor();
  // console.log(selectedDoctor[0]);
  $('.doctor-info').click(function() {
    $('#show-doctor-info').empty();
    $('#show-doctor-info').show();

    // $('#show-doctors').hide();
    // $('#results').show();
    // console.log("after: "+(this)[0].id);
    id = $(this)[0].id;
    selectedDoctor.getDoctorInfo(id, displayDoctorInfo);
  });
};
