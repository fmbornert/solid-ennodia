import {cache } from '@solidjs/router'

export const getPoIs = cache(async () => {
    'use server';
    try {
        return await mockPoIs();
    } catch (error){
        return null
    }
}, 'all-pois');

function mockPoIs(){
    return "{'allpois':[{'name':'poi-1', 'position': {'latitude':0, 'longitude':0}},{'name':'poi2', 'position': {'latitude':10, 'longitude':10}}]}";
}