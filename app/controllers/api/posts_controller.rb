class Api::PostsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :edit]

  def index 
    if params[:user_id]
      @user = User.find(params[:user_id])
      @posts = @user.posts 
      render :index 
    else  
      @posts = Post.all 
      render :index 
    end  
  end

  def show
    @post = Post.with_attached_photos.find(params[:id])
    if @post
      render :show
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  def new
    @post = Post.new 
    render :new 
  end

  def create 
    @post = Post.new(post_params)
    @post.author_id = current_user.id 
    
    if @post.save
      render :show      
    else  
      render json: @post.errors.full_messages, status: 422
    end    
  end
  
  # def edit
  #   @post = Post.find(params[:id])
  #   render :edit
  # end

  def update
    @post = Post.find(params[:id])

    if @post.update(update_params)
      render :show 
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])

    if @post.destroy
      render :show 
    else
      render json: "You can not destroy a post that does not exist ;)", status: 422
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :description, photos: [])
  end

  def update_params
    params.require(:post).permit(:title, :description)
  end
end
