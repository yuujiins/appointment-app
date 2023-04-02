class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :last_name
      t.string :first_name
      t.string :middle_name
      t.string :address
      t.string :email
      t.string :contact_number
      t.boolean :is_deleted

      t.timestamps
    end
  end
end
