import { Component, React } from 'react';
import { connect } from 'react-redux';
import { setFileFiled } from '../actions';

const mapStateToProps = (state) => {
    return {
        fileField : state.fileFiled
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onBtnPress:(event) => {
            //API Initialization 
            //API calling
            //englistaudio_to_text = converted output
            console.log('lang text to audio converted');
            dispatch(setFileFiled('lang_text_to_lang_audio.txt'));
        },
        onBtnPressDownload:(event) => {
            //API Initialization 
            //API calling
            //englistaudio_to_text = converted output
            console.log('lang text to lang audio downloaded');
            dispatch(setFileFiled('lang_text_to_audio.txt'));
        }
    }
}
 class TextToSpeech extends Component {
    constructor(props) {
        super(props);
      }
     render() {
        const { fileFiled, onBtnPress, onBtnPressDownload } = this.props;
        return (
            <div className="card" style={{ marginRight: 0 }}>
                <h1>T T S</h1>
                <button onClick={onBtnPress}>Start</button>
                <button onClick={onBtnPressDownload}>DownLoad</button>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TextToSpeech);