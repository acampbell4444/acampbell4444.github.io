(function(){
    angular
        .module("portfolio")
        .controller("contactCtrl", ContactController);
    ContactController.$inject = ['DataFactory'];
    

    function ContactController(DataFactory){
        var vm = this;
        vm.DataFactory=DataFactory;

      

    }


    
        
})();