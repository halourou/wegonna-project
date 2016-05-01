class User < ActiveRecord::Base
  validates :name,  presence: true, length: { maximum: 50 }
  validates :email, presence: true, length: { maximum: 255 },
             uniqueness: true
  has_secure_password
  validates :password, presence: true, length: { minimum: 6 }
end
