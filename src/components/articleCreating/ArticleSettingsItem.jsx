import React from 'react';
import classes from "./ArticleCreating.module.scss"
import FixedTags from "./FixedTags";



const ArticleSettingsItem = () => {
    return (
            <div className={classes.articleSettingsItem}>
                <p>Теги по темам</p>
                <FixedTags/>
            </div>
    );
};

export default ArticleSettingsItem;
