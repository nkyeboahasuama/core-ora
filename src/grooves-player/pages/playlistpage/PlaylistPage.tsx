import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../layout/header/Header";

import {
  HeaderOne,
  HeaderThree,
  Normal,
} from "../../shared/atoms/Typography.styled";
import {
  PlaylistHeaderWrapper,
  PlaylistImage,
  PlaylistPageWrapper,
} from "./PlaylistPage.styles";

import SongContainer from "../../shared/songContainer/SongContainer";
import { ProfileDetails } from "../profilepage/ProfilePage.styles";
import { spotifyApiService } from "../../../services/spotifyApiServices";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { ITrack } from "../../types";

const PlaylistPage = () => {
  const [playlist, setPlaylist] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const playlists = useAppSelector((state) => state.playlists);
  const tracks: ITrack[] = useAppSelector(
    (state) => state.currentDisplayedTracks
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchPlaylistTracks = async () => {
      if (id) {
        const playlistResponse = playlists[parseInt(id)];

        try {
          setPlaylist(playlistResponse);
          setLoading(true);
          await spotifyApiService.getPlaylistTracks(playlistResponse, dispatch);
        } catch (error) {
          console.error(error);
        } finally {
          // console.log("here")
          setLoading(false);
        }
      }
    };

    fetchPlaylistTracks();
  }, [id]);

  console.log(loading);
  return (
    <PlaylistPageWrapper>
      <Header />

      <PlaylistHeaderWrapper>
        {playlist && <PlaylistImage src={playlist.images[1].url} />}
        <ProfileDetails>
          <HeaderThree>Playlist</HeaderThree>
          <HeaderOne style={{ fontSize: "50px" }}>
            {playlist ? `${playlist.name}` : ""}
          </HeaderOne>
          <span>
            {playlist && (
              <>
                <Normal>{playlist.tracks.total} songs</Normal>
                <Normal style={{ fontStyle: "italic" }}>
                  {playlist && playlist.description}
                </Normal>
              </>
            )}
          </span>
        </ProfileDetails>
      </PlaylistHeaderWrapper>

      {loading ? (
        <HeaderOne>Loading...</HeaderOne>
      ) : (
        <>
          {tracks &&
            tracks.map((song: ITrack, idx: number) => (
              <SongContainer song={song} key={song.id} />
            ))}
        </>
      )}
    </PlaylistPageWrapper>
  );
};

export default PlaylistPage;
