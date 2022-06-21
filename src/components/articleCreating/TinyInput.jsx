import React from 'react';
import {useRef} from "react";
import {Editor} from "@tinymce/tinymce-react"
import classes from './ArticleCreating.module.scss'

const TinyInput = ({tinyTitle}) => {
    const editorRef = useRef();
    return (
        <div className={classes.tinyInput}>
            <p>{tinyTitle}</p>
            <Editor
                onInit = {(evt,editor)=> editorRef.current = editor}
            />
        </div>
    );
};

export default TinyInput;
