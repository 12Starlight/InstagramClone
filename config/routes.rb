Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show] do 
      resources :posts, only: [:index]
    end

    resource :session, only: [:create, :destroy]
    resources :posts do
      member do 
        post :like, to: "posts#like", as: "like"
        delete :unlike, to: "posts#unlike", as: "unlike"
      end
    end
  end

  resources :posts, only: [:show]

  root "static_pages#root"
end
