Rails.application.routes.draw do
  devise_for :users
  get "/", to: "notes#index"
  get "/users/collections", to: "users/collections#index"
  
  resources :notes do
<<<<<<< HEAD
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
=======
    get :is_comment
    get :is_edit
    resources :comments, shallow: true, except: [:new] 
>>>>>>> 9d25df65dc3cce48c1fc5a113e9fec6536ecc9cf
  end
end
