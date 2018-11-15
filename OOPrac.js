var car = {
    make:"subaru",
    model:"forester",
    year:2009,
    sayName: function(){
        console.log(this.model);
    }
}

var todolist = {
    todos:['item1','item2', 'item3'],
    displayTodos: function(){
        console.log('My Todos', this.todos);
    }
};