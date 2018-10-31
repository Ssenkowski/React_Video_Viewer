Rails.application.routes.draw do
	root 'sign_up#welcome'

	namespace :api do
		resources :video, except: [:edit]
		resources :photos
		resources :about
	end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
