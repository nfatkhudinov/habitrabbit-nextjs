import React, {useState} from 'react';
import * as S from './addButton.styled'
import Modal from 'react-modal';

import dayjs from "dayjs";
import './styles.module.css';

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker, DateRange} from '@mui/x-date-pickers-pro';
import { DateRangePicker } from 'rsuite';
import AddNewHabit from "@/components/allHabits/AddNewHabit/AddNewHabit";

const AddButton = () => {
    const [modalOpen, setModalOpen] = useState(false)

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setModalOpen(false);
    }


        const [value, setValue] = React.useState([
            dayjs('2022-04-17'),
            dayjs('2022-04-21'),
])


    return (
        <>
            <S.ModalContainer
                isOpen={modalOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <S.HeaderOfModalContainer>
                <S.HeaderOfModal>Добавить новую</S.HeaderOfModal>
               <S.CloseModalButton onClick={closeModal}/>
            </S.HeaderOfModalContainer>
                <AddNewHabit/>
            </S.ModalContainer>



        <S.Button onClick={()=>setModalOpen(true)}>
            <S.Icon/>
            добавить новую
        </S.Button>
            </>
    );
};

export default AddButton;