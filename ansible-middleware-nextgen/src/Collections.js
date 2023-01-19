import {
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Gallery,
    GalleryItem,
    Level,
    LevelItem,
    Flex,
    FlexItem
} from '@patternfly/react-core';

import AnisbleIcon from '@patternfly/react-icons/dist/esm/icons/ansible-tower-icon';

export default function Collections() {
    return (
        <Flex className="Gallery-options" direction={{default: "column"}} align={{ default: "alignLeft"}} flexWrap={{default: "wrap"}} spaceItems={{default: "spaceItems2xl"}}>  
        
            <Flex className="Gallery-options" spaceItems={{default: "spaceItems2xl"}}>
            <Card isRounded isLarge> 
                <CardTitle> Tab 1 Card </CardTitle>
                <CardBody> Tab 1 Card Body</CardBody>
                <CardFooter>Tab 1 Card footer</CardFooter>
            </Card>
            
            <Card isRounded isLarge>
                <CardTitle> Tab 1 Card </CardTitle>
                <CardBody> Tab 1 Card Body</CardBody>
                <CardFooter>Tab 1 Card footer</CardFooter>
            </Card>
            
            <Card isRounded isLarge>
                <CardTitle> Tab 1 Card </CardTitle>
                <CardBody> Tab 1 Card Body</CardBody>
                <CardFooter>Tab 1 Card footer</CardFooter>
            </Card>
            
            <Card isRounded isLarge>
                <CardTitle> Tab 1 Card </CardTitle>
                <CardBody> Tab 1 Card Body</CardBody>
                <CardFooter>Tab 1 Card footer</CardFooter>
            </Card>
            </Flex>
            <Flex className="Gallery-options-two" spaceItems={{default: "spaceItems2xl"}}>
            <Card isRounded isLarge>
                <CardTitle> Tab 1 Card </CardTitle>
                <CardBody> Tab 1 Card Body</CardBody>
                <CardFooter>Tab 1 Card footer</CardFooter>
            </Card>
            
            <Card isRounded isLarge>
                <CardTitle> Tab 1 Card </CardTitle>
                <CardBody> Tab 1 Card Body</CardBody>
                <CardFooter>Tab 1 Card footer</CardFooter>
            </Card>
            
            <Card isRounded isLarge>
                <CardTitle> Tab 1 Card </CardTitle>
                <CardBody> Tab 1 Card Body</CardBody>
                <CardFooter>Tab 1 Card footer</CardFooter>
            </Card>
            
            
            <Card isRounded isLarge>
                <CardTitle> Tab 1 Card </CardTitle>
                <CardBody> Tab 1 Card Body</CardBody>
                <CardFooter> Tab 1 Card footer</CardFooter> 
            </Card>
            </Flex>
            
            </Flex>
            
            
            
        
        
    );
}
