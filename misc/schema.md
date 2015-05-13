Quiz: {
  _id,
  name: string,
  questions: Question _id []

  createdBy: User _id,

  dateCreated: Date,
  dateModified: Date,
  dateLastUsed: Date,
}

Question: {
  _id,
  text: string,
  answers: Answer _id[],
  answertype: number (integer), /*0: Multiple choice single (select 1), 1: Multiple choice multiple */
}




Answer: {
  _id,
  text: string,
  correct: boolean,
}


Class: {
  _id,
  name: string,
  students: Student _id [],

}

Student: {
  _id,
  created: Date,
  last_login: Date,
  name: string,
  username: string,
  points: number (integer),
  powers: Power _id [],

}
