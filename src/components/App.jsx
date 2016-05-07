// var App = (props) => {
//   console.log('App', props);
//   return (<div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer/>
//     </div>
//     <div className="col-md-5">
//       <VideoList data={props.data}/>
//     </div>
//   </div>);
// };
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      library: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  updateVideo(video) {
    //console.log('updateVideo called',this)
    this.setState(this.state.currentVideo = video);
  };
  // console.log(this.updateVideo);

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.library} updateVideo={this.updateVideo.bind(this)}/>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

