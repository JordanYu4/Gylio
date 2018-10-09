class AddCardIdsToLists < ActiveRecord::Migration[5.2]
  def change
    add_column :lists, :card_ids, :integer, array: true, default: []
  end
end
