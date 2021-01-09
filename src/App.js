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
    const { onSelect, onInputChange } = this.props;
    return (
      <div className="App">
        <div className="div1">
          <input type="file" onChange={onInputChange} />
          <select onChange={onSelect}>
            <option disabled selected>Select Language</option>
            <option value="ja">Japnies</option>
            <option value="zh">Chinese</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="ru">Russian</option>
            <option value="es">Spanish</option>
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