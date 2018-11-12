Rails.application.routes.draw do
  get 'remove/session'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:new, :create, :index, :show]

  post '/login', to: 'session#login'
  post '/logout', to: 'session#logout'
  post '/isloggedin', to: 'session#is_logged_in'
end
