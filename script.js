/**
 * Created by Lalim on 2/27/16.
 */

var question = {question: "Do you like to see and interact with your web page?", weight: 80, path: "front", answer: null};
var question2 = {question: "Do enjoy styling web pages?", weight: 50, path: "front", answer: null};
var question3 = {question: "Do you care about the user's experience with web page?", weight: 50, path: "front", answer: null};
var question4 = {question: "Do you hate HTML?", weight: 50, path: "back", answer: null};
var question5 = {question: "Do you hate bootstrap", weight: 50, path: "back", answer: null};
var question6 = {question: "Do you think DOM creation sucks ass?", weight: 50, path: "back", answer: null};

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
    }
}
var quiz = new quizGenerator();

new quiz.makequestions('What was your experience with JavaScript?',45,'back');
new quiz.makequestions('Do you like analogies and metaphors?',50,'back');
new quiz.makequestions('Do you like working with groups?',50,'front');
new quiz.makequestions('Do you enjoy CSS and Bootstrap?',45,'front');
