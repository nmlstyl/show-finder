class UsersController < ApplicationController
  def new

  end

  def create
    respond_to do |format|
      format.js { @user = User.new(params[:user])
                  @user.password = params[:password]
                  @user.save!}
    end
  end
end
