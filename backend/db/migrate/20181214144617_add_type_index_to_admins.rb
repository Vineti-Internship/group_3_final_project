class AddTypeIndexToAdmins < ActiveRecord::Migration[5.2]
  def change
    add_column :admins, :type, :integer, default: 1
  end
end
