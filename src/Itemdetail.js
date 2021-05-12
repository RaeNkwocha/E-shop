import React, { useState } from 'react'
import { withRouter } from 'react-router'

function Itemdetail(item) {
    console.warn(item)
    return (
        <div>
           {item.match.params.id}
           {item.match.params.name}
        </div>
    )
}

export default withRouter(Itemdetail) 
