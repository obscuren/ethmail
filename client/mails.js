Template.mails.helpers({
	mails: function() {
		return Mails.find({to: this.address});
	},
});

Template.mails.events({
	"click .mail": function(event) {
		FlowRouter.go("/" + $(event.currentTarget).data("hash"));
	},
});
