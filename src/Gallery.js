import { useState } from "react";
import Inputs from "./Inputs";
import List from "./List";

function Gallery(props) {
  const [data, setData] = useState([
    {
      link: "https://images.unsplash.com/photo-1668778304484-a9fac5b3a4a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      description: "Forest",
    },
    {
      link: "https://images.unsplash.com/photo-1586724220920-ab7eafeaf663?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      description: "Ireland",
    },
    {
      link: "https://images.unsplash.com/photo-1668854084710-386c7d25f771?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      description: "office chair",
    },
  ]);
  const [tempUrl, setTempUrl] = useState("");
  const [tempDescription, setTempDescription] = useState("");

  let handleUrl = function (ev) {
    setTempUrl(ev.target.value);
  };
  let handleDescription = function (ev) {
    setTempDescription(ev.target.value);
  };

  let addPicture = (ev) => {
        if(tempDescription.length > 0 && tempUrl.length > 0){
            setData([...data, { link: tempUrl, description: tempDescription }]);
            setTempUrl("");
            setTempDescription("");
        }
  };

  return (
    <div className="grid-container">
      <Inputs
        addPicture={addPicture}
        link={tempUrl}
        des={tempDescription}
        handleDescription={handleDescription}
        handleUrl={handleUrl}
      />
      <List data={data} />
    </div>
  );
}
export default Gallery;
