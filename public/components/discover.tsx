import React, { useState } from 'react'
import { EuiText, EuiPopover, EuiButton, EuiButtonEmpty, EuiFlexGroup, EuiFlexItem, EuiPanel, EuiTabbedContent } from '@elastic/eui'
import SearchBar from './search_bar/search_bar';
import TopNavMenu from './top_nav_menu';
import Events from './events/events';


export default function Discover() {
  const tabs = [
    {
      id: 'events--id',
      name: 'Events',
      content: (
        <Events />
      )
    },
    {
      id: 'patterns--id',
      name: 'Patterns',
      content: (
        <>
        </>
      )
    },
    {
      id: 'statistics--id',
      name: 'Statistics',
      content: (
        <>
        </>
      )
    },
    {
      id: 'visualization--id',
      name: 'Visualization',
      content: (
        <>
        </>
      )
    }
  ]
  return (
    <>
      <TopNavMenu />
      <SearchBar />
      <EuiTabbedContent
        tabs={tabs}
        initialSelectedTab={tabs[0]}
        size='s'
        autoFocus="selected"
        onTabClick={tab => {
          // console.log('clicked tab', tab);
        }}
      />
    </>
  )
}
