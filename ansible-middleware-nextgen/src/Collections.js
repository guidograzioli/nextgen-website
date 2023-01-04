import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Gallery,
  Level,
  LevelItem
} from '@patternfly/react-core';

import AnisbleIcon from '@patternfly/react-icons/dist/esm/icons/ansible-tower-icon'; 

export default function Collections() {
  return (
    <Gallery hasGutter>
    <Card isRounded>
        <CardTitle> Tab 1 Card </CardTitle>
        <CardBody> Tab 1 Card Body</CardBody>
        <CardFooter>Tab 1 Card footer &nbsp;
        <AnisbleIcon/>
        </CardFooter>
    </Card>

    <Card isRounded>
        <CardTitle> Tab 1 Card </CardTitle>
        <CardBody> Tab 1 Card Body</CardBody>
        <CardFooter>Tab 1 Card footer</CardFooter>
    </Card>

    <Card isRounded>
        <CardTitle> Tab 1 Card </CardTitle>
        <CardBody> Tab 1 Card Body</CardBody>
        <CardFooter>Tab 1 Card footer</CardFooter>
    </Card>

    <Card isRounded>
        <CardTitle> Tab 1 Card </CardTitle>
        <CardBody> Tab 1 Card Body</CardBody>
        <CardFooter>Tab 1 Card footer</CardFooter>
    </Card>

    <Card isRounded>
        <CardTitle> Tab 1 Card </CardTitle>
        <CardBody> Tab 1 Card Body</CardBody>
        <CardFooter>Tab 1 Card footer</CardFooter>
    </Card>

    <Card isRounded>
        <CardTitle> Tab 1 Card </CardTitle>
        <CardBody> Tab 1 Card Body</CardBody>
        <CardFooter>Tab 1 Card footer</CardFooter>
    </Card>

    <Card isRounded>
        <CardTitle> Tab 1 Card </CardTitle>
        <CardBody> Tab 1 Card Body</CardBody>
        <CardFooter>Tab 1 Card footer</CardFooter>
    </Card>

    <Card isRounded>
        <CardTitle> Tab 1 Card </CardTitle>
        <CardBody> Tab 1 Card Body</CardBody>
    <CardFooter><Level>
        <LevelItem><AnisbleIcon/><br></br>Hello</LevelItem>
        <LevelItem><AnisbleIcon/><br></br>Hello</LevelItem>
        <LevelItem><AnisbleIcon/><br></br>Hello</LevelItem>
        <LevelItem><AnisbleIcon/><br></br>Hello</LevelItem>
        </Level></CardFooter>
    </Card>

    </Gallery>
  );
}
