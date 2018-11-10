class UsersController < ApplicationController

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
    binding.pry
    # respond_to do |format|
    #   format.js { @user = User.new(params[:user])
    #               @user.password = params[:password]
    #               @user.save!}
    # end
  end

  private

  def cat_params
     params.require(:user).permit(:email, :password)
  end
end
