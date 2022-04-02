import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import * as MutationTypes from "./mutationType";
import * as ActionTypes from "./actinonTypes";
import { fetchAllTodoItems } from "@/api/index";

type TodoItem = {
  id: number;
  title: string;
  content: string;
  completed: boolean;
};

// stateの型定義
type State = {
  todoItems: TodoItem[];
};

// storeをprovide/injectするためのキー
export const key: InjectionKey<Store<State>> = Symbol();

// store本体
export const store = createStore<State>({
  state: {
    todoItems: [],
  },
  getters: {
    completedTodoItems: (store) => {
      return store.todoItems.filter((todo) => todo.completed);
    },
  },
  mutations: {
    [MutationTypes.ADD_TODO_ITEM](state, todoItems: TodoItem) {
      state.todoItems.push(todoItems);
    },
    [MutationTypes.INITIALIZE_TODO_ITEMS](store, todoItems: TodoItem[]) {
      store.todoItems = todoItems;
    },
  },
  actions: {
    async [ActionTypes.INITIALIZE_TODO_ITEMS]({ commit }) {
      const todoItems = await fetchAllTodoItems();
      commit(ActionTypes.INITIALIZE_TODO_ITEMS, todoItems.data);
    },
  },
});

// useStoreを使う時にキーの指定を省略するためのラッパー関数
export const useStore = () => {
  return baseUseStore(key);
};
