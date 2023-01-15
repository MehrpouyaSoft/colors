import { createContext } from "react";

const appContext = createContext({
    colors: null,
    setColorsAdded: () => { },
    deleted: () => { },
    add: () => { }
})

export default appContext