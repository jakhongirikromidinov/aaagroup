import StyledCard from "./Card.styled";

const Card = ({ background, text }) => {
	return (
		<StyledCard background={background}>
			<label background={background}>{text}</label>
		</StyledCard>
	);
};

export default Card;
