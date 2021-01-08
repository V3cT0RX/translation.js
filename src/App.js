import './App.css';
import { Component, React } from 'react';
import { connect } from 'react-redux';
import AutoSpeechRec from './Components/ASR';
import MachineTranslation from './Components/MT';
import TextToSpeech from './Components/TTS';
import { setFileFiled } from './actions';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    fileFiled: state.fileFiled
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (event) => {
      // console.log(event.target.file[0])
      dispatch(setFileFiled(event.target.files[0]))
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    // this.onInputChange = this.onInputChange.bind(this);
    // this.state.inputFile = React.createRef();
  }
  // onInputChange(e) {
  //   this.setState({ inputFile: e.target.files[0] });
  //   const reader = new FileReader();
  //   reader.onload = async (e) => {
  //     const text = (e.target.result);
  //     console.log(text);
  //   }
  //   reader.readAsText(e.target.files[0]);
  // console.log(this.state.inputFile);
  // }  

  render() {
    const { fileFiled, onInputChange } = this.props;
    return (
      <div className="App">
        <div className="div1">
          <input type="file" onChange={onInputChange} />
          <select>
            <option disabled selected>Select Language</option>
            <option >Marathi</option>
            <option >Sanskit</option>
          </select>
        </div>
        <div className="div2">
          <AutoSpeechRec />
          <MachineTranslation />
          <TextToSpeech />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);