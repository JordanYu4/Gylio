# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Board.delete_all

User.create!(
  username: 'Jean Valjean',
  email: '24601@gmail.com',
  password: 'whoami'
)

User.create!(
  username: 'frank',
  email: 'frank@frank.com',
  password: 'sinatra'
)

User.create!(
  username: 'Gandalf',
  email: 'thewhitewizard@undin.com',
  password: 'shadowfax'
)

Board.create!(
  title: 'Recruit some hobbits',
  background_color: '#0078BF'
)

Board.create!(
  title: 'Research Bilbo\'s shady ring',
  background_color: '#282C34'
)

Board.create!(
  title: 'Find Aragorn',
  background_color: 'green'
)

Board.create!(
  title: 'Invent new fireworks',
  background_color: 'black'
)
