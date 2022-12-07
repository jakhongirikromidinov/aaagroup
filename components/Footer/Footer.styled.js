import styled from "styled-components";

const StyledFooter = styled.footer`
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	z-index: 1;
`;

export const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	font-size: 1.6rem;
	@media screen and (max-width: 680px) {
		flex-direction: column;
	}
`;

export const Main = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	@media screen and (max-width: 680px) {
		margin-top: 2rem;
		gap: unset;
	}
`;

export const MainDescr = styled.label`
	@media screen and (max-width: 680px) {
		margin-bottom: 2rem;
	}
`;

export const Links = styled.ul`
	list-style-type: disc;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	font-weight: 500;
	@media screen and (max-width: 680px) {
		margin-bottom: 2rem;
		align-items: center;
	}
`;

export const Contacts = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	@media screen and (max-width: 680px) {
		align-items: center;
	}
`;

export const ContactsTitle = styled.h3`
	font-size: 2rem;
`;

export const ContactsPhone = styled.a``;

export const ContactsSocialWrapper = styled.div`
	display: flex;
	gap: 1.6rem;
`;

export const FbLogo = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22 16.19C22 19.83 19.83 22 16.19 22H15C14.45 22 14 21.55 14 21V15.23C14 14.96 14.22 14.73 14.49 14.73L16.25 14.7C16.39 14.69 16.51 14.59 16.54 14.45L16.89 12.54C16.92 12.36 16.78 12.19 16.59 12.19L14.46 12.22C14.18 12.22 13.96 12 13.95 11.73L13.91 9.28C13.91 9.12 14.04 8.98001 14.21 8.98001L16.61 8.94C16.78 8.94 16.91 8.81001 16.91 8.64001L16.87 6.23999C16.87 6.06999 16.74 5.94 16.57 5.94L13.87 5.98001C12.21 6.01001 10.89 7.37 10.92 9.03L10.97 11.78C10.98 12.06 10.76 12.28 10.48 12.29L9.28 12.31C9.11 12.31 8.98001 12.44 8.98001 12.61L9.01001 14.51C9.01001 14.68 9.14 14.81 9.31 14.81L10.51 14.79C10.79 14.79 11.01 15.01 11.02 15.28L11.11 20.98C11.12 21.54 10.67 22 10.11 22H7.81C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81V16.19Z"
				fill="#FAA935"
			/>
		</svg>
	);
};

export const InstaLogo = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z"
				fill="#FAA935"
			/>
		</svg>
	);
};

export const YtLogo = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17 4H7C4 4 2 6 2 9V15C2 18 4 20 7 20H17C20 20 22 18 22 15V9C22 6 20 4 17 4ZM13.89 13.03L11.42 14.51C10.42 15.11 9.59998 14.65 9.59998 13.48V10.51C9.59998 9.34001 10.42 8.88001 11.42 9.48001L13.89 10.96C14.84 11.54 14.84 12.46 13.89 13.03Z"
				fill="#FAA935"
			/>
		</svg>
	);
};
export const FooterImage = styled.div`
	@media screen and (max-width: 770px) {
		display: none;
	}
	@media screen and (max-width: 680px) {
		display: block;
		margin-bottom: 2rem;
	}
`;

export const CopyRight = styled.label`
	width: 100%;
	text-align: center;
	padding: 2rem 0;
	position: relative;
	::before {
		content: "";
		display: block;
		width: 105%;
		height: 1px;
		background: rgba(0, 0, 0, 0.1);
		position: absolute;
		top: 0;
		right: 50%;
		transform: translateX(50%);
	}
`;

export default StyledFooter;
