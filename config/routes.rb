Rails.application.routes.draw do
  devise_for :users
  get "/", to: "notes#index"
  
  resources :notes
end
