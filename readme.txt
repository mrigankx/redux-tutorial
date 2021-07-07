Redux is basically a global store, which can be used to manage state throughout the application. 
First, we have ACTIONS, it tells us what to do.
Secondly we have REDUCERS, it explains how to do.
Third, we have consumers, it will consume the data from store.

Flow is like,
component(dispatched)====> actions===> reducer(single)===> rootreducer ===>store

we use useSelector to get the data from store, and useDispatch to send the data to store.