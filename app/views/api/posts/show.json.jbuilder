json.post do # creating a key post 
  json.partial! "/api/posts/post", post: @post 
end

json.user do 
  json.partial! "/api/users/user", user: @post.author
end 

# {post: {id: "", title: "", description: ""}}