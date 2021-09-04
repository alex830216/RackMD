class Note < ApplicationRecord
	paginates_per 3
	belongs_to :user
	has_many :comments
	has_many :taggings
	has_many :tags, through: :taggings
	has_many :likes
	has_many :collections
	has_many :subscribes
end
