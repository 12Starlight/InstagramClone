export const fetchComments = () => (
  $.ajax({
    method: "GET",
    url: `/api/comments`
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
    url: `/api/comments`,
    data: { comment: comment.body }
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