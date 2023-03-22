import { HeaderContainer } from './styles'

import { Timer, Scroll } from 'phosphor-react'

import logo-coriana.png from '../../assets/logo-acoriana.png'
  
export function Header() {
  return (
    <HeaderContainer>
      <img src="logoAcoriana" alt="Logo Açoriana-produtora" />
      <nav>
        <a href="">
          <Timer size={24} />
        </a>
        <a href="">
          <Scroll size={24} />
        </a>
      </nav>
    </HeaderContainer>
  )
}
