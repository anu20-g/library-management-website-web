let books = [
    { title: "Clean Code", author: "Robert Martin", issued: false },
    { title: "The Pragmatic Programmer", author: "Andrew Hunt", issued: true }
];
function render() {
    const tb = document.getElementById('booksBody');
    tb.innerHTML = '';
    books.forEach((b, i) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${b.title}</td><td>${b.author}</td><td>${b.issued?'Issued':'Available'}</td><td><button class="btn-toggle" onclick="toggle(${i})">${b.issued?'Return':'Issue'}</button></td>`;
        tb.appendChild(tr);
    });
}
function addBook() {
    const t = document.getElementById('bookTitle').value;
    const a = document.getElementById('bookAuthor').value;
    if (!t || !a) return;
    books.push({ title: t, author: a, issued: false });
    render();
}
function toggle(i) { books[i].issued = !books[i].issued; render(); }
render();