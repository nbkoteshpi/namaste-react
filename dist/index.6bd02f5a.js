// // const heading = React.createElement(tag,{object}, content);
// const heading = React.createElement('h2', {/* Attributes */}, 'Hello React World');
// let selectRoot = document.getElementById('root-container')
// const root = ReactDOM.createRoot(document.getElementById('root-container'));
// root.render(heading); // this is an Object not an html element
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {
            id: "h1tag"
        }, "hello this is h1 tag"),
        React.createElement("h2", {
            id: "h2tag"
        }, "hello this is h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {
            id: "h1tag"
        }, "hello this is h1 tag"),
        React.createElement("h2", {
            id: "h2tag"
        }, "hello this is h2 tag")
    ])
]);
// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz:'abc' },
//     "this is parent div"
//   );
console.log(parent);
const champ = ReactDOM.createRoot(document.getElementById("champ"));
champ.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
