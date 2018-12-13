class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :password, :email, :authentication_token
  
  has_one :section
  has_one :admin

end
