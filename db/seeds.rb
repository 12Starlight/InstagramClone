# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

# create a user
user = User.create(email: "zoey@hotmail.com", password: "password")

# create a File from the url
file = open('https://appacademy-instagram-clone-seeds.s3.us-east-2.amazonaws.com/istock-115796521-fcf434f36d3d0865301cdcb9c996cfd80578ca99-s1500-c85.jpg')

# attach to user
user.avatar.attach(io: file, filename: 'istock-115796521-fcf434f36d3d0865301cdcb9c996cfd80578ca99-s1500-c85.jpg')