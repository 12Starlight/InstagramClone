export const fetchFollowers = (user_id) => (
  $.ajax({
    type: "GET",
    url: `/api/users/${user_id}/followers`
  })
);

export const fetchFollower = (follower) => (
  $.ajax({
    type: "GET",
    url: `/api/users/${follower.user_id}/followers/${follower.id}`
  })
);

export const createFollower = (follower) => (
  $.ajax({
    type: "POST",
    url: `/api/users/${follower.user_id}/followers`,
    data: { follower }
  })
);

export const deleteFollower = (follower) => (
  $.ajax({
    type: "DELETE",
    url: `/api/users/${follower.user_id}/followers/${follower.id}`,
    data: { follower }
  })
);