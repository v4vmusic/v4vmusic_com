import { writable } from 'svelte/store';
import { dev } from '$app/environment';

export const helloWorld = writable('Hello World');
