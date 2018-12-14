class SetAdminDefaultValueInGrades < ActiveRecord::Migration[5.2]
  def change
    change_column :grades, :admin_id, :integer, :default => 1
  end
end
