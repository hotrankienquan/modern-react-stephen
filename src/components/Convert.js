import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Convert({ language, text }) {
    const [translated, setTranslated] = useState('')
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500)
        return () => {
            clearTimeout(timerId)
        }
    }, [text])
    useEffect(() => {
        // console.log('new language or text')
        axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
            params: {
                q : debouncedText,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        }).then(res => {
            const { data } = res;
            console.log(data)
            setTranslated(data.data.translations[0].translatedText)
        })
    }, [language,debouncedText])
  return (
      <div>
          {translated}
    </div>
  )
}

export default Convert