Rails.application.routes.draw do
  devise_for :users
  get "/", to: "notes#index"
  get "/users/collections", to: "users/collections#index"
<<<<<<< HEAD
  
  resources :notes do
    resources :comments, shallow: true, except: [:new] 
  end

  
=======

  resources :notes 
  
>>>>>>> 02977e8fcda45da261faf3856e05a4562d77eff4
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
