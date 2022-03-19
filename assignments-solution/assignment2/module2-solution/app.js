(function () 
{
    'use strict';

    var toBuyList = [{ name: "Milk",quantity: "10"},
                     { name: "Donuts",quantity: "20"},
                     { name: "Cookies",quantity: "25"},
                     { name: "Chocolate",quantity: "15"},
                     { name: "Cake",quantity: "5" }];
    
    var alreadyBoughtList = [ ];
    

    angular.module('CheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .provider('ShoppingList', ShoppingListProvider);
    
        
    
    ToBuyController.$inject = ['ShoppingList'];
    function ToBuyController(ShoppingList) 
    {
      var ToBuyList = this;          
      ToBuyList.items = ShoppingList.getItems();  
      ToBuyList.emptyMessage = "Everything is bought!";      

      ToBuyList.buyItem = function (itemIndex) 
      {
        ShoppingList.moveItem(ToBuyList.items[itemIndex].name, ToBuyList.items[itemIndex].quantity);
        ShoppingList.removeItem(itemIndex);        
      };

      
    }

    AlreadyBoughtController.$inject = ['ShoppingList'];
    function AlreadyBoughtController(ShoppingList) 
    {
      var BoughtList = this;
      BoughtList.items = ShoppingList.getBoughtItems();
      BoughtList.emptyMessage = "Nothing bought yet.";        
    }
    
        
    function ShoppingListService() {
      var service = this;
    
      // List of shopping items
      var items = toBuyList;  
      var boughtItems = alreadyBoughtList;      
      
      service.moveItem = function (itemName, quantity) 
      {       
          var boughtItem = { name: itemName,quantity: quantity};
          boughtItems.push(boughtItem);        
      };
    
      service.removeItem = function (itemIndex) 
      {
        items.splice(itemIndex, 1);
      };
    
      service.getItems = function () 
      {
        return items;
      };

      service.getBoughtItems = function ()
      {
        return boughtItems;
      };      

    }
    
    
    function ShoppingListProvider() 
    {
      var provider = this;
    
      provider.$get = function () 
      {
        var shoppingList = new ShoppingListService();    
        return shoppingList;
      };
    }

    })();
    