import React, { useState } from 'react'
import { EuiFlexGroup, EuiFlexItem, EuiPanel } from '@elastic/eui'
import SideBar from '../side_bar/side_bar'
import Plt from './plt';
import { sampleLogData, layout } from '../../data/data';

export default function Events() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [iconHover, setIconHover] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const [selectedFields, setSelectedFields] = useState([
    {
      name: '_id',
      icon: 'tokenElement'
    },
    {
      name: '_index',
      icon: 'tokenString'
    },
  ]);
  const [availableFields, setAvailableFields] = useState([
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
  ]);

  const iconStyle = iconHover ? { cursor: "pointer" } : { opacity: 0.4 };
  const iconClass = "kuiIcon fa-chevron-circle-" + (isSideBarOpen ? "left" : "right");

  return (
    <EuiFlexGroup style={{ padding: 5 }} gutterSize='s'>
      {isSideBarOpen &&
        <EuiFlexItem grow={false}>
          <SideBar selectedFields={selectedFields} availableFields={availableFields} setSelectedFields={setSelectedFields} setAvailableFields={setAvailableFields} />
        </EuiFlexItem>
      }
      <EuiFlexItem grow={false} style={{ width: 5 }}>
        <span className={iconClass} onClick={toggleSideBar} style={{ padding: 5, marginLeft: -9, ...iconStyle }} onMouseEnter={() => setIconHover(!iconHover)} onMouseLeave={() => setIconHover(!iconHover)}></span>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiPanel grow={false}>
          <Plt data={sampleLogData.data} title={sampleLogData.title} layout={layout} />
        </EuiPanel>
      </EuiFlexItem>
    </EuiFlexGroup>
  )
}
