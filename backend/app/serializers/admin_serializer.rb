class AdminSerializer < ActiveModel::Serializer
  attributes :id, :nickname, :password, :email, :authentication_token
end
