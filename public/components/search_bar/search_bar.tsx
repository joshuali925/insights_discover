import React, { useState, Fragment } from 'react'
import { EuiFlexItem, EuiSuperDatePicker, EuiFlexGroup, EuiSearchBar, EuiFieldText, EuiButtonEmpty, EuiPopover, EuiPopoverTitle, EuiText, EuiLink, EuiSpacer, EuiForm, EuiFormRow, EuiSwitch, EuiIcon, EuiListGroup, EuiPopoverFooter, EuiButton } from '@elastic/eui'
import renderSavedQueries from './saved_query_management_component';
import LanguageSwitcher from './language_switcher';

export default function SearchBar(props) {
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('SQL');

  const renderLanguageSwitcher = () => {
    return (
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
    )
  };

  const fetchResults = (
    Query: string,
    DefaultQuery: string,
    api: string
  ) => {
    return fetch(api, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        'kbn-version': '7.7.0',
      },
      body: `{"query":"${Query || DefaultQuery}"}`,
    })
      .then(resp => resp.json())
  };
  
  const fetchSoon = () => {
    if (language === 'SQL') {
      fetchResults(query, 'select * from kibana_sample_data_flights', '../api/sql_console/query')
      .then(json => JSON.parse(json.resp))
      .then(json => props.setResponse(json))
    } else if (language === 'PPL') {
      fetchResults(query, 'source=.kibana', 'http://localhost:9200/_opendistro/_ppl')
      .then(json => props.setResponse(json))
    }
  };

  return (
    <div style={{ marginTop: 10, marginBottom: 5, marginLeft: 5 }}>
      <EuiFlexGroup
        gutterSize="s"
        justifyContent="flexEnd"
      >
        <EuiFlexItem>
          <EuiFieldText
            placeholder='Search'
            value={query}
            fullWidth
            autoComplete="off"
            spellCheck={false}
            onKeyPress={(e) => {
              let code = e.keyCode || e.which;
              if (code === 13) {  // enter pressed
                fetchSoon();
              }
            }}
            type="text"
            role="textbox"
            onChange={(e) => { setQuery(e.target.value) }}
            prepend={renderSavedQueries()}
            append={renderLanguageSwitcher()}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiSuperDatePicker
            showUpdateButton={false}
            onTimeChange={(e) => console.log(e)}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  )
}
