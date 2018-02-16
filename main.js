Yaks = new Meteor.Collection('yaks');
debugger
Yaks

Comments = new Mongo.Collection("comments");

Router.route('/', {name: 'accounts'})

Router.route('/yakslist', {name: 'yaksList'})

Router.route('/submit', {name: 'yaksSubmit'});

Router.route('/login', {name: 'firstpage'});

Router.route('/yaks/:_id', {
	name: 'yakPage',
	data: function() {
		return Yaks.findOne(this.params._id);
	}
});

