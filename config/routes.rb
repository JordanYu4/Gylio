Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:show, :index, :create, :update, :destroy] do
      resources :lists, only: [:show, :index, :create]
    end
    resources :lists, only: [:destroy, :update] do 
      resources :cards, only: [:show, :index, :create]
    end
    resources :cards, only: [:update, :destroy] do 
      resources :labels, only: [:index, :create]
      resources :comments, only: [:index, :create]
    end
    resources :labels, only: [:update, :destroy]
    resources :comments, only: [:destroy]
  end

  root "static_pages#root"

end
