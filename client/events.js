Template.main.events({
    "change .account-select": function(event) {
        event.preventDefault();

	FlowRouter.go("set", {address:event.target.value});
    },
});

Template.mails.events({
	"click .mail": function(event) {
		FlowRouter.go("/" + $(event.currentTarget).data("hash"));
	},
});
