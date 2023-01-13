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
              <CardBody className='Overview-card-body'>A few sentences providing an overview of the Ansible Middleware Project</CardBody>
              </center>
          </Card>
        </Box>
        <Box>
          <Title headingLevel="h1" size={TitleSizes['4xl']}>Use Cases</Title>
          <Card className='Overview-card' alignSelf={{ default: 'alignSelfCenter' }}>
              <center>
              <CardBody className='Overview-card-body'>
                  <Stack hasGutter>
                  <StackItem className='Overview-item-padding'>Ansible Middleware can be used to solve a lot of key challenges...</StackItem>
                  <StackItem>
                      <Flex justifyContent={{ default: 'justifyContentSpaceBetween' }}>
                      <FlexItem>
                          <Stack>
                          <StackItem><AnisbleIcon size="lg" /></StackItem>
                          <StackItem>Example</StackItem>
                          </Stack>
                      </FlexItem>
                      <FlexItem>
                          <Stack>
                          <StackItem><AnisbleIcon size="lg" /></StackItem>
                          <StackItem>Example</StackItem>
                          </Stack>
                      </FlexItem>
                      <FlexItem>
                          <Stack>
                          <StackItem><AnisbleIcon size="lg" /></StackItem>
                          <StackItem>Example</StackItem>
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
          <Flex>
              <FlexItem>
              <AnisbleIcon size="xl" />
              </FlexItem>
              <FlexItem className='Overview-item-padding'>
              <Title headingLevel="h2">Ansible</Title>
              <p className='Overview-item-padding'>Long form description of Ansible</p>
              </FlexItem>
          </Flex>
          <Flex hasGutter>
              <FlexItem>
                  <AnisbleIcon size="xl" />
              </FlexItem>
              <FlexItem>
                  <Title headingLevel='h2'>Red Hat Runtimes</Title>
                  Long form description of Red Hat Runtimes
              </FlexItem>
          </Flex>
        </Box>
  
        <Box>
          <Title headingLevel="h1" size={TitleSizes['4xl']} className='Overview-item-padding'>Getting Started</Title>
          <Stack hasGutter>
              <StackItem className='Overview-item-padding'><Bullseye><AnisbleIcon size="xl"/></Bullseye></StackItem>
              <StackItem className='Overview-item-padding'><center>
              Insert text saying how easy it is to get started and reference the guides and collections and documentation we have avalable
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
