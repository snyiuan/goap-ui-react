export declare class State extends Map<string, boolean> {
    has(key: string): boolean;
    get(key: string): boolean | undefined;
    set(key: string, val: boolean): this;
}
export declare class Action {
    name: string;
    cost: number;
    pre_conditions: State;
    post_conditions: State;
    constructor(name: string, cost: number, pre_conditions: State, post_conditions: State);
}
export declare function plan(initial_state: State, goal_state: State, allowed_actions: Array<Action>): Array<string>;
export declare function plan_ui(initial_state: State, goal_state: State, allowed_actions: Array<Action>): Array<[string, State]>;
