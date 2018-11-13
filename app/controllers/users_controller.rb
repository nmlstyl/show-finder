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
    if @user.save!
      render json: {userCreated: true, id: @user.id, email: @user.email}
    else
      render json: {userCreated: false}
    end
  end

  private

  def user_params
     params.permit(:email, :password)
  end
end
