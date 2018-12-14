class SetAdminDefaultValueInStudents < ActiveRecord::Migration[5.2]
  def change
    change_column :students, :admin_id, :integer, :default => 1
  end
end
