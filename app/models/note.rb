class Note < ApplicationRecord
    
	# belongs_to :user
	has_many :comments
	has_many :tags
	has_many :likes
	has_many :collections
	has_many :subscribes
end
