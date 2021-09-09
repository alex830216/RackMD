Rails.application.routes.draw do
  devise_for :users
  get "/", to: "notes#index"
  get "/users/collections", to: "users/collections#index"
  
  resources :notes do
    get :is_comment
    get :is_edit
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
