class TodoItem {
  static identity = 0;

  constructor(title, description, dueDate, assignee = null, attachments = null) {
    this.id = ++TodoItem.identity;
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