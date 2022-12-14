from Task import Task
from MileStone import MileStone

class Project(Task):
    milestones = list()

    def _init_(self):
        pass
    def createMileStone(self):
        Project.milestones.append(MileStone())
    def getMileStone(self, idx):
        return Project.milestones[idx]
    def deleteMileStone(self, idx):
        Project.milestones.remove(Project.milestones[idx])