import React from 'react';
import SvgSelector from "./SvgSelector/SvgSelector";
import classes from "./basicComps.module.scss"

const BasicLinker = ({linkTxt, linkWay, svgId}) => {
    return (
        <a href={linkWay} className={classes.basicLink}>
            <p>{linkTxt}</p>
            <SvgSelector id={svgId}/>
        </a>

    );
};

export default BasicLinker;
