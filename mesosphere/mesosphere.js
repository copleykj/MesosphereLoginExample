Mesosphere({
	name:"login_form",
	method: function(rawData){
		Mesosphere.login_form.validate(rawData, function(errors, formData){
			if(!errors){
				Meteor.loginWithPassword(formData.email, formData.password, function (error) {
					if(error)
						alert(error.reason);
				});
			}
		});
	},
	fields:{
		email:{
			required:true,
			format:"email",
			message:"Invalid E-Mail Address"
		},
		password:{
			required:true,
			rules:{
				minLength:6,
				maxLength:32
			}
		}
	}
});

Mesosphere({
	name:"signup_form",
	method: function(rawData){
		Mesosphere.signup_form.validate(rawData, function(errors, formData){
			if(!errors){
				Meteor.call('signup', rawData, function (error, result) {
					if(error)
						alert("Sign Up Error!");
					else
						Meteor.loginWithPassword(formData.email, formData.password, function (error) {
							if(error)
								alert(error.reason);
						});
				});
			}
		});
	},
	fields:{
		username:{
			required:true,
			format:"alphanumeric",
			rules:{
				minLength:4,
				maxLength:20
			}
		},
		email:{
			required:true,
			format:"email",
			message:"Invalid E-Mail Address"
		},
		password:{
			required:true,
			rules:{
				minLength:6,
				maxLength:32
			}
		}
	}
});