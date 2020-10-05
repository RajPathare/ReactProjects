import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Convert = (props) => {

    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(props.text);


    // API throttling
    useEffect(()=>{

        const timeoutID = setTimeout(()=>{
            setDebouncedText(props.text);
        },5000)

        return () => {
            clearTimeout(timeoutID);
        }
    },[props.text])

    useEffect(()=>{

        const doTranslation = async () => {
            // console.log('new lang/text');
            //axios - first arg is for body, second obj is for query string params
           const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: props.language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })

            setTranslated(data.data.translations[0].translatedText);
        }

        doTranslation();
        
    },[props.language, debouncedText])

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
}

export default Convert;
