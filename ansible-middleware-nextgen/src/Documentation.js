import React from 'react';
import './App.css';
//import keycloak from './documentationFiles/keycloak.md';

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

class Documentation extends React.Component {
    state = { loading: true,
        docText: "",
    };


    componentDidMount() {
        // generate html for each readme
        readmeLinks.forEach(readme => {
            fetch(readme)
                .then((response) => { return response.text();})
                .then((data) => {
                this.setState({ docText: this.state.docText + convertMarkdownToHTML(data), loading: false });
                //console.log({ docText: data });
                    })
                .catch((error) => { console.log(error);
            });
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

export default Documentation;