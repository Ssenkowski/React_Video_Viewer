import React, { Component } from 'react';
import { addPhoto } from '../actions';
import { addVideo } from '../actions';
import uuid from 'uuid';
import { connect } from 'react-redux';

export class AddPhoto extends Component {

  state = {
    photoName: '',
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleOnSubmit = event => {
    event.preventDefault();
    const photo = {...this.state, id: uuid() };
    this.props.addPhoto(photo);
    this.setState({
      photoName: ''
    });
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="photoName"
            value={this.state.photoName}
            placeholder="photo name" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

export default connect(null, { addPhoto, addVideo })(AddMedia);