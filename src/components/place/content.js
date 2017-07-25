import React from 'react';

class PlaceContent extends React.Component {
	constructor(props){
		super(props);
		this.content = this.props.content;
	}

	render() {
		var placeContent = this.content.map((block) => {
			var key, className, blockContent;

			if (block.className) {
				key = block.className;
				className = block.type + ' ' + block.className;
			} else {
				key = block.type;
				className = block.type;
			}

			switch (block.type) {
				case 'intro':
					blockContent = block.text.map((paragraphText, index) => { return <p key={index}>{paragraphText}</p> });
					break;

				case 'left-photo':
					let photoUrl = require("../../img/place/"+ this.props.place + "/photos/" + block.photo +".jpg");
					blockContent = [
						( <img className="photo" src={photoUrl} alt={block.text} key="1"/> ),
						( <div className="description" key="2">{block.text}</div> )
					]
					break;
			}
			return ( <div key={key} className={className}>{blockContent}</div> )
		});

		return ( <div className="place-content">{placeContent}</div> )
	}

}

module.exports = {
	PlaceContent: PlaceContent
}
