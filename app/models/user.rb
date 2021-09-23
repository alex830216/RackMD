class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :validatable
  has_many :notes, dependent: :destroy
  has_many :collections, dependent: :destroy
  has_many :collected_notes, through: :collections, source: :note, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :favorite_notes, through: :likes, source: :note, dependent: :destroy
  has_many :comments, dependent: :destroy
  def favorite?(n)
    favorite_notes.exists?(n.id)
  end

  def collection?(n)
    collected_notes.exists?(n.id)
  end
end
