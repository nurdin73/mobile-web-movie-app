import React from 'react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
class Lists extends React.Component {
	render() {
		return (
			<div>
				<span className="typography-1">Now Trending</span>
				<Link to="#" className="trigger">Show All</Link>
				<div className="films">
					<Link to="#" className="list-film">
						<div className="poster">
							<img src="https://image.tmdb.org/t/p/original/4XzbcAKdX4n3aWfzBjjeAlm68S3.jpg" alt="tes" />
						</div>
						<div className="noted">
							<span>Me contro Te</span>
							<span>Adventure</span>
							<div className="rating-film">
								<StarRatings
					        rating={4.403}
					        starRatedColor="#ffc800"
					        starDimension="20px"
					        starSpacing="0px"
					      />
							</div>
						</div>
					</Link>
					<Link to="#" className="list-film">
						<div className="poster">
							<img src="https://image.tmdb.org/t/p/original/2CAL2433ZeIihfX1Hb2139CX0pW.jpg" alt="tes" />
						</div>
						<div className="noted">
							<span>Me contro Te</span>
							<span>Adventure</span>
							<div className="rating-film">
								<StarRatings
					        rating={4.403}
					        starRatedColor="#ffc800"
					        starDimension="20px"
					        starSpacing="0px"
					      />
							</div>
						</div>
					</Link>
					<Link to="#" className="list-film">
						<div className="poster">
							<img src="https://image.tmdb.org/t/p/original/8mRgpubxHqnqvENK4Bei30xMDvy.jpg" alt="tes" />
						</div>
						<div className="noted">
							<span>Me contro Te</span>
							<span>Adventure</span>
							<div className="rating-film">
								<StarRatings
					        rating={4.403}
					        starRatedColor="#ffc800"
					        starDimension="20px"
					        starSpacing="0px"
					      />
							</div>
						</div>
					</Link>
					<Link to="#" className="list-film">
						<div className="poster">
							<img src="https://image.tmdb.org/t/p/original/5KCVkau1HEl7ZzfPsKAPM0sMiKc.jpg" alt="tes" />
						</div>
						<div className="noted">
							<span>Me contro Te</span>
							<span>Adventure</span>
							<div className="rating-film">
								<StarRatings
					        rating={4.403}
					        starRatedColor="#ffc800"
					        starDimension="20px"
					        starSpacing="0px"
					      />
							</div>
						</div>
					</Link>
				</div>
			</div>
		)
	}
}

export default Lists