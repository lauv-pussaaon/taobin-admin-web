import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {	
	--color-primary-100: #f2f2f0;
	--color-primary-200: #555555;
	--color-primary-400: #513c2f;
	--color-primary-600: #746253;
	--color-secondary-100: #f0e3dd;
	--color-secondary-400: #ee8c62;
	--color-secondary-500: #de794e;
	--color-secondary-600: #dc784e;	
}

&, &.light-mode {
	/* Grey */
	--color-grey-0: #fff;
	--color-grey-50: #f9fafb;
	--color-grey-100: #f3f4f6;
	--color-grey-200: #e5e7eb;
	--color-grey-300: #d1d5db;
	--color-grey-400: #9ca3af;
	--color-grey-500: #6b7280;
	--color-grey-600: #4b5563;
	--color-grey-700: #374151;
	--color-grey-800: #1f2937;
	--color-grey-900: #111827;

	--color-blue-100: #e0f2fe;
	--color-blue-700: #0369a1;
	--color-green-100: #dcfce7;
	--color-green-700: #15803d;
	--color-yellow-100: #fef9c3;
	--color-yellow-700: #a16207;
	--color-silver-100: #e5e7eb;
	--color-silver-700: #374151;
	--color-indigo-100: #e0e7ff;
	--color-indigo-700: #4338ca;

	--color-red-100: #fee2e2;
	--color-red-700: #b91c1c;
	--color-red-800: #991b1b;

	--backdrop-color: rgba(255, 255, 255, 0.1);

	--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
	--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
	--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

	--border-radius-tiny: 3px;
	--border-radius-sm: 5px;
	--border-radius-md: 7px;
	--border-radius-lg: 9px;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	padding: 0;
	margin: 0;	

	/* Creating animations for dark mode */
	transition: background-color 0.3s, border 0.3s;
}

html {
	font-size: 62.5%;
}

body {
	font-family: 'PT Sans', sans-serif;
	color: var(--color-grey-700);

	transition: color 0.3s, background-color 0.3s;
	min-height: 100vh;
	line-height: 1.5;
	font-size: 1.6rem;	
}

input,
button,
textarea,
select {
	font: inherit;
	color: inherit;
}

button {
	cursor: pointer;
}

*:disabled {
	cursor: not-allowed;
}

select:disabled,
input:disabled {
	background-color: var(--color-grey-200);
	color: var(--color-primary-200);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
	outline: 2px solid var(--color-brand-600);
	outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
	line-height: 0;
}

a {
	color: inherit;
	text-decoration: none;
}

ul {
	list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
	overflow-wrap: break-word;
	hyphens: auto;
}

img {
	max-width: 100%;

	/* For dark mode */
	filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
`;

export default GlobalStyles;
