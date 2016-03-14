
"use strict";

    angular.module("quizApp", ['ngRoute'])
        .config(function($routeProvider){
            $routeProvider
                .when('/home', {
                    templateUrl: 'splash.html'
                })
                .when('/quiz', {
                    templateUrl: 'quiz.html',
                    controller: 'quizController',
                    controllerAs: "qc"
                })
                .when('/results', {
                    templateUrl: 'results.html'
                })
                .otherwise({
                    redirectTo: '/home'
                })
        })
        .directive('myResult', function(){
             return{
                 restrict: 'E',
                 templateUrl: "result.html",
                 scope:true,
                 link: function(scope, elem, attr){

                 }
             };
         })
        .service("qServ", function(){

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
        })
        .service("resultsService", function(){
            this.results = "";
            this.description = "";

        })


        .controller('quizController', function ($location, qServ, resultsService) {
            //this.test = qServ.listOfQuestions[2].question;
            var self = this;
            this.currentQ = qServ.currentQuestion;
            this.showNewQuestion = function(){
                console.log("new question");
                if (qServ.index < qServ.listOfQuestions.length) {
                    qServ.currentQuestion = qServ.listOfQuestions[qServ.index];
                    this.currentQ = qServ.currentQuestion.question;
                }
                else {
                    qServ.currentQuestion = null;
                    if (qServ.backEnd > qServ.frontEnd){
                        this.currentQ ="You should pick this backEnd!";
                        window.location.href= '#results';
                    }
                    else if (qServ.backEnd < qServ.frontEnd){
                        this.currentQ = "You should pick this frontEnd!";
                        window.location.href= '#results';
                    }
                    else{
                        this.currentQ = "Just Walk!";
                        window.location.href= '#results';
                    }
                }
            };

            this.addToPath = function (question) {
                if (question.path === "front") {
                    if (question.answer === "yes") {
                        qServ.frontEnd += question.weight;
                    }
                    else if (question.answer === "no") {
                        qServ.backEnd += question.weight;
                    }
                }
                else if (question.path === "back") {
                    if (question.answer === "yes") {
                        qServ.backEnd += question.weight;
                    }
                    else if (question.answer === "no") {
                        qServ.frontEnd += question.weight;
                    }
                }
            };
            this.nextQuestion = function(){

                console.log("current: ", self.currentQ , qServ.currentQuestion);


                if(qServ.currentQuestion) {
                    qServ.currentQuestion.answer = $('input[name=optradio]:checked').val();
                    self.addToPath(qServ.listOfQuestions[qServ.index]);
                    qServ.index++;
                    $('input[name=optradio]').attr('checked',false);
                    self.showNewQuestion();
                }
                else{
                    self.showNewQuestion();
                }
            }
        });