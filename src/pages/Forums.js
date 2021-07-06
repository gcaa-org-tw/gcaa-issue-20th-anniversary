import React from 'react'
import { Switch, Route } from "react-router-dom";
import MarkdownPage from '../components/MarkdownPage';
import Sidebar from '../components/Sidebar';
import { attributes as attrOutlook, react as Outlook } from './forum/outlook.md'
import { attributes as attrDigitalAge, react as DigitalAge } from './forum/digital-age.md'
import { attributes as attrSustainability, react as Sustainability } from './forum/sustainability.md'

export const routes = [
  {
    path: "/forum/outlook",
    itemId: 1,
    attr: attrOutlook,
    data: Outlook,
  },
  {
    path: "/forum/digital-age",
    itemId: 2,
    attr: attrDigitalAge,
    data: DigitalAge,
  },
  {
    path: "/forum/sustainability",
    itemId: 3,
    attr: attrSustainability,
    data: Sustainability,
  },
]

export default function Forums() {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          children={
            <MarkdownPage
              attribute={route.attr}
              sidebar={
                <Sidebar
                  title="主題論壇"
                  routes={routes}
                />
              }
            >
              <route.data />
            </MarkdownPage>
          }
        />
      ))}
    </Switch>
  )
}
