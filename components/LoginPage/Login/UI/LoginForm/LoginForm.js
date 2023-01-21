import StyledLoginForm, { Content, Question } from "./LoginForm.styled";
import { useTranslation } from "next-i18next";
import { useState } from "react";

const LoginForm = ({ handleClick }) => {
	const { t: translate } = useTranslation("login");
	return (
		<StyledLoginForm handleClick={handleClick}>
			<Content>
				<form>
					<label htmlFor="phone">{translate("phone")}</label>
					<input
						id="phone"
						name="phone"
						type="tel"
						placeholder="+998(00)000-00-00"
					/>

					<label htmlFor="password">{translate("password")}</label>
					<input id="password" name="password" type="password" />
					<label className="question">
						{translate("question")}
						<span onClick={() => handleClick()}>{translate("link")} </span>
					</label>

					<button type="submit">{translate("login")}</button>
				</form>
			</Content>
		</StyledLoginForm>
	);
};

export default LoginForm;
