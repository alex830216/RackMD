Rails.application.routes.draw do
  get "/", to: "notes#index"
  
  resources :notes
end
