Rails.application.routes.draw do
	root 'sign_up#welcome'

		resources :video, except: [:edit]
		resources :photos
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
