import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import StyledGallery, { Content, Row1 } from "./Gallery.styled";

import { Container } from "../../Common/Common.styled";

import Image from "next/legacy/image";

const Gallery = () => {
	const onInit = () => {
		console.log("lightGallery has been initialized");
	};
	return (
		<StyledGallery>
			<Container>
				<LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
					<a href="/images/hotels_1.png" data-lg-size="800-600">
						<img src="/images/hotels_1.png" alt="" className="big" />
					</a>
					<a href="/images/hotel_2.png" data-lg-size="450-600">
						<img src="/images/hotel_2.png" className="small" />
					</a>
					<a href="/images/hotels_4.png" data-lg-size="800-600">
						<img src="/images/hotels_4.png" className="big" />
					</a>
					<a href="/images/hotels_3.png" data-lg-size="450-600">
						<img src="/images/hotels_3.png" className="small" />
					</a>

					<a href="/images/hotels_6.png" data-lg-size="450-600">
						<img src="/images/hotels_6.png" className="small" />
					</a>
					<a href="/images/hotels_5.png" data-lg-size="800-600">
						<img src="/images/hotels_5.png" className="big" />
					</a>
					<a href="/images/hotels_7.png" data-lg-size="450-600">
						<img src="/images/hotels_7.png" className="small" />
					</a>
					<a href="/images/hotels_8.png" data-lg-size="800-600">
						<img src="/images/hotels_8.png" className="big" />
					</a>
					<a href="/images/hotels_10.png" data-lg-size="800-600">
						<img src="/images/hotels_10.png" className="big" />
					</a>
					<a href="/images/hotels_9.png" data-lg-size="450-600">
						<img src="/images/hotels_9.png" className="small" />
					</a>
					<a href="/images/hotels_12.png" data-lg-size="800-600">
						<img src="/images/hotels_12.png" className="big" />
					</a>

					<a href="/images/hotels_11.png" data-lg-size="450-600">
						<img src="/images/hotels_11.png" className="small" />
					</a>
				</LightGallery>
			</Container>
		</StyledGallery>
	);
};

export default Gallery;
