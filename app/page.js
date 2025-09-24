import Header from "../components/Header.js";
import Hero from "../components/Hero.js";
import Trending from "../components/Trending.js";
import TrackList from "../components/TrackList.js";
import Player from "../components/Player.js";



export default function Home() {
  const demoTracks = [
    { title: "Paris in the Rain", artist: "Lauv", cover: "/assets/covers/paris.jpg" },
    { title: "Pano", artist: "Zack Tabudlo", cover: "/assets/covers/pano.jpg" },
  ];

  return (
    <>
      <Header />
      <Hero />
      <Trending />
      <TrackList
        title="Playlist hôm nay"
        subtitle="Chọn bài để phát. Có thể gõ tìm kiếm bên trên."
        tracks={demoTracks}
      />
      <Player />
    </>
  );
}
