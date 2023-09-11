import { defineStore } from "pinia";

export const useMyStore = defineStore('myStore', {

    state:() => ({
        Activity: '',
        Type: '',
        Participants: '',
    }),
    actions: {
        setLaatsteData(data){
            console.log(data);
            console.log('this is data');
            this.Activity = data.activity;
            this.Type = data.type;
            this.Participants = data.participants;
        },
        clearLocalStore(){
            localStorage.clear();
        }
    },
    persist: {
        paths: true,
    },
});