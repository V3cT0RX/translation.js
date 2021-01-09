import { Component, React } from 'react';
import { connect } from 'react-redux';
import { setFileFiled } from '../actions';

const mapStateToProps = (state) => {
    return {
        fileField: state.fileFiled
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (event) => {
            //API Initialization 
            //API calling
            //englistaudio_to_text = converted output
            console.log('english audio to text converted');
            dispatch(setFileFiled('englistaudio_to_text.txt'));
        },
        onClickDownload: (event) => {
            //API Initialization 
            //API calling
            //englistaudio_to_text = converted output
            console.log('english audio to text downloaded');
            dispatch(setFileFiled('englistaudio_to_text.txt'));
        }
    }
}

class AutoSpeechRec extends Component {

    render() {
        const { onClick, onClickDownload } = this.props;
        return (
            <div className="card" style={{ marginLeft: 0 }}>
                <h1> A S R </h1>
                <button onClick={onClick}>Start</button>
                <button onClick={onClickDownload}>DownLoad</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoSpeechRec);