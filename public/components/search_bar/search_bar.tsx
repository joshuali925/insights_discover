import React, { useState, Fragment } from 'react'
import { EuiFlexItem, EuiSuperDatePicker, EuiFlexGroup, EuiSearchBar, EuiFieldText, EuiButtonEmpty, EuiPopover, EuiPopoverTitle, EuiText, EuiLink, EuiSpacer, EuiForm, EuiFormRow, EuiSwitch, EuiIcon, EuiListGroup, EuiPopoverFooter, EuiButton } from '@elastic/eui'
import renderSavedQueries from './saved_query_management_component';
import renderLanguageSwitcher from './language_switcher';

export default function SearchBar() {
  return (
    <div style={{ paddingTop: 10, paddingBottom: 15, paddingLeft: 5 }}>
      <EuiFlexGroup
        gutterSize="s"
        justifyContent="flexEnd"
      >
        <EuiFlexItem>
          <EuiFieldText
            placeholder='Search'
            value={''}
            fullWidth
            autoComplete="off"
            spellCheck={false}
            type="text"
            role="textbox"
            prepend={renderSavedQueries()}
            append={renderLanguageSwitcher()}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiSuperDatePicker
            onTimeChange={(e) => console.log(e)}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  )
}
