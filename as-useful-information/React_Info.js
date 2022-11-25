

// ?Каждый объект Context используется вместе с Provider компонентом, который позволяет дочерним компонентам, использующим этот контекст, подписаться на его изменения.


//! action - это объект который описывает что именно нужно совершить он имеет тип к примеру { type: 'ADD-POST'}

//!  combineReducers - эта функция   //объединяеее наши редюсеры



//?The  "connect()" - function connects a React component to a Redux store. It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.
//?The "mapStateToProps" and "mapDispatchToProps" deals with your Redux store’s state and dispatch, respectively. 


//!1.1 "Reducer" - это чистая функция  которая принимает старый state принимает action  если необходимо то она модифицирует старый state и возврощает измененую копию или не тронутый state если его не было необходимости менять из этой функции.

//!1.2Редюсер (reducer) — это чистая функция, которая принимает предыдущее состояние и экшен (state и action) и возвращает следующее состояние (новую версию предыдущего). Функция называется редюсером (reducer) потому, что ее можно передать в Array. prototype.

//! pure function - не имеет права менять то что в нее пришло ...


//!Объект arguments — это подобный массиву объект, который содержит аргументы, переданные в функцию.


//!3. Какие значения в JS являются ложными ?
const falsyValues = [' ', 0, null, undefined, NaN, false]
Ложными являются значения, результатом преобразования которых в логическое значение является false.
//?------------------------------------------------------

--8.Какие приемы работы с асинхронным кодом в JS Вы знаете ?

   1.1 Функции обратного вызова(Callbacks).
1.2 Промисы(Promises).
1.3 Async / await.
1.4 Библиотеки вроде async.js, blueprint, q, co.


   render(): рендеринг компонента
componentDidMount(): вызывается после рендеринга компонента.Здесь можно выполнять запросы к удаленным ресурсам