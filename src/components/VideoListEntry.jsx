var VideoListEntry = (props) => {



  // this.onClick = () => {
  //   console.log('entry', this)
  //  this.setState.currentVideo = {props.video.snippet.title};
  // }

  console.log('entry', props.video.snippet.title)

  return (<div className="video-list-entry" onClick={ () => props.updateVideo(props.video)}>
    <div className="media-left media-middle">
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>);
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;

//this.props.snippet.title
//this.props.snippet.description

//var video = exampleVideoData[Math.floor(Math.rand()*5)]

// new VideoListEntry(video)

// <VideoListEntry video ={ [] };

//<div className="video-list-entry-title" onClick={this.setState({currentVideo: props.video}).bind(this)}> </div>
