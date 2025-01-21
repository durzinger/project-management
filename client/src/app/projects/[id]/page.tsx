"use client"

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import ProjectHeader from '@/app/projects/ProjectHeader';
import Board from '../BoardView';
import List from '../ListView';
import TimeLine from '../TimeLineView';
import Table from '../TableView';
import ModalNewTask from '@/components/ModalNewTask';

const Project = () => {
    const params = useParams<{ id: string }>();
    const { id } = params;
    const [activeTab, setActiveTab] = useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false)

    return (
        <div>
            <ModalNewTask
                isOpen={isModalNewTaskOpen}
                onClose={() => setIsModalNewTaskOpen(false)}
                id={id}
            /> 
            <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            { activeTab === "Board" && (
                <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            { activeTab === "List" && (
                <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            { activeTab === "TimeLine" && (
                <TimeLine id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            { activeTab === "Table" && (
                <Table id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
        </div>
    )
}

export default Project