import React from 'react';
import SvgSelector from "../basisComps/SvgSelector/SvgSelector";
import BasicInput from "../basisComps/BasicInput/BasicInput";
import UnloggedUserBar from "./UnloggedUserBar";
import styles from "../../index.scss"
import classes from "./Header.module.css"
import LoggedUserBar from "./LoggedUserBar";
import BasicLinker from "../basisComps/BasicLinker";


const Header = () => {
    return (
        <header>
            <div className="mainContainer">
                <div className={classes.headerContainer}>
                    <SvgSelector  className={classes.svgLogo} id="navbarLogo"/>
                    <div className={classes.inputWithLink}>
                        <BasicInput  placeholder={"Пошук"} width={470}/>
                        <BasicLinker linkTxt={"Створити статтю"} linkWay={"#"} svgId={"DriveFileRenameOutlineIcon"}/>
                    </div>

                    <div className={classes.userEntry}>
                        {/*<UnloggedUserBar/>*/}
                        <LoggedUserBar/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
