import { useState } from "react";

const useBrowserTabFreeze = () => {
    const [browserTabIsFrozen, setBrowserTabIsFrozen] = useState(false);

    function freezeBrowserTab()
    {
        setBrowserTabIsFrozen(true);
        alert("Browser tab is successfully frozen");
        while(true) 
        {
            
        }
    }

    return { freezeBrowserTab, browserTabIsFrozen }
}

export default useBrowserTabFreeze;