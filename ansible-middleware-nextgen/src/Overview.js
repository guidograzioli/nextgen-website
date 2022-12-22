import { 
    Bullseye,
    Button,
    Card, 
    CardBody, 
    Flex, 
    FlexItem,
    Stack,
    StackItem,
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

export default function Overview() {
  return (
    <Flex className="Overview-container" direction={{ default: "column" }}>
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
            <StackItem className='Overview-item-padding'>
            <Flex justifyContent={{ default: 'justifyContentSpaceBetween' }}>
                <FlexItem>
                    <Button>Getting Started Guide</Button>
                </FlexItem>
                <FlexItem>
                    <Button>View the Collections</Button>
                </FlexItem>
                <FlexItem>
                    <Button>Explore the Documenation</Button>
                </FlexItem>
            </Flex>
            </StackItem>
        </Stack>
      </Box>
    </Flex>
  );
}
