class StudentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :password, :email, :authentication_token, :admin
  has_many :sections
  has_many :admins


end
