'use strict';

/**
 * @ngdoc function
 * @name greatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the greatApp
 */
angular.module('searchTaskApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.searchProduct = "";
  	$scope.searchType = "";
  	$scope.searchOrder = "";
    $scope.products = [
      {name: 'Xiaomi Redmi Note 3', image: 'Xiaomi_redmi_note_3.jpg', color: 'Gold', price: 6000, rating: '4', ratingcount: '26', manufactured: '2016', specification: [{camera: '5 MP', rom: '8 GB', ram: '2 GB', size: '5 inch', battery: '3200 mAh'}]},
      {name: 'Coolpad Note 3 Lite', image: 'Coolpad_note_3_lite.jpg', color: 'Black', price: 12000, rating: '1', ratingcount: '265', manufactured: '2015', specification: [{camera: '8 MP', rom: '16 GB', ram: '1 GB', size: '5 inch', battery: '2300 mAh'}]},
      {name: 'LeEco Le 1s Eco', image: 'LeEco_Le_1s_Eco.jpg', color: 'Gold', price: 13000, rating: '2', ratingcount: '126', manufactured: '2016', specification: [{camera: '13 MP', rom: '4 GB', ram: '4 GB', size: '5.5 inch', battery: '3200 mAh'}]},
      {name: 'Lenovo Vibe X2', image: 'lenovo_vibex2.jpg', color: 'Rose Gold', price: 5000, rating: '3', ratingcount: '89', manufactured: '2013', specification: [{camera: 'VGA', rom: '8 GB', ram: '3 GB', size: '4 inch', battery: '3200 mAh'}]},
      {name: 'Lenovo Vibe X3', image: 'lenovo_vibe_x3_silver.jpg', color: 'Silver', price: 8900, rating: '5', ratingcount: '97', manufactured: '2012', specification: [{camera: '32 MP', rom: '4 GB', ram: '2 GB', size: '5 inch', battery: '1200 mAh'}]},
      {name: 'Lenovo Vibe S1', image: 'lenovo_vibe_s1.jpg', color: 'White', price: 6000, rating: '4', ratingcount: '135', manufactured: '2016', specification: [{camera: '21 MP', rom: '32 GB', ram: '1 GB', size: '4 inch', battery: '1700 mAh'}]},
      {name: 'Moto G3', image: 'motog3.jpg', color: 'white', price: 6000, rating: '1', ratingcount: '658', manufactured: '2014', specification: [{camera: '13 MP', rom: '8 GB', ram: '3 GB', size: '5 inch', battery: '2800 mAh'}]},
      {name: 'Moto G4', image: 'motog4.jpg', color: 'Black', price: 7000, rating: '3', ratingcount: '731', manufactured: '2013', specification: [{camera: '8 MP', rom: '4 GB', ram: '4 GB', size: '4.7 inch', battery: '3400 mAh'}]},      
      {name: 'Lenovo K4 Note', image: 'Lenovo_K4Note_White.jpg', color: 'White', price: 9999, rating: '4', ratingcount: '834', manufactured: '2016', specification: [{camera: '5 MP', rom: '8 GB', ram: '1 GB', size: '6 inch', battery: '4200 mAh'}]},
      {name: 'Lenovo K4 Note', image: 'lenovo-k4-note.jpg', color: 'Black', price: 11500, rating: '2', ratingcount: '147', manufactured: '2015', specification: [{camera: '8 MP', rom: '4 GB', ram: '2 GB', size: '4 inch', battery: '2200 mAh'}]},
      {name: 'Lenovo Zuk Z1', image: 'Lenovo_zuk_z1.jpg', color: 'Black', price: 18000, rating: '5', ratingcount: '792', manufactured: '2016', specification: [{camera: '21 MP', rom: '32 GB', ram: '3 GB', size: '5 inch', battery: '1900 mAh'}]},
      {name: 'Lenovo Lemon 3', image: 'lenovo_lemon_3_gold.jpg', color: 'Gold', price: 24000, rating: '1', ratingcount: '361', manufactured: '2012', specification: [{camera: '13 MP', rom: '8 GB', ram: '3 GB', size: '5.5 inch', battery: '2600 mAh'}]},
      {name: 'Samsung On5 Pro', image: 'Samsung_on5_pro.jpg', color: 'Gold', price: 11000, rating: '3', ratingcount: '12', manufactured: '2016', specification: [{camera: 'VGA', rom: '8 GB', ram: '2 GB', size: '5 inch', battery: '2700 mAh'}]},
      {name: 'Samsung On7 Pro', image: 'Samsung_on7_pro.jpg', color: 'Gold', price: 16000, rating: '4', ratingcount: '39', manufactured: '2015', specification: [{camera: '5 MP', rom: '32 GB', ram: '1 GB', size: '5.5 inch', battery: '3200 mAh'}]}            
    ];    
    $scope.newSearchRadioValue = function(value) {
    	debugger;
  	  switch($scope.searchType) {
  	  	case 'lowprice':
  	  		$scope.searchOrder = "price";
  	  		break;
  	  	case 'highprice':
  	  		$scope.searchOrder = "-price";
  	  		break;
  	  	case 'popular':
  	  		$scope.searchOrder = "-rating";
  	  		break;
  	  	case 'new':
  	  		$scope.searchOrder = "-manufactured";
  	  		break;
  	  	default:
  	  		$scope.searchOrder = "";
  	  		break;
  	  }
	}
  });
