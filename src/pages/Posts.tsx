import { useEffect, useState } from "react"

import { Link } from "react-router-dom"
import Paginate from "../components/Pagination"

export default function Posts() {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(8)

  interface Post {
    cover: string
    title: string
    desc: string
  }

  const covers = [
    "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?w=2000&t=st=1710164318~exp=1710164918~hmac=4becbb02ba08f44f4f658f6846bb78e6a5c6253dd6b007c8e3c5f6e5e99238cd",
    "https://img.freepik.com/free-photo/background-gradient-lights_23-2149304985.jpg?w=2000&t=st=1710164380~exp=1710164980~hmac=87d108add02abe549af931674aeffe7a475f297ccaf02e6ffbfcbade9108ecd6",
    "https://img.freepik.com/free-photo/abstract-gradient-neon-lights_23-2149279177.jpg?w=2000&t=st=1710164409~exp=1710165009~hmac=fddb7f09e2d2327a7ccb247736a62fbcffe59fce47c5ca68b968913ad30bb4d6",
    "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg?w=2000&t=st=1710164448~exp=1710165048~hmac=8d0221bb731214d45b22ac54e9b50d1ef0ab810e24971122adc1699ebc442ae9",
    "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg?w=2000&t=st=1710164448~exp=1710165048~hmac=8d0221bb731214d45b22ac54e9b50d1ef0ab810e24971122adc1699ebc442ae9",
    "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3798.jpg?w=2000&t=st=1710164514~exp=1710165114~hmac=cd4f2b591ee946e90d5c5dd7ddc4da611a4cd1644a0342cf9705cbc7ee0866c9",
  ]

  const titles = [
    "The Great Adventure",
    "Mystery of the Lost Kingdom",
    "Echoes of Eternity",
    "Beyond the Horizon",
    "Secrets of the Cosmos",
    "Realm of Dreams",
    "Legends of the Deep",
    "Whispers in the Wind",
    "Chronicles of Time",
    "Pathways to Infinity",
    "Riddles of the Sphinx",
    "Tales of the Unknown",
    "Enigma of the Ages",
    "Sagas of the Stars",
    "Lost in Translation",
    "Echoes of Destiny",
    "Shadows of Reality",
    "Voyage of Discovery",
    "Whispers from the Past",
    "Infinity's Edge",
  ]

  const descriptions = [
    "A thrilling journey into the unknown",
    "Unravel the enigma of ancient legends",
    "Discover the hidden truths of the universe",
    "An epic tale of heroism and sacrifice",
    "Explore the mysteries of dreams and reality",
    "Dive into the depths of forgotten realms",
    "Whispers carry secrets across time and space",
    "Uncover the secrets of ancient civilizations",
    "A journey through the annals of history",
    "Unlock the door to infinite possibilities",
    "Solve the riddles that defy mortal understanding",
    "Tales of adventure and discovery await",
    "Decipher the enigma of existence itself",
    "Explore the wonders of the cosmos",
    "Lost but not forgotten, stories endure",
    "Destiny echoes across the ages",
    "Reality is not what it seems",
    "Discover new worlds beyond imagination",
    "Listen closely to the whispers of time",
    "Where reality meets the infinite",
  ]

  const posts: Post[] = []

  for (let i = 0; i < 20; i++) {
    const randomCover = covers[Math.floor(Math.random() * covers.length)]
    const randomTitle = titles[Math.floor(Math.random() * titles.length)]
    const randomDesc =
      descriptions[Math.floor(Math.random() * descriptions.length)]

    posts.push({
      cover: randomCover,
      title: randomTitle,
      desc: randomDesc,
    })
  }

  console.log(posts)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost) // we loop from here

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      <div className="">
        <div className="flex flex-col  dark:text-white">
          <div className="text-[14px]">
            <span className="cursor-pointer hover:underline">
              <Link to="/">Pages</Link>
            </span>
            <span className="mx-2">/</span>
            <span className="cursor-pointer  hover:underline">
              {" "}
              <Link to="/posts">Posts</Link>
            </span>
          </div>
          <h1 className="text-3xl font-bold cursor-pointer">Posts</h1>
        </div>
        {/** posts container  */}
        <div className="bg-white dark:bg-[#121212] dark:text-white rounded  shadow my-4 p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-6">
            {currentPosts.map((post, index) => (
              <div className="flex flex-col">
                <img
                  className="rounded cursor-pointer"
                  src={post.cover}
                  alt=""
                />
                <h2 className="font-bold">{post.title}</h2>
                <p className="text-[0.9rem]">{post.desc}</p>
              </div>
            ))}
          </div>
          {/** pagination */}
          <Paginate
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  )
}
