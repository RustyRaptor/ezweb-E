import React from 'react';
import ReactDOM from 'react-dom';
import PhotoGalleryHome from './components/PhotoGalleryHome';
import PhotoGalleryPage from './components/PhotoGalleryPage';
import 'normalize.css/normalize.css';
// import './styles/styles.scss';
import './styles/components/bootstrap.css';
import './styles/bootswatch.scss';
import 'bootstrap'

ReactDOM.render(<PhotoGalleryHome />, document.getElementById('app'));
ReactDOM.render(<PhotoGalleryPage />, document.getElementById('appPhotos'));
