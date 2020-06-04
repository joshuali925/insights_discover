import React, { useState } from 'react'
import { EuiText, EuiPopover, EuiButton, EuiButtonEmpty, EuiFlexGroup, EuiFlexItem, EuiPanel } from '@elastic/eui'
import SideBar from './side_bar'
import Table from './table';
import SearchBar from './search_bar';
import TopNavMenu from './top_nav_menu';


export default function Discover() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [iconClass, setIconClass] = useState("kuiIcon fa-chevron-circle-left");
  const [iconHover, setIconHover] = useState(false);

  const toggleSideBar = () => {
    setIconClass("kuiIcon fa-chevron-circle-" + (isSideBarOpen ? "right" : "left"));
    setIsSideBarOpen(!isSideBarOpen);
  };

  const iconStyle = iconHover ? { cursor: "pointer" } : { opacity: 0.4 };
  return (
    <>
      <TopNavMenu />
      <SearchBar />
      <EuiFlexGroup style={{ padding: 5 }}>
        {isSideBarOpen &&
          <EuiFlexItem grow={false} style={{ marginRight: -10 }}>
            <SideBar />
          </EuiFlexItem>
        }
        <EuiFlexItem grow={false} style={{ width: 0 }}>
          <span className={iconClass} onClick={toggleSideBar} style={{ padding: 5, ...iconStyle }} onMouseEnter={() => setIconHover(!iconHover)} onMouseLeave={() => setIconHover(!iconHover)}></span>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel paddingSize="none" grow={false}>
            <Table />
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  )
}
