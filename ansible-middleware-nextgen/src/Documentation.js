import React from 'react';
import './App.css';

import { Split, SplitItem, Tabs, Tab, TabContent, TabTitleText } from '@patternfly/react-core'
// markdown-it is the module that turns md files to html
const md = require('markdown-it')({
    breaks: true // add <br> tags between elements
});

// github links
const readmeLinks = [
    'https://raw.githubusercontent.com/ansible-middleware/infinispan/main/README.md',
    'https://raw.githubusercontent.com/ansible-middleware/keycloak/main/README.md',
    'https://raw.githubusercontent.com/ansible-middleware/wildfly/main/README.md',
    'https://raw.githubusercontent.com/ansible-middleware/jws/main/README.md',
    'https://raw.githubusercontent.com/ansible-middleware/amq/main/README.md',
    'https://raw.githubusercontent.com/ansible-middleware/amq_streams/main/README.md',
    'https://raw.githubusercontent.com/ansible-middleware/redhat-csp-download/main/README.md',
    'https://raw.githubusercontent.com/ansible-middleware/ansible_collections_jcliff/main/README.md'
]

// convert markdown into HTML then sanitize the output to work with patternfly
function convertMarkdownToHTML(data) {
    // have to remove comments before md converts it
    let commentPattern = new RegExp(/<!--[\s\S]*?-->/g);
    let result = data.replace(commentPattern, "");

    // turn markdown in html
    result = md.render(result);

    // change class to className for patternfly
    result = result.replace(/class/g, "className");

    // add br tags to create github style spacing between some elements
    result = result.replace(new RegExp("</p>", "g"), "</p><br/>");
    result = result.replace(new RegExp("</pre>", "g"), "</pre><br/>")

    // Adding strong tags to header to match GitHub appearance
    for (let i = 1; i < 5; i += 1) {
        result = result.replace(new RegExp(`<h${i}>`, "g"), `<h${i}><strong>`);
        result = result.replace(new RegExp(`</h${i}>`, "g"), `</strong></h${i}><br/>`);
    }
      
    return result;
}

// might have to seperate the displaying of the docs into its own fragment w/ componentonmount type beat
// maybe have it get the active key from the super
class CollectionDoc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            readmeIndex: this.props.readmeIndex,
            loading: true,
            docText: "",
        };
    }

    componentDidMount() {
        // generate html for each readme
        fetch(readmeLinks[this.state.readmeIndex])
            .then((response) => { return response.text();})
            .then((data) => {
            this.setState({ docText: this.state.docText + convertMarkdownToHTML(data), loading: false });
                })
            .catch((error) => { console.log(error);
        });
        
    }

    render() { 
        return (
            <div className="Documentation">
                <div>
                    {this.state.loading || !this.state.docText ? (
                    <div>Loading...</div>
                        ) : ( 
                    
                    <div dangerouslySetInnerHTML={{ __html: this.state.docText }} />
                    )}
                </div>
            </div>
        );
    }
}

class Documentation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: true,
            docText: "",
            activeKey: 0
        };

        this.contentRef1 = React.createRef();
        this.contentRef2 = React.createRef();
        this.contentRef3 = React.createRef();
        this.contentRef4 = React.createRef();
        this.contentRef5 = React.createRef();
        this.contentRef6 = React.createRef();
        this.contentRef7 = React.createRef();
        this.contentRef8 = React.createRef();

        this.handleTabClick = (event, tabIndex) => {
            this.setState({
                activeTabKey: tabIndex
            });

            // set scroll back to the top
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        
    }

    componentDidMount() {
        // generate html for each readme
        fetch(readmeLinks[this.state.activeKey])
            .then((response) => { return response.text();})
            .then((data) => {
            this.setState({ docText: convertMarkdownToHTML(data), loading: false });
            //console.log({ docText: data });
                })
            .catch((error) => { console.log(error);
        });
    }
    
    render() { 
        return (
            <div className="Documentation">
                <Split>
                    <SplitItem className='Documentation-Nav'>
                        <Tabs
                            activeKey={this.state.activeTabKey} 
                            onSelect={this.handleTabClick}
                            isVertical
                            aria-label="Tabs in the seperate content example"
                            role="region"
                        >
                            <Tab
                                eventKey={0}
                                title={<TabTitleText className="Tab-text">Infinispan / Red Hat Data Grid</TabTitleText>}
                                tabContentId="refTab1Section"
                                tabContentRef={this.contentRef1}    
                            />
                            <Tab
                                eventKey={1}
                                title={<TabTitleText className="Tab-text">Keycloak / Red Hat Single Sign-On</TabTitleText>}
                                tabContentId="refTab2Section"
                                tabContentRef={this.contentRef2}    
                            />
                            <Tab
                                eventKey={2}
                                title={<TabTitleText className="Tab-text">Wildfly / Red Hat JBoss EAP</TabTitleText>}
                                tabContentId="refTab3Section"
                                tabContentRef={this.contentRef3}    
                            />
                            <Tab
                                eventKey={3}
                                title={<TabTitleText className="Tab-text">Tomcat / Red Hat JWS</TabTitleText>}
                                tabContentId="refTab4Section"
                                tabContentRef={this.contentRef4}    
                            />
                            <Tab
                                eventKey={4}
                                title={<TabTitleText className="Tab-text">ActiveMQ / Red Hat AMQ Broker</TabTitleText>}
                                tabContentId="refTab5Section"
                                tabContentRef={this.contentRef5}    
                            />
                            <Tab
                                eventKey={5}
                                title={<TabTitleText className="Tab-text">Kafka / Red Hat AMQ Streams</TabTitleText>}
                                tabContentId="refTab6Section"
                                tabContentRef={this.contentRef6}    
                            />
                            <Tab
                                eventKey={6}
                                title={<TabTitleText className="Tab-text">Red Hat CSP Download</TabTitleText>}
                                tabContentId="refTab7Section"
                                tabContentRef={this.contentRef7}    
                            />
                            <Tab
                                eventKey={7}
                                title={<TabTitleText className="Tab-text">JCliff</TabTitleText>}
                                tabContentId="refTab8Section"
                                tabContentRef={this.contentRef8}    
                            />
                            

                        </Tabs>
                    </SplitItem>
                    <SplitItem className='Documentation-Readme'>
                        <TabContent
                            /* Infinispan */
                            eventKey={0}
                            id="refTab1Section"
                            ref={this.contentRef1}
                            aria-label="This is content for the second separate content tab"
                            hidden
                        >
                        <div>
                                <CollectionDoc readmeIndex = {0} />
                        </div>
                        </TabContent>
                        <TabContent
                            /* Keycloak */
                            eventKey={1}
                            id="refTab2Section"
                            ref={this.contentRef2}
                            aria-label="This is content for the second separate content tab"
                            hidden
                        >
                            <div>
                                <CollectionDoc readmeIndex = {1} />
                            </div>
                        </TabContent>
                        <TabContent
                            /* Wildfly */
                            eventKey={2}
                            id="refTab3Section"
                            ref={this.contentRef3}
                            aria-label="This is content for the second separate content tab"
                            hidden
                        >
                            <div>
                                <CollectionDoc readmeIndex = {2} />
                            </div>
                        </TabContent>
                        <TabContent
                            /* JWS */
                            eventKey={3}
                            id="refTab4Section"
                            ref={this.contentRef4}
                            aria-label="This is content for the second separate content tab"
                            hidden
                        >
                            <div>
                                <CollectionDoc readmeIndex = {3} />
                            </div>
                        </TabContent>
                        <TabContent
                            /* AMQ */
                            eventKey={4}
                            id="refTab5Section"
                            ref={this.contentRef5}
                            aria-label="This is content for the second separate content tab"
                            hidden
                        >
                            <div>
                                <CollectionDoc readmeIndex = {4} />
                            </div>
                        </TabContent>
                        <TabContent
                            /* AMQ streams */
                            eventKey={5}
                            id="refTab6Section"
                            ref={this.contentRef6}
                            aria-label="This is content for the second separate content tab"
                            hidden
                        >
                            <div>
                                <CollectionDoc readmeIndex = {5} />
                            </div>
                        </TabContent>
                        <TabContent
                            /* Red Hat CSP Download */
                            eventKey={6}
                            id="refTab7Section"
                            ref={this.contentRef7}
                            aria-label="This is content for the second separate content tab"
                            hidden
                        >
                            <div>
                                <CollectionDoc readmeIndex = {6} />
                            </div>
                        </TabContent>
                        <TabContent
                            /* JCliff */
                            eventKey={7}
                            id="refTab8Section"
                            ref={this.contentRef8}
                            aria-label="This is content for the second separate content tab"
                            hidden
                        >
                            <div>
                                <CollectionDoc readmeIndex = {7} />
                            </div>
                        </TabContent>
                    </SplitItem>
                </Split>
            </div>
        );
    }
}

export default Documentation;