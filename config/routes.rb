Rails.application.routes.draw do
  devise_for :users
  get "/", to: "notes#index"
  
  resources :notes do
    resources :comments, shallow: true, except: [:new]
  end
  resources :notes
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
