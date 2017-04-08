var m = require("mithril");

var Search = require("../models/search");

var ImageComponent = {
    view : function (vnode) {
        return m("figure", [
            m("header", "Ägare: " + vnode.attrs.image.owner),
            m("img", { src : Search.serverBaseUrl + "/id/" + vnode.attrs.image.id }),
            m("figcaption", "Kommentar: " + vnode.attrs.image.comment),
        ]);
    }
};

module.exports = {
    oninit : Search.getAll,
    view : function () {
        return m("main", [
            m("h1", "BILD SÖK"),
            m("form", { onsubmit : function (event) {
                event.preventDefault();
            }}, [
                m("label", "Sök på kategori"),
                m("input.input[type=text][placeholder=Kategori]", {
                    oninput: m.withAttr("value", function(value) {Search.searchTerm = value})
                }),
                m("button", { onclick : Search.doSearch }, "Sök")
            ]),
            m("h1.search-header", Search.title),
            m("div.search-results", Search.images.map(function (image) {
                return m(ImageComponent, {image : image});
            }))
        ]);
    }
};
