/*
Name: Ronghui Zhang
Date: 11 / 6 / 2026
Assignment: Week 2 - JSON and Bootstrap
*/

// array of objects containing singers name, dob, and songs
const singers = [
  {
    name: "Taylor Swift",
    dob: "December 13, 1989",
    song: "Cruel Summer, Blank Space ",
  },
  {
    name: "Justin Bieber",
    dob: "March 1, 1994",
    song: "STAY, Love Yourself ",
  },
  {
    name: "Ed Sheeran",
    dob: "February 19, 1991",
    song: "Thinking Out Loud, Shape of You ",
  },
  {
    name: "Rihanna",
    dob: "February 20, 1988",
    song: "Kiss It Better, We Found Love ",
  },
  {
    name: "Bruno Mars",
    dob: "October 8, 1985",
    song: "Just the Way You Are, I Just Might ",
  },
  {
    name: "Khalid",
    dob: "February 11, 1998",
    song: "Better, Eastside ",
  },
];

//finds the table in HTML
const table = document.querySelector("#tableOfSingers");

//Loop through singers to populate table with name, dob, and song
singers.forEach(function (singer) {
  table.innerHTML += `
                    <tr>
                     <td>${singer.name}</td>
                     <td>${singer.dob}</td>
                     <td>${singer.song}</td>
                    </tr>
                    `;
});
