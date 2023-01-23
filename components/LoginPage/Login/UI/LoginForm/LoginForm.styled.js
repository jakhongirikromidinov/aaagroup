import styled from "styled-components";

const StyledLoginForm = styled.div``;

export const Content = styled.div`
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		label {
			font-weight: 600;
			font-size: 18px;
		}
		input {
			border: 1px solid rgba(11, 39, 39, 0.4);
			border-radius: 5px;
			width: 25rem;
			padding: 1rem 0 1rem 1rem;
			font-weight: 400;
			font-size: 16px;
			::placeholder {
			}
		}
		#password {
			margin-bottom: 4rem;
		}
		.question {
			font-size: 16px;
			font-weight: 400;
			margin-bottom: 2rem;
			span {
				cursor: pointer;
			}
		}
		button {
			background: linear-gradient(90deg, #ff7e01 0%, #ff2f01 100%);
			border-radius: 10px;
			width: 25rem;
			padding: 1rem 0;
			font-size: 16px;
			color: #ffffff;
		}
	}
`;
export const Question = styled.div``;

export default StyledLoginForm;
