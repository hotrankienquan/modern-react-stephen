// key api gg translate AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

import React, { useState } from 'react'
import Convert from './Convert';
import Dropdown from './Dropdown'

const options = [
    {
        label: 'afrikaans',
        value:'af'
    },
    {
        label: 'arabic',
        value:'ar'
    },
    {
        label: 'hindi',
        value:'hi'
    },
    {
        label: 'vietnamese',
        value:'vi'
    }
]

export default function Translate() {
    const [language, setLanguage] = useState(options[0]); // 1obj
    const [text,setText] =useState('')
  return (
      <div>
          <div className='ui form'>
              <div className='field'>
                  <label>enter text</label>
          <input value={text} onChange={e =>setText(e.target.value)}  />
                    </div>
          </div>
          <Dropdown
          label="select a language"
              selected={language} onSelectedChange={setLanguage} options={options} />
          <hr />
          <h3 className='ui header'>output</h3>
          <Convert text={text} language={language} />
    </div>
  )
}
