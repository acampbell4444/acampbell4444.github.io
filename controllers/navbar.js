(function(){
 
    angular
        .module("portfolio")
        .controller("navCtrl", NavController);

    
    NavController.$inject = ['DataFactory'];
    function NavController(DataFactory){
      var vm = this;
      vm.DataFactory=DataFactory;
      this.selectTab=selectTab;


      function selectTab(name) {
      	DataFactory['tab']=name;
      }

    }


    
        
})();