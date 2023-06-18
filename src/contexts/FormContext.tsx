import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface UserFormProps {
  id: string
  name: string
  email: string
  contact: number
  type1: string
  type2: string
  comment: string
  createdAt: string
}

interface CreateUserFormInput {
  name: string
  email: string
  contact: number
  type1: 'muito-ruim' | 'ruim' | 'regular' | 'bom' | 'muito-bom'
  type2: 'muito-ruim' | 'ruim' | 'regular' | 'bom' | 'muito-bom'
  comment: string
}

interface UserFormContextType {
  usersforms: UserFormProps[]
  fetchForm: (query?: string) => Promise<void>
  createUserForm: (data: CreateUserFormInput) => Promise<void>
}

interface FormProviderProps {
  children: ReactNode
}

export const FormContext = createContext({} as UserFormContextType)

export function FormProvider({ children }: FormProviderProps) {
  const [usersforms, setUserForms] = useState<UserFormProps[]>([])

  async function fetchForm(query?: string) {
    const response = await api.get('users', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setUserForms(response.data)
  }

  async function createUserForm(data: CreateUserFormInput) {
    const { name, email, contact, type1, type2, comment } = data
    const response = await api.post('users', {
      name,
      email,
      contact,
      type1,
      type2,
      comment,
      createdAt: new Date(),
    })

    setUserForms((state) => [...state, response.data])
  }

  useEffect(() => {
    fetchForm()
  }, [])

  return (
    <FormContext.Provider value={{ usersforms, fetchForm, createUserForm }}>
      {children}
    </FormContext.Provider>
  )
}
