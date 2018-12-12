class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :password, :email, :authentication_token, :admin
  has_one :section
end
