import React from 'react'
import { Switch, Route } from "react-router-dom";
import MarkdownPage from '../components/MarkdownPage';
import Sidebar from '../components/Sidebar';
import { attributes as attrEnvMovement, react as EnvMovement } from './speaks/environmental-movement.md'
import { attributes as attrChangTC, react as ChangTC } from './speaks/chang-tse-chou.md'
import { attributes as attrTamsuiRiver, react as TamsuiRiver } from './speaks/tamsui-river.md'
import { attributes as attrSMxMusic, react as SMxMusic } from './speaks/social-movement-x-music.md'
import { attributes as attrSocialMovements, react as SocialMovements } from './speaks/social-movements.md'
import { attributes as attrSMxFilms, react as SMxFilms } from './speaks/social-movement-x-films.md'

export const routes = [
  {
    path: "/speaks/environmental-movement",
    itemId: 1,
    attr: attrEnvMovement,
    data: EnvMovement,
  },
  {
    path: "/speaks/chang-tse-chou",
    itemId: 2,
    attr: attrChangTC,
    data: ChangTC,
  },
  {
    path: "/speaks/tamsui-river",
    itemId: 3,
    attr: attrTamsuiRiver,
    data: TamsuiRiver,
  },
  {
    path: "/speaks/social-movement-x-music",
    itemId: 4,
    attr: attrSMxMusic,
    data: SMxMusic,
  },
  {
    path: "/speaks/social-movements",
    itemId: 5,
    attr: attrSocialMovements,
    data: SocialMovements,
  },
  {
    path: "/speaks/social-movement-x-films",
    itemId: 6,
    attr: attrSMxFilms,
    data: SMxFilms,
  },
]

export default function Speaks() {
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
                  title="系列講座"
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
