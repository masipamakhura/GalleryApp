
import ListItem  from "./ListItem";
import './list.css';

function List({data}){

    let renderlistItem = data.map(picture => <ListItem pictureLink={picture.link} description={picture.description} />)

    return(
        <div className="image-list">
            {renderlistItem}
        </div>
    )
}
export default List;