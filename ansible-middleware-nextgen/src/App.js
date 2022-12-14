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
  StackItem,
  Tabs,
  Tab,
  TabContent,
  TabTitleText,
  Tooltip
} from '@patternfly/react-core'

import {
  TimesIcon
} from '@patternfly/react-icons';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import logo from './logo.svg';
import './App.css';


class SeparateTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 0
    };

    this.contentRef1 = React.createRef();
    this.contentRef2 = React.createRef();
    this.contentRef3 = React.createRef();

    // Toggle currently active tab
    this.handleTabClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex
      });
    };
  }

  render() {
    return (
      <React.Fragment>
      <Masthead id="basic-example">
        <MastheadToggle>
          <Button variant="plain" onClick={() => { }} aria-label="Global navigation">
            <BarsIcon />
          </Button>
        </MastheadToggle>
        <MastheadContent>
          <Tabs
            activeKey={this.state.activeTabKey}
            onSelect={this.handleTabClick}
            aria-label="Tabs in the seperate content example"
            role="region"
          >
            <Tab
              eventKey={0}
              title={<TabTitleText>Home</TabTitleText>}
              tabContentId="refTab1Section"
              tabContentRef={this.contentRef1}
            >
            </Tab>
            <Tab
              eventKey={1}
              title={<TabTitleText>Overview</TabTitleText>}
              tabContentId="refTab2Section"
              tabContentRef={this.contentRef2}
            />
            <Tab
              eventKey={2}
              title={<TabTitleText>Collections</TabTitleText>}
              tabContentId="refTab3Section"
              tabContentRef={this.contentRef3}
            />
            <Tab
              eventKey={3}
              title={<TabTitleText>Examples</TabTitleText>}
              tabContentId="refTab4Section"
              tabContentRef={this.contentRef4}
            />
            <Tab
              eventKey={4}
              title={<TabTitleText>Documenation</TabTitleText>}
              tabContentId="refTab6Section"
              tabContentRef={this.contentRef6}
            />
          </Tabs>
        </MastheadContent>
      </Masthead>
        <div>
          <TabContent
            /* Home */
            eventKey={0}
            id="refTab1Section"
            ref={this.contentRef1}
            aria-label="This is content for the first separate content tab"
          >
            Tab 1 section
          </TabContent>
          <TabContent
            /* Overview */
            eventKey={1}
            id="refTab2Section"
            ref={this.contentRef2}
            aria-label="This is content for the second separate content tab"
            hidden
          >
            Tab 2 section
          </TabContent>
          <TabContent
            /* Collections */
            eventKey={2}
            id="refTab3Section"
            ref={this.contentRef3}
            aria-label="This is content for the third separate content tab"
            hidden
          >
            Tab 3 section
          </TabContent>
          <TabContent
            /* Examples */
            eventKey={3}
            id="refTab3Section"
            ref={this.contentRef3}
            aria-label="This is content for the third separate content tab"
            hidden
          >
            Tab 4 section
          </TabContent>
          <TabContent
            /* Documentation */
            eventKey={4}
            id="refTab3Section"
            ref={this.contentRef3}
            aria-label="This is content for the third separate content tab"
            hidden
          >
            Tab 3 section
          </TabContent>
        </div>
      </React.Fragment>
    );
  }
}

function App() {
  return (
    <span>
    <SeparateTabs />
    <footer class="footer">Footer Content</footer>
    </span>  
  );
}

export default App; 
