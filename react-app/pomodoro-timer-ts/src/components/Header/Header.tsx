import { HeaderContainer } from './styles'

import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src="logoAcoriana" alt="Logo Açoriana-produtora" />
      <nav>
        <NavLink to="/" title="timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
