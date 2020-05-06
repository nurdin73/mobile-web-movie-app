import React from 'react'
import Headers from '../../Components/Headers'
import Navs from '../../Components/Navs'
import Banners from '../../Components/Banners'
import Lists from '../../Components/Lists'
import Upcommings from '../../Components/Upcommings'
export default class Home extends React.Component {
	render() {
		return (
			<React.Fragment> 
				<Headers />
				<div className="app-content">
					<Banners />
					<Lists />
					<Upcommings />
				</div>
				<Navs/>
			</React.Fragment>
		)
	}
}