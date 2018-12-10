class Section < ApplicationRecord
  belongs_to :course
  belongs_to :teacher
  has_and_belongs_to_many :students

  # Add validators
  validates :name, presence: true, uniqueness: true
end
