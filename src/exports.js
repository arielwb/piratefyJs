// Default export. Please add your own components you want to export here!
import LoginComponent from './components/login/login.component';
import ListComponent from './components/list/list.component';
import PlaylistComponent from './components/playlists/playlist.component';
import ListPlaylists from './containers/ListPlaylists';
import ViewPlaylistComponent from './containers/ViewPlaylist';

export { LoginComponent };
export { ListComponent };
export { PlaylistComponent };
export { ListPlaylists };
export { ViewPlaylistComponent };

export default {
  LoginComponent,
  ListComponent,
  PlaylistComponent,
  ListPlaylists,
  ViewPlaylistComponent
};
