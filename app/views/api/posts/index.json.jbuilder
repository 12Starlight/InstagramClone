@posts.each do |post|
  json.posts do 
    json.set! post.id do 
      json.partial! 'post', post: post 
    end
  end

  json.users do 
    json.set! post.author.id do 
      if @user 
        json.postIds @posts.ids 
      end
      json.partial! '/api/users/user', user: post.author 
    end
  end
end