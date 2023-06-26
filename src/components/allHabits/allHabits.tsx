import React, {useEffect, useState} from 'react';
import * as S from './allHabits.styled'
import AddButton from "@/components/allHabits/AddButton/addButton";
import Habit from "@/components/allHabits/Habit/Habit";
import CompletedHabit from "@/components/allHabits/CompletedHabit/CompletedHabit";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {loadHabits} from "@/redux/actions";
const AllHabits = () => {
    const axiosAuth = useAxiosAuth()
    const dispatch = useDispatch()
    const clientHabits = useSelector((state) => state)
    const getAllHabits = async() =>{
        try{
            const res = await axiosAuth.post('/api/habit/getActiveHabits')
            dispatch(loadHabits(res.data.tasks))
            console.log(res)
        }
        catch (e) {
            console.log(e)
        }
    }


    useEffect(()=> {
        getAllHabits().catch(e=>console.log(e))
    }, [])


    const showHabits = () =>{
        // @ts-ignore
        return clientHabits?.map(i=>{
            // eslint-disable-next-line react/jsx-key
            return <Habit name={i.name} isCompleted={i.isCompleted} expDate={i.expDate} startDate={i.startDate} taskLength={i.taskLength} habitId={i._id} daysArray={i.daysArray}/>
        })
    }

    return (
        <S.Container>
            <S.Header>Все задачи</S.Header>
            <Button onClick={()=>getAllHabits()}>Запрос</Button>
            <Button onClick={()=>console.log(clientHabits)}>Показать в консоль</Button>
            <S.ButtonContainer><AddButton/></S.ButtonContainer>
            {showHabits()}
        </S.Container>
    );
};

export default AllHabits;