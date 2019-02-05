class UsersController < ApplicationController

  def login
    if !params[:user].key?('facebook_id')
      @user = User.find_by(email: params[:email])
      if @user.authenticate(params[:password])
        render json: { userFound: true, id: @user.id, email: @user.email }
      else
        render json: { userFound: false }
      end
    else
      fbLogin
    end
  end

  def create
    if !params[:user].key?('facebook_id')
      @user = User.new(user_params)
      if @user.valid?
        @user.save
        render json: { userCreated: true, id: @user.id, email: @user.email }
      else
        errors = @user.errors.to_json
        render json: { userCreated: false, errors: errors }
      end
    else
      fbLogin
    end
  end

  def fbLogin

  end

  private

  def user_params
     params.require(:user).permit(:email, :password, :facebook_id)
  end
end
