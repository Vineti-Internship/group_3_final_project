class SectionSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :course
  has_one :teacher
  has_and_belongs_to_many :students

end
