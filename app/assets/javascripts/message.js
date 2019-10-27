$(function(){ 
  function buildHTML(message){
    var image = ( message.image ) ? `<img class= "lower-message__image" src=${message}>` : "";
     var html =
      `<div class="message" data-message-id=${message.id}>
         <div class="upper-message">
           <div class="upper-message__user-name">
             ${message.user_name}
           </div>
           <div class="upper-message__date">
             ${message.date}
           </div>
         </div>
         <div class="lower-message">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
         ${image}
       </div>`
     return html;
   } 

  $(function(){
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      $('form')[0].reset();
    })
    .fail(function(){
      alert('error');
    });
    return false;
    });
  });
});
