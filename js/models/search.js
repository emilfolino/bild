var m = require("mithril");


var Search = {
    serverBaseUrl : "http://klwpi1.clab.bth.se:1337",
    title : "Alla bilder",
    searchTerm : "",
    images : [],
    doSearch : function () {
        if (Search.searchTerm !== "") {
            m.request({
                url : Search.serverBaseUrl + "/search/" + Search.searchTerm,
                method : "GET"
            }).then(function (result) {
                Search.images = result;
                Search.title = "Sökning: " + Search.searchTerm;
            });
        }
    },
    getAll : function () {
        m.request({
            url : Search.serverBaseUrl + "/all",
            method : "GET"
        }).then(function (result) {
            Search.images = result;
        });
    }
};

module.exports = Search;
