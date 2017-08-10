import React from 'react';

import { getPlaceParam } from 'storage/places.js';
import Mention from 'components/mention.js';
import Intro from './content/intro.js';
import SidePhoto from './content/side-photo.js';

class PlaceContent extends React.Component {
	constructor(props){
		super(props);
		this.content = this.props.content;
	}

	getPhotoUrl(photo) {
		return ASSETS_DIRECTORY + '/images/place/'+ this.props.place + "/photos/" + photo +".jpg";
	}

	render() {
		var placeContent = this.content.map((block, index) => {
			var blockContent, photoUrl, photoUrls, tags;

			switch (block.type) {
				case 'intro':
					tags = getPlaceParam(this.props.place, 'tags');
					blockContent = <Intro key={index} text={block.text} tags={tags} />;
					break;

				case 'left-photo':
					photoUrl = this.getPhotoUrl(block.photo);
					blockContent = <SidePhoto key={index} align="left" photoUrl={photoUrl} block={block.block} />;
					break;

				case 'right-photo':
					photoUrl = this.getPhotoUrl(block.photo);
					blockContent = <SidePhoto key={index} align="right" photoUrl={photoUrl} block={block.block} />;
					break;

				case 'two-photos':
					photoUrls = block.photos.map((photo) => { return this.getPhotoUrl(photo.photo) });
					blockContent = (
						<div key={index} className="two-photos">
							<div className="two-photos-left" key="1">
								<img src={photoUrls[0]} />
							</div>
								<div className="two-photos-right" key="2">
									<img className="photo" src={photoUrls[1]} />
									<div className="description-top">{block.photos[1].text}</div>
									<div className="description-left">{block.photos[0].text}</div>
								</div>
						</div>
					);
					break;

				case 'full-width-photo':
					photoUrl = this.getPhotoUrl(block.photo);
					blockContent = (
						<div key={index} className="full-width-photo">
							<img className="photo" src={photoUrl} />
						</div>
					);
					break;

				case 'mention':
					blockContent = <Mention key={index} name={block.name} text={block.text} type="horizontal" />;
					break;
			}
			return blockContent
		});

		return ( <div className="place-content">{placeContent}</div> )
	}

}

export default PlaceContent
