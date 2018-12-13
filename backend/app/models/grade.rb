class Grade < ApplicationRecord
  belongs_to :exam
  belongs_to :student
  belogs_to :admin
end
