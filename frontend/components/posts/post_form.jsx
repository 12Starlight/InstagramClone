import React from "react";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";


class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.formSubmissionHandler = this.formSubmissionHandler.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.state = this.props.post;
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[title]", this.state.title);
    formData.append("post[description]", this.state.description);
    const { photos } = this.state;
    if (this.state.photos) {
      // formData.append("post[photo]", this.state.photoFile); // Only appends one single photo
      for (let i = 0; i < photos.length; i += 1) { // Lets us append multiple photos
        formData.append("post[photos][]", photos[i]);
      }
    }

    $.ajax({
      // $.ajax returns a promise
      method: "POST",
      url: "/api/posts",
      data: formData,
      contentType: false,
      processData: false
    })
      .then(response => this.props.history.push(`/posts/${response.post.id}`));
  }

  formSubmissionHandler() {
    const { name, photos } = this.state;
    const formData = new FormData();

    formData.append('post[name]', name);
  }

  handleFile(e) {
    const reader = new FileReader();
    const files = e.currentTarget.files;
    reader.onloadend = () => 
      this.setState({ imageURL: reader.result, photos: files});

    if (files[0]) {
      reader.readAsDataURL(files[0]);
    } else {
      this.setState({ imageURL: "", photos: null});
    }
  }



  render() {
    return (
      <div className="post_form_wrapper">
        <div className="post_form_main"></div>
        <div className="post_form_inner_box">
          <h3 className="post_title">{this.props.formType}</h3>

          <div className="post_preview_container">
            <img className="post_preview" src={this.state.imageURL} />
          </div>

          <form className="post_form" onSubmit={this.handleSubmit}>
            <label className="post_form_title">
              <div>Title</div>
              <input
                className="input_boxes_input"
                type="text"
                placeholder={"title"}
                value={this.state.title}
                onChange={this.update("title")}
              />
            </label>

            <label className="post_form_description">
              <div>Description</div>
              <textarea
                maxLength="150"
                className="input_boxes_textarea"
                placeholder={"description"}
                value={this.state.description}
                onChange={this.update("description")}
              />
            </label>

            <label className="post_form_file">
              Choose File 
              <input
                className="post_form_file_input"
                type="file"
                hidden
                onChange={this.handleFile}
                multiple
              />
            </label>
            <div className="post_form_button_container">
              <input
                className="post_form_button"
                type="submit"
                value={this.props.formType}
              />
            </div>
          </form>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
}

export default PostForm;