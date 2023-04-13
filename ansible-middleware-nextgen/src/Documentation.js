import React from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'
import keycloak from './documentationFiles/keycloak_README.md'

// the component to dynamically fetch the github readmes
// markdown-it is the module that turns md files to html
// const md = require('markdown-it')();

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
        console.log({ docText: data });
            })
        .catch((error) => { console.log(error);
        });
    }

render() { 
  return (
        <div className="Documentation">
        <h1>Fetched Data</h1>
            <div>
           {this.state.loading || !this.state.docText ? (
           <div>Loading...</div>
                ) : ( 
          <div> 
          <ReactMarkdown remarkPlugins={[gfm]}>{this.state.docText}</ReactMarkdown>
          </div>
          )}
          </div>
          </div>
          );
      }
}

export default Documentation;