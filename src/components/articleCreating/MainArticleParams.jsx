import React from 'react';
import classes from "./ArticleCreating.module.scss"
import TitleInput from "../basisComps/titleInput/TitleInput";
import TinyInput from "./TinyInput";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {updateTitle} from "../../store/createArticleSlice";

const MainArticleParams = ({titleParams}) => {

    const [titleValue, setTitleValue] = useState("");
    // const [subTitleValue, setSubTitleValue] = useState("")
    // const [txtValue, setTxtValue] = useState("")

    const newArticle = useSelector(state => state.articleReducer)
    const dispatch = useDispatch()



    return (<div className={classes.mainArticleParams}>
            <p>{titleParams}</p>
            {JSON.stringify(newArticle)}
            <TitleInput value={titleValue}
                        setValue={(val)=>{
                            dispatch(updateTitle(val))
                        }}
                        titleToInput={"Заголовок статті"}
                        placeholder={"Заголовок вашої статті"}
                        width={"100%"}/>
            <TitleInput
                titleToInput={"Короткий опис статті"}
                placeholder={"Заголовок вашої статті"}
                width={"100%"}/>
            <TinyInput tinyTitle={"Текст статті"}/>
        </div>);
};

export default MainArticleParams;
