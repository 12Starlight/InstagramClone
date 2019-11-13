Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show] do 
      resources :posts, only: [:index]
    end

    resource :session, only: [:create, :destroy]
    resources :posts do
      resources :comments, only: [:create, :index]
      member do 
        post :like, to: "posts#like", as: "like"
        delete :unlike, to: "posts#unlike", as: "unlike"
      end
    end

    resources :comments, only: [:destroy] do 
      member do 
        # method url    controller#action    namespace  
        post :like, to: "comments#like", as: "like"
        delete :unlike, to: "bananna#unlike", as: "unlike"
      end
    end
  end

  root "static_pages#root"
end
