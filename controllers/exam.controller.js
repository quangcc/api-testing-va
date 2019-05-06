const Exam = require('../models/exam.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.exam_create = function (req, res) {
    let exam = new Exam(
        {
            _id: req.body.idTest,
            description: req.body.description,
            colspan: req.body.colspan,
            rowspan: req.body.rowspan,
            listQuestion: req.body.listQuestion
        }
    );

    exam.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Exam Created successfully')
    })
};

// exports.exam_all = function (req, res) {
//     Exam.find({}, function (err, exams) {
//         res.send(exams);
//     });
// };

// exports.exam_details = function (req, res) {
//     Exam.findById(req.params.id, function (err, exam) {
//         if (err) return next(err);
//         res.send(exam);
//     })
// };

// exports.exam_update = function (req, res) {
//     Exam.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, exam) {
//         if (err) return next(err);
//         res.send('exam udpated.');
//     });
// };

// exports.exam_delete = function (req, res) {
//     Exam.findByIdAndRemove(req.params.id, function (err) {
//         if (err) return next(err);
//         res.send('Deleted successfully!');
//     })
// };