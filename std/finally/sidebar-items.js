initSidebarItems({"trait":[["Finally","A trait for executing a destructor unconditionally after a block of code, regardless of whether the blocked fails."]],"fn":[["try_finally","The most general form of the `finally` functions. The function `try_fn` will be invoked first; whether or not it panics, the function `finally_fn` will be invoked next. The two parameters `mutate` and `drop` are used to thread state through the two closures. `mutate` is used for any shared, mutable state that both closures require access to; `drop` is used for any state that the `try_fn` requires ownership of."]]});