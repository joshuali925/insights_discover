import React, { useState } from 'react'
import { EuiButtonEmpty, EuiPopover, EuiPopoverTitle, EuiForm, EuiFormRow, EuiSwitch } from '@elastic/eui';

export default function language_switcher() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const button = (
    <EuiButtonEmpty
      size="xs"
      onClick={() => setIsPopoverOpen(!isPopoverOpen)}
      className="euiFormControlLayout__append"
    >
      {'SQL'}
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
        <EuiForm>
          <EuiFormRow label={'SQL'}>
            <EuiSwitch
              id="queryEnhancementOptIn"
              name="popswitch"
              label='SQL'
              checked={true}
              onChange={() => { }}
            />
          </EuiFormRow>
        </EuiForm>
      </div>
    </EuiPopover>
  )
}
