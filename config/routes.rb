Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:show, :index, :create, :update, :destroy]
    resources :lists, only: [:show, :index, :create, :update, :destroy]
    resources :cards, only: [:show, :index, :create, :update, :destroy]
    resources :labels, only: [:index, :create, :update, :destroy]
  end

  root "static_pages#root"

end
