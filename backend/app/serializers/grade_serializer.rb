class GradeSerializer < ActiveModel::Serializer
  attributes :id, :value
  has_one :exam
  has_one :student
  has_many :admins

end
