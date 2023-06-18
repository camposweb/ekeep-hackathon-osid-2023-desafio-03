import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import {
  ButtonContainer,
  ButtonFormNext,
  ButtonFormPrevious,
  FormContainer,
  FormRadio,
  FormRadioOption,
  FormStep,
  LinkDonation,
  TitleRadioButton,
  UserFormContainer,
} from './styles'
import { useContext, useState } from 'react'
import { FormContext } from '../../contexts/FormContext'
import {
  NumberCircleFive,
  NumberCircleFour,
  NumberCircleOne,
  NumberCircleThree,
  NumberCircleTwo,
} from '@phosphor-icons/react'

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
  const [formStep, setFormStep] = useState(0)

  function completeFormStep() {
    setFormStep((current) => current + 1)
  }

  function RenderButton() {
    if (formStep >= 5) {
      return (
        <ButtonContainer>
          <LinkDonation href="https://doeagora.irmadulce.com/" target="_blank">
            Eu quero doar
          </LinkDonation>
        </ButtonContainer>
      )
    } else if (formStep === 4) {
      return (
        <ButtonContainer>
          <ButtonFormNext onClick={completeFormStep}>Enviar</ButtonFormNext>
        </ButtonContainer>
      )
    } else {
      return (
        <ButtonContainer>
          <ButtonFormPrevious>Anterior</ButtonFormPrevious>
          <ButtonFormNext onClick={completeFormStep}>Próximo</ButtonFormNext>
        </ButtonContainer>
      )
    }
  }

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
        <FormContainer>
          {formStep === 0 && (
            <FormStep>
              <TitleRadioButton>Qual é o seu nome?</TitleRadioButton>
              <input
                type="text"
                placeholder="Digite seu Nome"
                {...register('name')}
              />
            </FormStep>
          )}
          {formStep === 1 && (
            <FormStep>
              <TitleRadioButton>Qual é o seu email?</TitleRadioButton>
              <input
                type="text"
                placeholder="Digite seu email"
                {...register('email')}
              />
            </FormStep>
          )}
          {formStep === 2 && (
            <FormStep>
              <TitleRadioButton>Qual é o seu telefone?</TitleRadioButton>
              <input
                type="text"
                placeholder="Digite seu telefone"
                {...register('contact')}
              />
            </FormStep>
          )}
          {formStep === 3 && (
            <>
              <TitleRadioButton>Qual foi sua experiência?</TitleRadioButton>
              <Controller
                control={control}
                name="type1"
                render={({ field }) => {
                  return (
                    <FormRadio
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <FormRadioOption value="muito-ruim">
                        <NumberCircleOne size={27} />
                      </FormRadioOption>
                      <FormRadioOption value="ruim">
                        <NumberCircleTwo size={27} />
                      </FormRadioOption>
                      <FormRadioOption value="regular">
                        <NumberCircleThree size={27} />
                      </FormRadioOption>
                      <FormRadioOption value="bom">
                        <NumberCircleFour size={27} />
                      </FormRadioOption>
                      <FormRadioOption value="muito-bom">
                        <NumberCircleFive size={27} />
                      </FormRadioOption>
                    </FormRadio>
                  )
                }}
              />
            </>
          )}
          {formStep === 4 && (
            <FormStep>
              <TitleRadioButton>Deseja Comentar?</TitleRadioButton>
              <textarea {...register('comment')} />
            </FormStep>
          )}

          {formStep === 5 && (
            <FormStep>
              <TitleRadioButton>
                👋 Hey, voce gostaria de constribuir com a Obra Social Irma
                Dulce?
              </TitleRadioButton>
              {/* <ButtonContainer>
                <ButtonFormNext>Doar</ButtonFormNext>
              </ButtonContainer> */}
            </FormStep>
          )}

          {/* <ButtonContainer>
            <ButtonFormPrevious>Anterior</ButtonFormPrevious>
            <ButtonFormNext>Próximo</ButtonFormNext>
          </ButtonContainer> */}
          {RenderButton()}
        </FormContainer>
      </form>
    </UserFormContainer>
  )
}
