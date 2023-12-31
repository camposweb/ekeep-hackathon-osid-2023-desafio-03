import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import {
  ButtonContainer,
  ButtonFormNext,
  ButtonFormPrevious,
  DonationContainer,
  FormContainer,
  FormRadio,
  FormRadioOption,
  FormStep,
  LinkDonation,
  LinkVoluntary,
  SubtitleRadioButton,
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

import logoDulce from '../../assets/logo-dulce.png'

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
    if (formStep >= 6) {
      return (
        <DonationContainer>
          <LinkDonation href="https://doeagora.irmadulce.com/" target="_blank">
            Eu quero doar
          </LinkDonation>
          <LinkVoluntary href="https://doeagora.irmadulce.com/" target="_blank">
            Eu quero voluntariar
          </LinkVoluntary>
        </DonationContainer>
      )
    } else if (formStep === 5) {
      return (
        <ButtonContainer>
          <ButtonFormNext onClick={completeFormStep}>Enviar</ButtonFormNext>
        </ButtonContainer>
      )
    } else {
      return (
        <ButtonContainer>
          <ButtonFormPrevious onClick={ButtonPrevious}>
            Anterior
          </ButtonFormPrevious>
          <ButtonFormNext onClick={completeFormStep}>Próximo</ButtonFormNext>
        </ButtonContainer>
      )
    }
  }

  function ButtonPrevious() {
    setFormStep((current) => current - 1)
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
          <img src={logoDulce} alt="Dulce" />
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
              <TitleRadioButton>
                Que nota você daria para a forma como você foi recepcionado na
                OSID?
              </TitleRadioButton>
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
            <>
              <TitleRadioButton>Você se sentiu acolhido(a)?</TitleRadioButton>
              <Controller
                control={control}
                name="type2"
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
          {formStep === 5 && (
            <FormStep>
              <TitleRadioButton>
                Deseja compartilhar mais algumas palavras sobre a sua
                experiência com a OSID?
              </TitleRadioButton>
              <textarea placeholder="Escreva aqui" {...register('comment')} />
            </FormStep>
          )}

          {formStep === 6 && (
            <FormStep>
              <TitleRadioButton>
                👋 Hey, voce gostaria de constribuir com as Obras Sociais Irmã
                Dulce?
              </TitleRadioButton>
              <SubtitleRadioButton>
                Há muitas maneiras de contribuir com a Organização. Aqui estamos
                para servir, amar e acolher.
              </SubtitleRadioButton>
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
