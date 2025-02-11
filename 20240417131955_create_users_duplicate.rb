class CreateUsersDuplicate < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.string :mobile_number
      t.string :otp
      t.boolean :not_a_robot

      t.timestamps
    end
  end
end
