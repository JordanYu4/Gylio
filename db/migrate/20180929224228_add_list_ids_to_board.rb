class AddListIdsToBoard < ActiveRecord::Migration[5.2]
  def change
    add_column :boards, :list_ids, :integer, array: true, default: []
  end
end
