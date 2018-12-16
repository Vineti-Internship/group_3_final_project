class Section < ApplicationRecord
  
  has_and_belongs_to_many :students, dependent: :destroy

  belongs_to :course
  belongs_to :teacher
  belongs_to :admin
  belongs_to :exam

  # Add validators
  validates :name, presence: true, on: :create

end
