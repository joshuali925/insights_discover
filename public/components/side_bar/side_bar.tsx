import React, { useState } from 'react'
import DiscoverIndexPattern from './discover_index_pattern'
import DiscoverFieldSearch from './discover_field_search'
import { EuiForm, EuiFormRow, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiButtonIcon, EuiTitle, EuiToken, EuiToolTip, EuiText, EuiButton } from '@elastic/eui'

export default function SideBar() {
  const selectedFields = [
    {
      name: '_source',
      icon: 'tokenElement'
    },
    {
      name: '_id',
      icon: 'tokenElement'
    },
    {
      name: '_index',
      icon: 'tokenString'
    },
  ];
  const fields = [
    {
      name: 'DestWeather',
      icon: 'tokenString'
    },
    {
      name: 'Dest',
      icon: 'tokenString'
    },
    {
      name: 'DestAirportID',
      icon: 'tokenString'
    },
  ];

  const fieldIcon = (icon: string) => {
    return (
      <EuiToken
        iconType={icon}
        title={'Label'}
        size='s'
      />
    )
  }
  const fieldText = (name: string) => {
    return (
      <EuiToolTip
        position="top"
        content={name}
        delay="long"
      >
        <EuiText size="xs">
          {name}
        </EuiText>
      </EuiToolTip>
    )
  }
  return (
    <>
      <DiscoverIndexPattern />
      <DiscoverFieldSearch />
      {fields.length > 0 && (
        <>
          <EuiTitle size="xxxs">
            <h3>Selected fields</h3>
          </EuiTitle>
          {selectedFields.map(({ name, icon }, idx) => (
            <span key={`field-${idx}`} style={{ paddingLeft: 6 }} className='dscSidebarItem'>
              <span>
                {fieldIcon(icon)}
              </span>
              {/* TODO: fix vertical align for field name */}
              <span style={{ marginLeft: 10 }}>
                {fieldText(name)}
              </span>
              <span>
                {name !== '_source' && true && (
                  <EuiButton
                    color="danger"
                    className="dscSidebarItem__action"
                    onClick={(ev: React.MouseEvent<HTMLButtonElement>) => {
                      ev.preventDefault();
                      ev.stopPropagation();
                      // toggleDisplay(field);
                    }}
                  >
                    {"Remove"}
                  </EuiButton>
                )}
              </span>
            </span>
          ))}
          <EuiTitle size="xxxs">
            <h3>Available fields</h3>
          </EuiTitle>
          {fields.map(({ name, icon }, idx) => (
            <div key={`field-${idx}`} style={{ paddingLeft: 6 }} className='dscSidebarItem'>
              <span>
                {fieldIcon(icon)}
              </span>
              {/* TODO: fix vertical align for field name */}
              <span style={{ marginLeft: 10 }}>
                {fieldText(name)}
              </span>
              <span>
                {name !== '_source' && true && (
                  <EuiButton
                    className="dscSidebarItem__action"
                    fill
                    size="s"
                    onClick={(ev: React.MouseEvent<HTMLButtonElement>) => {
                      ev.preventDefault();
                      ev.stopPropagation();
                      // toggleDisplay(field);
                    }}
                  >
                    {'Add'}
                  </EuiButton>
                )}
              </span>
            </div>
          ))}
        </>
      )}
    </>
  )
}
