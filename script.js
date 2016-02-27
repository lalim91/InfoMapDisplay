/**
 * Created by Lalim on 2/27/16.
 */
var questionArray = [];
function quizGenerator (){

    this.makequestions= function(questions,weight,path){
        this.questions = questions;
        this.weight = weight;
        this.path = path;
        this.answer = null;
        pushQuestion(this);
    };

    function pushQuestion (question){
        questionArray.push(question);
    }

}
var quiz = new quizGenerator();
quiz.makequestions('What was your experience with JavaScript?',45,'back');
quiz.makequestions('Do you like analogies and metaphors?',50,'back');
quiz.makequestions('Do you like working with groups?',50,'front');
quiz.makequestions('Do you enjoy CSS and Bootstrap?',45,'front');
console.log (questionArray);