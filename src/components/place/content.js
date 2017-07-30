import React from 'react';

class PlaceContent extends React.Component {
	constructor(props){
		super(props);
		this.content = this.props.content;
	}

	requirePhoto(photo) {
		return ASSETS_DIRECTORY + '/images/place/'+ this.props.place + "/photos/" + photo +".jpg";
	}

	render() {
		var placeContent = this.content.map((block) => {
			var key, className, blockContent, photoUrl, photoUrls;

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
					photoUrl = this.requirePhoto(block.photo);
					blockContent = [
						(
							<div className="photo" key="1">
								<img src={photoUrl} alt={block.text} />
							</div>
						),
						( <div className="description" key="2">{block.text}</div> )
					]
					break;

				case 'two-photos':
					photoUrls = block.photos.map((photo) => { return this.requirePhoto(photo.photo) });
					blockContent = [
						(
							<div className="two-photos-left" key="1">
								<img src={photoUrls[0]} alt={block.photos[0].text} />
							</div>
						),
						(
							<div className="two-photos-right" key="2">
								<img className="photo" src={photoUrls[1]} alt={block.photos[1].text} />
								<div className="description-top">{block.photos[1].text}</div>
								<div className="description-left">{block.photos[0].text}</div>
							</div>
						)
					]
					break;

				case 'full-width-photo':
					photoUrl = this.requirePhoto(block.photo);
					blockContent = <img className="photo" src={photoUrl} alt={block.text} />;
					break;
			}
			return ( <div key={key} className={className}>{blockContent}</div> )
		});

		return ( <div className="place-content">{placeContent}</div> )
	}

}

module.exports = PlaceContent;
