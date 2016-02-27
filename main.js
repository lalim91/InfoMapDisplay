"use strict";

var model = new model();
var view = new view();
var controller = new controller();

function model() {
    this.listOfQuestions = [{}];
    this.frontEnd = 0;
    this.backEnd = 0;

    this.addQuestion = function() {

    };
}

function view() {

}

function controller() {
    this.addToPath = function () {
        if (question.path === "front") {
            if (question.answer === "yes") {
                model.frontEnd += question.weight;
            }
            else if (question.answer === "no") {
                model.backEnd += question.weight;
            }

        }
        else if (question.path === "back") {
            if (question.answer === "yes") {
                model.backEnd += question.weight;
            }
            else if (question.answer === "no") {
                model.frontEnd += question.weight;
            }
        }
    }
}

$(document).ready(function() {
    model.addQuestion();
});