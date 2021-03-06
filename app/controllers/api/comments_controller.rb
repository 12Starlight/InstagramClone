class Api::CommentsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :like, :unlike]

  def index
    case 
    when params[:user_id]
      @comments = Comment.where(user_id: params[:user_id])
    when params[:post_id]
      @comments = Comment.where(post_id: params[:post_id])
    else
      @comments = Comment.all 
    end
    # render json: commentsr
    render :index 
  end 

  def create 
    # debugger
    @comment = Comment.new(user_id: current_user.id, post_id: params[:post_id], comment_id: params[:comment_id], body: comment_params[:body])
    # comment = Comment.new(comment_params) 
    # comment.user_id = current_user.id 
    # comment.post_id = params[:post_id]

    if @comment.save # saves it into the database 
      # render json: @comment, status: :created
      render :show # can return any information from schema 
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
  end 

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy 
    render json: comment 
  end 

  def like 
    like = Like.new(user_id: current_user.id, likeable_id: params[:id], likeable_type: "Comment")

    if like.save
      render json: like 
    else
      render json: like.errors.full_messages, status: :unprocessable_entity
    end
    
  end

  def unlike
    like = Like.find_by(user_id: current_user.id, likeable_id: params[:id], likeable_type: "Comment")

    if like.destroy
      render json: like 
    else
      render json: like.errors.full_messages, status: :unprocessable_entity
    end
    
  end


  private
  def comment_params
    params.require(:comment).permit(:body)
  end

end
