import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
// import { UserForm } from './pages/UserForm'
// import { FormProvider } from './contexts/FormContext'
import { Dashboard } from './pages/Dashboard'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {/* <FormProvider>
        <UserForm />
      </FormProvider> */}
      <Dashboard />
    </ThemeProvider>
  )
}
