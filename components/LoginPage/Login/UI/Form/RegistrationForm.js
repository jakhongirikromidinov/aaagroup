import StyledForm from "./RegistrationForm.styled";
import { Formik, Form, Field } from "formik";
import { Container } from "../../../../Common/Common.styled";
import { useTranslation } from "next-i18next";

const RegistrationForm = () => {
	const { t: translate } = useTranslation("regForm");

	function validateEmail(value) {
		let error;
		if (!value) {
			error = "Required";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			error = "Invalid email address";
		}
		return error;
	}
	function validateName(value) {
		let error;
		if (!value) {
			error = "Required";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			error = "Invalid email address";
		}
		return error;
	}
	const validate = (values) => {
		const errors = {};
		if (!values.name) {
			errors.name = "Required";
		} else if (values.name.length > 15) {
			errors.name = "Must be 15 characters or less";
		}
		if (!values.phone) {
			errors.phone = "Required";
		} else if (!/^\+(?:[0-9]●?){6,14}[0-9]$/.test(values.phone)) {
			errors.phone = "Invalid email address";
		}
		if (!values.voucher) {
			errors.voucher = "Required";
		}
		if (!values.email) {
			errors.email = "Required";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
			errors.email = "Invalid email address";
		}
		if (!values.password) {
			errors.password = "Required";
		} else if (values.password.length < 8) {
			errors.email = "Invalid email address";
		}

		return errors;
	};
	return (
		<Container>
			<StyledForm>
				<Formik
					initialValues={{
						username: "",
						email: "",
					}}
					onSubmit={(values) => {
						// same shape as initial values
						console.log(values);
					}}
				>
					{({ errors, touched, isValidating }) => (
						<Form>
							<label htmlFor="email">{translate("email")}</label>
							<Field name="email" validate={validateEmail} />
							{errors.email && touched.email && <div>{errors.email}</div>}
							<label htmlFor="name">{translate("name")}</label>
							<Field name="name" validate={validateName} />
							{errors.name && touched.name && <div>{errors.name}</div>}

							{/* <label htmlFor="phone">{translate("phone_number")}</label>
							<Field
								id="phone"
								name="phone"
								type="tel"
								onChange={formik.handleChange}
								value={formik.values.phone}
								onBlur={formik.handleBlur}
							/>
							{formik.errors.phone ? <div>{formik.errors.phone}</div> : null}

							<label htmlFor="email">{translate("email")}</label>
							<Field
								validate={validateEmail}
								id="email"
								name="email"
								type="text"
								onChange={formik.handleChange}
								value={formik.values.email}
								onBlur={formik.handleBlur}
							/>
							{formik.errors.email && touched.email && <div>{errors.email}</div>}

							<label htmlFor="password">{translate("password")}</label>
							<Field
								id="password"
								name="password"
								type="text"
								onChange={formik.handleChange}
								value={formik.values.password}
								onBlur={formik.handleBlur}
							/>
							{formik.errors.password ? (
								<div>{formik.errors.password}</div>
							) : null}

							<label htmlFor="voucher">{translate("voucher")}</label>
							<Field
								id="voucher"
								name="voucher"
								type="text"
								onChange={formik.handleChange}
								value={formik.values.voucher}
								onBlur={formik.handleBlur}
							/>
							{errors.voucher ? (
								<div>{formik.errors.voucher}</div>
							) : null} */}
							<button type="submit">Submit</button>
						</Form>
					)}
				</Formik>
			</StyledForm>
		</Container>
	);
};

export default RegistrationForm;
