Rails.application.routes.draw do
  devise_for :users
  get "/", to: "notes#index"
  
  resources :notes do
    get :is_comment
    get :is_edit
    resources :comments, shallow: true, except: [:new] 
  end
end
