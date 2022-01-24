import { PayloadAction } from '@reduxjs/toolkit'

export const initialState: {posts: string[], loading: boolean, hasErrors: boolean} = {
    posts: [], 
    loading: false, 
    hasErrors: false,
}

export default function postsReducer(state = initialState, action: PayloadAction<string>){
    switch(action.type){
        default: 
        return state
    }
}