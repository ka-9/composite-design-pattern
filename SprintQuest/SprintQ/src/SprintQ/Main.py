from Project import Project
from MileStone import MileStone
from Task import Task 
from MainTask import MainTask

class Main():
    project1 = Project()
    project1.setTaskName("Project 1")
    project1.createMileStone()
    print(project1.getTaskName())

    m1 = project1.getMileStone(0);
    m1.setTaskName("Milestone 1")
    print(m1.getTaskName());
    
    m1.createMainTask();
    mt1 = m1.getMainTask(0);

    mt1.setTaskName(mt1, "Finish Backend")
    mt1.setDescription(mt1, "Literally Hell")
    mt1.setStartDate(mt1, "11/20/2022")
    mt1.setEndDate(mt1, "11/20/2023")

    mt1.setBudget(mt1, mt1.calculateBudget(mt1))

    print(mt1.getTaskName(mt1), mt1.getDescription(mt1), mt1.getStartDate(mt1), mt1.getEndDate(mt1))
