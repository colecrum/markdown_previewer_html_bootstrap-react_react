// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true });


const firstView = `# I am an h1 heading!

## Here's an h2, or sub, heading.
### Don't forget about h3!

**We can style in bold**
*Or, even italics*
~~But, let's just scratch that~~

Check out this inline code, \`<div></div>\`, cause its cool.
Or we can use a code block:
\`\`\`
function clapYourHands() {
  if(you === "happy" && you === "knowIt") {
    return applause
  }
}
\`\`\`

>If you're happy and you know it, shout BLOCK QUOTE!

If not, let's review our list:
1. Need a joke?
2. How about a hug?
3. High five?

Sound good? Let's check them off our task list!
- [x] Make this list
- [ ] Have a good chuckle
- [ ] Give yourself a high five!

Don't forget our image!
![Markdown meme](data:image/jpeg;base64,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)

To learn more about markdown, click this [link](https://www.markdownguide.org/cheat-sheet/).
`;

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: firstView };


  }
  updateMarkdown(markdown) {
    this.setState({ markdown });
  }
  render() {
    var pageStyle = {
      backgroundColor: "#78a8f5",
      fontFamily: "'Lucida Console', 'Courier New', monospace" };


    var titleStyle = {
      fontWeight: "bold",
      textDecoration: "underline" };


    var subtitleStyle = {
      fontWeight: "bold" };


    var editorStyle = {
      width: "100%",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px" };


    var previewStyle = {
      width: "100%",
      height: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
      backgroundColor: "#114599",
      color: "white",
      fontFamily: "monaco, monospace" };


    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/

      React.createElement("div", { className: "App", style: pageStyle }, /*#__PURE__*/
      React.createElement("div", { className: "container" }, /*#__PURE__*/

      React.createElement("div", { className: "row mt-4" }, /*#__PURE__*/
      React.createElement("div", { className: "col text-center" }, /*#__PURE__*/
      React.createElement("h1", { className: "text-align-center", style: titleStyle }, "Markdown Previewer"))), /*#__PURE__*/


      React.createElement("hr", null), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("div", { className: "row mt-4" }, /*#__PURE__*/
      React.createElement("div", { className: "col-md-6" }, /*#__PURE__*/
      React.createElement("div", { className: "col text-center" }, /*#__PURE__*/
      React.createElement("h2", { className: "text-align-center", style: subtitleStyle }, "Editor")), /*#__PURE__*/

      React.createElement("div", { className: "mark-input", style: editorStyle }, /*#__PURE__*/
      React.createElement("textarea", {
        className: "input",
        id: "editor",
        style: editorStyle,
        value: this.state.markdown,
        onChange: e => {
          this.updateMarkdown(e.target.value);
        } },

      console.log(this.state.markdown)))), /*#__PURE__*/



      React.createElement("div", { className: "col-md-6" }, /*#__PURE__*/
      React.createElement("div", { className: "col text-center" }, /*#__PURE__*/
      React.createElement("h2", { id: "pre-title", style: subtitleStyle }, "Preview")), /*#__PURE__*/

      React.createElement("div", {
        style: previewStyle,
        id: "preview",
        dangerouslySetInnerHTML: { __html: marked(this.state.markdown) } }))))), /*#__PURE__*/










      React.createElement("br", null), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("hr", null), /*#__PURE__*/
      React.createElement("div", { id: "contact-section" }, "\xA0 \xA0 \xA0 ", /*#__PURE__*/
      React.createElement("section", { id: "contact", class: "container" }, /*#__PURE__*/
      React.createElement("h2", { id: "contact-title" }, "Designed & Coded by Cole Crum"), /*#__PURE__*/
      React.createElement("div", { class: "contact-links" }, /*#__PURE__*/
      React.createElement("div", { class: "link-cont", id: "git-cont" }, /*#__PURE__*/
      React.createElement("a", { id: "profile-link", href: "https://github.com/colecrum?tab=repositories", target: "_blank", class: "btn contact-details" }, /*#__PURE__*/React.createElement("img", { id: "git-logo", class: "contact-img", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHXk1n8mQe3sbaaMDgiqtSeSC8QySxLfgkaA&usqp=CAU", title: "GitHub" }))), /*#__PURE__*/
      React.createElement("div", { class: "link-cont", id: "pen-cont" }, /*#__PURE__*/
      React.createElement("a", { href: "https://codepen.io/colecrum", target: "_blank", class: "btn contact-details" }, /*#__PURE__*/React.createElement("img", { class: "contact-img", src: "https://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Large.png", title: "CodePen" }))), /*#__PURE__*/
      React.createElement("div", { class: "link-cont", id: "mail-cont" }, /*#__PURE__*/
      React.createElement("a", { href: "mailto:colemcrum@gmail.com", target: "_blank", class: "btn contact-details" }, /*#__PURE__*/React.createElement("img", { class: "contact-img", src: "https://lh3.googleusercontent.com/VS3B_qhOFTYsdyNfnlr98zg3HNjB_Gcs9bxVnaQO9MysAoBOXMHATClhRviImKKJV8RV-0s7hl8KeVQcij5Iagb1exHzt40x679l8Q=w0", title: "Email" }))), /*#__PURE__*/
      React.createElement("div", { class: "link-cont", id: "phone-cont" }, /*#__PURE__*/
      React.createElement("a", { href: "tel:512-517-8503", target: "_blank", class: "btn contact-details" }, /*#__PURE__*/React.createElement("img", { class: "contact-img", src: "https://cdn4.iconfinder.com/data/icons/phones-colored/48/JD-32-512.png", title: "Phone" })))), "\xA0 \xA0 \xA0 "), "\xA0 \xA0 ")));






  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(MarkdownEditor, null), document.getElementById("root"));