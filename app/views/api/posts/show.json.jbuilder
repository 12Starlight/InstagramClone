json.post do # creating a key post 
  json.partial! "/api/posts/post", post: @post 
end

# {post: {id: "", title: "", description: ""}}