#namaste React

#parcel

-dev build
-local server
-HMR = Hot Module Replacement
-File watching algorithm - written in c++
-Caching - faster builds
-Image optimization
-minification
-bundling
-compressing
-consistent hashing
-code splitting
-differential bundling - support older browser
-diagnostic
-error handling
-https
-Tree Shaking- remove unused code (important)

Two Types of Export/Import

-Default export/import

    export default component;
    import component from "path"

-Named export/import
export const component
import {component} from "path"

#React Hooks
Normal JS utility functions
-useState() - state variables in react
-useEffect() -

-Reconciliation Algorithm (React Fiber)
------------UseEffect--------------
-UseEffect ->if there is no dependency array =>useeffect is called every render

->if dependency array is empty [] => useeffect is called on initial render(just once)

-> if dependency array has btn_name [btn_name] => called everytime btn_name is updated
