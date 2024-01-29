import { Component } from "react";

class RandomImageClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      imgUrl: "",
    };
  }

  //   async componentDidMount() {}
  render() {
    return (
      <div className="container">
        <div className="count">
          <h1>Total Renders →</h1>
          <h2>{this.state.count}</h2>
          <button
            className="btn"
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            Render ✦
          </button>
        </div>
        <img src={this.state.imgUrl} />
      </div>
    );
  }
}

export default RandomImageClass;
