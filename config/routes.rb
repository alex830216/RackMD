Rails.application.routes.draw do
  devise_for :users
  get "/", to: "notes#index"
  get "/users/collections", to: "users/collections#index"

  resources :notes 
  
  namespace :api do
    namespace :v1 do
      resources :notes, only: [] do
        member do
          post :collection
        end
      end
    end
  end
end
