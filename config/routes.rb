Rails.application.routes.draw do
  devise_for :users
  get "/", to: "notes#index"
  get "/users/collections", to: "users/collections#index"
  get "/users/profiles/:id", to: "users/profiles#public_note", as: 'user_public_note'

  resources :notes do
    member do
      get :is_public
    end
    resources :comments, shallow: true, only: [:create, :destroy]
  end
  
  namespace :api do
    namespace :v1 do
      resources :notes, only: [] do
        member do
          post :collection
          post :favorite
        end
      end
      resources :comments, only: [] do
        member do
          post :edit_comment
        end
      end
    end
  end
end
