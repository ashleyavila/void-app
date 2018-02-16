Template.yaksSubmit.events({
'submit form': function(e) {
e.preventDefault();

var post = {
postTitle: $(e.target).find('[name=postTitle]').val(),
yak: $(e.target).find('[name=yak]').val()
};

post._id = Yaks.insert(post);
Router.go('yaksList', post);
}
});