import './App.css';
import { Component, React } from 'react';
import { connect } from 'react-redux';
import AutoSpeechRec from './Components/ASR';
import MachineTranslation from './Components/MT';
import TextToSpeech from './Components/TTS';
import { setFileFiled, setLangField } from './actions';

const mapStateToProps = (state) => {
  return {
    fileFiled: state.fileFiled,
    langField: state.langField
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (event) => {
      dispatch(setFileFiled(event.target.files[0]))
    },
    onSelect: (event) => {
      dispatch(setLangField(event.target.value))
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
    const { langField , onSelect } = this.props;
    console.log('in 1st props', this.props);
    return (
      <div className="App">
        <div className="div1">
          <input type="file" onChange={onInputChange} />
          <select onChange={onSelect}>
            <option disabled selected>Select Language</option>
            <option value="ja">Japnies</option>
            <option value="">Hindi</option>
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