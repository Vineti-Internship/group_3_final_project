class AddAdminReferenceToTeachers < ActiveRecord::Migration[5.2]
  def change
    add_reference :teachers, :admin, foreign_key: true
  end
end
