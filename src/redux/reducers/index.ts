import {actionType, DELETE_HABIT, LOAD_HABITS} from "@/redux/constants/actionTypes";
import {axiosAuth} from "@/lib/axios";

const initialState = {
};

function habitReducer(state = initialState, action: actionType) {
    switch (action.type) {
        case LOAD_HABITS: {
            return action.payload
        }
        case DELETE_HABIT: {
            // @ts-ignore
            return initialState?.map(i=>{
                if (i._id==action.payload) return null
            })
        }
    }
}

export default habitReducer;