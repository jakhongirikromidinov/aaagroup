import StyledLogin, {
	Title,
	Content,
	Left,
	Question,
	Right,
} from "./Login.styled";
import { Container } from "../../Common/Common.styled";
import { useTranslation } from "next-i18next";
import LoginForm from "./UI/LoginForm/LoginForm";
import { useState } from "react";
import RegistrationForm from "./UI/Form/RegistrationForm";

const Login = () => {
	const { t: translate } = useTranslation("login");
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(!clicked);
	};

	return (
		<StyledLogin>
			<Container>
				<Content>
					{/* <Title>{translate("title")}</Title> */}
					<Left>
						{clicked || <LoginForm handleClick={handleClick} />}
						{clicked && <RegistrationForm />}
					</Left>
					<Right></Right>
				</Content>
			</Container>
		</StyledLogin>
	);
};

export default Login;
