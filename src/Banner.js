import React from "react";

// css
import "./Banner.css";

const Banner = () => {
    // truncate str function
    const truncate = (string, n) => {
        return string?.length > n ? string.substring(0,n-1) + "..." : string;
    }
	return (
		<header
			className="banner"
			style={{
				backgroundImage: `url('https://dark.netflix.io/share/global.png')`,
				backgroundSize: "cover",
				backgroundPosition: "center center",
			}}>
			<div className="banner__contents">
				<h1 className="banner__title">Movie Name</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">
					{truncate(`this is a test description
					bhawanabhawanabhawanabhawanabhawanabhawanabhawanabhawanabhawanabhawanabhawanabhawanabhawanabhawanabhawanabhawanabhawanabhawanabhawanabhawana`,40)}
				</h1>
			</div>

			<div className="banner--fadeBottom" />
		</header>
	);
};

export default Banner;
