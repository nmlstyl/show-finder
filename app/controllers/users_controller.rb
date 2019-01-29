class UsersController < ApplicationController

  def login
    request_to_params
    binding.pry
    @user = User.find_by(email: params[:email])
    if @user.authenticate(params[:password])
      render json: { userFound: true, id: @user.id, email: @user.email }
    else
      render json: { userFound: false }
    end
  end

  def create
    request_to_params
    binding.pry
    @user = User.new(user_params)
    if @user.valid?
      @user.save
      render json: { userCreated: true, id: @user.id, email: @user.email }
    else
      errors = @user.errors.to_json
      render json: { userCreated: false, errors: errors }
    end
  end

  private

  def request_to_params
    data = JSON.parse(request.raw_post)
    binding.pry
    params[:email] = data['email']
    params[:password] = data['password']
    params[:facebookId] = data['facebook_id']
  end

  def user_params
     params.permit(:email, :password, :facebook_id)
  end
end
