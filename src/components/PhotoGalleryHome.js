import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';


const photos = [
  { src: './images/people/0001.jpg', width: 1620, height: 1080 },
  { src: './images/people/0002.jpg', width: 1620, height: 1080 },
  { src: './images/people/0003.jpg', width: 960, height: 540 },
  { src: './images/people/0004.jpg', width: 960, height: 540 },
  { src: './images/people/0005.jpg', width: 1620, height: 1080 },
  { src: './images/people/0006.jpg', width: 1620, height: 1080 },
  { src: './images/people/0007.jpg', width: 640, height: 960 },
  { src: './images/people/0008.jpg', width: 1620, height: 1080},
  { src: './images/people/0009.jpg', width: 1620, height: 1080 },
];


export default class PhotoGalleryHome extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 }; 
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}
