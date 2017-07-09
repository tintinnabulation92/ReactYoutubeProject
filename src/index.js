import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDWoeIyBsle7HmK_gwoT5N3fUcOYCfefkc';

//generate jsx
class App extends Component{

constructor(props){
  super(props);

  this.state  = { videos : [] };

  YTSearch ({key: API_KEY, term: 'blok ekipa'}, (videos) => {
    this.setState({ videos });
    console.log(videos);
  });
}

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video = {this.state.videos[2]} />
        <VideoList videos = {this.state.videos} />

      </div>
    );
  }
};

//put the component on the page
ReactDOM.render(<App />, document.querySelector('.container'));
