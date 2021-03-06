import { combineReducers } from 'redux';
import { tracks } from './tracks'
import { playlists } from './playlists'
import { filterTracks } from './filterTracks' 
import { routerReducer } from 'react-router-redux'

export const rootReducer = combineReducers({
	routing: routerReducer,
	tracks,
	playlists,
	filterTracks
})