import React from 'react'
import {useRouteError} from 'react-router-dom';

function Error() {
    const err = useRouteError();
  return (
    <div>
        <h1>
            Error
        </h1>
        <h3>
            {JSON.stringify(err)}
        </h3>
    </div>
  )
}

export default Error