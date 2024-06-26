import React from 'react'
import { SideBar } from './side-bar/side-bar'
import { Header } from './header/header'

const Shell = ({children}:any) => {
  return (
    <div>
        <Header />
        <div className="flex">
          <SideBar />
          <main>{children}</main>
        </div>
    </div>
  )
}

export default Shell