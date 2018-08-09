class CreateCardMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :card_memberships do |t|
      t.integer :member_id, null: false
      t.integer :card_id, null: false

      t.timestamps
    end

    add_index :card_memberships, [:member_id, :card_id], unique: true
    add_index :card_memberships, :card_id
  end
end
