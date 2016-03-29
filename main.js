"use strict";

angular.module("quizApp", ['ngRoute'])
    .config(function ($routeProvider) {
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
    .directive('myResult', function () {
        return {
            restrict: 'E',
            templateUrl: "result.html",
            scope: true,
            controller: function (resultsService) {
                this.outcome = {
                    side: resultsService.results,
                    description: resultsService.description,
                    image: resultsService.image
                }

            },
            controllerAs: 'rc'
        };
    })
    .service("qServ", function () {

        this.listOfQuestions = [
            {
                question: "I like to see and interact with my app",
                weight: 60,
                path: "front",
                answer: null
            }, {
                question: "The app works, I don't care how it looks.",
                weight: 90,
                path: "back",
                answer: null
            }, {
                question: "I enjoy styling my web pages to look and feel better.",
                weight: 80,
                path: "front",
                answer: null
            }, {
                question: "I never want to use bootstrap again",
                weight: 50,
                path: "back",
                answer: null
            }, {
                question: "I care about the user's experience with my app.",
                weight: 50,
                path: "front",
                answer: null
            }, {
                question: "I just want to write functions and let someone else implement them.",
                weight: 70,
                path: "back",
                answer: null
            }, {
                question: "My app have to look real good. REAL GOOD.",
                weight: 70,
                path: "front",
                answer: null
            }, {
                question: "I want to make my own database",
                weight: 100,
                path: "back",
                answer: null
            }
        ];
        this.currentQuestion = null;
        this.frontEnd = 0;
        this.backEnd = 0;
        this.index = 0;
    })
    .service("resultsService", function () {
        this.results = "";
        this.description = "";
        this.image = "";

    })


    .controller('quizController', function ($location, qServ, resultsService) {
        //this.test = qServ.listOfQuestions[2].question;
        var self = this;
        this.currentQ = qServ.currentQuestion;
        this.frontEnd = qServ.frontEnd;
        this.backEnd = qServ.backEnd;


        this.showNewQuestion = function () {
            console.log("new question");

            if (qServ.index < qServ.listOfQuestions.length) {
                qServ.currentQuestion = qServ.listOfQuestions[qServ.index];
                this.currentQ = qServ.currentQuestion.question;
            }
            else {
                qServ.currentQuestion = null;
                if (qServ.backEnd > qServ.frontEnd) {
                    resultsService.description = "You should pick this backEnd!";
                    resultsService.results = "back";
                    resultsService.image = "images/Dan.png";
                    window.location.href = '#results';
                }
                else if (qServ.backEnd < qServ.frontEnd) {
                    resultsService.description = "You should pick this frontEnd!";
                    resultsService.results = "front";
                    resultsService.image = "images/Eric.png";
                    window.location.href = '#results';
                }
                else {
                    resultsService.description = "Just Walk!";
                    resultsService.results = "none";
                    window.location.href = '#results';
                }
            }
        };

        this.addToPath = function (question) {
            if (question.path === "front") {
                if (question.answer === "Strongly Agree") {
                    qServ.frontEnd += question.weight;
                }
                else if (question.answer === "Agree") {
                    qServ.frontEnd += (question.weight / 2);
                }
                else if (question.answer === "Disagree") {
                    qServ.backEnd += (question.weight / 2);
                }
                else if (question.answer === "Strongly Disagree") {
                    qServ.backEnd += question.weight;
                }
            }
            else if (question.path === "back") {
                if (question.answer === "Strongly Agree") {
                    qServ.backEnd += question.weight;
                }
                else if (question.answer === "Agree") {
                    qServ.backEnd += (question.weight / 2);
                }
                else if (question.answer === "Disagree") {
                    qServ.frontEnd += (question.weight / 2);
                }
                else if (question.answer === "Strongly Disagree") {
                    qServ.frontEnd += question.weight;
                }
            }
            console.log("Front:", qServ.frontEnd, "Back:", qServ.backEnd);
        };
        this.nextQuestion = function () {

            console.log("current: ", self.currentQ, qServ.currentQuestion);


            if (qServ.currentQuestion) {
                qServ.currentQuestion.answer = $('input[name=optradio]:checked').val();
                self.addToPath(qServ.listOfQuestions[qServ.index]);
                qServ.index++;
                $('input[name=optradio]').attr('checked', false);
                self.showNewQuestion();
            }
            else {
                self.showNewQuestion();
            }
        }
    });