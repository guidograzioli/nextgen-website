import React from 'react';
import "@patternfly/react-core/dist/styles/base.css";

import {
  Button,
  Card,
  Page,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  PageSidebar,
  PageSection,
  PageSectionVariants,
  PageToggleButton,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Stack,
  StackItem
} from '@patternfly/react-core'

import {
  TimesIcon
} from '@patternfly/react-icons';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Stack hasGutter>
      <StackItem>
        <Masthead id="basic-example">
          <MastheadToggle>
            <Button variant="plain" onClick={() => { }} aria-label="Global navigation">
              <BarsIcon />
            </Button>
          </MastheadToggle>
          <MastheadMain>
            <MastheadBrand>Logo</MastheadBrand>
          </MastheadMain>
          <MastheadContent>
            <span>Content</span>
          </MastheadContent>
        </Masthead>
      </StackItem>
      <StackItem isFilled>pf-m-fill</StackItem>
      <StackItem>Copyright</StackItem>
    </Stack>
  );
}

export default App; 
