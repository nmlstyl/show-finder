class SessionController < ApplicationController

  def login
    @user = User.find_by_email(params[:email])
    if @user.authenticate(params[:password])
      give_token(@user.id)
    end
  end

  def logout
    reset_session
  end

  def is_logged_in
    if session[:id]
      render json: {loggedIn: true}
    else
      render json: {loggedIn: false}
    end
  end

    private

    def give_token(id)
      session[:id] = id
    end
end
