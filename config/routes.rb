Rails.application.routes.draw do
  resources :users, param: :id
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/*a', to: 'home#index'
  root "home#index"

  #authentication
  post '/auth/login', to: 'authentication#login'
end
