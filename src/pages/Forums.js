import React from 'react'
import { Switch, Route } from "react-router-dom";
import PageContent from '../components/PageContent';
import Sidebar from '../components/Sidebar';

import Outlook from './forum/Outlook';
import DigitalAge from './forum/DigitalAge';
import Sustainability from './forum/Sustainability';

export const routesForums = [
  {
    path: "/forum/outlook",
    itemId: 1,
    title: '主題一：共同前進－台灣環境運動的突圍與展望',
    data: Outlook(),
  },
  {
    path: "/forum/digital-age",
    itemId: 2,
    title: '主題二：數位時代下的環境賦權：社會治理挑戰國家管理',
    data: DigitalAge(),
  },
  {
    path: "/forum/sustainability",
    itemId: 3,
    title: '主題三：永續轉型的支持體系：從能源轉型到新發展想像',
    data: Sustainability(),
  },
]

export default function Forums() {
  return (
    <Switch>
      {routesForums.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          children={
            <PageContent
              sidebar={
                <Sidebar
                  title="主題論壇"
                  routes={routesForums}
                />
              }
              page={route.data}
              title={route.title}
            />
          }
        />
      ))}
    </Switch>
  )
}
