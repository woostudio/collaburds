import PropTypes from "prop-types"
import React from "react"
import { withPrefix } from "gatsby"
import { NavContext } from './nav-context'

const Header = ({ siteNavigation }) => {
  const navContext = React.useContext(NavContext)
  const [ currentPath, setCurrentPath ] = React.useState()

  React.useEffect(() => {
    if ( navContext && navContext.location ) {
      const { location } = navContext
      setCurrentPath(`${location.pathname}${location.hash ? `#${location.hash}` : ``}`)
    }
  })

  React.useEffect(() => {
    if ( navContext && navContext.location ) {
      const { location } = navContext
      setCurrentPath(`${location.pathname}${location.hash ? `#${location.hash}` : ``}`)
    }
  }, [navContext])

  const generateNavGroups = () => {
    const navGroups = [];

    siteNavigation.forEach(item => {
      if ( item.items && item.items.length ) {
        navGroups.push({
          title: item.title,
          items: generateNavigation(item.items)
        })
      }
    })

    return navGroups
  }

  const generateNavigation = (items = [], parent = false) => {
    const navigation = [];

    if ( Array.isArray(siteNavigation) && siteNavigation.length ) {
      items.forEach(item => {
        if ( parent && item.parent === parent ) {
          // Children level
          navigation.push({
            ...item,
            path: withPrefix(item.path),
            items: generateNavigation(items, item.path)
          });
        } else if ( !parent && item.parent === '/' ) {
          // Root level
          navigation.push({
            ...item,
            path: withPrefix(item.path),
            items: generateNavigation(items, item.path)
          });
        }
      });
    }

    return navigation.sort((a, b) => {
      if (a.order > b.order) return 1;
      if (b.order > a.order) return -1;
      return 0;
    });
  }

  return (
    <header>
      <cds-sidebar 
        logo-path={withPrefix('/dist/collection/assets/images/wapple.svg')}
        logo-href={withPrefix('/')}
        subnav={JSON.stringify(generateNavGroups())}
        active-item-path={currentPath}
      ></cds-sidebar>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
