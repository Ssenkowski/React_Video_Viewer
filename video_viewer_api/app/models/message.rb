class Message < ApplicationRecord
	belongs_to :user

	#Maybe later friends that have access to the photo's can post a short message.
end
