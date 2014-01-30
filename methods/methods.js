Meteor.methods({
	signup: function (rawData) {
		var self = this;
		Mesosphere.signup_form.validate(rawData, function(errors, formData){
			if(!errors){
				var uid = Accounts.createUser({
					username: formData.username,
					password: formData.password,
					email: formData.email,
				});
			}
		});
	}
});