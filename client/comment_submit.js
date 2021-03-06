Template.commentSubmit.events({
	'submit form': function(e, template) {
		e.preventDefault();

		var $body = $(e.target).find('[name=body]');
		var comment = {
			body: $body.val(),
			postId: template.data._id,
			submitted: new Date()
		};

		var commentBody = e.target.body.value;
		// Check if the comment is not empty
		if (commentBody == "") {
			alert("can't post empty comment. please add something of value.")
		} else {
			Meteor.call('commentInsert', comment);
		}

		// clear field
		e.target.body.value = "";
	}
});	