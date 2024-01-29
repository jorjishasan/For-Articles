import { Component } from "react";
import { UNSPLASH_API, randomNum } from "../utils";
import "../style/RandomImage.scss";
class RandomImageClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      imgUrl: "",
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      this.getData();
    }
  }

  getData = async () => {
    const response = await fetch(UNSPLASH_API);
    const data = await response.json();
    this.setState({ imgUrl: data[randomNum(0, 10)]?.urls?.small });
  };

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
