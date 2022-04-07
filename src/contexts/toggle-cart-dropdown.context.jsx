import { createContext, useState } from "react";

export const toggleCartDropdownContext = createContext({
    showCartDropdown: false,
    setShowCartDropdowm: () => null,
});

export const ToggleCartDropdownProvider = ({ children }) => {
    const [ showCartDropdown,  setShowCartDropdowm ] = useState(false);
    const value = { showCartDropdown, setShowCartDropdowm };

    return (
        <toggleCartDropdownContext.Provider value={value}>{children}</toggleCartDropdownContext.Provider>
    )
}