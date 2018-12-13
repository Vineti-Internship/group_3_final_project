class AddAdminReferenceToSections < ActiveRecord::Migration[5.2]
  def change
    add_reference :sections, :admin, foreign_key: true
  end
end
