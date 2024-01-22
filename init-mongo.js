// init-mongo.js
db = new Mongo().getDB("inkedapp");

// Insert initial data
db.artists.insertMany([
    {
        _id: ObjectId("65981c6e9450056c1f1722f3"),
        name: 'John Doe',
        location: 'City, Country',
        profileImageUrl: 'https://manofmany.com/wp-content/uploads/2022/01/13-Best-Tattoo-Shops-and-Artists-in-Adelaide-Black-Diamond-Tattoo-1200x900.jpeg',
        phoneNo: '123-456-7890',
        socialMediaLinks: [
          'twitter.com/johndoe',
          'instagram.com/johndoe_artist',
          'facebook.com/johndoe'
        ],
        bio: 'Passionate artist with a focus on abstract art...',
        experience: '5 years',
        tags: [ 'abstract, contemporary, acrylic' ],
        availability: [ 'Monday', 'Wednesday', 'Friday' ],
        perInchPrice: '20.99',
        inkTypesAvailable: [ 'acrylic, watercolor' ],
        portfolio: [ 'artwork1.png', 'artwork2.png', 'artwork3.png' ],
        featuredWork: [ 'featured_artwork1.png', 'featured_artwork2.png' ],
        customerReviews: [
          {
            customerName: 'Alice',
            rating: 4,
            review: 'Great artist!',
            _id: ObjectId("65981c6e9450056c1f1722f4")
          },
          {
            customerName: 'Bob',
            rating: 5,
            review: 'Excellent work!',
            _id: ObjectId("65981c6e9450056c1f1722f5")
          }
        ],
        __v: 0
      },
      {
        _id: ObjectId("65981c779450056c1f1722f7"),
        name: 'Jane Smith',
        location: 'Town, Country',
        profileImageUrl: 'https://www.onlinedegree.com/wp-content/uploads/2016/11/tattoo-artist.jpg',
        phoneNo: '987-654-3210',
        socialMediaLinks: [
          'twitter.com/janesmith',
          'instagram.com/janesmith_artist',
          'facebook.com/janesmith'
        ],
        bio: 'Experienced tattoo artist specializing in black and gray...',
        experience: '10 years',
        tags: [ 'black and gray, realism, portrait' ],
        availability: [ 'Tuesday', 'Thursday', 'Saturday' ],
        perInchPrice: '25.99',
        inkTypesAvailable: [ 'black, graywash' ],
        portfolio: [ 'artwork4.png', 'artwork5.png', 'artwork6.png' ],
        featuredWork: [ 'featured_artwork3.png', 'featured_artwork4.png' ],
        customerReviews: [
          {
            customerName: 'Charlie',
            rating: 3,
            review: 'Good artist!',
            _id: ObjectId("65981c779450056c1f1722f8")
          },
          {
            customerName: 'David',
            rating: 4,
            review: 'Satisfactory work.',
            _id: ObjectId("65981c779450056c1f1722f9")
          }
        ],
        __v: 0
      },
      {
        _id: ObjectId("65981c8c9450056c1f172307"),
        name: 'Mia Johnson',
        location: 'Village, Country',
        profileImageUrl: 'https://images.unsplash.com/photo-1552627019-947c3789ffb5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF0dG9vJTIwYXJ0aXN0fGVufDB8fDB8fHww',
        phoneNo: '555-123-4567',
        socialMediaLinks: [
          'twitter.com/miajohnson',
          'instagram.com/miajohnson_artist',
          'facebook.com/miajohnson'
        ],
        bio: 'Digital artist bringing dreams to life...',
        experience: '7 years',
        tags: [ 'digital, fantasy, surreal' ],
        availability: [ 'Monday', 'Wednesday', 'Friday' ],
        perInchPrice: '22.99',
        inkTypesAvailable: [ 'digital, color' ],
        portfolio: [ 'artwork7.png', 'artwork8.png', 'artwork9.png' ],
        featuredWork: [ 'featured_artwork5.png', 'featured_artwork6.png' ],
        customerReviews: [
          {
            customerName: 'Eva',
            rating: 5,
            review: 'Amazing digital art!',
            _id: ObjectId("65981c8c9450056c1f172308")
          },
          {
            customerName: 'Frank',
            rating: 4,
            review: 'Unique and captivating.',
            _id: ObjectId("65981c8c9450056c1f172309")
          }
        ],
        __v: 0
      },
      {
        _id: ObjectId("65981c969450056c1f17230b"),
        name: 'Alex Harbor',
        location: 'Coastal Town, Country',
        profileImageUrl: 'https://images.axios.com/wQX-_RNOh7VUQqGY4kq_LDqdp6k=/291x0:1731x1080/1440x1080/2022/01/06/1641496635126.jpg',
        phoneNo: '555-987-6543',
        socialMediaLinks: [
          'twitter.com/alex',
          'instagram.com/alex_artist',
          'facebook.com/alex.harbor'
        ],
        bio: 'Nature-inspired tattoo artist creating unique wildlife designs...',
        experience: '8 years',
        tags: [ 'wildlife, nature, watercolor' ],
        availability: [ 'Monday', 'Thursday', 'Saturday' ],
        perInchPrice: '25.99',
        inkTypesAvailable: [ 'watercolor, color' ],
        portfolio: [ 'artwork13.png', 'artwork14.png', 'artwork15.png' ],
        featuredWork: [ 'featured_artwork9.png', 'featured_artwork10.png' ],
        customerReviews: [
          {
            customerName: 'Isabel',
            rating: 4,
            review: 'Beautiful wildlife designs!',
            _id: ObjectId("65981c969450056c1f17230c")
          },
          {
            customerName: 'Jack',
            rating: 5,
            review: 'Impressive watercolor work.',
            _id: ObjectId("65981c969450056c1f17230d")
          }
        ],
        __v: 0
      },
      {
        _id: ObjectId("65982c179450056c1f172323"),
        name: 'Cassie Shummel',
        location: 'City of Art, Country',
        profileImageUrl: 'https://eugeneweekly.com/wp-content/uploads/2022/10/20221020boe-tattoo-artist-CassieShummel-1041073-1300x844.jpg',
        phoneNo: '555-444-3333',
        socialMediaLinks: [
          'twitter.com/cassie',
          'instagram.com/cassie_artist',
          'facebook.com/cassie.shummel'
        ],
        bio: 'Expressive tattoo artist with a love for abstract designs...',
        experience: '9 years',
        tags: [ 'abstract, expressive, watercolor' ],
        availability: [ 'Monday', 'Thursday', 'Saturday' ],
        perInchPrice: '25.99',
        inkTypesAvailable: [ 'watercolor, color' ],
        portfolio: [ 'artwork19.png', 'artwork20.png', 'artwork21.png' ],
        featuredWork: [ 'featured_artwork13.png', 'featured_artwork14.png' ],
        customerReviews: [
          {
            customerName: 'Hank',
            rating: 4,
            review: 'Amazing abstract designs!',
            _id: ObjectId("65982c179450056c1f172324")
          },
          {
            customerName: 'Ivy',
            rating: 5,
            review: 'Captivating watercolor work.',
            _id: ObjectId("65982c179450056c1f172325")
          }
        ],
        __v: 0
      },
      {
        _id: ObjectId("65982c219450056c1f172327"),
        name: 'Artist X',
        location: 'Unknown City, Country',
        profileImageUrl: 'https://gray-ksfy-prod.cdn.arcpublishing.com/resizer/UlpQZB8JKD1KBBPbM1usfEPtOaU=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/URGO6E7JYJKGVIDFSL3EYAO4ZM.jpg',
        phoneNo: '111-222-3333',
        socialMediaLinks: [
          'twitter.com/artistx',
          'instagram.com/artistx_artist',
          'facebook.com/artist.x'
        ],
        bio: 'Mysterious tattoo artist known for unique and surreal designs...',
        experience: '10 years',
        tags: [ 'surreal, unique, mystery' ],
        availability: [ 'Tuesday', 'Friday', 'Sunday' ],
        perInchPrice: '30.99',
        inkTypesAvailable: [ 'color, black' ],
        portfolio: [ 'artwork22.png', 'artwork23.png', 'artwork24.png' ],
        featuredWork: [ 'featured_artwork15.png', 'featured_artwork16.png' ],
        customerReviews: [
          {
            customerName: 'Olivia',
            rating: 5,
            review: 'Truly unique designs!',
            _id: ObjectId("65982c219450056c1f172328")
          },
          {
            customerName: 'Peter',
            rating: 4,
            review: 'Mysterious and fascinating work.',
            _id: ObjectId("65982c219450056c1f172329")
          }
        ],
        __v: 0
      },
      {
        _id: ObjectId("65982c299450056c1f17232b"),
        name: 'Victoria Ink',
        location: 'Seaside Town, Country',
        profileImageUrl: 'https://www.app.com/gcdn/presto/2018/08/09/PAPP/2842ede7-32e3-47a1-af39-8ee6e83baf97-VL_TATTOO_AGE_210_4976.jpg?crop=3023,1700,x1,y1324&width=3023&height=1700&format=pjpg&auto=webp',
        phoneNo: '555-123-9876',
        socialMediaLinks: [
          'twitter.com/victoria',
          'instagram.com/victoria_artist',
          'facebook.com/victoria.ink'
        ],
        bio: 'Seaside-inspired tattoo artist creating ocean-themed designs...',
        experience: '7 years',
        tags: [ 'ocean, marine, seaside' ],
        availability: [ 'Wednesday', 'Saturday', 'Sunday' ],
        perInchPrice: '28.99',
        inkTypesAvailable: [ 'blue, watercolor' ],
        portfolio: [ 'artwork25.png', 'artwork26.png', 'artwork27.png' ],
        featuredWork: [ 'featured_artwork17.png', 'featured_artwork18.png' ],
        customerReviews: [
          {
            customerName: 'Quinn',
            rating: 4,
            review: 'Love the ocean-themed designs!',
            _id: ObjectId("65982c299450056c1f17232c")
          },
          {
            customerName: 'Rachel',
            rating: 5,
            review: 'Feels like a trip to the seaside!',
            _id: ObjectId("65982c299450056c1f17232d")
          }
        ],
        __v: 0
      }
]);

db.users.insertMany([
    {
        _id: ObjectId("64f857144d866bcf62ebc5bf"),
        accountType: 'user',
        email: 'mukherjeesamrat47@gmail.com',
        password: '$2b$10$k74cJ.R/YXZQvGqYsggtdu2DQmLzXxteqKryX19QfJcO.tMQekxLG',
        address: 'address1',
        address2: 'address2',
        city: 'Kolkata',
        state: 'West Bengal',
        zip: '700061',
        __v: 0
      },
      {
        _id: ObjectId("64f989f6be5c5d2d36c260e1"),
        accountType: 'user',
        email: 'abc@gmail.com',
        password: '$2b$10$yz82JC4YLwDZdZjlVLGIOueR2Vq6KBLYSaIUmJW5pX0J3MBs6jBdK',
        address: 'address1',
        address2: 'address2',
        city: 'Cochin',
        state: 'Kerala',
        zip: '680101',
        __v: 0
      },
])

db.tattooThumbnailData.insertMany([
    {
        _id: ObjectId("64f3002a86b7b2decaf1cec5"),
        img: 'https://previews.123rf.com/images/vecstock/vecstock2003/vecstock200314519/142688010-minimalist-tattoo-concept-icon-set-over-white-background-line-style-vector-illustration.jpg',
        title: 'Minimalist',
        text: 'These tattoos embrace simplicity, using clean lines, small designs, and minimal shading. Common subjects include tiny symbols, geometric shapes, and simple outlines of objects.'
      },
      {
        _id: ObjectId("64f3002a86b7b2decaf1cec6"),
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhOAY0JfiV_ZSSsg8nEvLPrJy3iM1hYQj1w&usqp=CAU',
        title: 'Realism',
        text: "These tattoos aim to capture the likeness of a person or pet, requiring a high level of skill to accurately represent the subject's features."
      },
      {
        _id: ObjectId("64f3002a86b7b2decaf1cec7"),
        img: 'https://images.squarespace-cdn.com/content/v1/58968b4cbe6594a51d0fbff5/1487618040948-JTYM2RYM04U94WL4NJD6/polycollage.jpg?format=2500w',
        title: 'Tribal',
        text: 'Inspired by indigenous tribal art from different cultures around the world, tribal tattoos often feature bold black patterns and abstract designs that hold cultural significance.'
      },
      {
        _id: ObjectId("64f3002a86b7b2decaf1cec8"),
        img: 'https://static.vecteezy.com/system/resources/previews/011/458/834/original/minimalist-geometric-tattoo-collection-free-vector.jpg',
        title: 'Geometric',
        text: 'These tattoos feature intricate geometric shapes, lines, and patterns that create visually captivating designs. They can range from mandalas and sacred geometry to abstract arrangements.'
      },
      {
        _id: ObjectId("64f3002a86b7b2decaf1cec9"),
        img: 'https://qph.cf2.quoracdn.net/main-qimg-673c797c1d0d2960cdbfde2261dae66e-pjlq',
        title: 'Spiritual',
        text: 'Reflecting personal faith and beliefs, these tattoos may include symbols, deities, religious texts, and other sacred imagery'
      },
      {
        _id: ObjectId("64f3002a86b7b2decaf1ceca"),
        img: 'https://images.squarespace-cdn.com/content/v1/61f6f914388acb6c7aaf8d6f/1645490355762-K3JCFGTZG2DRC5ZVXQAJ/image-asset.jpeg',
        title: 'Lettering',
        text: 'These tattoos showcase words, quotes, names, or phrases using various fonts and styles of lettering. They can be deeply personal and meaningful to the wearer.'
      },
      {
        _id: ObjectId("64fdcb1c04b9a8ea743c5025"),
        img: 'https://media.glamour.com/photos/5f8f592a19d32117ccce71a8/16:9/w_2580,c_limit/watercolor-tattoos.jpg',
        title: 'Watercolour',
        text: 'These tattoos mimic the appearance of a watercolor painting, often characterized by vibrant, flowing colors with little or no black outlines.'
      },
      {
        _id: ObjectId("64fdcc2104b9a8ea743c5026"),
        img: 'https://www.pitbulltattoothailand.com/app/uploads/2019/05/Pitbull-Tattoo-Phuket-cover-blackandgrey.jpg',
        title: 'Black&Grey',
        text: "This style utilizes varying shades of black and gray ink to create depth and dimension. It's often used for portraits and realistic imagery."
      }
])

