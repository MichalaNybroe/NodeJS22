import { writable } from "svelte/store"; //findes også readable

export let fridgeMessageStore = writable("Write your message...");//Normalt skal denne hedde det samme som filnavnet altså fridgeBulletinStore

