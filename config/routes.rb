Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # post 'api/test', to: 'application#test'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resources :articles, only: [:create, :show, :index, :update]
    resource :session, only: [:show, :create, :destroy]
  end

  get '/api/articles/by_author/:author_id', to: 'articles#by_author', as: 'articles_by_author'

  get '*path', to: 'static_pages#frontend_index'

end

