class RenameListIdsArray < ActiveRecord::Migration[5.2]
  def change
    remove_column :boards, :list_ids
    add_column :boards, :list_order, :integer, array: true, default: []
  end
end
