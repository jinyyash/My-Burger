/**
 * Created by Jinadi on 5/21/2018.
 */
import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../component/Burgers/Burger';
class BurgerBuilder extends Component{
    render(){
        return(
           <Aux>
               <Burger/>
               <div>Build controls</div>
           </Aux>
        );
    }
}
export default BurgerBuilder;