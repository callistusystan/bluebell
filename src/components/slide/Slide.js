import Glide from "@glidejs/glide";
import React from "react";

class Slide extends React.Component {
  componentDidMount() {
    new Glide(".glide", { perView: 3 }).mount();
  }

  render() {
    return (
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            {React.Children.map(this.props.children, (child) => (
              <li class="glide__slide">{React.cloneElement(child)}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Slide;
