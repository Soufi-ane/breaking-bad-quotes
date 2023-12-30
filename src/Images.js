const images = {
  walter: [
    "https://m.media-amazon.com/images/M/MV5BNTA5MzYxMDExNV5BMl5BanBnXkFtZTgwNzgxMTU5NTM@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTU1MjEwNjQ4MF5BMl5BanBnXkFtZTgwNzI2MTU5NTM@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ3OTAwMTQzNl5BMl5BanBnXkFtZTgwMDQxMjUzMDE@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjE1OTMwNTA5NV5BMl5BanBnXkFtZTgwMDkzOTA1NjM@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMzQwODMxOTg5MF5BMl5BanBnXkFtZTgwNjQ2MTU5NTM@._V1_FMjpg_UX2048_.jpg",
    "img/3.jpg",
    "img/7.jpg",
    "img/13.jpg",
    "img/14.jpg",
  ],
  jesse: [
    "https://m.media-amazon.com/images/M/MV5BMTU3NDkxODQyN15BMl5BanBnXkFtZTgwMjc2MDU5NTM@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTgzMDYwNDAyOF5BMl5BanBnXkFtZTgwMzQ5OTcxMDE@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTU2NzAwNTQ1Ml5BMl5BanBnXkFtZTgwMTIxMDgxMDE@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTU2NzE0NTY5Ml5BMl5BanBnXkFtZTgwMjgyNzc5MjE@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTYzNTE2ODYzOF5BMl5BanBnXkFtZTcwODY5Nzc4OQ@@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTk0MDE4MDQyNl5BMl5BanBnXkFtZTgwODMxMjUzMDE@._V1_FMjpg_UX2048_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjA3MDkyNjQ1NF5BMl5BanBnXkFtZTcwOTg4MzAzOA@@._V1_FMjpg_UX2048_.jpg",
  ],
  saul: [
    "https://m.media-amazon.com/images/M/MV5BMTA4ODExMzg3NzZeQTJeQWpwZ15BbWU3MDM3NDExMjY@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTM5NzY5NjY3NF5BMl5BanBnXkFtZTcwODAyODc4OQ@@._V1_FMjpg_UX1000_.jpg",
    "img/5.jpg",
    "img/8.jpg",
    "img/9.jpg",
    "img/12.jpg",
    "img/15.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTM4MDg2ODg5NV5BMl5BanBnXkFtZTcwMjMyODc4OQ@@._V1_FMjpg_UX2048_.jpg",
  ],
  gus: [
    "https://m.media-amazon.com/images/M/MV5BMzBjZjkzZDMtYzBiMy00OTlhLThjMzYtYTI3Y2QxNzI3NDAyXkEyXkFqcGdeQXVyODc5MTI0NjU@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMzcwNzM5MDQ4NF5BMl5BanBnXkFtZTcwODc4MzU4Ng@@._V1_FMjpg_UX1000_.jpg",
    "img/6.jpg",
  ],
  mike: [
    "https://m.media-amazon.com/images/M/MV5BNzg0MGQ2ODctNDAwNi00N2RhLWFkNzQtMTM4ZDE4MDk3ZmNlXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_FMjpg_UX1000_.jpg",
    "img/2.jpg",
    "img/10.jpg",
  ],
  hank: [
    "https://m.media-amazon.com/images/M/MV5BMjE3MTI0NzY4MV5BMl5BanBnXkFtZTgwMTc2MDU5NTM@._V1_FMjpg_UX1000_.jpg",
    "img/1.jpg",
    "img/11.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTU1NDI4NzU0MF5BMl5BanBnXkFtZTcwMjIyMjM0OA@@._V1_FMjpg_UX2048_.jpg",
  ],
  br: [
    "https://m.media-amazon.com/images/M/MV5BMTk1MTI3NjY1Ml5BMl5BanBnXkFtZTgwMTk2MDU5NTM@._V1_FMjpg_UX2048_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTYyNDk0MTA1N15BMl5BanBnXkFtZTgwNTkxMTU5NTM@._V1_FMjpg_UX2048_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTk0NjI4NTYwOV5BMl5BanBnXkFtZTgwOTc2MDU5NTM@._V1_FMjpg_UX2048_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjAzNzU2MDA2OV5BMl5BanBnXkFtZTgwNjc2MDU5NTM@._V1_FMjpg_UX2048_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTc3MzYwMjYyM15BMl5BanBnXkFtZTcwMzIyMjM0OA@@._V1_FMjpg_UX2048_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTM2NzgxNjYyOF5BMl5BanBnXkFtZTcwNzg4MzAzOA@@._V1_FMjpg_UX2048_.jpg",
  ],
};

export default images;
