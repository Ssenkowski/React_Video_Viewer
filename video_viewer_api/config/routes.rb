Rails.application.routes.draw do
	root 'sign_up#welcome'

  get 'sign_up/welcome'
  get 'user/welcome'
  get 'user/main'
  get 'user/about'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
