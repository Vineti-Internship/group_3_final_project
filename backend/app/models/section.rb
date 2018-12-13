class Section < ApplicationRecord
  
  has_and_belongs_to_many :students, dependent: :destroy

  belongs_to :course
  belongs_to :teacher
  belongs_to :admin

  # Add validators
  validates :name, presence: true
end
