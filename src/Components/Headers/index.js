import React, { Component, Fragment } from 'react'
import { Search } from '@material-ui/icons'

import ListCategories from '../ListCategories'

class Headers extends Component {
	handleClick = (e) => {

	}
	render() {
		return (
			<Fragment>
				<div className="app-bar">
					<nav className="headers">
						<span>LUX</span>
					</nav>
					<div className="search">
						<div className="form-search">
							<input type="text" placeholder="Search" className="input-search" />
							<div className="icon">
								<Search/>
							</div>
						</div>
					</div>
					<ListCategories />
				</div>
			</Fragment>
		)
	}
}

export default Headers;