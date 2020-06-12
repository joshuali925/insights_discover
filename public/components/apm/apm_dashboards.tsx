import React, { useState } from 'react'
import { EuiFlexItem, EuiPanel, EuiTitle, EuiText, EuiFlexGroup, EuiSpacer, EuiFlexGrid } from '@elastic/eui';
import { getStats } from './get_stats';
import Plt from '../visualization/plt';
import { apm_data } from '../../data/apm_data';

export default function APMDashboards() {

  const renderDashboard = (data, idx) => {
    return (
      <EuiFlexItem key={`apm-dashboard-${idx}`}>
        <EuiPanel grow={false} paddingSize='s'>
          <EuiText style={{ fontWeight: 470, fontSize: 14, marginLeft: 5 }}>
            {data.name}
          </EuiText>
          {typeof data.data === 'string' ? (
            <>
              <EuiSpacer size='s' />
              <EuiText style={{ marginLeft: 5 }}>
                <h2>{data.data}</h2>
              </EuiText>
            </>
          ) : (
              <>
                <Plt data={data.data} layout={data.layout} />
              </>
            )}
        </EuiPanel>
      </EuiFlexItem>
    );
  };


  return (
    <>
      <EuiFlexGrid columns={4} style={{ margin: 10 }}>
        {apm_data.map((data, idx) => (
          renderDashboard(data, idx)
        ))}
      </EuiFlexGrid>
    </>
  )
}
