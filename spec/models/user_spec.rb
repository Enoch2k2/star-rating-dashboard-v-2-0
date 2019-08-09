require 'rails_helper'

RSpec.describe User, type: :model do
  describe "attributes" do
    let(:valid_user){ User.create(username: "Test", email: "test@test.com", password: "testtest", first_name: "First Name", last_name: "Last Name") }
    
    it "can be created" do
      expect(valid_user).to eq(User.first)
    end

    it "must have a username" do
      user = User.create(email: "test2@test.com", password: "testtest", first_name: "First Name", last_name: "Last Name")
      expect(user).to_not be_valid
    end

    it "must have an unique username" do
      valid_user
      user = User.create(username: "Test", email: "test2@test.com", password: "testtest", first_name: "First Name", last_name: "Last Name")
      expect(user).to_not be_valid
    end
    
    it "must have an email" do
      user = User.create(username: "Test", password: "testtest", first_name: "First Name", last_name: "Last Name")
      expect(user).to_not be_valid
    end
    
    it "must have an unique email" do
      valid_user
      user = User.create(username: "Test2", email: "test@test.com", password: "testtest", first_name: "First Name", last_name: "Last Name")
      expect(user).to_not be_valid
    end
    
    it "must have a password" do
      user = User.create(username: "Test2", email: "test@test.com", first_name: "First Name", last_name: "Last Name")
      expect(user).to_not be_valid
    end
    
    it "must have a first name" do
      user = User.create(username: "Test2", email: "test@test.com", password: "testtest",last_name: "Last Name")
      expect(user).to_not be_valid
    end

    it "must have a last name" do
      user = User.create(username: "Test2", email: "test@test.com", password: "testtest",first_name: "First Name")
      expect(user).to_not be_valid
    end
  end
end
