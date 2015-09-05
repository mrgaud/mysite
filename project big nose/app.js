var app = angular.module('site', []);
var info = {
    jumbotron:"Michael is great",
    jumbotron_p:'some text',
    brand:'Michael Gaudet   ',
    homehref:"file:///Users/MrGaud/Desktop/project%20big%20nose/index.html"
};
var news = [
    {
        text:'stuff',
        href:'#'
    },
    {
        text:'banana',
        href:'http://www.google.com'
    }];

//main controller
app.controller('mainController', function(){
    this.product=info;
});
app.controller('NewsController', function(){
    this.products=news;
});