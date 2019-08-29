function a () {
    a = {a:'a'}
    b = a;
    console.log(b.a);
    a.a = 'b';
    console.log(b.a)
}
a()