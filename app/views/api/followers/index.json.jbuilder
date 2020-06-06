@followers.each do |follower|
  json.followers do 
    json.set! follower.id do 
      json.partial! "follower", follower: follower 
    end
  end

  json.users do 
    json.set! follower.user.id do 
      if @user 
        json.followerIds @followers.ids 
      end
      json.partial! "/api/users/user", user: follower.user 
    end
  end
end