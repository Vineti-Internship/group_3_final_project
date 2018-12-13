class SectionSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :course
  has_one :teacher
  has_many :students
  has_many :admins


end
