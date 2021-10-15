/* eslint-disable */

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const ReactDOM = require('react-dom');
const Loader = require('./static/dist/loader');
const React = require('react')
const Nav = require('./src/components/nav-context')

exports.replaceHydrateFunction = () => {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback);

    const { applyPolyfills, defineCustomElements } = Loader;

    applyPolyfills().then(() => {
      defineCustomElements(window);
    });
  };
};

const scrollTo = (id) => () => {
  const el = document.querySelector(id)
  if (el) return window.scrollTo(0, el.offsetTop - 40)
  return false
}

exports.onRouteUpdate = ({ location }) => {
  if ( location.hash ) {
    window.setTimeout(scrollTo(location.hash), 0)
  }
}

exports.wrapPageElement = ({ element, props }) => {
  const { hash, pathname } = props.location
  return <Nav.NavProvider location={{ hash, pathname }}>{element}</Nav.NavProvider>
}