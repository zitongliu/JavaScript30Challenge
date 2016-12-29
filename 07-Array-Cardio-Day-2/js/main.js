
  // ## Array Cardio Day 2

  const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  var has19 = people.some(function(person){
    var currentYear = new Date().getFullYear();
    return (currentYear - person.year) >= 19;
  });
  console.log(has19);

  // Array.prototype.every() // is everyone 19 or older?

  var all19 = people.every(function(person){
    var currentYear = new Date().getFullYear();
    return (currentYear - person.year) >= 19;
  });
  console.log(all19);


  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423

  var commentsWithID823423 = comments.find(function(comment){
    return comment.id === 823423;
  });
  console.log(commentsWithID823423.text);

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
  var commentsWithIDIndex = comments.findIndex(function(comment){
    return comment.id === 823423;
  });
  console.log(commentsWithIDIndex);
  comments.splice(commentsWithIDIndex,1);
  console.log(comments);
