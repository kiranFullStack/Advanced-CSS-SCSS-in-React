import React from "react"
import logo from "./assets/logo-white.png"

export default function Header() {
  return (
    <div className="header">
      <div className="logo-box">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">Outdoors</h1>
        <h2 className="heading-secondary">is where life starts</h2>
      </div>
    </div>
  )
}
