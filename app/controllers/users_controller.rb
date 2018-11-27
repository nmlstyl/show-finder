class UsersController < ApplicationController

  def login
    @user = User.find_by(email: params[:email])
    if @user.authenticate(params[:password])
      render json: {userFound: true, id: @user.id, email: @user.email}
    else
      render json: {userFound: false}
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save!
      render json: {userCreated: true, id: @user.id, email: @user.email}
    else
      # need to check for errors by .valid? then .errors[:password] or .errors[:email]
      render json: {userCreated: false}
    end
  end

  private

  def user_params
     params.permit(:email, :password)
  end
end
