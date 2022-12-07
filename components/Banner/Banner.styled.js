import styled from "styled-components";

const StyledBanner = styled.section`
	background: url("/images/banner_bg.png") top 100px left 60px no-repeat, var(--bgColor);
`;

export const Content = styled.div`
	display: flex;
	gap: 2.8rem;
	padding-bottom: 10rem;
`;
export const Main = styled.div`
	margin-top: 24.4rem;
`;

export const SupTitle = styled.h3`
	position: relative;
	margin-bottom: 1.2rem;
	display: inline-block;
	font-family: "Island Moments";
	border-radius: 24px;
	padding: 0.4rem 0.9rem;
	background: var(--accent);
	font-size: 2.4rem;
	font-weight: 400;
	::after {
		content: url("/images/banner_airplane.png");
		position: absolute;
		top: -80px;
	}
`;

export const Title = styled.h1`
	margin-bottom: 2rem;
	font-size: 4.8rem;
	font-weight: 500;
	max-width: 52rem;
`;

export const Subtitle = styled.p`
	max-width: 45.7rem;
	font-size: 1.6rem;
	margin-bottom: 3.8rem;
`;

export const SearchBar = styled.div`
	max-width: 64.8rem;
	background-color: #ffff;
	display: flex;
	align-items: center;
	gap: 5rem;
	padding: 1.2rem 2rem;
	border-radius: 4.3rem;
`;

export const LocationIcon = () => {
	return (
		<svg
			width="28"
			height="28"
			viewBox="0 0 28 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M24.5 11.6667C24.5 19.8333 14 26.8333 14 26.8333C14 26.8333 3.5 19.8333 3.5 11.6667C3.5 8.8819 4.60625 6.21118 6.57538 4.24205C8.54451 2.27292 11.2152 1.16667 14 1.16667C16.7848 1.16667 19.4555 2.27292 21.4246 4.24205C23.3938 6.21118 24.5 8.8819 24.5 11.6667Z"
				stroke="#EF5DA8"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14 15.1667C15.933 15.1667 17.5 13.5997 17.5 11.6667C17.5 9.73368 15.933 8.16667 14 8.16667C12.067 8.16667 10.5 9.73368 10.5 11.6667C10.5 13.5997 12.067 15.1667 14 15.1667Z"
				stroke="#EF5DA8"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const CalendarIcon = () => {
	return (
		<svg
			width="28"
			height="28"
			viewBox="0 0 28 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22.1667 4.66667H5.83333C4.54467 4.66667 3.5 5.71134 3.5 7.00001V23.3333C3.5 24.622 4.54467 25.6667 5.83333 25.6667H22.1667C23.4553 25.6667 24.5 24.622 24.5 23.3333V7.00001C24.5 5.71134 23.4553 4.66667 22.1667 4.66667Z"
				stroke="#EF5DA8"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.5 11.6667H24.5"
				stroke="#EF5DA8"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18.6667 2.33333V7"
				stroke="#EF5DA8"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.33334 2.33333V7"
				stroke="#EF5DA8"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const GuestIcon = () => {
	return (
		<svg
			width="28"
			height="28"
			viewBox="0 0 28 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M18.6667 4.66667H21C21.6188 4.66667 22.2123 4.9125 22.6499 5.35009C23.0875 5.78767 23.3333 6.38117 23.3333 7.00001V23.3333C23.3333 23.9522 23.0875 24.5457 22.6499 24.9833C22.2123 25.4208 21.6188 25.6667 21 25.6667H6.99999C6.38115 25.6667 5.78766 25.4208 5.35007 24.9833C4.91249 24.5457 4.66666 23.9522 4.66666 23.3333V7.00001C4.66666 6.38117 4.91249 5.78767 5.35007 5.35009C5.78766 4.9125 6.38115 4.66667 6.99999 4.66667H9.33332"
				stroke="#EF5DA8"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.5 2.33333H10.5C9.85568 2.33333 9.33334 2.85566 9.33334 3.49999V5.83333C9.33334 6.47766 9.85568 6.99999 10.5 6.99999H17.5C18.1443 6.99999 18.6667 6.47766 18.6667 5.83333V3.49999C18.6667 2.85566 18.1443 2.33333 17.5 2.33333Z"
				stroke="#EF5DA8"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18 19.5V18.5C18 17.9696 17.7893 17.4609 17.4142 17.0858C17.0391 16.7107 16.5304 16.5 16 16.5H12C11.4696 16.5 10.9609 16.7107 10.5858 17.0858C10.2107 17.4609 10 17.9696 10 18.5V19.5"
				stroke="#EF5DA8"
				strokeWidth="1.6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14 14.5C15.1046 14.5 16 13.6046 16 12.5C16 11.3954 15.1046 10.5 14 10.5C12.8954 10.5 12 11.3954 12 12.5C12 13.6046 12.8954 14.5 14 14.5Z"
				stroke="#EF5DA8"
				strokeWidth="1.6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const ChevronIcon = () => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5 7.5L10 12.5L15 7.5"
				stroke="#FF7E01"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const SearchIcon = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21 21L16.65 16.65"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const SearchIconWrapper = styled.div`
	width: 36px;
	height: 36px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--accent100);
	border-radius: 20px 0px 20px 20px;
`;

export const SearchBarItem = styled.div`
	display: flex;
	gap: 1.2rem;
	align-items: center;
	position: relative;
	::after {
		content: "";
		display: block;
		position: absolute;
		right: -24px;
		top: 50%;
		transform: translateY(-50%);
		width: 2px;
		height: 28px;
		background-color: #00000033;
	}
	:nth-child(3),
	:nth-child(4) {
		::after {
			display: none;
		}
	}
`;
export const SearchBarItemInner = styled.div`
	display: flex;
	flex-direction: column;
	label {
		font-size: 1.6rem;
	}
`;
export const CitySelector = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.2rem;
	width: ${({ lang }) =>
		lang === "uz"
			? "17.5rem"
			: lang === "ru"
			? "16.5rem"
			: lang === "en"
			? "18.5rem"
			: ""};
	gap: 0.4rem;
`;

export const SearchBarDate = styled.div``;

export const SearchBarGuest = styled.div``;

export const Images = styled.div`
	position: relative;
	z-index: 1;
	margin-top: 20.4rem;
	display: flex;
	align-content: unset;
	gap: 1.6rem;
`;
export const DotsPosition = styled.div`
	position: absolute;
	z-index: -1;
	top: ${({ position }) => (position === "top" ? "-24px" : "unset")};
	left: ${({ position }) => (position === "top" ? "-26px" : "unset")};
	bottom: ${({ position }) => (position === "bottom" ? "-35px" : "unset")};
	right: ${({ position }) => (position === "bottom" ? "-42px" : "unset")};
`;

export const ImageWrapper = styled.div`
	&:nth-of-type(2) {
		margin-top: 2.6rem;
	}
	&:nth-of-type(3) {
		margin-top: 5.2rem;
	}
`;

export default StyledBanner;
