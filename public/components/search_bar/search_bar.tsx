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

  const fetchSQLResults = (
    SQLQuery: string,
    DefaultSQLQuery: string = 'select * from kibana_sample_data_flights',
    api: string = '../api/sql_console/query'
  ) => {
    return fetch(api, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        'kbn-version': '7.7.0',
      },
      body: `{"query":"${SQLQuery || DefaultSQLQuery}"}`,
    })
    // .then(resp => console.log(resp))
      .then(resp => resp.json())
      // .then(json => JSON.parse(json.resp))
      .then(json => props.setResponse(json))
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
                fetchSQLResults(query)
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
