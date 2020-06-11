import React from "react";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";


class CreatePostForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.formSubmissionHandler = this.formSubmissionHandler.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.switch = this.switch.bind(this);
    this.state = {
      post: this.props.post,
      pic: false
    }
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
      this.setState({ imageURL: reader.result, photos: files });
      debugger; 
    if (files[0]) {
      reader.readAsDataURL(files[0]);
      this.setState({ pic: true });
    } else {
      this.setState({ imageURL: "", photos: null});
    }
  }

  switch(e) {

    if (this.state.pic === false) {
     return(
        <div type='button' className='post_preview_container'>
          <label>
           <i className="fas fa-camera post_camera" ></i>
           <input
             className="post_preview"
             type="file"
             hidden
             onChange={this.handleFile}
             multiple
           />      
          </label>
        </div>
      ) 
    }
    
    if (this.state.pic === true) {
      return(
        <div className="post_preview_container">
          <img className="post_preview_display" src={this.state.imageURL} />
        </div>
      )
    }
  }




// <label className="post_form_file">
//   Choose File
//   <input
//     className="post_form_file_input"
//     type="file"
//     hidden
//     onChange={this.handleFile}
//     multiple
//   />
// </label>

  render() {
    
    return (
      <div className="post_form_wrapper">
        <div className="post_form_main"></div>
        <div className="post_form_inner_box">
          <h3 className="post_title">{this.props.formType}</h3>

          {this.switch()}

          <form className="post_form" onSubmit={this.handleSubmit}>
            <label className="post_form_title">
              <div>Title</div>
              <input
                className="input_boxes_input"
                type="text"
                placeholder={""}
                value={this.state.title}
                onChange={this.update("title")}
              />
            </label>

            <label className="post_form_description">
              <div>Description</div>
              <textarea
                maxLength="150"
                className="input_boxes_textarea"
                placeholder={""}
                value={this.state.description}
                onChange={this.update("description")}
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

export default CreatePostForm;