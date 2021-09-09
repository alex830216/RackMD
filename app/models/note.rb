class Note < ApplicationRecord
	paginates_per 3
	belongs_to :user
	has_many :comments
	has_many :taggings
	has_many :tags, through: :taggings
	has_many :likes
	has_many :collections
	has_many :subscribes
	has_many :users, through: :likes

  def save_tage(tag_list)
    self.tags = tag_list.map do |tag|
      Tag.where(title: tag).first_or_create!
    end
  end
end
