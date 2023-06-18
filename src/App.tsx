import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { UserForm } from './pages/UserForm'
import { ViewUserForm } from './pages/ViewUserForm'
import { FormProvider } from './contexts/FormContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <FormProvider>
        <UserForm />
        {/* <ViewUserForm /> */}
      </FormProvider>
    </ThemeProvider>
  )
}
