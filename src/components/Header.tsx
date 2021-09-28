import React from 'react';

import {Link} from 'gatsby';

const styles = require( './Header.module.css');

type HeaderProps = {
    text: string;
}

export default ( {text}: HeaderProps ) => {
    return(
        <div className={styles.header}>
            <Link to='/'><h1>{text}</h1></Link>
        </div>
    )
}