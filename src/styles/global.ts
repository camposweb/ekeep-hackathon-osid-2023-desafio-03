import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	:focus {
		outline: 0;
		//box-shadow: 0 0 0 2px ${({ theme }) => theme['gray-500']};
	}

	body {
		//background-color: ${({ theme }) => theme['gray-800']};
		//color: ${({ theme }) => theme['gray-100']};
		-web-font-smoothing: antialiased;
	}

	body, input, textarea, button {
		//font-family: 400 1rem 'Roboto', sans-serif;
		font-size: 'Inter', sans-serif;
		font-size: 1rem;
		font-weight: 400;
	}
`
