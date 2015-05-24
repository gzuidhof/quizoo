Template.registerHelper('allStudents', function() {
  return Students.find({}, {sort: {dateCreated: -1}});
});
