$(document).ready(function(){
    $("#sign-up-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:6                
            },
            sname:{
                required:true,
                minlength:4
            },
            EmailAddress:{
                required:true,
                email:true
            },
            password:{
                minlength:6
            },
            Day:{
                required:true,
            },
            Gender:{
                required:true
            },
            Month:{
                required:true
            },
            year:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter First Name",
                minlength:"Enter atleast 4 character",
                maxlength:"Enter minimum 6 characters"                
            },
            sname:{
                required:"Enter SurName",
                minlength:"Enter atleast 4 character",
            },
            Day:{
                required:"Enter Day",
            },
            Gender:{
                required:"Click gender",
            },
            Month:{
                required:"Enter month",
            },
            year:{
                required:"Enter Year",
            }

        }
        
    })
})