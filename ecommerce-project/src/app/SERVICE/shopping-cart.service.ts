import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

shopping_cart_items:any[]=[];

  constructor() { }

  addProduct = (product) =>{
    let items = this.get_shopping_cart_items();
    if(items){
      items.push(product)
      localStorage.setItem('shopping_cart', JSON.stringify(items))
    }else 
    {
      this.shopping_cart_items.push(product);

     localStorage.setItem('shopping_cart', JSON.stringify(this.shopping_cart_items));
    }    

    }   
      
    IsJsonString(str) {
      try {
          JSON.parse(str);
      } catch (e) {
          return false;
      }
      return true;       
  }


    get_shopping_cart_items =()=>{
      let items = localStorage.getItem('shopping_cart');
      if(this.IsJsonString(items)) return JSON.parse(items);
      else return[];                
  }  
                       

    getCartLength =()=>{
      let items = this.get_shopping_cart_items();
      return items? this.get_shopping_cart_items().length:0
                        
    }
    
    getTotal = ()=>{
      let items = this.get_shopping_cart_items();
      return items?.reduce((acc,item)=>acc+item.price,0);
      
    }
      
    removerItem=(p)=>{
      let items = this.get_shopping_cart_items();
      const index = items.findIndex(item=>item.id == p.id);
      if(index >= 0 )
      {
        items.splice(index,1);
        return localStorage.setItem('shopping_cart' , JSON.stringify(items))

      }    
    }

    
    
  }     
     
  
    
  
