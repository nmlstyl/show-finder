class UsersController < ApplicationController
  wrap_parameters :user

  def index
    @users = User.all
    render json: @users, status: 200
  end

  def show
    @user = User.find(params[:id])
    render json: @user, status: 200
  end

  def new

  end

  def create
    @user = User.new(user_params)
    @user.save!
  end

  private

  def user_params
     params.permit(:email, :password)
  end
end
