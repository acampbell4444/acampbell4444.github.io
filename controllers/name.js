(function(){
 
    angular
        .module("portfolio")
        .controller("nameCtrl", NameController);

    NameController.$inject = ['DataFactory'];
    

    function NameController(DataFactory){
        var vm = this;
        vm.DataFactory=DataFactory;

      

    }


    
        
})();