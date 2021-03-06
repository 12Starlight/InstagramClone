import React from "react";

class PostIndexCommentFormCreate extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.enter = this.enter.bind(this); 
    this.state = this.props.comment;
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
    this.setState({ body: "" });
    this.props.action(this.state);
  }

  enter(e) {
    // debugger; 
    if (e.key === 'Enter') {
      e.preventDefault(); 
      this.setState({ body: "" });
      this.props.action(this.state);
    } 
  }

  render() {
    const { comment, formType } = this.props;

    return (
      <section className="post_index_comment_section_form_wrapper">
        <div className="post_index_comment_section_form_container">
          <form className="post_index_comment_section_form" onKeyPress={this.enter} onSubmit={this.handleSubmit} >
            <textarea
              aria-label="Add a comment..."
              placeholder="Add a comment..."
              className="post_index_comment_section_formtext post_index_comment_form"
              maxLength="155"
              value={this.state.body}
              onChange={this.update("body")}
            />
            <button className="post_index_comment_section_formbutton" type="submit">
              Post
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default PostIndexCommentFormCreate;
