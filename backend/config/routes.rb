Rails.application.routes.draw do
  # root to: "home#index"
  # devise_for :admins
  # devise_for :teachers
  # devise_for :students
  resources :admins
  resources :teachers
  resources :students
  resources :sections
  resources :grades
  resources :exams
  resources :courses
  # resources :sessions, only: [:create, :destroy]
  post '/sessions', to: 'sessions#create'
  post '/sessions/del', to: 'sessions#destroy'
  put '/addsectionstostudents/:id', to: 'students#update'
  put '/addstudentstosections/:id', to: 'sections#update'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
