Rails.application.routes.draw do
  # devise_for :teachers
  # devise_for :students
  resources :teachers
  resources :students
  resources :sections
  resources :grades
  resources :exams
  resources :courses
  # root to: "home#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
