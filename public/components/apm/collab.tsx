import React, { useState } from 'react'
import { EuiFlyout, EuiFlyoutHeader, EuiTitle, EuiFlyoutBody, EuiFlexGroup, EuiFlexItem, EuiCheckbox, EuiText, EuiButtonEmpty, EuiHorizontalRule, EuiIcon } from '@elastic/eui';

export default function Collab(props) {
  const [alertsChecked, setAlertsChecked] = useState(true);
  const [commentsChecked, setCommentsChecked] = useState(true);

  const renderMessage = (message, idx) => {
    return (
      <>
        <EuiHorizontalRule />
        <EuiFlexGroup>
          <EuiFlexItem grow={false}>
            <EuiIcon type={message.icon} />
          </EuiFlexItem>
          <EuiFlexItem>
            {message.message}
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiText size='s'>
              {message.timestamp}
            </EuiText>
            <EuiText>
              {message.button}
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
      </>
    );
  };

  const messages = [
    {
      icon: 'bell',
      message: (
        <>
          <p>{'Severity 2 on Current rate'}</p>
          <p>{'Actual: 450'}</p>
          <p>{'Threshold: >= 300'}</p>
        </>
      ),
      button: 'Acknowledge',
      timestamp: '2 min ago',
    }
  ];

  return (
    props.flyoutOpen &&
    <EuiFlyout onClose={() => props.setFlyoutOpen(false)} size='m' maxWidth={500}>
      <EuiFlyoutHeader hasBorder >
        <EuiTitle>
          <h2 style={{ fontWeight: 470 }}>Collaboration</h2>
        </EuiTitle>
      </EuiFlyoutHeader>
      <EuiFlyoutBody>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiCheckbox
              id='checkbox--alerts'
              label="Alerts"
              checked={alertsChecked}
              onChange={() => setAlertsChecked(!alertsChecked)}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCheckbox
              id='checkbox--comments'
              label="Comments"
              checked={commentsChecked}
              onChange={() => setCommentsChecked(!commentsChecked)}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiButtonEmpty
              size='xs'
              onClick={() => { }}
              iconType=""
              color="text"
              iconSide="right">
              <EuiText size='s'>Unread only</EuiText>
            </EuiButtonEmpty>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiButtonEmpty
              size='xs'
              onClick={() => { }}
              color="text"
              iconType="arrowDown"
              iconSide="right">
              <EuiText size='s'>More filters</EuiText>
            </EuiButtonEmpty>
          </EuiFlexItem>
        </EuiFlexGroup>
        {/* {messages.map((msg, idx) => {
          return renderMessage(msg, idx)

        })} */}

      </EuiFlyoutBody>
    </EuiFlyout>
  );
}
