import { useContext } from 'react'
import { FormContext } from '../../contexts/FormContext'
import { dataFormatter } from '../../utils/formatter'
import { ViewUserFormContainer } from './styles'

export function ViewUserForm() {
  const { usersforms } = useContext(FormContext)
  console.log(usersforms)
  return (
    <ViewUserFormContainer>
      <h1>Dashboard</h1>
      <table>
        <tbody>
          {usersforms.map((userform) => {
            return (
              <tr key={userform.id}>
                <td>{userform.name}</td>
                <td>{userform.email}</td>
                <td>{userform.contact}</td>
                <td>{userform.type1}</td>
                <td>{userform.type2}</td>
                <td>{userform.comment}</td>
                <td>{dataFormatter.format(new Date(userform.createdAt))}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </ViewUserFormContainer>
  )
}
