class AddTypeIndexToTeachers < ActiveRecord::Migration[5.2]
  def change
    add_column :teachers, :type, :integer, default: 2
  end
end
