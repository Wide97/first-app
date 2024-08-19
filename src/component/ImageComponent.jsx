import { Component } from "react";
import myImage from "../download.png";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img src={myImage} alt="Milan" />
      </div>
    );
  }
}

export default ImageComponent;
