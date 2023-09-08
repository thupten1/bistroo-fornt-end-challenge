import { defineStore } from "pinia";

export const useMyStore = defineStore('myStore', {

    state:() => ({
        // laatsteData: null,
        Activity: '',
        Type: '',
        Participants: '',
    }),
    actions: {
        setLaatsteData(data){
            console.log(data);
            console.log('this is data');
            // this.laatsteData = data;
            this.Activity = data.activity;
            this.Type = data.type;
            this.Participants = data.participants;
        },
    },
    persist: {
        paths: true,
    },
});