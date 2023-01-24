// const data = [
//   {id:1,movie_title:"Misérables, Les",hit_count:23,user_id:1,created_at:"2022-08-11 00:40:32",name:"Trix Hannaby"},
//   {id:3,movie_title:"Captain Ron",hit_count:1,user_id:1,created_at:"2022-08-14 18:09:47",name:"Trix Hannaby"},
//   {id:4,movie_title:"Siberia",hit_count:37,user_id:9,created_at:"2022-02-08 02:44:29",name:"Jimmy Weld"},
//   {id:5,movie_title:"Girl, The",hit_count:82,user_id:6,created_at:"2022-08-29 00:02:21",name:"Meredith Spendlove"},
//   {id:6,movie_title:"44 Minutes: The North Hollywood Shoot-Out",hit_count:2,user_id:4,created_at:"2022-12-06 20:33:12",name:"Kimmy Hulks"},
//   {id:7,movie_title:"C'mon Man",hit_count:62,user_id:2,created_at:"2022-08-18 16:43:05",name:"Mead Lantiff"},
//   {id:8,movie_title:"Jim Jefferies: Alcoholocaust",hit_count:4,user_id:8,created_at:"2022-07-05 16:49:03",name:"Duke Davsley"},
//   {id:9,movie_title:"Grand Budapest Hotel, The",hit_count:35,user_id:9,created_at:"2022-01-10 08:22:27",name:"Jimmy Weld"},
//   {id:10,movie_title:"Ju-on: The Curse 2",hit_count:64,user_id:7,created_at:"2022-10-18 21:59:19",name:"Tuck Francis"},
//   {id:11,movie_title:"Looney Tunes: Back in Action",hit_count:17,user_id:8,created_at:"2022-10-26 06:56:30",name:"Duke Davsley"},
//   {id:12,movie_title:"Undertaker and His Pals, The",hit_count:91,user_id:6,created_at:"2022-02-22 11:23:11",name:"Meredith Spendlove"},
//   {id:13,movie_title:"BlinkyTM",hit_count:4,user_id:5,created_at:"2022-01-08 21:02:09",name:"Margot Haward"},
//   {id:14,movie_title:"Alien Predator (Mutant II) (Falling, The)",hit_count:47,user_id:2,created_at:"2022-02-28 15:55:13",name:"Mead Lantiff"},
//   {id:15,movie_title:"Lorenzo's Oil",hit_count:26,user_id:6,created_at:"2022-01-21 02:46:27",name:"Meredith Spendlove"},
//   {id:16,movie_title:"Beyond Re-Animator",hit_count:88,user_id:5,created_at:"2022-04-26 13:44:52",name:"Margot Haward"},
//   {id:17,movie_title:"Mississippi Burning",hit_count:64,user_id:8,created_at:"2022-11-14 05:23:58",name:"Duke Davsley"},
//   {id:18,movie_title:"Last Circus, The (Balada triste de trompeta) (Sad Trumpet Ballad, A)",hit_count:55,user_id:1,created_at:"2022-03-24 06:27:21",name:"Trix Hannaby"},
//   {id:19,movie_title:"Power and Terror: Noam Chomsky in Our Times",hit_count:85,user_id:3,created_at:"2022-04-30 19:43:43",name:"Margette Scaplehorn"},
//   {id:20,movie_title:"Grumpy Cat's Worst Christmas Ever",hit_count:58,user_id:9,created_at:"2022-12-13 00:46:27",name:"Jimmy Weld"}
//   ] 
  
//   // const a = data.map(id => ({
//   //   ...data,
//   //   id: id.id
//   // }))

//   // const s = a.find(a => a.name)



//   // console.log(s)

//   for (let i = 0; i < data.length; i++) {
//     const definedata = data[i].movie_title
//     const definedata1 = data[i].id
//     console.log(definedata,definedata1)
    
    
//   }

//   // 영화 리스트
//   fetch('http://localhost:3100/movies')
//   .then((response) => response.json())
//   .then((data) => {
//       console.log("전체 영화 가져오기 : ", data)
//   });

// // 영화 하나 가져오기
// fetch('http://localhost:3100/movies/1')
//   .then((response) => response.json())
//   .then((data) => {
//       console.log("영화 하나 가져오기 :",  data)
//   });


// // 영화 등록하기
// fetch('http://localhost:3100/movies', {
//   method: 'POST',
//   headers: {
//       'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//       movie_title: "avatar3",
//       user_id: 9
//   }), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
// }).then((response) => response.json())
//   .then((data) => {
//       console.log("register 결과 : ", data)
//   }); 
  