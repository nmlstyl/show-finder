Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:create]

  get 'login', to: 'users#login'

  resources :songkick_artists, only: [:create, :index]

  resources :bandsintown_artists, only: [:create, :index]
end
