import {DELETE_HABIT, LOAD_HABITS} from "@/redux/constants/actionTypes";


export function loadHabits(payload:any) {
    return { type: LOAD_HABITS,
             payload: payload };
}

export function deleteHabit(payload:any) {
    return { type: DELETE_HABIT,
        payload: payload };
}