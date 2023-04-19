import React from "react";
import { useMediaQuery } from "react-responsive";

const ResponsiveContext = React.createContext();

function ResponsiveProvider (props) {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)' });
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 425px)' });

    return (
        <ResponsiveContext.Provider value={{
            isDesktopOrLaptop,
            isBigScreen,
            isTablet,
            isMobile
        }}>

            {/* Estos props que vienen aca es donde va a ir, por asi decirlo, el <App> cuando llame al provider */}
            {props.children}
        </ResponsiveContext.Provider> 
)}


export {ResponsiveContext, ResponsiveProvider}