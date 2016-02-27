/**
 * Created by Lalim on 2/27/16.
 */

var question = {question: "Do you like to see and interact with your web page?", weight: 80, path: "front", answer: null};
var question2 = {question: "Do enjoy styling web pages?", weight: 50, path: "front", answer: null};
var question3 = {question: "Do you care about the user's experience with web page?", weight: 50, path: "front", answer: null};
var question4 = {question: "Do you hate HTML?", weight: 50, path: "back", answer: null};
var question5 = {question: "Do you hate bootstrap", weight: 50, path: "back", answer: null};
var question6 = {question: "Do you think DOM creation sucks ass?", weight: 50, path: "back", answer: null};

function frontOrBackPath(){
    var frontEnd;
    var backEnd;
    if (question.path === "front") {
        if(question.answer === "yes"){
            frontEnd += question.weight;
        }
        else if (question.answer === "no"){
            backEnd += question.weight;
        }

    }
    else if (question.path === "back"){
        if(question.answer === "yes"){
            backEnd += question.weight;
        }
        else if (question.answer === "no"){
            frontEnd += question.weight;
        }
    }
}