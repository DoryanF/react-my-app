import React from 'react'
import { RouteObject, useRoutes } from 'react-router-dom';
import CountUseEffect from '../composants/countUseEffect/CountUseEffect';
import MonComposant from '../composants/monComposant/MonComposant';

const Routeur = () => {
    const routes: RouteObject[] = [
        {
            path: "/",
            element: <CountUseEffect/>
        },
        {
            path: "/composant",
            element: <MonComposant/>
        }
    ]

  return (
    <div>{useRoutes(routes)}</div>
  )
}

export default Routeur