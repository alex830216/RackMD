class Note < ApplicationRecord
	paginates_per 3
	belongs_to :user
	has_many :comments
	has_many :tags
	has_many :likes
	has_many :collections
	has_many :subscribes
<<<<<<< HEAD
=======

	has_many :users, through: :likes

>>>>>>> 0f0fb39 (controller api)
end
