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
  { src: './images/people/0010.jpg', width: 1080, height: 1620 },
  { src: './images/people/0011.jpg', width: 1620, height: 1080 },
  { src: './images/people/0012.jpg', width: 1620, height: 1080 },
  { src: './images/people/0013.jpg', width: 1620, height: 1080 },
  { src: './images/people/0014.jpg', width: 1620, height: 1080 },
  { src: './images/people/0015.jpg', width: 960, height: 640 },
  { src: './images/people/0016.jpg', width: 960, height: 640 },
  { src: './images/people/0017.jpg', width: 853, height: 480 },
  { src: './images/people/0018.jpg', width: 1620, height: 1080 },
  { src: './images/people/0019.jpg', width: 640, height: 960 },
  { src: './images/people/0020.jpg', width: 2048, height: 1152 },
  { src: './images/people/0021.jpg', width: 540, height: 960 },
  { src: './images/people/0022.jpg', width: 1620, height: 1080 },
  { src: './images/people/0023.jpg', width: 2048, height: 1152 },
  { src: './images/people/0024.jpg', width: 1620, height: 1080 },
  { src: './images/people/0025.jpg', width: 539, height: 960 },
];


export default class PhotoGalleryPage extends React.Component {
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
