import { reactive, readonly } from "vue"
import { Post } from './types'


interface PostState{
    ids: string[],
    all: Record<string, Post>,
    loaded: boolean
}

interface State{
    posts: PostState
}

const initialPostsState = (): PostState =>({
    all:{},
    ids:[],
    loaded:false
});

const initialState = (): State=>({
    posts: initialPostsState()
});

class Store{
    protected state: State
    constructor(initialState: State){
        this.state = reactive(initialState)
    }

    public getState(): State{
        return readonly(this.state);
    }
}