import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {

  renderField(field){

    const { meta: { touched, error } } = field;
    const inputClass = `form-control ${touched && error ? 'is-invalid' : ''}`;

    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className={inputClass}
          type="text"
          {...field.input}
        />
        <div className="invalid-feedback">
          { touched ? error : '' }
        </div>
      </div>
    )

  }

  onSubmit(values){
    this.props.createPost(values, ()=>{
      this.props.history.push('/posts');
    });
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <form className="container" noValidate=""  onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/posts" className="btn cancel btn-danger">Cancel</Link>
      </form>
    );
  }

}

function validate(values){
  // -> { title: 'blavla', categories: 'blabla', content: 'blabla' }
  const errors = {};

  // Validate the inputs from 'values'
  if(!values.title || values.title.length < 3){
    errors.title="Enter a title and title must be at least 3 characters";
  }

  if(!values.categories){
    errors.categories = "Enter some categories";
  }

  if(!values.content){
    errors.content = "Enter some text!";
  }

  // If errors is empty, the form is fine to submit
  // If errors has any properties, redux form assums form is invalid
  return errors;

}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);
