(function(){
	angular
		.module('portfolio')
		.factory('DataFactory', DataFactory);

	function DataFactory(){

      var dataObj={};
      dataObj['tab']='name'
      return dataObj;
  };

      
	
})();

