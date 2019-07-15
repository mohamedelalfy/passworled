
// Form validation code will come here.
function validate()
{
   
      if( document.myForm.FName.value == "" )
      {
      alert( "Please provide your First Name!" );
      document.myForm.FName.focus() ;
      return false;
      
      }

      else if( document.myForm.LName.value == "" )
      {
      alert( "Please provide your Last Name!" );
      document.myForm.LName.focus() ;
      return false;
      }

      else if( document.myForm.Email.value == "" )
      {
      alert( "Please provide your Email Address!" );
      document.myForm.Email.focus() ;
      return false;
      }
      else if( document.myForm.Password.value == "" )
      {
      alert( "Please provide your Password!" );
      document.myForm.Password.focus() ;
      return false;
      }   
      return true;
}

//-----------------------------------------------

function validate2()
{
   
      if( document.Form.email.value == "" )
      {
      alert( "Please provide your Email Address!" );
      document.Form.email.focus() ;
      return false;
      
      }

      else if( document.Form.password.value == "" )
      {
      alert( "Please provide your Password!" );
      document.Form.password.focus() ;
      return false;
      }
      return true;
}

//-----------------------------------------------

$('.tab a').on('click', function (e) 
{
  e.preventDefault();
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});

