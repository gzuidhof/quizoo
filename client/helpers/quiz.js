//Not functional yet :(,
//duplicate code in studentquiz.js / teacherquiz.js without this
Template.registerHelper('quiz', function() {
     var quizQuestion = {
       question: "2 woorden 8 letters?",
       answers: [
        "Duurt lang",
        "Bier halen",
        "Duurt lan"
       ],
       correctAnswer: 2
     };

     var quiz = {
       name: "TestQuizName",
       questions: [quizQuestion]
     };

     return quiz;
});
