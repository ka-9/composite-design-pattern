class Task{
    getTaskName(){
        return this.taskName;
    }
    setTaskName(taskName){
        this.taskName=taskName;
    }
    getStartDate(){
        return this.startDate;
    }
    setStartDate(startDate){
        this.startDate=startDate;
    }
    getEndDate(){
        return this.endDate;
    }
    setEndDate(endDate){
        this.endDate=endDate;
    }
    getDescription(){
        return this.description;
    }
    setDescription(description){
        this.description=description;
    }
    getBudget(){
        return this.budget;
    }
    setBudget(budget){
        this.budget=budget;
    }
}

//Project
class Sprint extends Task {

    constructor(){
        super();
        this.epics=[];
    }
	
	addEpic() {
		this.epics.push(new Epic())
	}
	
	getEpic(idx) {
		return this.epics[idx];
	}
	
	deleteEpic(idx) {
		this.epics.splice(idx,1);
	}

    clearSprint() {
        this.epics.splice(0);
    }
	
}

class Epic extends Task {
	constructor(){
        super();
        this.userStories=[];
        this.subtasks=[];
        this.opTasks=[]
    }
	
	addUserStory() {
		this.userStories.push(new UserStory());
	}
	
	getUserStory(idx) {
		return this.userStories[idx];
	}
	
	deleteUserStory(idx) {
		this.userStories.splice(idx,1);
	}

    addSubTask(){
        this.subtasks.push(new Task());
    }
        
    getSubTask(idx){
        return this.subtasks[idx];
    }
        
    deleteSubTask(idx){
        this.subtasks.splice(idx, 1);
    }
        
    addOptionalTask(){
        this.opTasks.push(new Task())
    }

    getOptionalTask(idx){
        return this.opTask[idx];
    }
    deleteOptionalTask(idx){
        this.opTask.splice(idx,1);
    }
	
    calculateBudget(){
        var totalBudget = 0

        for(let subtask of subtasks) {
			totalBudget += subtask.getBudget();
		}
		for(let optionalTask of opTasks) {
			totalBudget += optionalTask.getBudget();
		}
		return totalBudget;
    }
}

class UserStory extends Task{
    constructor()
    {
        super();
    }
}

export {Task, Epic, UserStory, Sprint};