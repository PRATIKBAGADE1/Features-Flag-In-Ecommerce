// UIContext.js
import React, { createContext, useContext, useState } from 'react';
import { customTheme } from '../Admin/them/customeThem'; // Import your custom theme

const UIContext = createContext({
    uiVersion: '',
    setUiVersion: () => {}, // Provide a default function if needed
});

export const UIProvider = ({ children }) => {
    const [uiVersion, setUiVersion] = useState('');

    return (
        <UIContext.Provider value={{ uiVersion, setUiVersion }}>
                {children}
        </UIContext.Provider>
    );
};

//export { customTheme }; // Export customTheme as a named export
export const useUIVersion = () => useContext(UIContext);

export { customTheme };

