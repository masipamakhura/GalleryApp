import './inputs.css';
function Inputs(props){

    return(
        <div className="inputs-container">
            <div class='form'>
                <div className="form-group form-group-top">
                    <label htmlFor="pictureUrl">Picture (Url)</label>
                    <input type="text" onChange={props.handleUrl} value={props.link} id='pictureUrl' placeholder="Enter picture  url" />
                </div>
                <div className="form-group form-group-bottom">
                    <label htmlFor="description">Picture description</label>
                    <input type="text" id='description' value={props.des} onChange={props.handleDescription} placeholder="Enter picture  description" />
                </div>
                <button className='cta-submit' onClick={props.addPicture} type="button">Add</button>
            </div>
        </div>
    )
}

export default Inputs;