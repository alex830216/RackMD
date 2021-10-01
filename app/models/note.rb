class Note < ApplicationRecord
  paginates_per 8
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :taggings
  has_many :tags, through: :taggings, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :favorite_notes, through: :likes, source: :user, dependent: :destroy
  has_many :collections, dependent: :destroy



  def save_tag(tag_list)
    self.tags = tag_list.map do |tag|
      Tag.where(title: tag).first_or_create!
    end
  end
  
  def self.search(search) 
    if search
      where(['title LIKE ?', "%#{search}%"]) 
    else
      all 
    end	
  end 

  def find_like(user)
    self.likes.where( :user => user.id ).first
  end
end
