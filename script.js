/**
 * Created by Lalim on 2/27/16.
 */

var question = {question: "I like to see and interact with my web page.", weight: 80, path: "front", answer: null};
var question2 = {question: "I enjoy styling my web pages.", weight: 50, path: "front", answer: null};
var question3 = {question: "I care about the user's experience with my web page.", weight: 50, path: "front", answer: null};
var question4 = {question: "I hate working with HTML", weight: 50, path: "back", answer: null};
var question5 = {question: "I don't like using bootstrap for styling", weight: 50, path: "back", answer: null};
var question6 = {question: "I hate DOM creation", weight: 50, path: "back", answer: null};
var question7 = {question: "I want to create my own database", weight: 100, path: "back", answer: null};

var questionArray = [];
function quizGenerator (){

    this.makequestions= function(questions,weight,path){
        this.questions = questions;
        this.weight = weight;
        this.path = path;
        this.answer = null;
        pushQuestion.call(this);
    };

    function pushQuestion (){
        questionArray.push(this);
    };
}

var quiz = new quizGenerator();

function qMake(text, num, path){
    new quiz.makequestions(text, num, path);
}
qMake('What was your experience with JavaScript?',45,'back');
qMake('Do you like analogies and metaphors?',50,'back');
qMake('Do you like working with groups?',50,'front');
qMake('Do you enjoy CSS and Bootstrap?',45,'front');

