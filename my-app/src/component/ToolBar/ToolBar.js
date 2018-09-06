import React from 'react';
import classes from './ToolBar.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
const toolBar = (props ) => (
<header className={classes.Toolbar}>
    <div>Menu</div>
    <Logo/>
    <nav>
        <NavigationItems/>
    </nav>
</header>
);


export default toolBar;