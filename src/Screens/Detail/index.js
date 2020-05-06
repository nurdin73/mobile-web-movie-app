import React from 'react'
import './detail.scss'
export default class Detail extends React.Component {
	render() {
		return (
			<div>
				<div className="header-poster">
					<img src="https://image.tmdb.org/t/p/original/8ZX18L5m6rH5viSYpRnTSbb9eXh.jpg" alt="" />
				</div>

				<div className="detail">
					<div className="shadow" ></div>
				</div>
			</div>
		)
	}
}