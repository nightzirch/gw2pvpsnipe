$(document).ready(function() {
    pvpSnipe.ready();
});

var pvpSnipe = {
    /* View Model */
    vm: null,
    
    /* Ready */
    ready: function() {
        pvpSnipe.vm = new pvpSnipe.viewModels.pvpSnipe();
        ko.applyBindings(pvpSnipe.vm, document.querySelector(".pvpContainer"));
    },
    
    /* Classes */
    classes: {
        Player: function(name, id, rank) {
            this.name = (name) ? ko.observable(name) : ko.observable();
            this.id = (id) ? ko.observable(id) : ko.observable();
            this.rank = (rank) ? ko.observable(rank) : ko.observable();
        }
    },
    
    /* View Models */
    viewModels: {
        pvpSnipe: function() {
            var self = this;
            
            // Players
            self.players = ko.observableArray([]);
            
            // Team One
            self.teamOne = ko.observableArray([
                new pvpSnipe.classes.Player("Elriwun Awesome", 34),
                new pvpSnipe.classes.Player(),
                new pvpSnipe.classes.Player(),
                new pvpSnipe.classes.Player(),
                new pvpSnipe.classes.Player()
            ]);
            
            // Team Two
            self.teamTwo = ko.observableArray([
                new pvpSnipe.classes.Player(),
                new pvpSnipe.classes.Player(),
                new pvpSnipe.classes.Player(),
                new pvpSnipe.classes.Player(),
                new pvpSnipe.classes.Player()
            ]);
        }
    }
}