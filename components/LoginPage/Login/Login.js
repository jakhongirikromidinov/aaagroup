import StyledLogin, { Title, Content } from "./Login.styled";
import { Container } from "../../Common/Common.styled";
import { useTranslation } from "next-i18next";
import LoginForm from "./UI/LoginForm/LoginForm";

const Login = () => {
	const { t: translate } = useTranslation("login");

	return (
		<StyledLogin>
			<Container>
				<Title>{translate("title")}</Title>
				<Content>
					<LoginForm />
				</Content>
			</Container>
		</StyledLogin>
	);
};

export default Login;
