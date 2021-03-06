class UsersController < ApplicationController

  def login
    @user = User.find_by(email: params[:user][:email])
    if @user.authenticate(params[:user][:password])
      render json: { success: true, id: @user.id, email: @user.email }
    else
      render json: { success: false }
    end
  end

  def create
    @user = User.new(user_params)
    if @user.valid?
      @user.save
      render json: { success: true, id: @user.id, email: @user.email }
    else
      errors = @user.errors.to_json
      render json: { success: false, errors: errors }
    end
  end

  def fb_login
    @user = User.find_or_create_by(email: params[:user][:email])
    if @user.facebook_id == nil
      @user.facebook_id = params[:user][:facebook_id]
    end
    if @user.password == nil
      @user.password = SecureRandom.alphanumeric(16)
    end
    @user.save

    render json: { success: true, id: @user.id, email: @user.email }
  end

  private

  def user_params
     params.require(:user).permit(:email, :password, :facebook_id)
  end
end
