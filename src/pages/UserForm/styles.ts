import * as RadioGroup from '@radix-ui/react-radio-group'
import { styled } from 'styled-components'

export const UserFormContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 5rem;
  display: flex;

  form {
    width: 100%;
    max-width: 500px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    gap: 1rem;

    input {
      //width: 10rem;
      display: flex;
      font-size: 1rem;
      border: 1px solid ${({ theme }) => theme.black};
      border-radius: 6px;
      padding: 0.5rem;
      //border-style: solid;
      color: ${({ theme }) => theme.black};
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

export const TitleRadioButton = styled.strong`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: ${({ theme }) => theme.black};
`

export const FormRadio = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

export const FormRadioOption = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  border-radius: 5rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  &[data-state='unchecked']:hover {
    transition: 0.2s;
    background: ${({ theme }) => theme.color};
  }

  &[data-state='checked'] {
    transition: 0.2s;
    background: ${({ theme }) => theme.color};
  }
  /* &:hover {
    transition: 0.2s;
    background: ${({ theme }) => theme.color};
  } */
`
