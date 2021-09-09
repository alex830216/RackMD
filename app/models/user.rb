class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :notes
  has_many :collections
  has_many :collected_notes,
            through: :collections,
            source: :note
  has_many :likes
  has_many :favorite_notes,
            through: :likes,
            source: :note
            
  def favorite?(n)
    favorite_notes.exists?(n.id)
  end
end
