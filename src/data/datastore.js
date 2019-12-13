import { writable } from 'svelte/store';

let login = [];
let posts = [];
let signup = [];
let like = []
let loginclick = false;
let uploaddata = false;
let textdata = false; 
let loading = false;



export const loginstore = writable(login);
export const postsstore = writable(posts);
export const signstore = writable(signup);
export const likestore = writable(like);
export const uploaddatastore = writable(uploaddata);
export const loginclickstore = writable(loginclick);
export const textdatastore = writable(textdata);
export const loadstore = writable (loading); 
