class Course < ApplicationRecord

    # Add validators for name parameter
    validates :name, presence: true, uniqueness: true
end
