class AddAdminReferenceToStudents < ActiveRecord::Migration[5.2]
  def change
    add_reference :students, :admin, foreign_key: true
  end
end
