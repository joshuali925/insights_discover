import React, { Fragment, useState } from 'react'
import { EuiButtonEmpty, EuiBadge, EuiIcon, EuiBadgeGroup, EuiSpacer } from '@elastic/eui'
import { metadata } from '../../data/data'

export default function Legends() {
  const [showAreaChart, setShowAreaChart] = useState(true);
  const [showLineChart, setShowLineChart] = useState(true);

  const renderBadge = (name, idx = -1, color = '') => {
    return (
      <EuiBadge
        key={`badge-${idx}`}
        color="#f5f5f5"
        iconType="cross"
        iconSide="right"
        iconOnClick={() => { }}
        iconOnClickAriaLabel=''
      >
        <EuiIcon type="dot" color={color} />
        {name}
      </EuiBadge>
    )
  }

  return (
    <Fragment>
      <div>
        <EuiButtonEmpty
          size="s"
          color='text'
          onClick={() => setShowAreaChart(!showAreaChart)}
          iconType={showAreaChart ? "arrowDown" : "arrowUp"}
          iconSide="right">
          Area chart
        </EuiButtonEmpty>
      </div>
      {showAreaChart &&
        <EuiBadgeGroup gutterSize="s">
          {metadata.map((data, idx) => data.type === 'area' && renderBadge(data.name, idx, data.color))}
        </EuiBadgeGroup>
      }
      <EuiSpacer />
      <div>
        <EuiButtonEmpty
          size="s"
          color='text'
          onClick={() => setShowLineChart(!showLineChart)}
          iconType={showLineChart ? "arrowDown" : "arrowUp"}
          iconSide="right">
          Line chart
        </EuiButtonEmpty>
      </div>
      {showLineChart &&
        <EuiBadgeGroup gutterSize="s">
          {metadata.map((data, idx) => data.type === 'line' && renderBadge(data.name, idx, data.color))}
        </EuiBadgeGroup>
      }
      <EuiSpacer />
      <div>
        <EuiButtonEmpty>
          + Add a layer
        </EuiButtonEmpty>
      </div>
    </Fragment>
  )
}
