import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const StyledNav = styled.div`
  margin-left: 25px;
  margin-bottom: 40px;
`

function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  const TranslateString = useI18n()
  return (
    <StyledNav>
      <ButtonMenu activeIndex={activeIndex} scale="md">
        <ButtonMenuItem
          style={{
            backgroundColor: activeIndex ? '' : '#007bff',
            width: '190px',
            color: activeIndex ? '#102648' : '',
          }}
          id="swap-nav-link"
          to="/swap"
          as={Link}
        >
          {TranslateString(1142, 'Swap')}
        </ButtonMenuItem>

        <ButtonMenuItem
          style={{ backgroundColor: activeIndex ? '#007bff' : '', width: '190px', color: activeIndex ? '' : '#102648' }}
          id="pool-nav-link"
          to="/pool"
          as={Link}
        >
          {TranslateString(262, 'Liquidity')}
        </ButtonMenuItem>
      </ButtonMenu>
    </StyledNav>
  )
}

export default Nav
