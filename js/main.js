// tasks.json main array
var data;

function updateTasksJson() {
$.ajax({
           type: "POST",
           url: "json.php",  //the name and location of your php file
           data: jsonString,      //add the converted json string to a document.
          }); // End $.ajax()
};  // End of updateTaskJson()

//change CSS for tasks
function doneTasks() {
  $('.check').click(function() {
    if ( $(this).is(':checked') ) {
      $(this).parent('.task').addClass('done');
      $(this).attr('checked', 'checked');

      for(var object in data) {


        if($(this).attr('id') == data[object].id ) {
          console.log(data[object].status);
          data[object].status = 'complete';
          jsonString = 'newData='+JSON.stringify(data);

          updateTasksJson();
        }
      }

    } else {
      $(this).parent('.task').removeClass('done');
      $(this).removeAttr('checked');
      for(var object in data) {

        if($(this).attr('id') == data[object].id ) {
          console.log(data[object].status);
          data[object].status = 'new';
          jsonString = 'newData='+JSON.stringify(data);

          updateTasksJson();
          
        }
      }
    };
  }); // End $('.check').click()
};// End of doneTasks()

$(document).ready(function() {
  // Output existing tasks
  $.ajax({
  	url: 'tasks.json',
  	cache: false
  }) // End $.ajax()
  .done(function(json){

    data = json;
    
    $.each(json, function(index, element) {
      if (element.status == 'new') {
      var html = '<li><label class="task"><input type="checkbox" class="check" id="' + element.id + '">' + element.task +'</label></li>';
      $('.list').append(html);
    } else {
      var html = '<li><label class="task done"><input type="checkbox" class="check"  id="' + element.id + '" checked="checked">' + element.task +'</label></li>';
      $('.list').append(html);
    }
    }); // End $.each()

    doneTasks();
  }); // End .done()


  // Add new task
  $('#add').submit(function() {
    
    var value = $('#text').val();
    var spaces = /^\s+$/;
    if (value != '' || value != spaces.test(value)) {
      if (data == undefined) {
        data = [];
      };

      jsonObj = {
        id: data.length + 1,
        task: value,
        status: 'new'
      };
      
      data.push(jsonObj);
          
      jsonString = 'newData='+JSON.stringify(data);
    
    
      var html = '<li><label class="task"><input type="checkbox" class="check" id="' + jsonObj.id + '">' + value +'</label></li>';
    };

    $('.list').append(html);

    doneTasks(); 

    updateTasksJson();

  }); // End $('#add').submit()

  $('#clear').click(function() {
    data = [];
    console.log(data);
    jsonString = 'newData='+JSON.stringify(data);
    $('.list li').remove();
    updateTasksJson();
});

}); // End $(document).ready()