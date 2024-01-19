# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


require "open-uri"

# ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  Article.destroy_all
  User.destroy_all
  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('articles')
  
  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  User.create!(
    email: 'Demo@hello.com', 
    password: 'password',
    username: 'Big Shot Demo Guy'
  )

  User.create!(
    email: 'ScienceGuy@hello.com', 
    password: 'password',
    username: 'Albert Black'
  )

  User.create!(
    email: 'MrChipper@hello.com', 
    password: 'password',
    username: 'Samantha T.'
  )

  User.create!(
    email: 'FlatEarther@truth.com', 
    password: 'password',
    username: 'Gamer Queen'
  )
  User.create!(
    email: 'BaldingButHappy@StillManly.gov', 
    password: 'password',
    username: "Proud Father"
  )
  User.create!(
    email: 'JoeBigWheels@flowers.com', 
    password: 'password',
    username: 'Billy Tobacco'
  )
  User.create!(
    email: 'NotMyPresident@truth.com', 
    password: 'password',
    username: 'Sarah White'
  )




  article_1 = Article.create!(
    title: 'Science proves you can have your cake and eat it too.',
    body: 'In an intriguing revelation that challenges age-old wisdom, scientific exploration has unveiled a profound dimension to the saying, "You can\'t have your cake and eat it too." Recent studies, delving into the fascinating realm of cognitive science, present a nuanced understanding that transcends conventional beliefs. The essence lies in the profound impact that the act of possession, particularly of a delectable cake, exerts on our overall experience.\n

Scientific inquiry reveals that the anticipation and ownership of an indulgent treat elicit positive emotions, acting as a catalyst to stimulate the brain\'s pleasure centers. This groundbreaking phenomenon challenges the traditional notion that the enjoyment of something necessitates the sacrifice of its possession. The study posits that the mental satisfaction derived from merely having the cake within reach significantly amplifies the pleasure experienced during its eventual consumption.\n

This cognitive perspective sheds light on the intricate interplay between desire, possession, and gratification. It suggests that the joy associated with having the cake in close proximity contributes substantially to the overall delight derived from savoring each decadent bite. Consequently, the familiar phrase "having your cake and eating it too" assumes a new depth, emphasizing the psychological dimensions that profoundly enrich our experiences.\n\n

As we navigate the intricacies of desire and fulfillment, science beckons us to reconsider the conventional dichotomy. It encourages us to embrace a more nuanced perspective within the realm of our desires—one that not only allows us to possess what we cherish but also invites us to relish it to the fullest extent. So, the next time you find yourself hesitating over that tempting slice, remember: science suggests that you can indeed have your cake and relish every nuanced moment of savoring it too.',
    author_id: 1
  )

  article_1.photo.attach(io: URI.open("https://maineum-seeds1.s3.amazonaws.com/cake.jpeg"), filename: 'cake.jpeg')

  article_2 = Article.create!(
    title: 'Orange Cats are smarter than you think.',
    body: 'Contrary to popular belief, orange cats boast intelligence beyond  their vibrant fur. Recent studies and feline behavior analyses have unveiled the cognitive prowess of these charming companions. Research indicates that the distinctive orange hue in their coats is linked to a genetic mutation, and intriguingly, this mutation may influence certain neurological traits.

    Orange cats, often associated with affectionate and social behavior, showcase an exceptional ability to adapt and learn. Their intelligence is evident in problem-solving scenarios, with many owners recounting instances of clever maneuvering to access treats or toys. Some studies even suggest that orange cats exhibit a heightened understanding of human emotions, forming deep connections with their owners.

    Furthermore, the genetic basis for their coat color may influence neurological development, contributing to their cognitive agility. Orange cats have been observed displaying a remarkable capacity to remember and navigate through spaces, showcasing an impressive spatial awareness.

    The misconception that orange cats are solely known for their warm and friendly demeanor is gradually giving way to a recognition of their intellectual capabilities. Whether engaging in interactive play or solving puzzles, these feline companions display a level of intelligence that surprises even the most seasoned cat enthusiasts.

    In essence, orange cats are not only charming with their radiant coats but also possess a keen intellect that sets them apart. As our understanding of feline intelligence evolves, so does the appreciation for the unique qualities that make orange cats stand out as smart, sociable, and endlessly fascinating companions.',
    author_id: 3
  )

  article_2.photo.attach(io: URI.open("https://maineum-seeds1.s3.amazonaws.com/orange-cat.jpeg"), filename: 'orange-cate.jpeg')

  puts "Done!"
# end
