/**
 * Created by Jinadi on 5/26/2018.
 */
import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const control=[
    {label:'Salad' ,type:'salad'},
    {label:'Bacon' ,type:'bacon'},
    {label:'Cheese' ,type:'cheese'},
    {label:'Meat' ,type:'meat'}
]
const buildControls=(props)=>(
    <div className={classes.BuildControls}>

        {control.map(ctr=>(
            <BuildControl key={ctr.label} label={ctr.label} />
        ))}

    </div>
);

export default buildControls;