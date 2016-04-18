(function() {
    'use strict';
    /* global angular */
    angular
        .module('app.editor')
        .controller('EditorController', EditorController);
        
    EditorController.$inject = ['$firebaseArray','$scope', '$location'];
        
    function EditorController($firebaseArray, $http, $scope, $location) {
        //can reference this instance/context of our controller in different areas of our code
        var vm = this;
        
        //connection to firebase
        // var fireDomains = new Firebase('https://content-editing-app.firebaseio.com/domains');
        
        // here we will need to handle the editing events on the app
        //  1. need the page edited an its content
        //  2. display in content editiable 
        //  3. on focus and blue will need to register changes on the dom
        //  4. make the changes ux friendly
        //  5. on save make a new object in firebase and send to designer
        
        
    }
    
})();