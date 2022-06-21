import React from 'react';
import classes from './ArticleCreating.module.scss'
import TitleInput from "../basisComps/titleInput/TitleInput";

const SettingsInputItem = () => {
    return (
        <div className={classes.settingsInputItem}>
            <TitleInput titleToInput={"Посилання на оригінал "} placeholder={"Посилання на статтю"} width={"100%"}/>
            <p>*якщо стаття переведена, вкажіть посилання на оригінал</p>
        </div>
    );
};

export default SettingsInputItem;
