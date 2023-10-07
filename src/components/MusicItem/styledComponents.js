import styled from 'styled-components'

export const MusicListItem = styled.li`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
`
export const TrackMusicContainer = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
`
export const TrackMusicImage = styled.img`
  height: 90px;
  width: 140px;
  margin-right: 20px;
`
export const NameGenreContainer = styled.div``
export const Name = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
`
export const Genre = styled.p`
  color: #3b82f6;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
`
export const DurationDeleteContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Duration = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  margin-right: 50px;
`
export const DeleteIcon = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  color: #ffffff;
`
