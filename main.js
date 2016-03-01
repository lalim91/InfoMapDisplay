"use strict";

var model = new Model();
var view = new View();
var controller = new Controller();

function Model() {
    this.listOfQuestions = [{
        question: "Do you like to see and interact with your web page?",
        weight: 80,
        path: "front",
        answer: null},
        {
        question: "Do enjoy styling web pages?",
        weight: 50,
        path: "front",
        answer: null},
        {
        question: "Do you care about the user's experience with web page?",
        weight: 50,
        path: "front",
        answer: null},
        {
        question: "Do you hate HTML?",
        weight: 50,
        path: "back",
        answer: null},
        {
        question: "Do you hate bootstrap",
        weight: 50,
        path: "back",
        answer: null},
        {
        question: "Do you think DOM creation sucks ass?",
        weight: 50,
        path: "back",
        answer: null}
    ];
    this.currentQuestion = null;
    this.frontEnd = 0;
    this.backEnd = 0;
    this.index = 0;

}

function View() {
    var self = this;

    this.showNewQuestion = function(){
        if (model.index < model.listOfQuestions.length) {
            $("#quizQuestion").empty();
            this.appendQuestion(model.listOfQuestions[model.index].question);
            model.currentQuestion = model.listOfQuestions[model.index];
        }
        else {
            model.currentQuestion = null;
            $("#quizQuestion").empty();
            if (model.backEnd > model.frontEnd){
                self.appendQuestion("You should pick this backEnd!");
            }
            else if (model.backEnd < model.frontEnd){
                self.appendQuestion("You should pick this frontEnd!");
            }
            else{
                self.appendQuestion("Just Walk!");
            }
        }
    };

    this.appendQuestion = function(questionToShow){
        var div = $("<div>",{
            text: questionToShow
        });

        $("#quizQuestion").append(div);
    };
}

function Controller() {
    this.addToPath = function (question) {
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
    view.showNewQuestion();

    $('#next').click(function() {
        if(model.currentQuestion) {
            model.currentQuestion.answer = $('input[name=optradio]:checked').val();
            controller.addToPath(model.listOfQuestions[model.index]);
            model.index++;
            view.showNewQuestion();
        }
    });
});