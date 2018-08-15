Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:show, :index, :create, :update, :destroy] do
      resources :lists, only: [:show, :index, :create, :update] do
        resources :cards, only: [:show, :index, :create, :update] do
          resources :labels, only: [:index, :create, :update]
        end
      end
    end
    resources :lists, only: [:destroy]
    resources :cards, only: [:destroy]
    resources :labels, only: [:destroy]
  end

  root "static_pages#root"

end
