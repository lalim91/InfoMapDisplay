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
        pushQuestion.call(this);
    };

    function pushQuestion (){
        questionArray.push(this);
    }
}

var quiz = new quizGenerator();

function qMake(text, num, path){
    new quiz.makequestions(text, num, path);
}
qMake('What was your experience with JavaScript?',45,'back');
qMake('Do you like analogies and metaphors?',50,'back');
qMake('Do you like working with groups?',50,'front');
qMake('Do you enjoy CSS and Bootstrap?',45,'front');

