// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    
{
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  
{
    "name":"John",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        4,
        2,
        4,
        3,
        5,
        4,
        2,
        1,
        2,
        1
      ]
  },
  {
    "name":"Sarah",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        4,
        2,
        4,
        3,
        5,
        4,
        2,
        1,
        2,
        1
      ]
  }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;