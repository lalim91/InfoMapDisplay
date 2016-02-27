
function dynamicShow(q){
    var self = this;
    var questions  = q;
    var index = 0;

    this.next = function(){
        if(index < questions.length){
            $("#quizMain").empty();
            append(questions[index].questions);
            index++;

        }
        else if(index == questions.length){
            console.log("activate paul function");
        }
    };
    function append(q){
        var current = $("<div>",{
            text: q
        });
        var answer1 = $("<div>",{
            text: "I agree",
            id: "yes"
        });
        var answer2 = $("<div>",{
            text: "I hate this",
            id: "no"
        });
        $("#quizMain").append(current, answer1, answer2);
    }
}

var dummy = [{question: "do you like dan", weight: 50, path: "front", answer: null}];
var quizshow = new dynamicShow(questionArray);