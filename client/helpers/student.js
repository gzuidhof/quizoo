Template.registerHelper('allStudents', function() {
  return Students.find({}, {sort: {dateCreated: -1}});
});

Template.registerHelper('isStudentSelected', function(student_id) {
  return Session.get("studentSelected") == student_id;
});

Template.registerHelper('isAStudentSelected', function() {
  return Session.get("studentSelected");
});
