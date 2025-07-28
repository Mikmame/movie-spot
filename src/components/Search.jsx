import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.onSearch(this.state.search, this.state.type);
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.search, this.state.type);
  };

  handleTypeChange = (e) => {
    this.setState({ type: e.target.value }, () => {
      this.props.onSearch(this.state.search, this.state.type);
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.reset !== this.props.reset && this.props.reset) {
      this.setState({ search: "", type: "all" });
    }
  }

  render() {
    return (
      <div className="search-bar-wrapper">
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search... (e.g. 'Pirates of the Caribbean')"
            value={this.state.search}
            onChange={this.handleChange}
            onKeyDown={this.handleKey}
          />

          <select
            className="search-select"
            value={this.state.type}
            onChange={this.handleTypeChange}
          >
            <option value="all">All</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>

          <button className="search-button" onClick={this.handleClick}>
            <i className="material-icons">search</i>
          </button>
        </div>
      </div>
    );
  }
}

export { Search };
