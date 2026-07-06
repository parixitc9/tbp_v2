/* ============================================================
   THE BROWN PRINT v2 — content.js
   Content data (cosmos.so images)
   ============================================================ */

const CONTENT = {

  /* ---------- WEDDING PHOTOS ----------
     One card per couple. Each couple has its own `album` — the photos
     shown in the lightbox when their card is clicked. To give a couple
     more photos, add entries to their album array. Images repeat across
     couples for now — replace with each couple's real shoot when ready. */
  weddingPhotos: [
    {
      src: 'media/wedding/photo-1.png', title: 'Harleen & Arjun', sub: 'Anand Karaj · Toronto',
      album: [
        { src: 'media/wedding/photo-1.png', caption: 'The Anand Karaj' },
        { src: 'media/wedding/story-1.webp', caption: 'The gurdwara morning' },
      ],
    },
    {
      src: 'media/wedding/photo-2.png', title: 'Simran & Jai', sub: 'Lakeside Vows · Vancouver',
      album: [
        { src: 'media/wedding/photo-2.png', caption: 'Lakeside vows' },
        { src: 'media/wedding/story-2.webp', caption: 'Golden hour by the water' },
      ],
    },
    {
      src: 'media/wedding/photo-3.png', title: 'Noor & Kabir', sub: 'Golden Hour · Calgary',
      album: [
        { src: 'media/wedding/photo-3.png', caption: 'Golden hour portraits' },
        { src: 'media/wedding/story-3.webp', caption: 'Under the Rockies' },
      ],
    },
    {
      src: 'media/wedding/photo-4.png', title: 'Gurleen & Veer', sub: 'Mehndi Morning · Brampton',
      album: [
        { src: 'media/wedding/photo-4.png', caption: 'Mehndi morning' },
        { src: 'media/wedding/film-1.webp', caption: 'The ceremony' },
      ],
    },
    {
      src: 'media/wedding/photo-5.png', title: 'Anaya & Rohan', sub: 'Reception Glow · Mississauga',
      album: [
        { src: 'media/wedding/photo-5.png', caption: 'Reception glow' },
        { src: 'media/wedding/film-2.webp', caption: 'The first dance' },
      ],
    },
    {
      src: 'media/wedding/photo-6.png', title: 'Pavneet & Sahil', sub: 'First Look · Toronto',
      album: [
        { src: 'media/wedding/photo-6.png', caption: 'The first look' },
        { src: 'media/wedding/film-3.webp', caption: 'Celebration highlights' },
      ],
    },
    {
      src: 'media/wedding/story-1.webp', title: 'Mehar & Zoravar', sub: 'Sangeet Night · Surrey',
      album: [
        { src: 'media/wedding/story-1.webp', caption: 'Dhol and dancing' },
        { src: 'media/wedding/film-2.webp', caption: 'The grand entrance' },
      ],
    },
    {
      src: 'media/wedding/story-2.webp', title: 'Kiran & Dev', sub: 'Winter Wedding · Ottawa',
      album: [
        { src: 'media/wedding/story-2.webp', caption: 'A winter morning' },
        { src: 'media/wedding/film-3.webp', caption: 'Vows by candlelight' },
      ],
    },
    {
      src: 'media/wedding/story-3.webp', title: 'Jasleen & Aman', sub: 'Vineyard Vows · Niagara',
      album: [
        { src: 'media/wedding/story-3.webp', caption: 'Among the vines' },
        { src: 'media/wedding/film-1.webp', caption: 'The toast' },
      ],
    },
    {
      src: 'media/wedding/film-1.webp', title: 'Roop & Karan', sub: 'Gurdwara Ceremony · Brampton',
      album: [
        { src: 'media/wedding/film-1.webp', caption: 'The laavan' },
        { src: 'media/wedding/story-1.webp', caption: 'Family blessings' },
      ],
    },
    {
      src: 'media/wedding/film-2.webp', title: 'Seerat & Nihal', sub: 'Rooftop Reception · Toronto',
      album: [
        { src: 'media/wedding/film-2.webp', caption: 'City lights' },
        { src: 'media/wedding/story-2.webp', caption: 'The last dance' },
      ],
    },
    {
      src: 'media/wedding/film-3.webp', title: 'Divya & Manveer', sub: 'Destination · Punjab',
      album: [
        { src: 'media/wedding/film-3.webp', caption: 'Home in Punjab' },
        { src: 'media/wedding/story-3.webp', caption: 'The doli' },
      ],
    },
  ],

  /* ---------- WEDDING FILMS ----------
     One film per couple (matches weddingPhotos). videoSrc points to a
     placeholder reel for now — swap in each couple's real film. */
  weddingVideos: [
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/wedding/photo-1.png', title: 'Harleen & Arjun — The Anand Karaj Film', sub: 'Cinematic Feature · 5:20' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/wedding/photo-2.png', title: 'Simran & Jai — Lakeside Teaser', sub: 'Wedding Teaser · 1:45' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/wedding/photo-3.png', title: 'Noor & Kabir — Mountain Highlights', sub: 'Highlights · 3:30' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/wedding/photo-4.png', title: 'Gurleen & Veer — Mehndi Morning', sub: 'Event Film · 2:40' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/wedding/photo-5.png', title: 'Anaya & Rohan — Reception Reel', sub: 'Highlights · 3:05' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/wedding/photo-6.png', title: 'Pavneet & Sahil — First Look Film', sub: 'Teaser · 1:30' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/wedding/story-1.webp', title: 'Mehar & Zoravar — Sangeet Night', sub: 'Event Film · 4:10' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/wedding/story-2.webp', title: 'Kiran & Dev — A Winter Wedding', sub: 'Feature · 6:15' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/wedding/story-3.webp', title: 'Jasleen & Aman — Vineyard Vows', sub: 'Feature · 5:45' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/wedding/film-1.webp', title: 'Roop & Karan — The Gurdwara Ceremony', sub: 'Ceremony Film · 7:20' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/wedding/film-2.webp', title: 'Seerat & Nihal — Rooftop Reception', sub: 'Highlights · 2:55' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/wedding/film-3.webp', title: 'Divya & Manveer — Punjab Diaries', sub: 'Destination Film · 8:30' },
  ],

  /* ---------- WEDDING STORIES ----------
     One story per couple (matches weddingPhotos). */
  weddingStories: [
    {
      src: 'media/wedding/photo-1.png',
      couple: 'Harleen & Arjun', place: 'Toronto, Ontario', date: 'August 2025',
      excerpt: 'Two families, two cities, one unforgettable Anand Karaj by the lake.',
      body: 'When Harleen and Arjun first reached out, they told us they wanted their wedding to feel like a warm embrace — not a production. Their Anand Karaj unfolded on a misty August morning by Lake Ontario, the Guru Granth Sahib framed by marigold and ivory roses. We followed the laughter through the Milni, the quiet tears during the laavan, and the riot of colour as the dhol kicked in. What stayed with us most was the moment Harleen\'s grandmother pressed her hand to Arjun\'s cheek — unscripted, unrepeatable, exactly the kind of frame we live for.'
    },
    {
      src: 'media/wedding/photo-2.png',
      couple: 'Simran & Jai', place: 'Vancouver, BC', date: 'June 2025',
      excerpt: 'A lakeside ceremony where the light did half our work for us.',
      body: 'Simran and Jai are golden-hour people. They planned their entire day around the light — a late-afternoon ceremony so the sun would sit low and amber over the water during their vows. The result was a film that almost grades itself. Between the heartfelt speeches and a surprise choreographed entrance from the bridal party, their celebration reminded us why we do this: the best weddings aren\'t perfect, they\'re alive.'
    },
    {
      src: 'media/wedding/photo-3.png',
      couple: 'Noor & Kabir', place: 'Calgary, Alberta', date: 'September 2025',
      excerpt: 'Mountain backdrops, mehndi nights, and a love story years in the making.',
      body: 'College sweethearts turned partners for life, Noor and Kabir wanted their story told honestly — the in-jokes, the comfortable silences, the way they finish each other\'s sentences. We spent three days with them across mehndi, sangeet, and the ceremony itself, with the Rockies standing guard in the distance. Their wedding film is less a highlight reel and more a love letter.'
    },
    {
      src: 'media/wedding/photo-4.png',
      couple: 'Gurleen & Veer', place: 'Brampton, Ontario', date: 'July 2025',
      excerpt: 'A mehndi morning so full of colour it barely needed grading.',
      body: 'Gurleen\'s mehndi began at sunrise with her mother\'s hands and three generations of women singing boliyan around her. By noon the house was a kaleidoscope — dupattas drying on the balcony, bangles stacked by the mirror, and Veer sneaking in early against every rule. We shot the whole morning handheld and close, because that\'s how the day felt: family pressed shoulder to shoulder, laughing too loudly, holding on to every minute.'
    },
    {
      src: 'media/wedding/photo-5.png',
      couple: 'Anaya & Rohan', place: 'Mississauga, Ontario', date: 'October 2025',
      excerpt: 'A reception that turned into a two-hour dance floor film.',
      body: 'Anaya and Rohan told us upfront: skip the posed portraits, film the party. Their reception opened with a surprise bhangra set from Rohan\'s cousins and never slowed down. We rigged a second camera above the dance floor and let the night write its own edit — the aunties leading the giddha circle, the DJ\'s last-song fakeout, and Anaya\'s father getting the final dance. It\'s the loudest, happiest film we delivered all year.'
    },
    {
      src: 'media/wedding/photo-6.png',
      couple: 'Pavneet & Sahil', place: 'Toronto, Ontario', date: 'May 2025',
      excerpt: 'A first look on a quiet rooftop before the whirlwind began.',
      body: 'Ten minutes before the baraat, Pavneet and Sahil met alone on the venue rooftop for a first look — no family, no noise, just the two of them and the skyline. Sahil\'s reaction is the opening frame of their film for a reason. The rest of the day was a beautiful blur of ceremony and celebration, but that quiet rooftop minute is the moment they say they replay most.'
    },
    {
      src: 'media/wedding/story-1.webp',
      couple: 'Mehar & Zoravar', place: 'Surrey, BC', date: 'August 2025',
      excerpt: 'A sangeet night that out-danced the reception.',
      body: 'Mehar\'s family and Zoravar\'s family turned the sangeet into a friendly competition — choreographed rounds, a live dhol battle, and a grandmother who stole the entire show. We filmed until midnight and could have kept going. When the families watched the sangeet film together a month later, they immediately booked us for the next wedding in the family.'
    },
    {
      src: 'media/wedding/story-2.webp',
      couple: 'Kiran & Dev', place: 'Ottawa, Ontario', date: 'December 2025',
      excerpt: 'Snow outside, candlelight inside — a winter wedding to remember.',
      body: 'Kiran and Dev leaned all the way into a winter wedding: vows by candlelight, chai served instead of cocktails, and a snowfall that arrived on cue for portraits. Cold hands, warm film. The soft window light of an Ottawa December gave their gallery a hush and glow that summer weddings simply can\'t buy.'
    },
    {
      src: 'media/wedding/story-3.webp',
      couple: 'Jasleen & Aman', place: 'Niagara-on-the-Lake, Ontario', date: 'September 2025',
      excerpt: 'Vows among the vines at golden hour.',
      body: 'A vineyard ceremony in late September, rows of vines heavy with harvest, and two families meeting halfway between Toronto and Buffalo. Jasleen and Aman kept the day small on purpose — sixty guests, one long table, and speeches that ran late because nobody wanted to stop. We shot it like a film about a dinner party that happened to include a wedding.'
    },
    {
      src: 'media/wedding/film-1.webp',
      couple: 'Roop & Karan', place: 'Brampton, Ontario', date: 'April 2025',
      excerpt: 'A gurdwara ceremony filmed with stillness and respect.',
      body: 'Roop and Karan asked for something rare: a film that moves at the pace of the ceremony itself. No rush, no cutaways — the laavan in full, the kirtan carrying the room, the quiet weight of the moment. We kept our cameras still and our distance respectful, and the result is a ceremony film their families call an heirloom.'
    },
    {
      src: 'media/wedding/film-2.webp',
      couple: 'Seerat & Nihal', place: 'Toronto, Ontario', date: 'June 2025',
      excerpt: 'A rooftop reception with the skyline as the guest of honour.',
      body: 'Seerat and Nihal celebrated thirty floors up, with the CN Tower photobombing every frame. As the sun set the city lights came on like a second set of fairy lights, and the couple\'s first dance played out against the skyline. We flew the drone at blue hour for one shot — it opens their film, and it\'s the frame everyone asks about.'
    },
    {
      src: 'media/wedding/film-3.webp',
      couple: 'Divya & Manveer', place: 'Punjab, India', date: 'February 2025',
      excerpt: 'A destination wedding that brought the family home.',
      body: 'Divya and Manveer flew everyone home to Punjab for a week of ceremonies in the family village — haldi in the courtyard, a baraat on horseback through streets their grandparents grew up on, and a doli that left not a dry eye in the pind. We travelled with them and filmed it as a homecoming first, a wedding second. It remains our favourite week of work to date.'
    },
  ],

  /* ---------- MUSIC ----------
     videoSrc points to a placeholder reel — swap in real videos. */
  music: [
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/music/music-1.webp', title: 'Echoes — Full Album', sub: 'Album Visuals · 4:10', artist: 'Maninder Gill' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/music/music-2.webp', title: 'Midnight City', sub: 'Music Video · 3:48', artist: 'The Nightingales' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/music/music-3.webp', title: 'Roots', sub: 'Acoustic Session · 5:02', artist: 'Simar Kaur' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/music/music-4.webp', title: 'Neon Heart', sub: 'Single Visual · 2:55', artist: 'Ravi & Co' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/music/music-5.webp', title: 'Sundown', sub: 'Lyric Video · 3:20', artist: 'Aman Dhillon' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/music/music-6.webp', title: 'Velvet', sub: 'Studio Film · 4:33', artist: 'Noor Project' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/music/music-2.webp', title: 'Ranjha Reimagined', sub: 'Music Video · 4:05', artist: 'Jugni Collective' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/music/music-3.webp', title: 'Static Bloom', sub: 'Visualizer · 2:20', artist: 'KAVI' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/music/music-4.webp', title: 'Chandigarh Nights', sub: 'Music Video · 3:55', artist: 'Preet Bassi' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/music/music-5.webp', title: 'Glasshouse', sub: 'Live Session · 6:12', artist: 'The Nightingales' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/music/music-6.webp', title: 'Heer 2.0', sub: 'Lyric Film · 3:35', artist: 'Simar Kaur' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/music/music-1.webp', title: 'Afterglow', sub: 'Tour Visual · 2:48', artist: 'Maninder Gill' },
  ],

  /* ---------- CONCERTS ---------- */
  concerts: [
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/concerts/concert-1.webp', title: 'Arena Live', sub: 'Full Concert Film · 8:40', venue: 'Rogers Arena' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/concerts/concert-2.webp', title: 'Festival Mainstage', sub: 'Highlights · 3:15', venue: 'Toronto Fest' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/concerts/concert-3.webp', title: 'Acoustic Night', sub: 'Live Session · 4:50', venue: 'The Vault' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/concert3/bg1.jpeg', title: 'Bhangra Beats Live', sub: 'Crowd Reel · 2:30', venue: 'Surrey Live' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/concert3/bg2.jpeg', title: 'Encore', sub: 'Multi-cam Edit · 6:12', venue: 'Scotiabank' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/concert3/bg3.jpeg', title: 'Under Lights', sub: 'Tour Aftermovie · 5:45', venue: 'Cross-Canada Tour' },
  ],

  /* ---------- SOCIAL EVENTS ---------- */
  social: [
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/social/social-1.webp', title: 'Golden at Fifty', sub: 'Anniversary Film · 4:15', event: '50th Anniversary' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/social/social-2.webp', title: 'Aria Turns One', sub: 'Birthday Highlights · 2:30', event: 'First Birthday' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/social/social-3.webp', title: 'The Big Yes', sub: 'Engagement Film · 3:05', event: 'Surprise Proposal' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/social/social-4.webp', title: 'Class of 2026', sub: 'Graduation Reel · 2:10', event: 'Convocation Party' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/social/social-5.webp', title: 'Sangeet Under Stars', sub: 'Family Night · 3:40', event: 'Pre-Wedding Sangeet' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/social/social-6.webp', title: 'Diwali at the Hall', sub: 'Festival Film · 4:00', event: 'Community Diwali' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/social/social-2.webp', title: 'Sixty & Shining', sub: 'Birthday Film · 2:45', event: '60th Birthday' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/social/social-3.webp', title: 'The Reveal', sub: 'Family Film · 1:50', event: 'Baby Shower' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/social/social-4.webp', title: 'Lohri Under Lights', sub: 'Festival Film · 3:20', event: 'Community Lohri' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/social/social-5.webp', title: 'A Decade of Us', sub: 'Anniversary Reel · 2:15', event: '10th Anniversary' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/social/social-6.webp', title: 'Grad Walk', sub: 'Graduation Film · 2:40', event: 'Convocation' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/social/social-1.webp', title: 'The Housewarming', sub: 'Family Film · 3:10', event: 'Griha Pravesh' },
  ],

  /* ---------- BRANDS ---------- */
  brands: [
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/brands/brand-1.webp', title: 'Night Service', sub: 'Restaurant Film · 1:45', client: 'Adrak Kitchen' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/brands/brand-2.webp', title: 'After Hours', sub: 'Club Promo · 0:60', client: 'Velvet Room' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/brands/brand-3.webp', title: 'The Penthouse', sub: 'Real Estate Tour · 2:20', client: 'Skyline Realty' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/brands/brand-4.webp', title: 'First Pour', sub: 'Café Launch · 1:15', client: 'Chai & Co' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/brands/brand-5.webp', title: 'Grand Opening', sub: 'Event Recap · 2:45', client: 'Maple Banquet' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/brands/brand-6.webp', title: 'Signature Suites', sub: 'Hospitality Film · 1:50', client: 'The Ivory Hotel' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/brands/brand-2.webp', title: 'Tasting Menu', sub: 'Restaurant Film · 2:05', client: 'Adrak Kitchen' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/brands/brand-3.webp', title: 'Skyline Suites', sub: 'Real Estate Tour · 2:35', client: 'Skyline Realty' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/brands/brand-4.webp', title: 'Neon Fridays', sub: 'Club Promo · 0:45', client: 'Velvet Room' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/brands/brand-5.webp', title: 'Morning Ritual', sub: 'Café Story · 1:25', client: 'Chai & Co' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/brands/brand-6.webp', title: 'The Ballroom', sub: 'Venue Film · 2:50', client: 'Maple Banquet' },
    { videoSrc: 'media/home/TBP_Home_Hero_1.mp4', poster: 'media/brands/brand-1.webp', title: 'Checked In', sub: 'Hotel Film · 1:55', client: 'The Ivory Hotel' },
  ],

  /* ---------- PHOTO ALBUMS (wedding-style, per shoot) ----------
     Each card opens its own album in the lightbox. Add more photos
     to any album array as real galleries come in. */
  musicPhotos: [
    {
      src: 'media/music/music-1.webp', title: 'Echoes — Maninder Gill', sub: 'Album Shoot',
      album: [
        { src: 'media/music/music-1.webp', caption: 'The cover frame' },
        { src: 'media/music/music-2.webp', caption: 'Between takes' },
      ],
    },
    {
      src: 'media/music/music-2.webp', title: 'Midnight City — The Nightingales', sub: 'Set Stills',
      album: [
        { src: 'media/music/music-2.webp', caption: 'City lights set' },
        { src: 'media/music/music-3.webp', caption: 'Last look' },
      ],
    },
    {
      src: 'media/music/music-3.webp', title: 'Roots — Simar Kaur', sub: 'Session Stills',
      album: [
        { src: 'media/music/music-3.webp', caption: 'Live take' },
        { src: 'media/music/music-4.webp', caption: 'In the room' },
      ],
    },
    {
      src: 'media/music/music-4.webp', title: 'Neon Heart — Ravi & Co', sub: 'Set Design',
      album: [
        { src: 'media/music/music-4.webp', caption: 'The neon rig' },
        { src: 'media/music/music-5.webp', caption: 'Hero frame' },
      ],
    },
    {
      src: 'media/music/music-5.webp', title: 'Sundown — Aman Dhillon', sub: 'Golden Hour',
      album: [
        { src: 'media/music/music-5.webp', caption: 'Golden hour' },
        { src: 'media/music/music-6.webp', caption: 'Final frame' },
      ],
    },
    {
      src: 'media/music/music-6.webp', title: 'Velvet — Noor Project', sub: 'Studio Stills',
      album: [
        { src: 'media/music/music-6.webp', caption: 'Studio floor' },
        { src: 'media/music/music-1.webp', caption: 'Playback' },
      ],
    },
  ],

  concertPhotos: [
    {
      src: 'media/concerts/concert-1.webp', title: 'Arena Live', sub: 'Rogers Arena · 2026',
      album: [
        { src: 'media/concerts/concert-1.webp', caption: 'The drop' },
        { src: 'media/concert3/hero-concert.jpeg', caption: 'Full house' },
      ],
    },
    {
      src: 'media/concerts/concert-2.webp', title: 'Festival Mainstage', sub: 'Toronto Fest · 2026',
      album: [
        { src: 'media/concerts/concert-2.webp', caption: 'Mainstage wash' },
        { src: 'media/concert3/bg1.jpeg', caption: 'Crowd at dusk' },
      ],
    },
    {
      src: 'media/concerts/concert-3.webp', title: 'Acoustic Night', sub: 'The Vault · 2025',
      album: [
        { src: 'media/concerts/concert-3.webp', caption: 'Single spotlight' },
        { src: 'media/concert3/bg2.jpeg', caption: 'Quiet verse' },
      ],
    },
    {
      src: 'media/concert3/bg1.jpeg', title: 'Bhangra Beats Live', sub: 'Surrey Live · 2026',
      album: [
        { src: 'media/concert3/bg1.jpeg', caption: 'Front row' },
        { src: 'media/concerts/concert-1.webp', caption: 'The pit' },
      ],
    },
    {
      src: 'media/concert3/bg2.jpeg', title: 'Encore', sub: 'Scotiabank Arena · 2025',
      album: [
        { src: 'media/concert3/bg2.jpeg', caption: 'Last song' },
        { src: 'media/concerts/concert-2.webp', caption: 'House lights' },
      ],
    },
    {
      src: 'media/concert3/bg3.jpeg', title: 'Under Lights', sub: 'Cross-Canada Tour · 2025',
      album: [
        { src: 'media/concert3/bg3.jpeg', caption: 'Amber wash' },
        { src: 'media/concert3/hero-concert.jpeg', caption: 'The encore' },
      ],
    },
  ],

  socialPhotos: [
    {
      src: 'media/social/social-1.webp', title: 'Golden at Fifty', sub: '50th Anniversary',
      album: [
        { src: 'media/social/social-1.webp', caption: 'The toast' },
        { src: 'media/social/social-2.webp', caption: 'Family portrait' },
      ],
    },
    {
      src: 'media/social/social-2.webp', title: 'Aria Turns One', sub: 'First Birthday',
      album: [
        { src: 'media/social/social-2.webp', caption: 'Cake smash' },
        { src: 'media/social/social-3.webp', caption: 'The candles' },
      ],
    },
    {
      src: 'media/social/social-3.webp', title: 'The Big Yes', sub: 'Surprise Proposal',
      album: [
        { src: 'media/social/social-3.webp', caption: 'The moment' },
        { src: 'media/social/social-4.webp', caption: 'She said yes' },
      ],
    },
    {
      src: 'media/social/social-4.webp', title: 'Class of 2026', sub: 'Convocation Party',
      album: [
        { src: 'media/social/social-4.webp', caption: 'Caps in the air' },
        { src: 'media/social/social-5.webp', caption: 'Proud parents' },
      ],
    },
    {
      src: 'media/social/social-5.webp', title: 'Sangeet Under Stars', sub: 'Pre-Wedding Sangeet',
      album: [
        { src: 'media/social/social-5.webp', caption: 'Dance floor' },
        { src: 'media/social/social-6.webp', caption: 'The giddha circle' },
      ],
    },
    {
      src: 'media/social/social-6.webp', title: 'Diwali at the Hall', sub: 'Community Diwali',
      album: [
        { src: 'media/social/social-6.webp', caption: 'Diyas lit' },
        { src: 'media/social/social-1.webp', caption: 'Family night' },
      ],
    },
  ],

  brandsPhotos: [
    {
      src: 'media/brands/brand-1.webp', title: 'Night Service', sub: 'Adrak Kitchen',
      album: [
        { src: 'media/brands/brand-1.webp', caption: 'Evening service' },
        { src: 'media/brands/brand-2.webp', caption: 'The pass' },
      ],
    },
    {
      src: 'media/brands/brand-2.webp', title: 'After Hours', sub: 'Velvet Room',
      album: [
        { src: 'media/brands/brand-2.webp', caption: 'The floor' },
        { src: 'media/brands/brand-3.webp', caption: 'Neon bar' },
      ],
    },
    {
      src: 'media/brands/brand-3.webp', title: 'The Penthouse', sub: 'Skyline Realty',
      album: [
        { src: 'media/brands/brand-3.webp', caption: 'Skyline view' },
        { src: 'media/brands/brand-4.webp', caption: 'Living space' },
      ],
    },
    {
      src: 'media/brands/brand-4.webp', title: 'First Pour', sub: 'Chai & Co',
      album: [
        { src: 'media/brands/brand-4.webp', caption: 'The first pour' },
        { src: 'media/brands/brand-5.webp', caption: 'Morning rush' },
      ],
    },
    {
      src: 'media/brands/brand-5.webp', title: 'Grand Opening', sub: 'Maple Banquet',
      album: [
        { src: 'media/brands/brand-5.webp', caption: 'Ribbon cut' },
        { src: 'media/brands/brand-6.webp', caption: 'The ballroom' },
      ],
    },
    {
      src: 'media/brands/brand-6.webp', title: 'Signature Suites', sub: 'The Ivory Hotel',
      album: [
        { src: 'media/brands/brand-6.webp', caption: 'The suite' },
        { src: 'media/brands/brand-1.webp', caption: 'Lobby detail' },
      ],
    },
  ],
};
