Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:create] do
    resources :artists, only: [:create, :index]
  end

  resources :artists, only: [:show] do
    resources :likes, only: [:create, :update]
  end

  post 'apilogin', to: "users#login"

  # For react-router and heroku

  get 'signup', to: "staticpages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

  get 'login', to: "staticpages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

  get 'savedbands', to: "staticpages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

  get '/', to: "staticpages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
