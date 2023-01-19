import React from 'react';

import { 
    Bullseye,
    Button,
    Card, 
    CardBody, 
    Flex, 
    FlexItem,
    Stack,
    StackItem,
    Tab,
    Tabs,
    Title,
    TitleSizes 
} from '@patternfly/react-core';

import AnisbleIcon from '@patternfly/react-icons/dist/esm/icons/ansible-tower-icon'; 
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import './App.css'

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

// The individual item that appears on scroll
const Box = ({ children }) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <FlexItem>
        {children}
      </FlexItem>
    </motion.div>
  );
};

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick.bind(this);
  }

  // when we click a button in the last box change the tab we're on in the parent
  handleButtonClick = (event, tabIndex) => {
    this.props.handleTabClick(event, tabIndex);
  }

  // content refs for the collectoins and documentation tabs from app.js
  contentRef3 = this.props.contentRef3;
  contentRef5 = this.props.contentRef5;

  render () {
    return (
      <Flex className="Overview-container" direction={{ default: "column" }}>
        <div className='Overview-top-spacing'></div>
        <Box>
          <Title headingLevel="h1" size={TitleSizes['4xl']}>Ansible for Middleware</Title>
          <Card className='Overview-card' alignSelf={{ default: 'alignSelfCenter' }}>
            <center>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </center>
          </Card>
          <div class="arrow bounce"><a class="fa fa-arrow-down fa-2x" href="#"></a></div>
        </Box>
        <Box>
          <Title headingLevel="h1" size={TitleSizes['4xl']}>Use Cases</Title>
          <Card className='Overview-card' alignSelf={{ default: 'alignSelfCenter' }}>
              <center>
              <CardBody className='Overview-card-body'>
                  <Stack hasGutter>
                  <StackItem className='Overview-item-padding'>Ansible Middleware can be used to solve a lot of key challenges...</StackItem>
                  <StackItem>
                    <Flex direction={{ default: 'row' }} justifyContent={{ default: 'justifyContentSpaceBetween' }}>
                      <FlexItem className='use-cases'>
                        <Stack>
                          <StackItem><AnisbleIcon size="lg" /></StackItem>
                          <StackItem><b>Example</b></StackItem>
                          <StackItem>Lorem ipsum dolor sit amet, aaaaaaaaaaaa</StackItem>
                        </Stack>
                      </FlexItem>
                      <FlexItem className='use-cases'>
                          <Stack >
                            <StackItem><AnisbleIcon size="lg" /></StackItem>
                            <StackItem><b>Example</b></StackItem>
                            <StackItem>Lorem ipsum dolor sit amet, aaaaaaaaaaaa</StackItem>
                          </Stack>
                      </FlexItem>
                      <FlexItem className='use-cases'>
                          <Stack>
                            <StackItem><AnisbleIcon size="lg" /></StackItem>
                            <StackItem><b>Example</b></StackItem>
                            <StackItem>Lorem ipsum dolor sit amet, aaaaaaaaaaaa</StackItem>
                          </Stack>
                      </FlexItem>
                    </Flex>
                  </StackItem>
                  </Stack>
              </CardBody>
              </center>
          </Card>
        </Box>
  
        <Box>
          <Title headingLevel="h1" size={TitleSizes['4xl']} className='Overview-item-padding'>Technologies</Title>
          <Flex direction={{ default: 'row' }}>
            <Flex>
                <FlexItem><AnisbleIcon size="xl" /></FlexItem>
            </Flex>
              <Flex flex={{ default: 'flex_1' }}>
              <FlexItem className='Overview-item-padding'>
                <Title headingLevel="h2">Ansible</Title>
                <p className='Overview-item-padding'>
                  Insert long form description of Ansible that we can get from the BU/Marketing including key links.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </FlexItem>
            </Flex>
          </Flex>
          <Flex direction={{ default: 'row' }}>
            <Flex>
                <FlexItem><AnisbleIcon size="xl" /></FlexItem>
            </Flex>
              <Flex flex={{ default: 'flex_1' }}>
              <FlexItem className='Overview-item-padding'>
                <Title headingLevel="h2">Red Hat Runtimes</Title>
                <p className='Overview-item-padding'>
                  Insert long form description of Red Hat Runtimes that we can get from the BU/Marketing including key links.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </FlexItem>
            </Flex>
          </Flex>
        </Box>
  
        <Box>
          <Title headingLevel="h1" size={TitleSizes['4xl']} className='Overview-item-padding'>Getting Started</Title>
          <Stack hasGutter>
              <StackItem className='Overview-item-padding'><Bullseye><AnisbleIcon size="xl"/></Bullseye></StackItem>
              <StackItem className='Overview-item-padding'><center>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </center></StackItem>
              <Bullseye><StackItem className='Overview-item-padding'>
                <Tabs
                    /* Switch to the overview tab when we click the 'Learn More' button */
                    activeKey={1} 
                    onSelect={this.handleButtonClick}
                    aria-label="Tabs in the seperate content example"
                    role="region"
                    hasBorderBottom={false}
                    hasSecondaryBorderBottom={false}
                  >
                  <Flex justifyContent={{ default: 'justifyContentSpaceBetween' }}>
                      <FlexItem>
                          <Button>Getting Started Guide</Button>
                      </FlexItem>
                      <FlexItem>
                        <Tab
                          eventKey={2}
                          title={<Button>View the Collections</Button>}
                          tabContentId="refTab3Section"
                          tabContentRef={this.contentRef3}      
                        />
                      </FlexItem>
                      <FlexItem>
                          <Tab
                            eventKey={4}
                            title={<Button>Explore the Documenation</Button>}
                            tabContentId="refTab5Section"
                            tabContentRef={this.contentRef5}
                          />
                      </FlexItem>
                  </Flex>
                </Tabs>
              </StackItem></Bullseye>
          </Stack>
        </Box>
      </Flex>
    );  
  }
}

export default Overview;
