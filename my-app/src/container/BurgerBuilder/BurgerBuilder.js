/**
 * Created by Jinadi on 5/21/2018.
 */
import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../component/Burgers/Burger';
import BuildControls from '../../component/Burgers/BuildControls/BuildControls'
class BurgerBuilder extends Component{
   /* constructor(props){
        super(props);
        this.state={...}
    }*/

   state={
    ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0

     }
   };
    render(){
        return(
           <Aux>
               <Burger ingredients={this.state.ingredients}/>
               <BuildControls/>
           </Aux>
        );
    }
}
export default BurgerBuilder;