class Admin < ApplicationRecord
  acts_as_token_authenticatable

  has_many :courses, dependent: :destroy
  has_many :exams, dependent: :destroy
  has_many :grades, dependent: :destroy
  has_many :sections, dependent: :destroy
  has_many :students, dependent: :destroy
  has_many :teachers, dependent: :destroy
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # Validation for admin nickname
  validates :nickname, presence: true, uniqueness: true

end
