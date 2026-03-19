class TodoItem {
  static sequencer = 0;

  constructor(title, description, dueDate, assignee = 0, attachments = null) {
    this.id = ++TodoItem.sequencer;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.assignee = assignee;
    this.attachments = attachments;
    this.createdDate = new Date();
    this.completed = false;
  }
}

export default TodoItem;