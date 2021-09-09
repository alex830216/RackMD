Rails.application.routes.draw do
  devise_for :users
  get "/", to: "notes#index"
  get "/users/collections", to: "users/collections#index"
  get "/users/profiles", to: "profiles#myallnote"
  
  resources :notes do
    resources :comments, shallow: true, except: [:new] 
  end
  
  namespace :api do
    namespace :v1 do
      resources :notes, only: [] do
        member do
          post :collection
          post :favorite
        end
      end
    end
  end
end
