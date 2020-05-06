import React from 'react'

export default class ListCategories extends React.Component {
	handleClick = () => {
		alert('hallo')
	}
	render() {
		return (
			<div>
				<div className="categories">
					<button onClick={this.handleClick} className="btn-category">Adventure</button>
					<button onClick={this.handleClick} className="btn-category">Crime</button>
					<button onClick={this.handleClick} className="btn-category">Comedy</button>
					<button onClick={this.handleClick} className="btn-category">Cartoon</button>
					<button onClick={this.handleClick} className="btn-category">Drama</button>
				</div>
			</div>
		)
	}
}