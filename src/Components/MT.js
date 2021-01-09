import { Component, React } from 'react';
import { connect } from 'react-redux';
import { setFileFiled } from '../actions';
// import translate from 'translate';

const mapStateToProps = (state) => {
    return {
        fileField: state.fileFiled
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onBtnClick: (event) => {

            // const reader = new FileReader();
            //   reader.onload = async (event) => {
            //     const text = (event.target.result);
            //     console.log(text);
            //   }
            //   const route = async ctx => 
            //   {const spanish =
            // await translate(ctx.body,{ to :'es'});
            //   return send(spanish);
            // };
            //   reader.readAsText(event.target.files[0]);

            //API Initialization 
            //API calling
            //englistaudio_to_text = converted output
            console.log('english text to lang text converted');
            dispatch(setFileFiled('englishtext_to_lang_text.txt'));
        },
        onBtnClickDownload: (event) => {
            //API Initialization 
            //API calling
            //englistaudio_to_text = converted output
            console.log('english text to lang text downloaded');
            dispatch(setFileFiled('englishtext_to_lang_text.txt'));
        }
    }
}

class MachineTranslation extends Component {

    render() {
        const { onBtnClick, onBtnClickDownload } = this.props;
        return (
            <div className="card">
                <h1>M T</h1>
                <button onClick={onBtnClick}>Start</button>
                <button onClick={onBtnClickDownload}>DownLoad</button>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MachineTranslation);