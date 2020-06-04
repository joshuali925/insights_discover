import React, { useState, Fragment } from 'react'
import { EuiFlexItem, EuiSuperDatePicker, EuiFlexGroup, EuiSearchBar, EuiFieldText, EuiButtonEmpty, EuiPopover, EuiPopoverTitle, EuiText, EuiLink, EuiSpacer, EuiForm, EuiFormRow, EuiSwitch, EuiIcon, EuiListGroup, EuiPopoverFooter, EuiButton } from '@elastic/eui'

export default function SearchBar() {

  const renderLanguageSwitcher = () => {
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

  const renderSavedQueries = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const button = (
      <EuiButtonEmpty
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        title={'See saved queries'}
      >
        <EuiIcon type="save" className="euiQuickSelectPopover__buttonText" />
        <EuiIcon type="arrowDown" />
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
          Saved Queries
      </EuiPopoverTitle>
        <Fragment>
          <EuiText size="s" color="subdued" className="kbnSavedQueryManagement__text">
            <p>There are no saved queries. Save query text and filters that you want to use again.</p>
          </EuiText>
          <EuiSpacer size="s" />
        </Fragment>
        <EuiPopoverFooter>
          <EuiFlexGroup
            direction="rowReverse"
            gutterSize="s"
            alignItems="center"
            justifyContent="flexEnd"
            responsive={false}
            wrap={true}
          >
            <EuiFlexItem />
            <EuiFlexItem grow={false}>
              <EuiButton
                size="s"
                fill
                onClick={() => { }}
              >
                {'Save current query'}
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPopoverFooter>
      </EuiPopover >
    )
  }

  return (
    <div style={{ paddingTop: 10, paddingBottom: 15, paddingLeft: 5 }}>

      <EuiFlexGroup
        gutterSize="s"
        justifyContent="flexEnd"
      >
        <EuiFlexItem>
          <EuiFieldText
            placeholder='Search'
            value={''}
            fullWidth
            autoComplete="off"
            spellCheck={false}
            type="text"
            role="textbox"
            prepend={renderSavedQueries()}
            append={renderLanguageSwitcher()}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiSuperDatePicker
            onTimeChange={(e) => console.log(e)}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  )
}
