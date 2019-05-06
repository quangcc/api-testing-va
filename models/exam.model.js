const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuestionSchema = new Schema({
    numberQuestion: {type: String, required: true, max: 100},
    question: {type: String, required: true},
    answers: {type: [String], required: true},
    answerOption: {type: Number, required: true},
});

let ExamSchema = new Schema({
    _id: {type: String, required: true, max: 100},
    description: {type: String, required: false},
    colspan: {type: Number, required: true},
    rowspan: {type: String, required: false},
    listQuestion: {type: [QuestionSchema], required: false},
});


// Export the model
module.exports = mongoose.model('Exam', ExamSchema);