import { StackItem } from "@patternfly/react-core";
import {
  Bullseye,
  Stack,
  Title,
  TitleSizes
} from '@patternfly/react-core';

export default function Homepage() {
  return (
    <Stack hasGutter>
      <StackItem>
          <Bullseye>
              <Title headingLevel="h1" size={TitleSizes['4xl']}>Ansible for Middleware</Title>
          </Bullseye>
      </StackItem>
      <StackItem>
          <Bullseye>
              Bringing the power of Ansible Automation to Red Hat Middleware
          </Bullseye>
      </StackItem>
    </Stack>
  );
}
