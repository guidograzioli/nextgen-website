import React from 'react';
import "@patternfly/react-core/dist/styles/base.css";

import {
  Button,
  Card
} from '@patternfly/react-core'

import {
  TimesIcon
} from '@patternfly/react-icons';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Card>
      <Button variant="plain">
        <TimesIcon />
      </Button>

    </Card>
  );
}

export default App;
