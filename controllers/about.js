(function(){
    angular
        .module("portfolio")
        .controller("aboutCtrl", AboutController);
    AboutController.$inject = ['DataFactory'];
    

    function AboutController(DataFactory){
        var vm = this;
        vm.DataFactory=DataFactory;

      

    }


    
        
})();