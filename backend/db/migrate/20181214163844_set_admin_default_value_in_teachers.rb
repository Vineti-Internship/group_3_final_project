class SetAdminDefaultValueInTeachers < ActiveRecord::Migration[5.2]
  def change
    change_column :teachers, :admin_id, :integer, :default => 1
  end
end
