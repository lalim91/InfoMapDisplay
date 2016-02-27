"use strict";

var model = new model();
var view = new view();
var controller = new controller();

function model() {
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
});