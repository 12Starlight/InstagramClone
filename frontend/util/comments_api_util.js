export const fetchComments = (post_id) => (
  $.ajax({
    method: "GET",
    url: `/api/posts/${post_id}/comments`,
    // data: { comments }
  })
);

export const fetchComment = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/comments/${id}`
  })
);

export const createComment = (comment) => (
  $.ajax({
    method: "POST",
    url: `/api/posts/${comment.post_id}/comments`, // post_id is a key on the comments object, remember activeRecord changes the table into an object
    data: { comment }
  })
);

export const createCommentLike = (id) => (
  $.ajax({
    method: "POST",
    url: `/api/comments/${id}/like`
  })
);

export const deleteComment = (id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/comments/${id}`
  })
);

export const deleteCommentLike = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/comments/${id}/unlike`
  })
);