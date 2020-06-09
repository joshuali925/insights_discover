import React, { useState } from 'react'
import { EuiButtonEmpty, EuiPopover, EuiPopoverTitle, EuiForm, EuiFormRow, EuiSwitch, EuiSelect } from '@elastic/eui';

export default function LanguageSwitcher(props) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const button = (
    <EuiButtonEmpty
      size="xs"
      onClick={() => setIsPopoverOpen(!isPopoverOpen)}
      className="euiFormControlLayout__append"
    >
      {props.language}
    </EuiButtonEmpty>
  );
  return (
    <EuiPopover
      ownFocus
      anchorPosition='downRight'
      button={button}
      isOpen={isPopoverOpen}
      closePopover={() => setIsPopoverOpen(false)}
      withTitle
    >
      <EuiPopoverTitle>
        Syntax options
    </EuiPopoverTitle>
      <div style={{ width: '350px' }}>
        <EuiSelect
          options={[
            {
              value: 'SQL',
              text: 'SQL',
            },
            {
              value: 'PPL',
              text: 'PPL',
            }
          ]}
          value={props.language}
          onChange={(e) => props.setLanguage(e.target.value)}
        />
      </div>
    </EuiPopover>
  )
}
