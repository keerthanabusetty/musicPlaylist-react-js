import {AiOutlineDelete} from 'react-icons/ai'

import {
  MusicListItem,
  TrackMusicContainer,
  TrackMusicImage,
  NameGenreContainer,
  Name,
  Genre,
  DurationDeleteContainer,
  Duration,
  DeleteIcon,
} from './styledComponents'

const MusicItem = props => {
  const {musicItemDetails, onClickDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = musicItemDetails

  const onDeleteTrack = () => {
    onClickDeleteTrack(id)
  }

  return (
    <MusicListItem>
      <TrackMusicContainer>
        <TrackMusicImage src={imageUrl} alt="track" />
        <NameGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameGenreContainer>
        <DurationDeleteContainer>
          <Duration>{duration}</Duration>
          <DeleteIcon
            type="button"
            onClick={onDeleteTrack}
            data-testid="delete"
          >
            <AiOutlineDelete size={25} />
          </DeleteIcon>
        </DurationDeleteContainer>
      </TrackMusicContainer>
    </MusicListItem>
  )
}
export default MusicItem
