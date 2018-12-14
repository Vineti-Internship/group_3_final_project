class AddTypeIndexToStudents < ActiveRecord::Migration[5.2]
  def change
    add_column :students, :type, :integer, default: 3
  end
end
