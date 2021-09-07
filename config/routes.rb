Rails.application.routes.draw do
  devise_for :users
  get "/", to: "notes#index"
  
  resources :notes do
    get :is_comment
    resources :comments, shallow: true, except: [:new] 
  end
end
