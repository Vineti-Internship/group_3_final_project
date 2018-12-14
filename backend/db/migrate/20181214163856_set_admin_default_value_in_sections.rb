class SetAdminDefaultValueInSections < ActiveRecord::Migration[5.2]
  def change
    change_column :sections, :admin_id, :integer, :default => 1
  end
end
