Rails.application.routes.draw do
  devise_for :users
  get "/", to: "notes#index"
  
  resources :notes do
    resources :comments, shallow: true, except: [:new, :edit, :update]
  end
end
