import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getList } from "../actions";

class CharacterListView extends React.Component {

  componentDidMount() {
    this.props.getList();
  }

  render() {
    if (this.props.fetching) {
      return(
      <div>
        <h2>Getting your friends</h2>
      </div>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isFetching: state.charsReducer.fetching,
  error: state.error
})

export default connect(
  mapStateToProps,
  {
    getList
  }
)(CharacterListView);
