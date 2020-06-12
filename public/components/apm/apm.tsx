import React, { useState } from 'react'
import SearchBar from '../search_bar/search_bar';
import { EuiTitle, EuiFlexGroup, EuiFlexItem, EuiButton, EuiFlexGrid, EuiText, EuiPanel } from '@elastic/eui';
import APMDashboards from './apm_dashboards';

export default function APM() {
  const [response, setResponse] = useState({});

  return (
    <>
      <EuiFlexGroup gutterSize='s' style={{ margin: 10 }}>
        <EuiFlexItem>
          <EuiTitle><h1>APM-all-apps</h1></EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton>Collab</EuiButton>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton iconSide='right' iconType='arrowDown'>Dashboard Actions</EuiButton>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton fill>Add Panel</EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
      <SearchBar response={response} setResponse={setResponse} />
      <APMDashboards />
    </>
  )
}
