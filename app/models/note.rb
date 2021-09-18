class Note < ApplicationRecord
  paginates_per 6
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :taggings
  has_many :tags, through: :taggings, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :collections, dependent: :destroy

  # tag_list 的 getter
  def tag_list
    tags.map(&:title).join(', ')
  end

  # tag_list 的 setter
  def tag_list=(title)
    self.tags = title.split(',').map do |item|
      Tag.where(title: item.strip).first_or_create!
    end
  end
  
  def self.search(search) 
    if search
      where(['title LIKE ?', "%#{search}%"]) 
    else
      all 
    end	
  end 
end
