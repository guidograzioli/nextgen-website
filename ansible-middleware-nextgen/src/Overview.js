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
          <Title headingLevel="h1" size={TitleSizes['4xl']}>Ansible Middleware</Title>
          <Card className='Overview-card' alignSelf={{ default: 'alignSelfCenter' }}>
            <center>
              <CardBody>
              <p>Ansible middleware brings the benefits of Ansible automation to upstream middleware (Runtimes) projects and Red Hat Application Services (Red Hat Runtimes). 
                You can utilize the power of Ansible automation to orchestrate installation, configuration, and management of middleware products. 
              </p>
              <br />
              <p>Ansible middleware includes a suite of utilities across the upstream middleware and Red Hat Runtimes portfolio that help in managing the full 
              lifecycle of the application server, their deployables, and the underlying operating system.</p>
              <p><a href="https://www.redhat.com/en/resources/application-services-modern-cloud-datasheet#:~:text=Red%20Hat%20Application%20Services%20includes,to%20focus%20on%20core%20competencies.&text=managed%20service%20of%20enterprise%20Kubernetes%20platform%20Red%20Hat%20OpenShift.">
                Learn more about Red Hat Application Services</a></p>
              </CardBody>
            </center>
          </Card>
          <div class="arrow bounce"><a class="fa fa-arrow-down fa-2x" href="#"></a></div>
        </Box>
        <Box>
          <Title headingLevel="h1" size={TitleSizes['4xl']}>What is Ansible?</Title>
          <Card className='Overview-card' alignSelf={{ default: 'alignSelfCenter' }}>
            <center>
              <CardBody>
              <p>Ansible helps in building and operating automation across your organization. Faster deployments with fewer to no manual releases ensure minimal downtime! Let us automate!</p>
              <p><a href="https://www.redhat.com/en/technologies/management/ansible">
                Learn more about Ansible.</a></p>
              </CardBody>
            </center>
          </Card>
        </Box>
        <Box>
          <Title headingLevel="h1" size={TitleSizes['4xl']}>What is Red Hat Runtimes?</Title>
          <Card className='Overview-card' alignSelf={{ default: 'alignSelfCenter' }}>
            <center>
              <CardBody>
              <p>Red Hat Runtimes is a set of products, tools, and components that are used to develop and maintain cloud-native applications. It offers lightweight runtimes and frameworks 
                for highly distributed cloud architectures, such as microservices. It also includes a distributed, in-memory caching for fast data access, single sign-on for authentication and 
                authorization, and messaging for reliable data transfer between existing and new applications.</p>
              <br />
              <p><a href="https://www.redhat.com/en/products/runtimes">
                Learn more about Red Hat Runtimes.</a></p>
              </CardBody>
            </center>
          </Card>
        </Box>
        <Box>
          <Title headingLevel="h1" size={TitleSizes['4xl']}>What Ansible integrations are available for Red Hat?</Title>
          <Card className='Overview-card' id='available-integrations' alignSelf={{ default: 'alignSelfCenter' }}>
            <CardBody>
              <p>
                Integrations with middleware products are available through a set of Ansible® Content Collections which can be included within new and 
                existing automation workflows. The Content Collections are a distribution format for Ansible content that can include 
                playbooks, roles, modules, and plug-ins around specific topics. Learn more about <a href="https://www.ansible.com/products/content-collections">
                Ansible Content Collections</a>
              </p>
              <br />
              <p>These collections are available for Red Hat Runtimes products on:</p>
              <li><a href="https://galaxy.ansible.com/">Upstream Ansible Galaxy</a></li>
              <li><a href="https://console.redhat.com/ansible/automation-hub">Red Hat Automation Hub for Red Hat customers</a></li>
              <br />
              <p>Check out which Ansible collections are available. Some examples of Ansible collections available for upstream middleware products and Red Hat Runtimes:</p>
              <li>Red Hat JBoss Web Server (Tomcat)</li>
              <li>Red Hat JBoss Enterprise Application Platform (WildFly)</li>
              <li>Red Hat Single Sign-On (Keycloak)</li>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Title headingLevel="h1" size={TitleSizes['4xl']}>What's Included?</Title>
          <Card className='Overview-card' id='included' alignSelf={{ default: 'alignSelfCenter' }}>
            <CardBody>
              <p>
                Integrations with Red Hat Runtimes products are available through a set of Ansible Content Collections which can be included within new 
                and existing automation workflows.  These collections are available within the upstream Ansible Galaxy and in Red Hat Automation Hub for Red 
                Hat Customers.</p>
              <br />
              <ul>
                <li>- Access the Ansible Middleware collections on Ansible Galaxy</li>
                <li>- Access the Ansible Middleware collections on Red Hat Automation Hub</li>
              </ul>
              <br />
              <p>
                Collections are available for popular Red Hat Runtimes including Red Hat JBoss Web Server (Tomcat), Red Hat JBoss Enterprise Application 
                Platform (WildFly), Red Hat Single Sign-On (Keycloak) and more!
              </p>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Title headingLevel="h1" size={TitleSizes['4xl']}>Developing</Title>
          <Card className='Overview-card' id='included' alignSelf={{ default: 'alignSelfCenter' }}>
            <CardBody>
              <p>
                The capabilities provided by Ansible Middleware, much like the rest of Ansible’s featureset, are just the foundation for the possibilities 
                that can be realized. Including the collections within your automation activities is easy and enables you to supercharge managing Red Hat 
                Runtimes anywhere -- from the datacenter, to the edge, to the public cloud.
              </p>
              <br />
              <p>
                Interested in contributing to the Ansible Middleware project? Navigate to the ansible-middleware GitHub organization and join the community!
              </p>
            </CardBody>
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
                    <Flex direction={{ default: 'row' }} justifyContent={{ default: 'justifyContentSpaceBetween' }}>
                      <FlexItem className='use-cases'>
                        <Stack>
                          <StackItem><AnisbleIcon size="lg" /></StackItem>
                          <StackItem><b>Server Installation and configuration</b></StackItem>
                          <StackItem>Provision and configure the Application Server and its underlying Operating System</StackItem>
                        </Stack>
                      </FlexItem>
                      <FlexItem className='use-cases'>
                          <Stack >
                            <StackItem><AnisbleIcon size="lg" /></StackItem>
                            <StackItem><b>Application Lifecycle</b></StackItem>
                            <StackItem>Manage the full lifecycle of applications and their dependencies</StackItem>
                          </Stack>
                      </FlexItem>
                      <FlexItem className='use-cases'>
                          <Stack>
                            <StackItem><AnisbleIcon size="lg" /></StackItem>
                            <StackItem><b>Drift Management</b></StackItem>
                            <StackItem>Enforce the desired state of the Application Server to prevent drift</StackItem>
                          </Stack>
                      </FlexItem>
                      <FlexItem className='use-cases'>
                          <Stack>
                            <StackItem><AnisbleIcon size="lg" /></StackItem>
                            <StackItem><b>Security and Compliance</b></StackItem>
                            <StackItem>Harden the security posture and assist with satisfying regulatory requirements</StackItem>
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
                  Ansible helps in building and operating automation across your organization. Faster deployments with fewer to no manual releases ensure 
                  minimal downtime! Let us automate! <a href="https://www.redhat.com/en/technologies/management/ansible">Learn more about Ansible.</a>
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
                  Red Hat Runtimes is a set of products, tools, and components to develop and maintain cloud-native applications. It offers lightweight runtimes
                  and frameworks for highly distributed cloud architectures, such as microservices, with distributed, in-memory caching for fast data access, 
                  single sign-on for authentication and authorization, and messaging for reliable data transfer between existing and new applications. <a
                  href="https://www.redhat.com/en/products/runtimes">Learn More about Red Hat Runtimes</a>
                </p>
              </FlexItem>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Title headingLevel="h1" size={TitleSizes['4xl']} className='Overview-item-padding'>Getting Started</Title>
          <Stack hasGutter>
              <StackItem className='Overview-item-padding'><Bullseye><AnisbleIcon size="xl"/></Bullseye></StackItem>
              <StackItem className='Overview-item-padding'>
                <p>You can use the Ansible collections to automate the installation and configuration of upstream middleware (Runtimes) and Red Hat Application Services 
                (Red Hat Runtimes) products. Here is what you need to do to get started:</p>
                <br />
                <li>Install Ansible</li>
                <li>Install Ansible navigator</li>
                <li>Define an inventory</li>
                <li>Create an Ansible playbook for any of the listed middleware products</li>
                <li>Run the Ansible playbook</li>
              </StackItem>
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
                          <Button component="a" href="https://developers.redhat.com/articles/2023/03/14/tutorial-middleware-automation-collections#" target="_blank">Getting Started Guide</Button>
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
