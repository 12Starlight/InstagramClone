json.extract! comment, :id, :user_id, :post_id, :comment_id, :body  

if current_user
  json.liked current_user.likes.where(likeable_id: comment.id, likeable_type: "Comment")
    .count > 0
end

json.likes comment.likes.count 
