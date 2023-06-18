import * as RadioGroup from '@radix-ui/react-radio-group'
import { styled } from 'styled-components'

export const UserFormContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  //height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  padding: 0 3rem;
  display: flex;

  form {
    width: 100%;
    max-width: 400px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    gap: 1rem;

    input {
      //width: 10rem;
      display: flex;
      font-size: 1rem;
      //border: 1px solid ${({ theme }) => theme.black};
      border: 1px solid rgba(31, 36, 41, 0.4);
      border-radius: 6px;
      padding: 0.5rem;
      //border-style: solid;
      color: ${({ theme }) => theme.black};
      background: transparent;
    }

    textarea {
      display: flex;
      padding: 1rem;
      height: 10rem;
      border: 1px solid ${({ theme }) => theme.black};
      border-radius: 6px;
    }

    button[type='submit'] {
      border: 1px solid ${({ theme }) => theme.black};
      border-radius: 6px;
      cursor: pointer;
      padding: 0.5rem;
      transition: 0.2s;
    }
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  border-radius: 1.5rem;
  gap: 1rem;
  width: 100%;
  background: ${({ theme }) => theme.backgroudCard};
`

export const ButtonForm = styled.button`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 6.25rem;
  display: flex;
  padding: 0.625rem 0.875rem;
  width: 5.438rem;
  height: 2.5rem;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 0;
  //border: 1px solid ${({ theme }) => theme.black};
`

export const ButtonFormPrevious = styled(ButtonForm)`
  color: ${({ theme }) => theme.fontColor};
  //background: ${({ theme }) => theme.buttonColor};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.fontColor};
`

export const ButtonFormNext = styled(ButtonForm)`
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.buttonColor};
`

export const LinkDonation = styled.a`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 6.25rem;
  display: flex;
  padding: 0.625rem 0.875rem;
  width: 5.438rem;
  height: 2.5rem;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.buttonColor};
  border: 0;
  text-decoration: none;
`

export const ButtonDonation = styled(ButtonForm)`
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.buttonColor};
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: end;
`

export const FormStep = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const TitleRadioButton = styled.strong`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: ${({ theme }) => theme.black};
`

export const FormRadio = styled(RadioGroup.Root)`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(5, 1fr);
  //gap: 0.5rem;
  margin-top: 0.5rem;
`

export const FormRadioOption = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: rgba(45, 53, 60, 0.1);
  color: ${({ theme }) => theme.fontColor};
  border-radius: 0.75rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;

  &[data-state='unchecked']:hover {
    transition: 0.2s;
    background: ${({ theme }) => theme.buttonColorHover};
    color: ${({ theme }) => theme.fontColorHover};
  }

  &[data-state='checked'] {
    transition: 0.2s;
    background: ${({ theme }) => theme.buttonColorHover};
    color: ${({ theme }) => theme.fontColorHover};
  }
  /* &:hover {
    transition: 0.2s;
    background: ${({ theme }) => theme.color};
  } */
`
