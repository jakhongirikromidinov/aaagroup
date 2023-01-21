import styled from "styled-components";

const StyledSidebar = styled.nav`
	position: fixed;
	overflow: hidden;
	z-index: 2;
	margin-top: 6.8rem;
	width: 100%;
	height: 100vh;
	background: #fcf7fc;
	top: 0;
	transition: 0.5s ease-in-out;
	right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const SidebarList = styled.ul`
	width: 100%;
	height: 75vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	li {
		color: var(--textAccent);
		margin-bottom: 1rem;
		a {
			font-size: 2.4rem;
		}
	}
	.phone {
		background: rgba(140, 140, 140, 0.1);
		border-radius: 20px;
	}
`;

export const SidebarPhone = styled.a`
	display: flex;
	gap: 0.7rem;
	align-items: center;
	padding: 2rem 6rem;
	border-radius: 20px;
	color: transparent;
	background: linear-gradient(90deg, #ff7e01 0%, #ff2f01 100%);

	-webkit-background-clip: text;
`;
export const SidebarLang = styled.ul`
	display: flex;
	.bold {
		font-weight: 700;
	}
	li {
		padding: 0 1rem;
		position: relative;
		::after {
			content: "";
			position: absolute;
			display: block;
			right: 0;
			bottom: 50%;
			transform: translateY(50%);
			width: 1px;
			height: 1.5rem;
			background-color: black;
		}
		:nth-child(3) {
			::after {
				display: none;
			}
		}
	}
	@media screen and (max-width: 1000px) {
		padding: 1rem;
		background: rgba(140, 140, 140, 0.1);
		border-radius: 20px;
		.bold {
			background: linear-gradient(90deg, #ff7e01 0%, #ff2f01 100%);
			font-weight: unset;
			color: #ffff;
			transition: 0.6s ease-in-out;
		}
		li {
			color: var(--textAccent);
			padding: 1rem 3.5rem;
			border-radius: 2rem;
			margin-bottom: unset;
			::after {
				display: none;
			}
		}
	}
`;

export default StyledSidebar;
