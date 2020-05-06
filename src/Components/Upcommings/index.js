import React from 'react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
class Upcommings extends React.Component {
	render() {
		return (
			<div>
				<span className="typography-1">Up Comming</span>
				<Link to="#" className="trigger">Show All</Link>
				<div className="films">
					<Link to="#" className="list-film">
						<div className="poster">
							<img src="https://image.tmdb.org/t/p/original/8ZX18L5m6rH5viSYpRnTSbb9eXh.jpg" alt="tes" />
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
							<img src="https://image.tmdb.org/t/p/original/jtrhTYB7xSrJxR1vusu99nvnZ1g.jpg" alt="tes" />
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
							<img src="https://image.tmdb.org/t/p/original/zaecdNcjcVDiOcDcgQCOgHELSo0.jpg" alt="tes" />
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
							<img src="https://image.tmdb.org/t/p/original/dqA2FCzz4OMmXLitKopzf476RVB.jpg" alt="tes" />
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

export default Upcommings