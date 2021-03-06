class Course < ApplicationRecord

    has_many :sections, dependent: :destroy
    has_many :exams, dependent: :destroy
    
    belongs_to :admin
    # Add validators for name parameter
    validates :name, presence: true, uniqueness: true, on: :create

end
