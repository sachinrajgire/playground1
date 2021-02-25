

import React, { Children } from 'react';
import './Url.scss'

function Url ({urlLink, children}) {

    
        return (
        <div>
            <a href={urlLink}>{children}</a>
        </div>
        
        )
        
    }

export default Url