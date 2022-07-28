export const data = [{
    id:1,
    author : "Ky",
    title : "plapla",
    img:"https://cdn.pixabay.com/photo/2022/01/05/16/58/butterfly-6917552_960_720.jpg",
    avatar:"https://cdn.pixabay.com/photo/2021/10/11/11/12/countryside-6700296__340.jpg",
},
{
    id:2,
    author : "Zu",
    title : "plapla",
    img:"https://cdn.pixabay.com/photo/2022/01/05/16/58/butterfly-6917552_960_720.jpg",
    avatar:"https://cdn.pixabay.com/photo/2021/10/11/11/12/countryside-6700296__340.jpg",
},
{
    id:3,
    author : "Vi",
    title : "plapla",
    img:"https://cdn.pixabay.com/photo/2022/01/05/16/58/butterfly-6917552_960_720.jpg",
    avatar:"https://cdn.pixabay.com/photo/2021/10/11/11/12/countryside-6700296__340.jpg",
},
{
    id:4,
    author : "Vuong",
    title : "plapla",
    img:"https://cdn.pixabay.com/photo/2022/01/05/16/58/butterfly-6917552_960_720.jpg",
    avatar:"https://cdn.pixabay.com/photo/2021/10/11/11/12/countryside-6700296__340.jpg",
}
]

export const newdata =() =>{ 
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
}