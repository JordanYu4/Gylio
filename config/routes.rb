Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:show, :index, :create, :update] do
      resources :lists, only: [:show, :index, :create, :update] do
        resources :cards, only: [:show, :index, :create]
      end
    end
    resources :boards, only: [:destroy]
    resources :lists, only: [:destroy]
    resources :cards, only: [:update, :destroy] do 
      resources :labels, only: [:index, :create]
    end
    resources :labels, only: [:update, :destroy]
  end

  root "static_pages#root"

end
