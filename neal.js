
function dynamicShow(q){
    var self = this;
    var questions  = q;
    var index = 0;

    this.next = function(){
        if(index < questions.length){
            $("#quizQuestion").empty();
            append(questions[index].questions);
            index++;
        }
        else if(index == questions.length){
            console.log("activate paul function");
        }
    };
    this.current = function(){
        return questions[index];
    };
    function append(text){
        var current = $("<div>",{
            text: text
        });

        $("#quizQuestion").append(current);
    }
}

var dummy = [{question: "do you like dan", weight: 50, path: "front", answer: null}];
var quizshow = new dynamicShow(questionArray);

function clickAnswer(){

}