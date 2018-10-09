class ChangeCardIdsToCardOrder < ActiveRecord::Migration[5.2]
  def change
    remove_column :lists, :card_ids
    add_column :lists, :card_order, :integer, array: true, default: []
  end
end
