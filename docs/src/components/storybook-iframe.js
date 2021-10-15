import React from 'react'
import { withPrefix } from "gatsby"

class StorybookIframe extends React.Component {
  componentDidMount() {
    if ( typeof window !== 'undefined' ) {
      // Create IE + others compatible event handler
      var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
      var eventer = window[eventMethod];
      var messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";
      var baseTitle = document.title;

      // Create storybook iframe and append
      var iframe = document.createElement('iframe');
      iframe.id = 'storybook-iframe';
      iframe.src = window.location.search ? withPrefix('/storybook/index.html' + window.location.search) : withPrefix('/storybook/index.html');
      iframe.classList.add('storybook-iframe');
      document.getElementById('storybook-iframe-wrapper').appendChild(iframe);

      // Update parent params and title to match iframe
      eventer(messageEvent, function(event) {
          var newTitle = baseTitle + ': ' + event.data.title;
          window.history.replaceState({
            path: event.data.path.slice(6),
            title: newTitle
          }, newTitle, event.data.path);
          document.title = newTitle;
      }, false);
    }
  }

  render() {
    return <div id="storybook-iframe-wrapper" style={{width: '100%', background: '#f8f8f8', height: '100%'}}></div>
  }
}

export default StorybookIframe