import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from '@material-ui/icons'

class Banners extends React.Component {
	render() {
		return (
			<div>
				<h1 className="typography-1">Now Playing</h1>
				<div className="banners">
					<Link to="#" className="list-banner">
						<img src="https://image.tmdb.org/t/p/original/iQh64TQiPoTK3yZ3duC3y0tKgy3.jpg" alt="tes" />
						<div className="bg-typography">
							<small>Captain america</small>
							<div className="rating"><Star/><span>8.3</span></div>
						</div>
					</Link>
					<Link to="#" className="list-banner">
						<img src="https://image.tmdb.org/t/p/original/sd4xN5xi8tKRPrJOWwNiZEile7f.jpg" alt="tes" />
						<div className="bg-typography">
							<small>Cars</small>
							<div className="rating"><Star/><span>8.3</span></div>
						</div>
					</Link>
					<Link to="#" className="list-banner">
						<img src="https://image.tmdb.org/t/p/original/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg" alt="tes" />
						<div className="bg-typography">
							<small>Captain marvel</small>
							<div className="rating"><Star/><span>8.3</span></div>
						</div>
					</Link>
					<Link to="#" className="list-banner">
						<img src="https://image.tmdb.org/t/p/original/maa4191Pfvs3SGR3ECYC34kaRGQ.jpg" alt="tes" />
						<div className="bg-typography">
							<small>Doctor Strange</small>
							<div className="rating"><Star/><span>8.3</span></div>
						</div>
					</Link>
				</div>
			</div>
		)
	}
}

export default Banners;