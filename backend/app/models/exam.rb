class Exam < ApplicationRecord
  
  has_many :grades, dependent: :destroy
  has_many :sections, dependent: :destroy

  belongs_to :course
  belongs_to :admin
  
end
