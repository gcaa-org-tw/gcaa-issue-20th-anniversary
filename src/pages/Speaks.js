import React from 'react'
import { Switch, Route } from "react-router-dom";
import PageContent from '../components/PageContent';
import Sidebar from '../components/Sidebar';

import EnvironmentalMovement from './speaks/EnvironmentalMovement'
import ChangTseChou from './speaks/ChangTseChou'
import TamSuiRiver from './speaks/TamSuiRiver'
import SocialMovementXMusic from './speaks/SocialMovementXMusic';
import SocialMovements from './speaks/SocialMovements';
import SocialMovementXFilms from './speaks/SocialMovementXFilms';

export const routesSpeaks = [
  {
    path: "/speaks/environmental-movement",
    itemId: 1,
    title: '從80年代走來　林聖崇、林瓊華對談環運人生',
    data: EnvironmentalMovement()
  },
  {
    path: "/speaks/chang-tse-chou",
    itemId: 2,
    title: '終身教育、終身學習　盼台灣素質提升　教授張則周再開講',
    data: ChangTseChou()
  },
  {
    path: "/speaks/tamsui-river",
    itemId: 3,
    title: '20年光陰找回淡水河清淨　盼河川串起國土計畫寬廣可能',
    data: TamSuiRiver()
  },
  {
    path: "/speaks/social-movement-x-music",
    itemId: 4,
    title: '放大街頭的公義之聲：童智偉、吳志寧回顧社運烽火年代',
    data: SocialMovementXMusic()
  },
  {
    path: "/speaks/social-movements",
    itemId: 5,
    title: '不只是湊人頭相挺　跨領域社運看見彼此　相扶持邁向未來',
    data: SocialMovements()
  },
  {
    path: "/speaks/social-movement-x-films",
    itemId: 6,
    title: '從影像展現的社會視野　鄭有傑不服膺潛規則　我只能是我自己',
    data: SocialMovementXFilms()
  },
]

export default function Speaks() {
  return (
    <Switch>
      {routesSpeaks.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          children={
            <PageContent
              sidebar={
                <Sidebar
                  title="系列講座"
                  routes={routesSpeaks}
                />
              }
              page={route.data}
            />
          }
        />
      ))}
    </Switch>
  )
}
