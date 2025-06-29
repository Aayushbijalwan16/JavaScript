// Filter

const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newnums = mynum.filter(  (num) => {
    return num > 4
}) 
  //console.log(newnums);


  // Example of applying filters
const books = [
    {
        title: 'Book One' , genre: 'Friction', publish: 1998, edition: 2004
    },
    {
        title: 'Book two' , genre: 'Non-Friction', publish: 1976, edition: 1990
    },
    {
        title: 'Book three' , genre: 'Science', publish: 1986, edition: 2020
    },
    {
        title: 'Book Four' , genre: 'History', publish: 2000, edition: 20010
    },
    {
        title: 'Book Five' , genre: 'Friction', publish: 1975, edition: 2004
    },
    {
        title: 'Book Six' , genre: 'Non-Friction', publish: 1999, edition: 2008
    },
    {
        title: 'Book Seven' , genre: 'Friction', publish: 2004, edition: 2012
    },
    {
        title: 'Book Eight' , genre: 'Science', publish: 2007, edition: 20015
    },
    {
        title: 'Book Nine' , genre: 'History', publish: 2012, edition: 2019
    },
];
const userBooks = books.filter( (bk) => bk.genre === 'History')
const usersBooks = books.filter ( bk => bk.publish >= '2000' && bk.genre === 'Friction' )
console.log(usersBooks);
