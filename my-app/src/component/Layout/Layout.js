/**
 * Created by Jinadi on 5/3/2018.
 */
import React from 'react';
import Aux from '../../hoc/Aux'
const  layout=(props)=>(
    <Aux>
    <div>toolbar,sideDrawer,BackDrop</div>
    <main>{props.children} </main>
    </Aux>
);

export default layout;