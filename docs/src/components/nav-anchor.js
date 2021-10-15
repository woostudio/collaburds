import React from 'react'
import { NavContext } from './nav-context'

const NavAnchorContext = React.createContext()

export class NavAnchorProvider extends React.Component {
  constructor(props) {
    super(props);
    
    this.intersectionObserver = {
      observe: () => { console.error('Intersection observer not initialised.')}
    }

    if ( typeof window !== 'undefined' ) {
      this.intersectionObserver = new IntersectionObserver(entries => {
        console.log(entries)
        entries.some(entry => {
          if ( entry.intersectionRatio > 0 && entry.isIntersecting ) {
            this.context.updateNavContext({
              ...this.context.location,
              hash: entry.target.dataset.hash,
              pathname: entry.target.dataset.pathname,
            })
            return true
          }

          return false
        })
      }, {
        rootMargin: `0% 0% -95% 0%`,
        threshold: [1]
      });
    }
  }

  static contextType = NavContext;

  render() {
    return (
      <NavAnchorContext.Provider value={{
        observer: this.intersectionObserver
      }}>
        {this.props.children}
      </NavAnchorContext.Provider>
    )
  }
}

export class NavAnchor extends React.Component {
  constructor(props) {
    super(props);
    
    this.anchorRef = React.createRef();
  }

  static contextType = NavAnchorContext;

  componentDidMount() {
    this.context.observer.observe(this.anchorRef.current); 
  }

  render() {
    return <a 
      id={this.props.hash} 
      ref={this.anchorRef}
      data-pathname={this.props.pathname} 
      data-hash={this.props.hash}
    ></a>
  }
}