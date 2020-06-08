import React, { useState } from 'react'
import DiscoverIndexPattern from './discover_index_pattern'
import DiscoverFieldSearch from './discover_field_search'
import { EuiForm, EuiFormRow, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiButtonIcon, EuiTitle, EuiToken, EuiToolTip, EuiText, EuiButton } from '@elastic/eui'

export default function SideBar(props) {
  const addField = (field, idx) => {
    let newFields = [...props.selectedFields];
    newFields.push(props.availableFields[idx]);
    newFields.sort((a, b) => a.name.localeCompare(b.name));
    props.setSelectedFields(newFields);

    newFields = [...props.availableFields];
    newFields.splice(idx, 1);
    props.setAvailableFields(newFields);
  };

  const removeField = (field, idx) => {
    let newFields = [...props.availableFields];
    newFields.push(props.selectedFields[idx]);
    newFields.sort((a, b) => a.name.localeCompare(b.name));
    props.setAvailableFields(newFields);

    newFields = [...props.selectedFields];
    newFields.splice(idx, 1);
    props.setSelectedFields(newFields);
  };

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
      <>
        <EuiTitle size="xxxs">
          <h3>Selected fields</h3>
        </EuiTitle>
        {props.selectedFields.map((field, idx) => (
          <span key={`field-${idx}`} style={{ paddingLeft: 6 }} className='dscSidebarItem'>
            <span>
              {fieldIcon(field.icon)}
            </span>
            {/* TODO: fix vertical align for field name */}
            <span style={{ marginLeft: 10 }}>
              {fieldText(field.name)}
            </span>
            <span>
              {field.name !== '_source' && true && (
                <EuiButton
                  color="danger"
                  className="dscSidebarItem__action"
                  onClick={(ev: React.MouseEvent<HTMLButtonElement>) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    removeField(field, idx);
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
        {props.availableFields.map((field, idx) => (
          <div key={`field-${idx}`} style={{ paddingLeft: 6 }} className='dscSidebarItem'>
            <span>
              {fieldIcon(field.icon)}
            </span>
            {/* TODO: fix vertical align for field name */}
            <span style={{ marginLeft: 10 }}>
              {fieldText(field.name)}
            </span>
            <span>
              {field.name !== '_source' && true && (
                <EuiButton
                  className="dscSidebarItem__action"
                  fill
                  size="s"
                  onClick={(ev: React.MouseEvent<HTMLButtonElement>) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    addField(field, idx);
                  }}
                >
                  {'Add'}
                </EuiButton>
              )}
            </span>
          </div>
        ))}
      </>
    </>
  )
}
