// I created this file to avoid test failing
// on importing non existing file

import React from 'react';

// I don't what it does but, I hope it is creating context

export const LocalizationContext = React.createContext({
  initializeAppLanguage: () => {},
});
