import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: #ecf6ff;
  width: 100%;
  padding: 32px 16px;

  background-image: url('/images/group-pancake.svg');
  background-repeat: no-repeat;
  background-position: bottom 24px center;
  background-size: 90%;

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/arch-${({ theme }) => (theme.isDark ? 'dark' : 'light')}.svg'),
      url('/images/astro2.png'), url('/images/astro1.png');
    background-repeat: no-repeat;
    background-position: center 420px, 10% 230px, 90% 230px;
    background-size: contain, 200px, 200px;
    min-height: 90vh;
  }
`

export default Container
