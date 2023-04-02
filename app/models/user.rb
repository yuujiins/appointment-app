class User < ApplicationRecord
  require "securerandom"

  has_many :user_roles
  has_many :roles, through: :user_roles
  has_secure_password

  validates :last_name, presence: true
  validates :first_name, presence: true
  validates :email, presence: true
  validates :password, presence: true
end
