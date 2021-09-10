Rails.application.routes.draw do
  devise_for :users
  get "/", to: "notes#index"
  get "/users/collections", to: "users/collections#index"
  
  resources :notes do
    get :is_comment
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
          post :editcomment
        end
      end
    end
  end
end
