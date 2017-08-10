import React from 'react';

class Mention extends React.Component {
	constructor(props){
		super(props);
		this.realName = (this.props.name == 'steven') ? 'Стив' : 'Марина'
	}

	render() {
		return (
			<div className={'mention-'+this.props.name+' mention-'+this.props.type}>
				<h4 className="name">{this.realName}</h4>
				<p>{this.props.text}</p>
			</div>
		)
	}

}

export default Mention
