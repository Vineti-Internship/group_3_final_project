class Grade < ApplicationRecord

  belongs_to :exam
  belongs_to :student
  belongs_to :admin
  
end
