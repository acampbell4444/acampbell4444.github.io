(function(){
    angular
        .module("portfolio")
        .controller("workCtrl", WorkController);
    WorkController.$inject = ['DataFactory'];
    

    function WorkController(DataFactory){
        var vm = this;
     
        vm.DataFactory=DataFactory;
     };



    
        
})();