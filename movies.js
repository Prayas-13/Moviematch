const movies = [
    // --- International Movies ---
    {
      title: "Inception",
      genre: ["Action", "Sci-Fi", "Thriller"],
      image: "https://image.tmdb.org/t/p/w200/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
    },
    {
      title: "Interstellar",
      genre: ["Sci-Fi", "Drama"],
      image: "https://image.tmdb.org/t/p/w200/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
    },
    {
      title: "Titanic",
      genre: ["Romance", "Drama"],
      image: "https://image.tmdb.org/t/p/w200/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
    },
    {
      title: "Avengers: Endgame",
      genre: ["Action", "Sci-Fi"],
      image: "https://image.tmdb.org/t/p/w200/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    },
    {
      title: "The Matrix",
      genre: ["Sci-Fi", "Action"],
      image: "https://image.tmdb.org/t/p/w200/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
    },
    {
      title: "Joker",
      genre: ["Drama", "Thriller"],
      image: "https://image.tmdb.org/t/p/w200/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
    },
    {
      title: "The Dark Knight",
      genre: ["Action", "Thriller"],
      image: "https://image.tmdb.org/t/p/w200/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
      title: "Frozen II",
      genre: ["Animation", "Adventure"],
      image: "https://image.tmdb.org/t/p/w200/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg"
    },
    {
      title: "Finding Nemo",
      genre: ["Animation", "Adventure"],
      image: "https://image.tmdb.org/t/p/w200/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg"
    },
    {
      title: "The Conjuring",
      genre: ["Thriller", "Drama"],
      image: "https://image.tmdb.org/t/p/w200/wVYREutTvI2tmxr6ujrHT704wGF.jpg"
    },
    {
      title: "John Wick",
      genre: ["Action", "Thriller"],
      image: "https://image.tmdb.org/t/p/w200/5vHssUeVe25bMrof1HyaPyWgaP.jpg"
    },
    {
      title: "La La Land",
      genre: ["Romance", "Drama"],
      image: "https://image.tmdb.org/t/p/w200/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg"
    },
    {
      title: "The Notebook",
      genre: ["Romance", "Drama"],
      image: "https://image.tmdb.org/t/p/w200/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg"
    },
    {
      title: "Toy Story",
      genre: ["Animation", "Comedy"],
      image: "https://image.tmdb.org/t/p/w200/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg"
    },
    {
      title: "The Revenant",
      genre: ["Drama", "Action"],
      image: "https://image.tmdb.org/t/p/w200/oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg"
    },
    {
      title: "Black Panther",
      genre: ["Action", "Sci-Fi"],
      image: "https://image.tmdb.org/t/p/w200/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
    },
    {
      title: "Shutter Island",
      genre: ["Thriller", "Mystery"],
      image: "https://image.tmdb.org/t/p/w200/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg"
    },
    {
      title: "The Lion King",
      genre: ["Animation", "Drama"],
      image: "https://image.tmdb.org/t/p/w200/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg"
    },
    {
      title: "Gladiator",
      genre: ["Action", "Drama"],
      image: "https://image.tmdb.org/t/p/w200/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
    },
    {
      title: "Doctor Strange",
      genre: ["Action", "Sci-Fi"],
      image: "https://image.tmdb.org/t/p/w200/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg"
    },
    {
      title: "Dune",
      genre: ["Sci-Fi", "Drama"],
      image: "https://image.tmdb.org/t/p/w200/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
    },
    {
      title: "The Flash",
      genre: ["Action", "Sci-Fi"],
      image: "https://image.tmdb.org/t/p/w200/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg"
    },
    {
      title: "The Avengers",
      genre: ["Action", "Sci-Fi"],
      image: "https://image.tmdb.org/t/p/w200/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"
    },
    {
      title: "Deadpool",
      genre: ["Action", "Comedy"],
      image: "https://image.tmdb.org/t/p/w200/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg"
    },
    {
      title: "Mission: Impossible – Fallout",
      genre: ["Action", "Thriller"],
      image: "https://image.tmdb.org/t/p/w200/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg"
    },
  
    // --- Indian Movies ---
    {
      title: "RRR",
      genre: ["Action", "Drama"],
      image: "https://image.tmdb.org/t/p/w200/dlC0ed9Ugh3FzydnkBtV4aonP7R.jpg"
    },
    {
      title: "Pathaan",
      genre: ["Action", "Thriller"],
      image: "https://image.tmdb.org/t/p/w200/6LNy1A3Op7U5YqxSyKyfEtvUT4f.jpg"
    },
    {
      title: "3 Idiots",
      genre: ["Drama", "Comedy"],
      image: "https://image.tmdb.org/t/p/w200/66sFjwlPL3kqbyh3T8xMDCkVFTt.jpg"
    },
    {
      title: "Dangal",
      genre: ["Drama", "Sport"],
      image: "https://image.tmdb.org/t/p/w200/p2lVAcPuRPSO8Al6hDDGw0OgMi8.jpg"
    },
    {
      title: "Baahubali: The Beginning",
      genre: ["Action", "Drama"],
      image: "https://image.tmdb.org/t/p/w200/9BA1yeNeNCR4SqEoR4Z7gq8KScx.jpg"
    },
    {
      title: "Baahubali: The Conclusion",
      genre: ["Action", "Drama"],
      image: "https://image.tmdb.org/t/p/w200/mn0LZVZfT28XZ9FbCdmQ8x6bds4.jpg"
    },
    {
      title: "Drishyam",
      genre: ["Thriller", "Drama"],
      image: "https://image.tmdb.org/t/p/w200/7y5VxWpSfnpQZKk1q7fRCWk2e6J.jpg"
    },
    {
      title: "Kantara",
      genre: ["Action", "Drama"],
      image: "https://image.tmdb.org/t/p/w200/dK191F7P7jXhVwa6i7tYjB2reCj.jpg"
    },
    {
      title: "Pushpa: The Rise",
      genre: ["Action", "Drama"],
      image: "https://image.tmdb.org/t/p/w200/fnP6dF0K7nnRhIGBykXBNWZbwj0.jpg"
    },
    {
      title: "Jawan",
      genre: ["Action", "Thriller"],
      image: "https://image.tmdb.org/t/p/w200/3P9QvW0f3G8pZ2TtwkeN8Fbp4Xl.jpg"
    },
    {
      title: "PK",
      genre: ["Comedy", "Drama"],
      image: "https://image.tmdb.org/t/p/w200/p0zFyzGz3Tz9sMQzWqvTr1Xd3hR.jpg"
    },
    {
      title: "Barfi!",
      genre: ["Romance", "Drama"],
      image: "https://image.tmdb.org/t/p/w200/d1XniKULdGdlYKhRFTc4Dj34Cyc.jpg"
    },
    {
      title: "Zindagi Na Milegi Dobara",
      genre: ["Romance", "Drama"],
      image: "https://image.tmdb.org/t/p/w200/tLKHSCXfj6JfVXPbSokLJWtyDqh.jpg"
    },
    {
      title: "Swades",
      genre: ["Drama"],
      image: "https://image.tmdb.org/t/p/w200/yi2vI9q6R0kU0yOqFAYQ94GOQ7A.jpg"
    },
    {
      title: "Gully Boy",
      genre: ["Drama", "Music"],
      image: "https://image.tmdb.org/t/p/w200/fmvSNPZpAsGepFMiZXEsqvx5bAp.jpg"
    },
    {
      title: "Tamasha",
      genre: ["Drama", "Romance"],
      image: "https://image.tmdb.org/t/p/w200/kSeEZ2jXkIVzK4THL5JdWWQrtNq.jpg"
    },
    {
      title: "Chak De! India",
      genre: ["Drama", "Sport"],
      image: "https://image.tmdb.org/t/p/w200/lzXS7gPLpVdCLOJo6oZz9imFxaO.jpg"
    },
    {
      title: "Lagaan",
      genre: ["Drama", "Sport"],
      image: "https://image.tmdb.org/t/p/w200/oM4Tj3GZ8Zc7JqZhpS4MhkFnpV3.jpg"
    },
    {
      title: "Andhadhun",
      genre: ["Thriller", "Comedy"],
      image: "https://image.tmdb.org/t/p/w200/x5n9iEix2PsAKXEvAXFQOmaH7AY.jpg"
    },
    {
      title: "Queen",
      genre: ["Comedy", "Drama"],
      image: "https://image.tmdb.org/t/p/w200/g1wLC8spGb2A4JzLtKaIO2Ys6qD.jpg"
    },
    {
      title: "Stree",
      genre: ["Comedy", "Horror"],
      image: "https://image.tmdb.org/t/p/w200/6fN2iWD7BT84nNf7UeHcaEMuv1D.jpg"
    },
    {
      title: "Article 15",
      genre: ["Drama", "Crime"],
      image: "https://image.tmdb.org/t/p/w200/vkKwlxJm1fEqeIsfMI8q1YbmvzG.jpg"
    },
    {
      title: "Tumbbad",
      genre: ["Fantasy", "Horror"],
      image: "https://image.tmdb.org/t/p/w200/hK3jY0Kg1nHtODgOej6QxH1lm4Z.jpg"
    },
    {
      title: "Shershaah",
      genre: ["War", "Drama"],
      image: "https://image.tmdb.org/t/p/w200/dsNS7xloB4zGWD4s5QvVvCcokJR.jpg"
    },
    {
      title: "Raazi",
      genre: ["Thriller", "Drama"],
      image: "https://image.tmdb.org/t/p/w200/jeTKQ8NE3ZtboChTDIuRxI8tLnb.jpg"
    }
  ];
  