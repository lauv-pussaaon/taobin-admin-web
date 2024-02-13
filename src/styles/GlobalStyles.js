import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {	
	--color-primary-100: #f2f2f0;
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
::before,
::after {
	box-sizing: border-box;
}

html {
	/* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */
	font-family:
		'PT Sans',
		Roboto,
		Helvetica,
		sans-serif,
		'Apple Color Emoji',
		'Segoe UI Emoji';
	line-height: 1.15;
	/* 1. Correct the line height in all browsers. */
	-webkit-text-size-adjust: 100%;
	/* 2. Prevent adjustments of font size after orientation changes in iOS. */
	-moz-tab-size: 4;
	/* 3. Use a more readable tab size (opinionated). */
	tab-size: 4;
	/* 3 */
}

/*
Sections
========
*/

body {
	margin: 0;
	/* Remove the margin in all browsers. */
}

/*
Grouping content
================
*/

/**
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
*/

hr {
	height: 0;
	/* 1 */
	color: inherit;
	/* 2 */
}

/*
Text-level semantics
====================
*/

/**
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr[title] {
	text-decoration: underline dotted;
}

/**
Add the correct font weight in Edge and Safari.
*/

b,
strong {
	font-weight: bolder;
}

/**
1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
2. Correct the odd 'em' font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
	font-family:
		ui-monospace,
		SFMono-Regular,
		Consolas,
		'Liberation Mono',
		Menlo,
		monospace;
	/* 1 */
	font-size: 1em;
	/* 2 */
}

/**
Add the correct font size in all browsers.
*/

small {
	font-size: 80%;
}

/**
Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
*/

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}

/*
Tabular data
============
*/

/**
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
*/

table {
	text-indent: 0;
	/* 1 */
	border-color: inherit;
	/* 2 */
}

/*
Forms
=====
*/

/**
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
*/

button,
input,
optgroup,
select,
textarea {
	font-family: inherit;
	/* 1 */
	font-size: 100%;
	/* 1 */
	line-height: 1.15;
	/* 1 */
	margin: 0;
	/* 2 */
}

/**
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
	text-transform: none;
}

/**
Correct the inability to style clickable types in iOS and Safari.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
	-webkit-appearance: button;
}

/**
Remove the inner border and padding in Firefox.
*/

::-moz-focus-inner {
	border-style: none;
	padding: 0;
}

/**
Restore the focus styles unset by the previous rule.
*/

:-moz-focusring {
	outline: 1px dotted ButtonText;
}

/**
Remove the additional ':invalid' styles in Firefox.
See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
*/

:-moz-ui-invalid {
	box-shadow: none;
}

/**
Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
*/

legend {
	padding: 0;
}

/**
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
	vertical-align: baseline;
}

/**
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
	height: auto;
}

/**
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
	-webkit-appearance: textfield;
	/* 1 */
	outline-offset: -2px;
	/* 2 */
}

/**
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
	-webkit-appearance: none;
}

/**
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/

::-webkit-file-upload-button {
	-webkit-appearance: button;
	/* 1 */
	font: inherit;
	/* 2 */
}

/*
Interactive
===========
*/

/*
Add the correct display in Chrome and Safari.
*/

summary {
	display: list-item;
}
`;

export default GlobalStyles;
