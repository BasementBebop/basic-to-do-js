$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#task-name").val();
    var newTask = { task: inputtedTask };

    $("ul#tasks").prepend("<li><span class='task'>" + newTask.task + "</span></li>");

    $("input#task-name").val("");

    $(".task").last().click(function() {
      $(".task").replaceWith("<li><span class='completed-task'>"
                          + newTask.task + "</span></li>");
    });

  });
});
