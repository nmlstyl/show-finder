class ApplicationController < ActionController::API

  def current_user
    session[:id]
  end
end
