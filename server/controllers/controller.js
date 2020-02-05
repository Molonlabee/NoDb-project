
const data = [
    {
        id: 0,
        show:'Breaking Bad',
        favChar:'Jessie Pinkmen',
        img:"https://vignette.wikia.nocookie.net/breakingbad/images/9/97/Jesse_2010.png/revision/latest?cb=20191126213705"  
    },
    {
        id: 1,
        show:'Game of Thrones',
        favChar:'Tyrion',
        img:"https://i.pinimg.com/originals/a9/48/8a/a9488a984145e5d1e94d635891eda8f9.png"  
    },  
    {
        id: 2,
        show:'Arthur Read',
        favChar:'baxter',
        img:"https://img.favpng.com/13/16/21/buster-baxter-arthur-read-buster-bunny-nigel-ratburn-character-png-favpng-HqUfZpxx1ubDvPKFhKXdat00i.jpg"  
    },  
    {
        id: 3,
        show:'Euphoria',
        favChar:'Rue',
        img:"https://i.pinimg.com/564x/a4/07/5f/a4075f13b5cfbd0f7ff764a08bfc436c.jpg"  
    },  
    {
        id: 4,
        show:'Prison Break',
        favChar:'Scofield',
        img:"https://www.writeups.org/wp-content/uploads/Michael-Scofield-Prison-Break-Wentworth-Miller.jpg"  
    },  
    {
        id: 5,
        show:'Walking Dead',
        favChar:'Daryl',
        img:"https://images-na.ssl-images-amazon.com/images/I/71FD4f8q2wL._AC_SX425_.jpg"  
    } 
    
]

//get fuction

let getShows = (req, res) => {
    res.status(200).send(data);
}
//post fuction

//put fuction

//delete fuction



module.exports = {
    getShows
};
