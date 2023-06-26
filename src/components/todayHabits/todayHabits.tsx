import React, {useEffect, useState} from 'react';
import * as S from './todayHabits.styled'
import Task from "@/components/todayHabits/task/task";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import {Button} from "@mui/material";
import dayjs from "dayjs";
const TodayHabits = () => {
    const axiosAuth = useAxiosAuth()
    const [state, setState] = useState()

    const getTodayHabits = async () =>{
        try{
            const res = await axiosAuth.post('/api/habit/getTodayHabits')
            console.log(res.data.habits)
            setState(res.data.habits)
        }
        catch (e) {
            console.log(e)
        }
    }
useEffect(()=>{
    getTodayHabits().catch(e=>console.log(e))
}, [])

    const flagGenerator = (i:any)=>{
        let flag = false;
        // @ts-ignore
        i.daysArray.forEach(q=>{
            if ((q.date===dayjs().format('DD.MM.YYYY'))&&q.completed){
                flag=true
                console.log('FLAG SETTER TO ', flag)
            }
        })
        return flag
    }
    const showTasks = () =>{
        // @ts-ignore
        // eslint-disable-next-line react/jsx-key
        return state?.map(i=><Task name={i.name} isCompleted={i.isCompleted} expDate={i.expDate} startDate={i.startDate} taskLength={i.taskLength} habitId={i._id} daysArray={i.daysArray} flag={flagGenerator(i)}/>)
    }

    return (
        <S.Container>
            <S.Header>Задачи на сегодня, 22 июля 2023 г.</S.Header>
            <Button onClick={getTodayHabits}>Получить задачи на сегодня</Button>
            {showTasks()}
        </S.Container>
    );
};

export default TodayHabits;