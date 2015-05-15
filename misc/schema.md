```

Quiz: {
  _id,

  name: string,
  createdBy: User _id,
  dateCreated: Date,
  dateModified: Date,
  dateLastUsed: Date,
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

```
