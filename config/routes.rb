Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resource :users, only: [:create] do 
      resources :posts, only: [:index]
    end

    resource :session, only: [:create, :destroy]
    resources :posts 
  end

  resources :posts, only: [:show]

  root "static_pages#root"
end
