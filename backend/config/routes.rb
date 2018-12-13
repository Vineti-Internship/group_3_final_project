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
  resources :sessions, only: [:create, :destroy]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
