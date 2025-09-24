import Header from "../../../components/Header";
import TrackList from "../../../components/TrackList";
import Player from "../../../components/Player";

// Dữ liệu mẫu, sau này có thể chuyển ra JSON hoặc API
const playlists = {
  "1": {
    title: "Playlist Avicii",
    subtitle: "Những ca khúc hay nhất của Avicii",
    tracks: [
      { title: "The Night", artist: "Avicii", cover: "/assets/covers/night.jpg" },
      { title: "Wake Me Up", artist: "Avicii", cover: "/assets/covers/wake.jpg" },
    ],
  },
  "2": {
    title: "Playlist Lauv",
    subtitle: "Những bài hát nổi bật của Lauv",
    tracks: [
      { title: "Paris in the Rain", artist: "Lauv", cover: "/assets/covers/paris.jpg" },
      { title: "I Like Me Better", artist: "Lauv", cover: "/assets/covers/like.jpg" },
    ],
  },
};

export default function PlaylistPage({ params }) {
  const playlist = playlists[params.id];

  if (!playlist) {
    return (
      <>
        <Header />
        <div className="container" style={{ padding: "2rem" }}>
          <h2>Playlist không tồn tại</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <TrackList
        title={playlist.title}
        subtitle={playlist.subtitle}
        tracks={playlist.tracks}
      />
      <Player />
    </>
  );
}
