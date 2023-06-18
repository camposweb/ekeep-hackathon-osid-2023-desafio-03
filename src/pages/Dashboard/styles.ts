import { styled } from 'styled-components'

export const DashboardContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
`

export const SidebarContainer = styled.div`
  width: 16.25rem;
  display: flex;
  background: ${({ theme }) => theme.sideBarColor};
`

export const MenuSideBar = styled.div`
  width: 100%;
  display: flex;
`

export const ItemMenuSidebar = styled.button``

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  background: ${({ theme }) => theme.white};
`
