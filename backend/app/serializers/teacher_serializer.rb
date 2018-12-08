class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :password, :email
  has_one :section
end
