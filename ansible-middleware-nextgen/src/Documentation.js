import React from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'
import keycloak from './documentationFiles/keycloak.md';

// markdown-it is the module that turns md files to html
const md = require('markdown-it')({
    breaks: true // add <br> tags between elements
});

// Sanitize markdown html and turn it into JSX
function convertMarkdownToJSX(data) {
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
      
    console.log(result);
    return result;
}

class Documentation extends React.Component {
    state = { loading: true,
        docText: null,
  };

componentDidMount() {

    fetch( keycloak, { mode: "no-cors" }
        // { 
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/text",
        //   },
        // }
        ).then((response) => { return response.text();})
        .then((data) => {
        this.setState({ docText: data, loading: false });
        //console.log({ docText: data });
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
            
            <div dangerouslySetInnerHTML={{ __html: convertMarkdownToJSX(this.state.docText) }} />
          )}
          </div>
          </div>
          );
      }
}

export default Documentation;