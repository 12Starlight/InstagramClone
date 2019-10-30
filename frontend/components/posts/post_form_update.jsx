import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";


class PostForm extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   title: props.post.title,
    //   description: props.post.description
    // }

    this.state = this.props.post; 
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updatePost = this.updatePost.bind(this)
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // const updated = Object.assign({}, this.state);
    // this.props.processForm(updated).then(() => this.props.history.push("/"));
    this.props.action(this.state).then(() => this.props.history.push("/"));
  }

  // updatePost() {
  //   this.props.updatePost(this.props.postId)
  //   this.props.history.push("/");
  // }


  render() {
    const { post, formType } = this.props;
    return(
      <div className="post_form_update_wrapper">
        <div className="post_form_update_main"></div>
        <div className="post_form_update_inner_box">
          <h3 className="post_update_title">{ formType }</h3>
          
          <div className="post_update_preview_container">
            <img className="post_update_preview" src={ post.photos[0] } />
          </div>
          
          <form className="post_form_update" onSubmit={ this.handleSubmit }>
            <label className="post_form_update_title">
              <div>Title</div>
              <input 
                className="input_boxes_update_input"
                type="text"
                value={ this.state.title }
                onChange={ this.update("title")}
              />
            </label>

            <label className="post_form_update_description">
              <div>Description</div>
              <textarea
                maxLength="150" 
                className="input_boxes_update_textarea"
                placeholder={"description"}
                value={ this.state.description }
                onChange={ this.update("description")}
              />
            </label>

            <div className="post_form_update_button_container">
              <input className="post_form_update_button" type="submit" value={formType} />
            </div>
          </form>
        </div>
        <div></div>
      </div>
    );
  }
}


export default withRouter(PostForm);