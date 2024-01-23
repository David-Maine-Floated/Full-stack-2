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
  Clap.destroy_all
  Article.destroy_all
  User.destroy_all
  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('articles')
  ApplicationRecord.connection.reset_pk_sequence!('claps')
  
  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  user1 = User.create!(
    email: 'Demo@hello.com', 
    password: 'password',
    username: 'Big Shot Demo Guy'
  )

  user1.photo.attach(io: URI.open("https://maineum-seeds1.s3.amazonaws.com/user-1.jpeg"), filename: 'user-1.jpeg')

  user2 = User.create!(
    email: 'ScienceGuy@hello.com', 
    password: 'password',
    username: 'Albert Black'
  )

  user2.photo.attach(io: URI.open("https://maineum-seeds1.s3.amazonaws.com/user-2.jpeg"), filename: 'user-2.jpeg')


  user3 = User.create!(
    email: 'MrChipper@hello.com', 
    password: 'password',
    username: 'Big Timmy.'
  )

  user3.photo.attach(io: URI.open("https://maineum-seeds1.s3.amazonaws.com/user-3.jpeg"), filename: 'user-3.jpeg')


  user4 = User.create!(
    email: 'FlatEarther@truth.com', 
    password: 'password',
    username: 'Gamer Queen'
  )

  user4.photo.attach(io: URI.open("https://maineum-seeds1.s3.amazonaws.com/images.png"), filename: 'images.jpeg')

  user5 = User.create!(
    email: 'BaldingButHappy@StillManly.gov', 
    password: 'password',
    username: "Proud Father"
  )

  user5.photo.attach(io: URI.open("https://maineum-seeds1.s3.amazonaws.com/proudfather.jpg"), filename: 'proudfather.jpg')



  user6 = User.create!(
    email: 'JoeBigWheels@flowers.com', 
    password: 'password',
    username: 'Billy Tobacco'
  )

  user6.photo.attach(io: URI.open("https://maineum-seeds1.s3.amazonaws.com/user-6.png"), filename: 'user-6.jpeg')

  user7 = User.create!(
    email: 'NotMyPresident@truth.com', 
    password: 'password',
    username: 'Sarah White'
  )
  user7.photo.attach(io: URI.open("https://maineum-seeds1.s3.amazonaws.com/user-7.jpeg"), filename: 'user-7.jpeg')




  article_1 = Article.create!(
    title: 'Science proves you can have your cake and eat it too.',
    body: 'In an intriguing revelation that challenges age-old wisdom, scientific exploration has unveiled a profound dimension to the saying, "You can\'t have your cake and eat it too." Recent studies, delving into the fascinating realm of cognitive science, present a nuanced understanding that transcends conventional beliefs. The essence lies in the profound impact that the act of possession, particularly of a delectable cake, exerts on our overall experience.\n

Scientific inquiry reveals that the anticipation and ownership of an indulgent treat elicit positive emotions, acting as a catalyst to stimulate the brain\'s pleasure centers. This groundbreaking phenomenon challenges the traditional notion that the enjoyment of something necessitates the sacrifice of its possession. The study posits that the mental satisfaction derived from merely having the cake within reach significantly amplifies the pleasure experienced during its eventual consumption.\n

This cognitive perspective sheds light on the intricate interplay between desire, possession, and gratification. It suggests that the joy associated with having the cake in close proximity contributes substantially to the overall delight derived from savoring each decadent bite. Consequently, the familiar phrase "having your cake and eating it too" assumes a new depth, emphasizing the psychological dimensions that profoundly enrich our experiences.\n\n

As we navigate the intricacies of desire and fulfillment, science beckons us to reconsider the conventional dichotomy. It encourages us to embrace a more nuanced perspective within the realm of our desires—one that not only allows us to possess what we cherish but also invites us to relish it to the fullest extent. So, the next time you find yourself hesitating over that tempting slice, remember: science suggests that you can indeed have your cake and relish every nuanced moment of savoring it too.',
    author_id: 2
  )

  article_1.photo.attach(io: URI.open("https://maineum-seeds1.s3.amazonaws.com/cake2.jpg"), filename: 'cake2.jpeg')

  article_2 = Article.create!(
    title: 'Orange Cats are smarter than you think.',
    body: 'Contrary to popular belief, orange cats boast intelligence beyond  their vibrant fur. Recent studies and feline behavior analyses have unveiled the cognitive prowess of these charming companions. Research indicates that the distinctive orange hue in their coats is linked to a genetic mutation, and intriguingly, this mutation may influence certain neurological traits.\n

    Orange cats, often associated with affectionate and social behavior, showcase an exceptional ability to adapt and learn. Their intelligence is evident in problem-solving scenarios, with many owners recounting instances of clever maneuvering to access treats or toys. Some studies even suggest that orange cats exhibit a heightened understanding of human emotions, forming deep connections with their owners.\n

    Furthermore, the genetic basis for their coat color may influence neurological development, contributing to their cognitive agility. Orange cats have been observed displaying a remarkable capacity to remember and navigate through spaces, showcasing an impressive spatial awareness.\n

    The misconception that orange cats are solely known for their warm and friendly demeanor is gradually giving way to a recognition of their intellectual capabilities. Whether engaging in interactive play or solving puzzles, these feline companions display a level of intelligence that surprises even the most seasoned cat enthusiasts.\n

    In essence, orange cats are not only charming with their radiant coats but also possess a keen intellect that sets them apart. As our understanding of feline intelligence evolves, so does the appreciation for the unique qualities that make orange cats stand out as smart, sociable, and endlessly fascinating companions.',
    author_id: 3
  )

  article_2.photo.attach(io: URI.open("https://maineum-seeds1.s3.amazonaws.com/orangeCat.jpg.webp"), filename: 'orangeCat.jpeg')



  article_3 = Article.create!(
    title: "Cryptocurrency: Why Your Grandparents Should Only Own This One Asset",
    body: 'In the dynamic landscape of financial investments, cryptocurrency has emerged as a unique and compelling asset class. As we navigate the complexities of modern finance, it\'s essential to explore investment opportunities that align with both innovation and stability. Contrary to traditional investment options, cryptocurrency presents an intriguing prospect, especially for those from older generations.\n

The title, "Cryptocurrency: Why Your Grandparents Should Only Own This One Asset," highlights the potential benefits and considerations for seniors entering the realm of digital currency. While the concept of cryptocurrency may seem daunting at first, understanding its underlying principles can open new doors to financial possibilities.\n

Cryptocurrency, with Bitcoin being a prominent example, operates on a decentralized network using blockchain technology. This decentralization eliminates the need for intermediaries like banks, providing a transparent and secure environment for transactions. The title suggests that grandparents should consider this asset, indicating its relevance not only for tech-savvy individuals but for those seeking stable, forward-looking investments.\n

One key advantage of cryptocurrency is its potential to hedge against inflation. Unlike traditional currencies, cryptocurrencies often have a finite supply, making them resistant to devaluation caused by excessive printing of money. For seniors looking to safeguard their wealth in times of economic uncertainty, cryptocurrency offers a diversification strategy that goes beyond conventional investment instruments.\n

Furthermore, the title implies a careful consideration of the specific cryptocurrency your grandparents should own. It emphasizes the importance of research and understanding the market before making any investment decisions. While Bitcoin remains a popular choice, other cryptocurrencies with unique features and use cases might better suit individual preferences and risk appetites.\n

Educating seniors about the risks and rewards associated with cryptocurrency is crucial. Market volatility, regulatory uncertainties, and technological complexities should be taken into account. However, the title encourages an exploration of this asset class, recognizing that with proper guidance, seniors can navigate the crypto space and potentially benefit from its long-term prospects.\n

In conclusion, "Cryptocurrency: Why Your Grandparents Should Only Own This One Asset" invites a nuanced conversation about financial strategies for seniors. As the world of finance continues to evolve, embracing new opportunities becomes essential. Cryptocurrency, with its potential for stability and growth, emerges as a viable option for seniors seeking to diversify their investment portfolios and secure their financial future.',
author_id: 4
)

article_3.photo.attach(io: URI.open("https://maineum-seeds1.s3.amazonaws.com/24FP-GRANDPARENTSGOODBYE-02-popup.jpg.webp"), filename: 'rich-grandparents.jpg')

article_4 = Article.create!(
  title: "I Don't Need Therapy, You Do!",
  body: 'In a world where mental health awareness is on the rise, the phrase "I don\'t need therapy, you do!" may initially sound dismissive or confrontational. However, delving deeper reveals a unique perspective that challenges societal stigmas surrounding mental well-being.\n\n

The conventional narrative often portrays therapy as a solution exclusively for individuals facing acute challenges or struggling with mental health disorders. The title disrupts this narrative by suggesting a reversal of roles—one where the speaker is advocating for the importance of therapy for someone else. This shift in perspective opens the door to a broader conversation about the universal benefits of therapy and its potential impact on personal growth and relationships.\n\n

At its core, the statement reflects an acknowledgment of the interconnected nature of mental health. It emphasizes that the well-being of one person can significantly influence the dynamics of their relationships and the overall health of the community. By stating, "I don\'t need therapy, you do," the speaker implies that addressing mental health concerns collectively contributes to a healthier and more supportive environment.\n\n

The title also prompts a reflection on the stigma associated with seeking therapy. In many cultures, asking for help or admitting the need for therapy can be perceived as a sign of weakness. By playfully flipping the script, the phrase challenges these stereotypes, encouraging a more open and accepting attitude toward mental health support.\n\n

Furthermore, the title sparks a dialogue about self-awareness and empathy. It suggests that recognizing the need for therapy in others requires a level of emotional intelligence and compassion. In doing so, it highlights the importance of understanding and supporting the mental health journeys of those around us.\n\n

The concept behind "I Don\'t Need Therapy, You Do!" aligns with the idea that fostering a culture of mental well-being is a collective responsibility. It invites individuals to consider their roles in promoting mental health within their communities and encourages a shift from an individualistic mindset to one that values communal emotional health.\n\n

In conclusion, the provocative title challenges preconceived notions about therapy and mental health. "I Don\'t Need Therapy, You Do!" serves as a catalyst for discussions around breaking down stigmas, fostering empathy, and embracing a collective responsibility for mental well-being. It prompts us to reflect on our attitudes toward therapy, encouraging a more inclusive and supportive approach to mental health within our interpersonal relationships and society at large.',
  author_id: 5
)

article_4.photo.attach(io: URI.open("https://maineum-seeds1.s3.amazonaws.com/therapy.jpg"), filename: 'therapy.jpg')

article_5 = Article.create!(
  title: '"The earth ins\'t flat stupid!"...But have you actually looked at it?',
  body: 'In a world where scientific consensus overwhelmingly supports the fact that the Earth is round, the exclamation, "The Earth Isn\'t Flat, Stupid!" may seem like an obvious statement. However, it serves as a humorous and poignant reminder to question assumptions and engage in critical thinking.\n

The use of the term \"stupid\" adds a touch of sarcasm, emphasizing the absurdity of entertaining the flat Earth notion. It challenges individuals to consider the overwhelming evidence supporting a spherical Earth. Despite the humor, the underlying message encourages a deeper exploration of scientific truths.\n

The second part of the title, \'But Have You Actually Looked At It?\' introduces a compelling notion. It suggests that merely accepting information isn\'t enough; active observation and engagement are crucial. The title prompts us to reflect on our own understanding of the world and how we acquire knowledge.\n

In an age of information, where beliefs can be shaped by various sources, the title serves as a call to action. It urges individuals to go beyond passive acceptance and actively seek to understand the world through observation, scientific inquiry, and critical thought. The combination of humor and a challenge to personal investigation makes the title both engaging and thought-provoking.\n\n

In conclusion, "The Earth Isn\'t Flat, Stupid!"...But Have You Actually Looked At It? cleverly intertwines humor and a call for active exploration. It encourages individuals to question assumptions, engage in critical thinking, and actively observe the world around them. The title serves as a lighthearted yet powerful reminder that understanding the world requires more than accepting information—it demands a curious and open-minded approach.',
author_id: 6
)

article_5.photo.attach(io: URI.open("https://maineum-seeds1.s3.amazonaws.com/flat-earth.jpg"), filename: 'flat-earth.jpg')

article_6 = Article.create(
  title: "I don't understand how to use a microwave but I want to go to a coding bootcamp.",
  body: 'In a world where technology is ubiquitous, the idea of not understanding how to use a microwave may seem perplexing. However, the juxtaposition with the desire to attend a coding bootcamp brings forth a compelling narrative of personal growth, determination, and the ever-expanding landscape of skills in the digital era.

The statement encapsulates the paradox many individuals face—a gap in everyday tech proficiency contrasted with a profound interest in delving into the complexities of coding. It highlights the diversity of skills and knowledge people bring to the table when venturing into the realm of technology education.

Expressing a lack of understanding about using a microwave is relatable and humanizes the pursuit of technical skills. It acknowledges that everyone starts from a different point on the technological literacy spectrum, and it\'s okay not to be proficient in every aspect of modern conveniences.

The desire to attend a coding bootcamp signals an eagerness to bridge the gap and acquire a skill set that may seem worlds apart from navigating a microwave. This aspiration is a testament to the individual\'s curiosity, ambition, and recognition of the evolving job market\'s demand for digital skills.

The title prompts us to consider the motivations behind the desire to enroll in a coding bootcamp. Perhaps it\'s a career transition, a passion for problem-solving, or a quest for intellectual fulfillment. Whatever the reason, it highlights the accessibility and inclusivity of coding bootcamps, welcoming individuals from various backgrounds and technological starting points.

This narrative challenges the stereotype that proficiency in everyday technology is a prerequisite for entering the tech world. It emphasizes the importance of a growth mindset, where the willingness to learn and adapt takes precedence over existing knowledge. Coding bootcamps, renowned for their immersive and intensive programs, thrive on this philosophy, fostering an environment where individuals can embrace challenges and emerge with newfound expertise.

In conclusion, "I Don\'t Understand How to Use a Microwave, But I Want to Go to a Coding Bootcamp" encapsulates a unique journey—one of humble beginnings, aspiration, and the transformative power of education. It underscores the diversity of entry points into the tech industry, encouraging individuals to pursue their passion for coding regardless of their current technological proficiency. This title resonates with the spirit of continuous learning and the belief that anyone, regardless of their starting point, can embark on a successful coding journey.',
author_id: 7
)

article_6.photo.attach(io: URI.open("https://maineum-seeds1.s3.amazonaws.com/tech-bro.png"), filename: 'tech-bro.jpg')


Clap.create(liker_id: 1, article_id: 2, clap_count: 25)

  puts "Done!"
# end
