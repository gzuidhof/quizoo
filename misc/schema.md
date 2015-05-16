```

Quiz: {
  _id,
  name: string,
  createdBy: User _id,
  dateCreated: Date,
  dateModified: Date,
  dateLastUsed: Date,
  questions: question question_id[],
}

Question: {
  _id,
  quiz_id: Quiz _id,

  text: string,
  answers: {text:string, correct:boolean}[],
  answerType: number (integer), // Not sure about this
}

Class: {
  _id,

  name: string
}

Student: {
  _id,
  user_id: User _id, //Meteor 'user'
  class_id: Class _id,

  dateCreated: Date,
  dateLastLogin: Date,
  name: string, //IRL Name
  points: number (integer),
  powers: Power _id [],
}

Team: {
  _id,
  class_id: Class _id,

  name: string,
  members: Student _id[]
}

LiveQuiz: {
  _id,
  quiz_id : Quiz_id,
  status: Number, (0:Lobby, 1:Question, 2:PostQuestion, 3:Pause, 4:completed, 5:aborted)
  current_question: Question_id,
  participants: team_id[],
}
Answered: {
  _id,
  livequiz_id : LiveQuiz_id,
  team_id : Team_id
  student_id: Student_id
}
```
