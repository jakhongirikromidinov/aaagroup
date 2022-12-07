import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	:root {
		--accent: #FF7E01;
		--accent100: #FAA935;
		--textAccent: #0B2727;
		--bgColor: #FCF7FC;
		--labelGradient: rgba(239, 93, 93, 1);
		--swiper-theme-color: var(--accent);

		--italicFont: 'Island Moments', cursive;
		--cirillicItalicFont: 'Bad Script', cursive;
	}
	*,
	&::before,
	&::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body {
		height: 100%;
		font-size: 62.5%;
	}

	body {
		font-weight: 400;
		font-family: "Montserrat", sans-serif;
		font-style: normal;
		font-size: 1.25rem;
	}

	#__next {
		// Pushing the footer to the bottom of the page
		height: 100%;
		display: flex;
		flex-flow: column nowrap;
	}

	main {
		flex: 1;
	}

	a {
		font-weight: inherit;
		font-size: inherit;
		text-decoration: none;
		color: inherit;
	}	

	img {
		width: 100%;
		display: block;
	}
	h1, h2, h3 {
		font-weight: 500;
		font-family: Montserrat;
		line-height: 110%;
	}
	h1, h2, h3, p {
		color: var(--textAccent);
	}
	ul {
		list-style-type: none;
	}
	button {
		border: none;
		color: inherit;
	}
	footer {
		margin-top: auto;
	}
	.hidden {
		overflow: hidden;
	}
	p {
		line-height: 145%;
	}
`;

export default GlobalStyle;
