import React, { Component, Fragment } from 'react'
import { Search } from '@material-ui/icons'

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
				</div>
			</Fragment>
		)
	}
}

export default Headers;