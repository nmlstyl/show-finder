Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:create] do
    resources :artists, only: [:create, :index]
  end

  get 'login', to: 'users#login'
end
