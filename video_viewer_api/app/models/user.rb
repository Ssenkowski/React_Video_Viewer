class User < ApplicationRecord
	  has_one_attached :avatar
	  has_many_attached :images
  	  has_many_attached :videos
  	  has_many :messages
end
