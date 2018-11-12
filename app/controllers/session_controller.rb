class SessionController < ApplicationController

  def login
    @user = User.find_by_email(params[:email])
    if @user.password == params[:password]
      give_token(@user.id)
    end
  end

  def logout
    reset_session
  end

    private

    def give_token(id)
      session[id] = (id)
    end
end
