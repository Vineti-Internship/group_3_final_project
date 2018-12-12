class Course < ApplicationRecord

    has_many :sections, dependent: :destroy
    has_many :exams, dependent: :destroy
    # Add validators for name parameter
    validates :name, presence: true, uniqueness: true
end
