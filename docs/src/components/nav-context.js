import React from 'react'

export const NavContext = React.createContext();

export const NavProvider = ({ location = {}, children }) => {
  const [ getLocation, setLocation ] = React.useState(location)
  
  const updateNavContext = newLocation => {
    setLocation(newLocation)
    
    if ( typeof window !== 'undefined' ) {
      const { pathname, hash } = newLocation
      
      window.history.replaceState({}, document.title, `${pathname}${hash ? `#${hash}` : ``}`)
    }
  }

  return (
    <NavContext.Provider value={{
      location: getLocation,
      updateNavContext
    }}>
      {children}
    </NavContext.Provider>
  )
}