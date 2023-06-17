import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import {
  FormRadio,
  FormRadioOption,
  TitleRadioButton,
  UserFormContainer,
} from './styles'
import { useContext } from 'react'
import { FormContext } from '../../contexts/FormContext'

const newUserFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  contact: z.number(),
  type1: z.enum(['muito-ruim', 'ruim', 'regular', 'bom', 'muito-bom']),
  type2: z.enum(['muito-ruim', 'ruim', 'regular', 'bom', 'muito-bom']),
  comment: z.string(),
})

type NewUserFormInputs = z.infer<typeof newUserFormSchema>

export function UserForm() {
  const { createUserForm } = useContext(FormContext)
  const {
    control,
    register,
    handleSubmit,
    // formState: { isSubmitting },
    reset,
  } = useForm<NewUserFormInputs>({
    resolver: zodResolver(newUserFormSchema),
  })

  async function handleCreateNewUserForm(data: NewUserFormInputs) {
    const { name, email, contact, type1, type2, comment } = data
    await createUserForm({
      name,
      email,
      contact,
      type1,
      type2,
      comment,
    })
    reset()
  }

  return (
    <UserFormContainer>
      <form onSubmit={handleSubmit(handleCreateNewUserForm)}>
        <input
          type="text"
          placeholder="Digite seu Nome"
          {...register('name')}
        />
        <input
          type="email"
          placeholder="Digite seu e-mail"
          {...register('email')}
        />
        <input
          type="tel"
          placeholder="digite seu telefone"
          {...register('contact')}
        />

        <TitleRadioButton>Pergunt 1</TitleRadioButton>
        <Controller
          control={control}
          name="type1"
          render={({ field }) => {
            return (
              <FormRadio onValueChange={field.onChange} value={field.value}>
                <FormRadioOption value="muito-ruim">1</FormRadioOption>
                <FormRadioOption value="ruim">2</FormRadioOption>
                <FormRadioOption value="regular">3</FormRadioOption>
                <FormRadioOption value="bom">4</FormRadioOption>
                <FormRadioOption value="muito-bom">5</FormRadioOption>
              </FormRadio>
            )
          }}
        />

        <TitleRadioButton>Pergunta 2</TitleRadioButton>
        <Controller
          control={control}
          name="type2"
          render={({ field }) => {
            return (
              <FormRadio onValueChange={field.onChange} value={field.value}>
                <FormRadioOption value="muito-ruim">1</FormRadioOption>
                <FormRadioOption value="ruim">2</FormRadioOption>
                <FormRadioOption value="regular">3</FormRadioOption>
                <FormRadioOption value="bom">4</FormRadioOption>
                <FormRadioOption value="muito-bom">5</FormRadioOption>
              </FormRadio>
            )
          }}
        />

        <textarea {...register('comment')} />
        <button type="submit">Enviar</button>
      </form>
    </UserFormContainer>
  )
}
