class Api::FollowersController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def index
    if params[:user_id]
      @user = User.find(params[:user_id])
      @followers = @user.followers 
      render :index 
    else  
      @followers = Follower.all 
      render :index 
    end
  end 

  def show
    @follower = Follwer.find(params[:id])

    if @follower 
      render :show 
    else
      render json: @follower.errors.full_messages, status: 404
    end
  end

  def new
    @follower = Follower.new 
    render :new 
  end

  def create
    @follower = Follower.new(following_id: params[:user_id], follower_id: current_user.id)

    if @follower.save
      render :show # possibly render index 
    else 
      render json: @follower.errors.full_messages, status: 422
    end
  end

  def destroy
    @follower = Follower.find(params[:id])

    if @follower.destroy 
      render :show 
    else
      render json: "Not following this person", status: 422 
    end
  end
end
