
import './listitem.css';

function ListItem(props){

    return(
        <div className='card'>
        <figure className='picture-container'>
            <img src={props.pictureLink} alt={props.description} className="list-picture" />
            <figcaption>
                {props.description}
            </figcaption>
        </figure>
    </div>
    )
}
export default ListItem;