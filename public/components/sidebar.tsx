import React from 'react'
import DiscoverIndexPattern from './discover_index_pattern'
import DiscoverFieldSearch from './discover_field_search'
import { EuiForm, EuiFormRow, EuiFieldText } from '@elastic/eui'

export default function SideBar() {
  return (
    <div>
      <section
        className="sidebar-list"
      >
        <DiscoverIndexPattern />
        <DiscoverFieldSearch />
        
      </section>
    </div>
  )
}
