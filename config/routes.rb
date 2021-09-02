Rails.application.routes.draw do
  devise_for :users
  get "/", to: "notes#index"
  get "/users/collections", to: "users/collections#index"
  
<<<<<<< HEAD
  resources :notes do
    resources :comments, shallow: true, except: [:new] 
  end

  

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
  
=======
  resources :notes
>>>>>>> 0f0fb39 (controller api)
  # API
  # POST /api/v1/notes/2/favorite
  namespace :api do
    namespace :v1 do
      resources :notes, only: [] do
        member do
          post :favorite
        end  
      end
    end 
  end   
end
