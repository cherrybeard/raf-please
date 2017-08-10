import React from 'react';

import Mention from '../../../components/mention.js';

class SidePhoto extends React.Component {
	constructor(props){
		super(props);
		const block = this.props.block;

		switch (block.type) {
			case 'mention':
				this.block = (<Mention name={block.name} text={block.text} type="vertical" />);
				break;

			case 'description':
				this.block = (<div className="description">{block.text}</div>);
				break;
		}
	}

	render() {
		return (
			<div className={this.props.align+'-photo'}>
				<div className="photo">
					<img src={this.props.photoUrl} />
				</div>
				{this.block}
			</div>
		)
	}
}

export default SidePhoto
